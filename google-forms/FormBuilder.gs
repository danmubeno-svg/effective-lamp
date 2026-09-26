// ============================================================================
//  Construction des formulaires Google à partir de SPEC
// ============================================================================
//
//  Mode d'emploi :
//   1. Ouvrir https://script.google.com > Nouveau projet.
//   2. Remplacer le contenu de Code.gs par ce fichier complet, enregistrer.
//   3. Sélectionner la fonction « creerTousLesFormulaires » puis « Exécuter ».
//      Autoriser l'accès à Google Forms / Drive / Sheets à la première exécution.
//   4. Les liens des formulaires s'affichent dans le « Journal d'exécution ».
//      Si l'exécution s'arrête avant la fin (limite de 6 min de Google),
//      relancer simplement la même fonction : elle reprend là où elle s'est arrêtée.
//
//  Résultat : un dossier Drive contenant un formulaire par onglet du classeur
//  et une feuille Google Sheets qui centralise toutes les réponses.

const CONFIG = {
  folderName: 'Formulaires État des lieux PARSS PAR-MNM 2026-2027',
  responsesName: 'Réponses — État des lieux PARSS PAR-MNM 2026-2027',
  // Arrête proprement avant la limite de 6 minutes d'Apps Script.
  maxRunMillis: 4 * 60 * 1000,
};

const PRIORITES = ['P1 — urgent / risque de décès ou arrêt de service', 'P2 — important', 'P3 — amélioration', 'Sans objet'];
const TYPES_ESS = [
  'Centre de santé (CS)',
  'Centre de santé de référence (CSR)',
  'Hôpital général de référence (HGR)',
  'Hôpital provincial / tertiaire',
  'Poste de santé',
];
const STATUTS = ['Étatique', 'Confessionnel', 'Privé', 'Associatif / ONG'];
const RX_VALEUR = '(\\d+([.,]\\d+)?|ND|NA)';
const RX_QUANTITES = '(?i)^\\s*' + RX_VALEUR + '(\\s*/\\s*' + RX_VALEUR + '){3}\\s*$';
const RX_NOMBRE = '(?i)^\\s*(\\d+([.,]\\d+)?\\s*%?|ND|NA)\\s*$';

/** Point d'entrée : crée (ou termine de créer) tous les formulaires. */
function creerTousLesFormulaires() {
  const start = Date.now();
  const props = PropertiesService.getScriptProperties();
  const folder = obtenirDossier_(props);
  const sheet = obtenirClasseurReponses_(props, folder);

  for (const def of SPEC.forms) {
    const propKey = 'form:' + def.key;
    if (props.getProperty(propKey)) continue;
    if (Date.now() - start > CONFIG.maxRunMillis) {
      Logger.log('⏸  Temps limite approché : relancez creerTousLesFormulaires pour continuer.');
      return;
    }
    const form = construireFormulaire_(def);
    DriveApp.getFileById(form.getId()).moveTo(folder);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
    props.setProperty(propKey, form.getId());
    Logger.log('✅ %s\n   Remplir : %s\n   Modifier : %s', def.key, form.getPublishedUrl(), form.getEditUrl());
  }

  renommerFeuillesReponses_(sheet);
  Logger.log('🎉 Terminé. Dossier Drive : %s', folder.getUrl());
  Logger.log('   Réponses centralisées : %s', sheet.getUrl());
  listerLiens();
}

/** Affiche les liens de tous les formulaires déjà créés. */
function listerLiens() {
  const props = PropertiesService.getScriptProperties();
  for (const def of SPEC.forms) {
    const id = props.getProperty('form:' + def.key);
    if (!id) continue;
    const form = FormApp.openById(id);
    Logger.log('%s : %s', def.key, form.getPublishedUrl());
  }
}

/**
 * Oublie les formulaires déjà créés (ils restent dans Drive) afin qu'une
 * prochaine exécution reparte de zéro, par ex. après modification du classeur.
 */
function reinitialiser() {
  PropertiesService.getScriptProperties().deleteAllProperties();
  Logger.log('Réinitialisé : la prochaine exécution créera un nouveau jeu de formulaires.');
}

// ---------------------------------------------------------------------------
//  Drive / Sheets
// ---------------------------------------------------------------------------

function obtenirDossier_(props) {
  const id = props.getProperty('folder');
  if (id) return DriveApp.getFolderById(id);
  const folder = DriveApp.createFolder(CONFIG.folderName);
  props.setProperty('folder', folder.getId());
  return folder;
}

function obtenirClasseurReponses_(props, folder) {
  const id = props.getProperty('sheet');
  if (id) return SpreadsheetApp.openById(id);
  const sheet = SpreadsheetApp.create(CONFIG.responsesName);
  DriveApp.getFileById(sheet.getId()).moveTo(folder);
  props.setProperty('sheet', sheet.getId());
  return sheet;
}

/** Donne à chaque onglet de réponses le nom du formulaire correspondant. */
function renommerFeuillesReponses_(sheet) {
  const props = PropertiesService.getScriptProperties();
  const byUrl = {};
  for (const def of SPEC.forms) {
    const id = props.getProperty('form:' + def.key);
    if (id) byUrl[FormApp.openById(id).getPublishedUrl().replace(/\/viewform.*$/, '')] = def.key;
  }
  for (const s of sheet.getSheets()) {
    const url = (s.getFormUrl() || '').replace(/\/viewform.*$/, '');
    const name = byUrl[url];
    if (name && s.getName() !== name) {
      try { s.setName(name); } catch (e) { Logger.log('Renommage impossible (%s) : %s', name, e); }
    }
  }
  // Supprime la feuille vide par défaut si elle n'est liée à aucun formulaire.
  for (const s of sheet.getSheets()) {
    if (!s.getFormUrl() && s.getLastRow() === 0 && sheet.getSheets().length > 1) sheet.deleteSheet(s);
  }
}

// ---------------------------------------------------------------------------
//  Construction d'un formulaire
// ---------------------------------------------------------------------------

function construireFormulaire_(def) {
  const form = FormApp.create(def.key + ' — ' + def.title);
  form.setTitle(def.title);
  form.setDescription(descriptionFormulaire_(def));
  form.setProgressBar(true);
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setConfirmationMessage('Merci. La fiche « ' + def.key + ' » a bien été enregistrée.');

  ajouterIdentification_(form);
  if (def.kind === 'equipment') ajouterEquipements_(form, def);
  else if (def.kind === 'indicators') ajouterIndicateurs_(form, def);
  else ajouterRubriques_(form, def);
  ajouterValidation_(form);
  return form;
}

function descriptionFormulaire_(def) {
  const lines = [SPEC.period + ' | Une fiche par établissement / structure.'];
  if (def.anchor) lines.push('Ancrage : ' + def.anchor);
  lines.push('');
  for (const ins of SPEC.instructions) {
    if (ins.label === 'Objet' || ins.label === 'Origine') continue;
    lines.push('• ' + ins.label + ' : ' + ins.text);
  }
  return lines.join('\n');
}

function ajouterIdentification_(form) {
  form.addSectionHeaderItem().setTitle('Identification de l’établissement et de la visite');
  form.addListItem().setTitle('DPS').setChoiceValues(['KINSHASA']).setRequired(true);
  form.addTextItem().setTitle('Zone de santé').setRequired(true);
  form.addTextItem().setTitle('Établissement (nom)').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Statut de l’établissement')
    .setChoiceValues(STATUTS).showOtherOption(true).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Type ESS')
    .setChoiceValues(TYPES_ESS).showOtherOption(true).setRequired(true);
  form.addDateItem().setTitle('Date de visite').setRequired(true);
  form.addTextItem().setTitle('Évaluateur(s)').setRequired(true);
  form.addTextItem().setTitle('Interlocuteur');
  form.addTextItem().setTitle('Téléphone / email de l’interlocuteur');
}

function ajouterValidation_(form) {
  form.addPageBreakItem().setTitle('Validation')
    .setHelpText('Équivalent du bloc de signature de la fiche papier.');
  form.addTextItem().setTitle('Responsable de l’ESS (nom et fonction)').setRequired(true);
  form.addDateItem().setTitle('Date de validation').setRequired(true);
  form.addTextItem().setTitle('Évaluateur validant la fiche');
  form.addTextItem().setTitle('Représentant DPS / ZS');
  form.addCheckboxItem().setTitle('Attestation')
    .setChoiceValues(['Je confirme que les informations ci-dessus ont été vérifiées sur place et ne contiennent aucune donnée nominative.'])
    .setRequired(true);
}

/** Onglets thématiques : colonnes E à I de la fiche Excel pour chaque rubrique. */
function ajouterRubriques_(form, def) {
  form.addPageBreakItem().setTitle(def.title);
  for (const item of def.items) {
    const titre = item.num + '. ' + item.domain;
    form.addSectionHeaderItem().setTitle(titre)
      .setHelpText(item.label + (item.unit ? '\nUnité / modalité : ' + item.unit : ''));

    if (item.sub.length) {
      for (const sub of item.sub) {
        form.addParagraphTextItem().setTitle(item.num + '. ' + sub + ' — situation constatée');
      }
    } else if (/^bon \/ moyen \/ mauvais$/i.test(item.unit)) {
      form.addMultipleChoiceItem().setTitle(titre + ' — appréciation globale')
        .setChoiceValues(['Bon', 'Moyen', 'Mauvais', 'ND']);
      form.addParagraphTextItem().setTitle(titre + ' — situation constatée (détails)');
    } else {
      form.addParagraphTextItem().setTitle(titre + ' — situation constatée')
        .setHelpText(item.unit ? 'Modalité attendue : ' + item.unit : '');
    }
    form.addParagraphTextItem().setTitle(titre + ' — besoin / écart à combler');
    form.addTextItem().setTitle(titre + ' — source / preuve vérifiable');
    form.addListItem().setTitle(titre + ' — priorité').setChoiceValues(PRIORITES);
    form.addParagraphTextItem().setTitle(titre + ' — observations / action proposée');
  }
}

/** Onglet « Équipements » : une page par famille, un bloc par équipement. */
function ajouterEquipements_(form, def) {
  const quantites = FormApp.createTextValidation()
    .setHelpText('Format : total / fonctionnel / en panne / hors service — ex. 5 / 3 / 1 / 1 (ND ou NA autorisés)')
    .requireTextMatchesPattern(RX_QUANTITES)
    .build();

  for (const fam of def.families) {
    form.addPageBreakItem().setTitle('Équipements — ' + fam.name);
    for (const eq of fam.items) {
      const titre = eq.num + '. ' + eq.label;
      form.addSectionHeaderItem().setTitle(titre)
        .setHelpText('Service / unité : ' + eq.service + (eq.unit ? ' | Unité de compte : ' + eq.unit : ''));
      form.addTextItem().setTitle(titre + ' — quantités : total / fonctionnel / en panne / hors service')
        .setHelpText('ex. 5 / 3 / 1 / 1 — inscrire ND si non disponible, 0 si réellement nul')
        .setValidation(quantites);
      form.addParagraphTextItem()
        .setTitle(titre + ' — état, usage réel, modèle / série, année et source de financement');
      form.addParagraphTextItem()
        .setTitle(titre + ' — accessoires, consommables, pièces, énergie et dernière maintenance');
      form.addCheckboxItem().setTitle(titre + ' — besoin')
        .setChoiceValues(['Aucun', 'Réparer', 'Remplacer', 'Acquérir']);
      form.addTextItem().setTitle(titre + ' — besoin : quantité et coût estimatif');
      form.addListItem().setTitle(titre + ' — priorité').setChoiceValues(PRIORITES);
      form.addParagraphTextItem().setTitle(titre + ' — preuve vérifiée, observations et action proposée');
    }
  }
}

/** Onglet « Suivi indicateurs » : valeur, numérateur / dénominateur, période, source. */
function ajouterIndicateurs_(form, def) {
  const nombre = FormApp.createTextValidation()
    .setHelpText('Saisir un nombre (ou un pourcentage), ND ou NA')
    .requireTextMatchesPattern(RX_NOMBRE)
    .build();

  form.addPageBreakItem().setTitle('Période de collecte');
  form.addTextItem().setTitle('Période couverte par les valeurs saisies')
    .setHelpText('ex. T1 2026, janvier–mars 2026').setRequired(true);

  let niveau = null;
  for (const ind of def.items) {
    const groupe = ind.level.split('—')[0].trim();
    if (groupe !== niveau) {
      niveau = groupe;
      form.addPageBreakItem().setTitle('Indicateurs — ' + groupe);
    }
    const titre = ind.code + ' — ' + ind.label;
    const aide = [ind.level, 'Unité : ' + ind.unit, 'Source suggérée : ' + ind.source];
    if (ind.comment) aide.push('Note : ' + ind.comment);
    form.addSectionHeaderItem().setTitle(titre).setHelpText(aide.join('\n'));

    if (/statut/i.test(ind.unit)) {
      form.addParagraphTextItem().setTitle(ind.code + ' — statut / référence documentaire');
    } else {
      form.addTextItem().setTitle(ind.code + ' — valeur observée').setValidation(nombre);
      if (/proportion/i.test(ind.unit)) {
        form.addTextItem().setTitle(ind.code + ' — numérateur').setValidation(nombre);
        form.addTextItem().setTitle(ind.code + ' — dénominateur').setValidation(nombre);
      }
    }
    form.addTextItem().setTitle(ind.code + ' — source / preuve');
    form.addParagraphTextItem().setTitle(ind.code + ' — commentaires / limites');
  }
}
