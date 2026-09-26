# Formulaires Google — État des lieux PARSS-SSR / PAR-MNM 2026-2027

Ce dossier transforme le classeur Excel
`Formulaires_Etat_des_lieux_PARSS_PAR-MNM_2026-2027.xlsx` en **formulaires Google Forms**.

## Créer les formulaires (5 minutes)

1. Ouvrir <https://script.google.com> avec le compte Google qui doit être propriétaire des formulaires, puis cliquer sur **Nouveau projet**.
2. Supprimer le contenu de `Code.gs` et y coller **tout** le contenu du fichier [`Code.gs`](Code.gs) de ce dossier. Enregistrer (Ctrl + S).
3. Dans la liste des fonctions en haut, choisir **`creerTousLesFormulaires`**, puis cliquer sur **Exécuter**.
4. À la première exécution, Google demande l'autorisation d'accéder à Forms, Drive et Sheets : l'accepter
   (« Paramètres avancés » › « Accéder au projet » si un avertissement s'affiche).
5. Les liens s'affichent dans le **Journal d'exécution**. Si le script s'arrête avec le message
   « Temps limite approché », le relancer : il reprend là où il s'est arrêté.

### Ce qui est créé dans Google Drive

Un dossier **« Formulaires État des lieux PARSS PAR-MNM 2026-2027 »** contenant :

| Formulaire (un par onglet Excel) | Questions | Pages |
|---|---|---|
| Équipements (49 équipements, une page par famille) | 357 | 13 |
| Infrastructures | 68 | 3 |
| Ressources humaines | 54 | 3 |
| Services SSR et SONU | 64 | 3 |
| Médicaments et intrants | 59 | 3 |
| Référence et transport | 54 | 3 |
| Espaces femmes | 59 | 3 |
| Espaces jeunes | 54 | 3 |
| Données et supervision | 54 | 3 |
| Décès maternels | 54 | 3 |
| Gouvernance et gestion | 54 | 3 |
| Suivi indicateurs | 95 | 11 |

et une feuille Google Sheets **« Réponses — État des lieux PARSS PAR-MNM 2026-2027 »** avec un onglet de réponses par formulaire.

## Correspondance Excel → formulaire

- **Mode d'emploi** → description en tête de chaque formulaire (valeurs manquantes ND/NA/0, données agrégées, priorités P1–P3) et ancrage du cadre de résultats propre à chaque onglet.
- **En-tête des fiches** (DPS, zone de santé, établissement, statut, type ESS, date de visite, évaluateurs, interlocuteur, contact) → première page, champs obligatoires.
- **Onglets thématiques** : pour chaque rubrique, les colonnes *Situation constatée*, *Besoin / écart*, *Source / preuve*, *Priorité* (liste P1/P2/P3/Sans objet) et *Observations / action proposée* deviennent des questions ; l'unité / modalité est rappelée en aide.
- **Équipements** : quantités saisies au format `total / fonctionnel / en panne / hors service` (ex. `5 / 3 / 1 / 1`, `ND` accepté) avec contrôle de format ; le besoin est une case à cocher Réparer / Remplacer / Acquérir.
- **Suivi indicateurs** : valeur observée, numérateur et dénominateur (pour les proportions), source et commentaires ; la source suggérée par le classeur est affichée en aide.
- **Bloc « Validation »** (signatures) → dernière page : responsable de l'ESS, date, évaluateur, DPS/ZS et attestation de vérification. Google Forms ne recueille pas de signature manuscrite.

Toutes les questions de contenu sont facultatives, pour permettre de renseigner une fiche partielle ; seules l'identification et la validation sont obligatoires.

## Modifier les formulaires

- **Petites retouches** : modifier directement dans Google Forms (lien « Modifier » dans le journal).
- **Changement du classeur** : modifier le fichier Excel, puis régénérer `Code.gs` :

  ```bash
  pip install openpyxl
  python3 generate.py            # ou : python3 generate.py autre_classeur.xlsx
  ```

  Dans Apps Script, coller le nouveau `Code.gs`, exécuter `reinitialiser`, puis `creerTousLesFormulaires`.

Fichiers : `generate.py` (lecture du classeur), `FormBuilder.gs` (logique de construction), `Code.gs` (fichier généré à coller dans Apps Script).
