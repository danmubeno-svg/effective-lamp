/**
 * FICHIER GÉNÉRÉ par generate.py à partir de :
 *   Formulaires_Etat_des_lieux_PARSS_PAR-MNM_2026-2027.xlsx
 * Ne pas modifier SPEC à la main : modifier le classeur puis relancer generate.py.
 */

const SPEC = {
  "title": "FORMULAIRES D’ÉTAT DES LIEUX DES ÉTABLISSEMENTS DE SANTÉ",
  "period": "PARSS-SSR / PAR-MNM | Période visée : 2026–2027",
  "instructions": [
    {
      "label": "Objet",
      "text": "Ensemble de formulaires pour documenter les capacités et besoins des ESS au-delà des seuls équipements."
    },
    {
      "label": "Mode d’emploi",
      "text": "Renseigner une copie par établissement. Dans « Situation constatée », saisir les données vérifiées; dans « Besoin / écart », quantifier les manques."
    },
    {
      "label": "Valeurs manquantes",
      "text": "Inscrire ND (non disponible), NA (non applicable) ou 0 si la valeur est effectivement nulle. Ne pas confondre absence de données et zéro."
    },
    {
      "label": "Données de santé",
      "text": "Utiliser des données agrégées. Ne pas inscrire de noms de patientes, adolescentes, nouveau-nés ou personnes décédées."
    },
    {
      "label": "Priorisation",
      "text": "P1 = urgent / risque de décès ou arrêt de service; P2 = important; P3 = amélioration. Ajouter un justificatif dans la colonne preuve."
    },
    {
      "label": "Origine",
      "text": "Cadre de résultats PAR-MNM Kinshasa 2026–2027 et documents d’état des lieux / inventaire PARSS-SSR consultés sur l’ordinateur. Les cibles de programme ne sont pas reprises comme constats d’ESS."
    }
  ],
  "forms": [
    {
      "key": "Équipements",
      "kind": "equipment",
      "title": "INVENTAIRE DÉTAILLÉ DES ÉQUIPEMENTS ET MATÉRIELS MÉDICAUX",
      "anchor": "PARSS-SSR — fiche d’inventaire des équipements et canevas d’inventaire existants",
      "families": [
        {
          "name": "Capacité / mobilier",
          "items": [
            {
              "num": 1,
              "label": "Lit d’hospitalisation",
              "service": "Hospitalisation",
              "unit": "Nombre"
            },
            {
              "num": 2,
              "label": "Lit de consultation / salle de soins",
              "service": "Consultation / soins",
              "unit": "Nombre"
            },
            {
              "num": 3,
              "label": "Lit de maternité",
              "service": "Maternité",
              "unit": "Nombre"
            },
            {
              "num": 4,
              "label": "Table d’accouchement avec étriers",
              "service": "Maternité",
              "unit": "Nombre"
            }
          ]
        },
        {
          "name": "Examen et diagnostic",
          "items": [
            {
              "num": 5,
              "label": "Tensiomètre (préciser type)",
              "service": "CPN / consultation / maternité",
              "unit": "Unité"
            },
            {
              "num": 6,
              "label": "Thermomètre (préciser type)",
              "service": "Tous services",
              "unit": "Unité"
            },
            {
              "num": 7,
              "label": "Stéthoscope adulte / obstétrical / pédiatrique",
              "service": "CPN / maternité",
              "unit": "Unité"
            },
            {
              "num": 8,
              "label": "Otoscope",
              "service": "Consultation",
              "unit": "Unité"
            },
            {
              "num": 9,
              "label": "Lampe d’examen",
              "service": "Consultation / gynécologie",
              "unit": "Unité"
            },
            {
              "num": 10,
              "label": "Doppler fœtal / stéthoscope obstétrical",
              "service": "CPN / maternité",
              "unit": "Unité"
            },
            {
              "num": 11,
              "label": "Échographe (sonde(s), onduleur et accessoires)",
              "service": "Maternité / imagerie",
              "unit": "Appareil"
            },
            {
              "num": 12,
              "label": "Appareil de cardiotocographie (CTG), si disponible",
              "service": "Maternité",
              "unit": "Appareil"
            }
          ]
        },
        {
          "name": "Chirurgie et soins obstétricaux",
          "items": [
            {
              "num": 13,
              "label": "Plateau / boîte de petite chirurgie",
              "service": "Salle de soins / maternité",
              "unit": "Kit"
            },
            {
              "num": 14,
              "label": "Boîte d’accouchement et instruments obstétricaux",
              "service": "Maternité",
              "unit": "Kit"
            },
            {
              "num": 15,
              "label": "Kit de suture / réparation des déchirures",
              "service": "Maternité",
              "unit": "Kit"
            },
            {
              "num": 16,
              "label": "Matériel de révision utérine / soins post-avortement",
              "service": "Maternité / PAC",
              "unit": "Kit"
            },
            {
              "num": 17,
              "label": "AMIU / aspiration manuelle intra-utérine (MVA)",
              "service": "Maternité / PAC",
              "unit": "Kit"
            },
            {
              "num": 18,
              "label": "Aspirateur électrique / manuel",
              "service": "Maternité / soins",
              "unit": "Appareil"
            },
            {
              "num": 19,
              "label": "Autoclave / stérilisateur et accessoires",
              "service": "Stérilisation",
              "unit": "Appareil"
            }
          ]
        },
        {
          "name": "SONU et urgences",
          "items": [
            {
              "num": 20,
              "label": "Ballon-masque de réanimation nouveau-né (tailles disponibles)",
              "service": "Maternité / néonatologie",
              "unit": "Kit"
            },
            {
              "num": 21,
              "label": "Table de réanimation néonatale / source de chaleur",
              "service": "Maternité",
              "unit": "Appareil"
            },
            {
              "num": 22,
              "label": "Incubateur",
              "service": "Néonatologie",
              "unit": "Appareil"
            },
            {
              "num": 23,
              "label": "Source d’oxygène (concentrateur / bouteille), débitmètre et accessoires",
              "service": "Maternité / urgences",
              "unit": "Appareil"
            },
            {
              "num": 24,
              "label": "Système d’aspiration des voies aériennes du nouveau-né",
              "service": "Maternité",
              "unit": "Appareil"
            },
            {
              "num": 25,
              "label": "Kit de perfusion et matériel de prise en charge des urgences obstétricales",
              "service": "Maternité / urgences",
              "unit": "Kit"
            },
            {
              "num": 26,
              "label": "Matériel de césarienne / chirurgie obstétricale (si niveau requis)",
              "service": "Bloc opératoire",
              "unit": "Kit"
            }
          ]
        },
        {
          "name": "Laboratoire",
          "items": [
            {
              "num": 27,
              "label": "Microscope et accessoires",
              "service": "Laboratoire",
              "unit": "Appareil"
            },
            {
              "num": 28,
              "label": "Centrifugeuse",
              "service": "Laboratoire",
              "unit": "Appareil"
            },
            {
              "num": 29,
              "label": "Réfrigérateur de laboratoire / conservation des échantillons",
              "service": "Laboratoire",
              "unit": "Appareil"
            },
            {
              "num": 30,
              "label": "Test rapide paludisme (équipements de lecture / consommables associés)",
              "service": "Laboratoire",
              "unit": "Lot / appareil"
            },
            {
              "num": 31,
              "label": "Test rapide VIH (équipements de lecture / consommables associés)",
              "service": "Laboratoire",
              "unit": "Lot / appareil"
            },
            {
              "num": 32,
              "label": "Autres équipements et tests de laboratoire (préciser)",
              "service": "Laboratoire",
              "unit": "Unité / lot"
            }
          ]
        },
        {
          "name": "Imagerie",
          "items": [
            {
              "num": 33,
              "label": "Appareil de radiographie et accessoires, si disponible",
              "service": "Imagerie",
              "unit": "Appareil"
            },
            {
              "num": 34,
              "label": "Autre équipement d’imagerie (préciser)",
              "service": "Imagerie",
              "unit": "Appareil"
            }
          ]
        },
        {
          "name": "Anesthésie et chirurgie",
          "items": [
            {
              "num": 35,
              "label": "Appareil d’anesthésie et accessoires (si niveau requis)",
              "service": "Bloc opératoire",
              "unit": "Appareil"
            },
            {
              "num": 36,
              "label": "Moniteur multiparamétrique / oxymètre de pouls",
              "service": "Urgences / bloc",
              "unit": "Appareil"
            },
            {
              "num": 37,
              "label": "Table opératoire et éclairage opératoire (si niveau requis)",
              "service": "Bloc opératoire",
              "unit": "Unité"
            }
          ]
        },
        {
          "name": "Énergie et chaîne du froid",
          "items": [
            {
              "num": 38,
              "label": "Groupe électrogène / alimentation de secours",
              "service": "Établissement",
              "unit": "Appareil"
            },
            {
              "num": 39,
              "label": "Installation solaire / onduleur / stabilisateur",
              "service": "Établissement",
              "unit": "Installation"
            },
            {
              "num": 40,
              "label": "Réfrigérateur médical / chaîne du froid",
              "service": "Pharmacie / vaccination",
              "unit": "Appareil"
            }
          ]
        },
        {
          "name": "Transport sanitaire",
          "items": [
            {
              "num": 41,
              "label": "Ambulance affectée au réseau de référence",
              "service": "Référence / urgence",
              "unit": "Véhicule"
            },
            {
              "num": 42,
              "label": "Brancard, civière et matériel de transfert",
              "service": "Urgences / ambulance",
              "unit": "Unité"
            }
          ]
        },
        {
          "name": "Informatique et communication",
          "items": [
            {
              "num": 43,
              "label": "Ordinateur de bureau",
              "service": "Administration / données",
              "unit": "Unité"
            },
            {
              "num": 44,
              "label": "Ordinateur portable",
              "service": "Administration / données",
              "unit": "Unité"
            },
            {
              "num": 45,
              "label": "Imprimante / scanner",
              "service": "Administration / données",
              "unit": "Unité"
            },
            {
              "num": 46,
              "label": "Connexion Internet / routeur / modem",
              "service": "Administration / données",
              "unit": "Abonnement / appareil"
            },
            {
              "num": 47,
              "label": "Téléphone / radio de communication pour référence",
              "service": "Référence / coordination",
              "unit": "Unité"
            },
            {
              "num": 48,
              "label": "Système de gestion / logiciel (nommer)",
              "service": "Données / pharmacie",
              "unit": "Système"
            }
          ]
        },
        {
          "name": "Autre",
          "items": [
            {
              "num": 49,
              "label": "Autre équipement médical ou biomédical (préciser la désignation)",
              "service": "À préciser",
              "unit": "Unité"
            }
          ]
        }
      ]
    },
    {
      "key": "Infrastructures",
      "kind": "thematic",
      "title": "ÉTAT DES INFRASTRUCTURES, RÉHABILITATION ET ACCESSIBILITÉ",
      "anchor": "PARSS-SSR — états des lieux, réhabilitations et indicateurs de préparation des établissements",
      "items": [
        {
          "num": 1,
          "domain": "Identification",
          "label": "Identification",
          "unit": "",
          "sub": [
            "Nombre de bâtiment",
            "Types de services",
            "statut",
            "Bâtiment, bloc, service, statut et capacité d’accueil"
          ]
        },
        {
          "num": 2,
          "domain": "État structurel",
          "label": "Toiture, murs, sols, portes, fenêtres et risques structurels",
          "unit": "Bon / moyen / mauvais",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Services essentiels",
          "label": "Disponibilité et état des salles CPN, maternité, soins, laboratoire, hospitalisation",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Eau et hygiène",
          "label": "Source d’eau, continuité, points de lavage, latrines et douches fonctionnels",
          "unit": "Oui-non / quantité",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Énergie",
          "label": "Réseau, solaire/groupe, heures disponibles et état électrique",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Déchets et assainissement",
          "label": "Tri, stockage, incinération / élimination et drainage",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Accessibilité",
          "label": "Accès routier, distance, accès des personnes à mobilité réduite, signalisation",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Réhabilitation",
          "label": "Travaux requis par lot, métrés/quantités, priorité, coût estimatif",
          "unit": "Texte / montant",
          "sub": []
        },
        {
          "num": 9,
          "domain": "Sécurité",
          "label": "Incendie, clôture, éclairage extérieur, risques et mesures urgentes",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 10,
          "domain": "Preuves",
          "label": "Photos géolocalisées, date, localisation et évaluateur",
          "unit": "Référence",
          "sub": []
        }
      ]
    },
    {
      "key": "Ressources humaines",
      "kind": "thematic",
      "title": "RESSOURCES HUMAINES, COMPÉTENCES ET MENTORAT",
      "anchor": "PAR-MNM — Extrant 1.1: prestataires formés/certifiés et établissements bénéficiant du mentorat",
      "items": [
        {
          "num": 1,
          "domain": "Effectifs",
          "label": "Effectif autorisé, présent et actif par catégorie professionnelle",
          "unit": "Nombre",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Affectation",
          "label": "Prestataires disponibles par service et régime de garde",
          "unit": "Nombre / texte",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Compétences SSR",
          "label": "Formation/certification en PF, SCACF/PAC et SSR; date de formation",
          "unit": "Oui-non / date",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Compétences obstétricales",
          "label": "Compétences en SONU de base/complets, soins néonatals et réanimation",
          "unit": "Oui-non / date",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Mentorat",
          "label": "Mentorat reçu, fréquence, superviseur et thèmes couverts",
          "unit": "Date / nombre",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Continuité",
          "label": "Postes vacants, absentéisme, rotation et besoins de remplacement",
          "unit": "Nombre / texte",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Besoins",
          "label": "Profils à recruter, former ou certifier; nombre et priorité",
          "unit": "Nombre / priorité",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Conditions de travail",
          "label": "Logement, sécurité, outils, motivation et obstacles de rétention",
          "unit": "Texte",
          "sub": []
        }
      ]
    },
    {
      "key": "Services SSR et SONU",
      "kind": "thematic",
      "title": "DISPONIBILITÉ, QUALITÉ ET UTILISATION DES SERVICES SSR",
      "anchor": "PAR-MNM — Effet 1: offre et qualité; indicateurs CPN, PF, SCACF/PAC et soins obstétricaux",
      "items": [
        {
          "num": 1,
          "domain": "Paquet de services",
          "label": "Services effectivement offerts: CPN, accouchement, PF, PAC/SCACF, SONU",
          "unit": "Oui-non par service",
          "sub": []
        },
        {
          "num": 2,
          "domain": "CPN",
          "label": "CPN1 avant 16 semaines, CPN4/8, dépistage et suivi des grossesses à risque",
          "unit": "Données période",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Accouchement",
          "label": "Accouchements assistés, disponibilité 24/7 et complications prises en charge",
          "unit": "Données période",
          "sub": []
        },
        {
          "num": 4,
          "domain": "SONU",
          "label": "Fonctions signalétiques réalisées; date du dernier cas par fonction",
          "unit": "Oui-non / date",
          "sub": []
        },
        {
          "num": 5,
          "domain": "PF",
          "label": "Méthodes modernes disponibles, conseil, confidentialité et continuité post-PAC",
          "unit": "Texte / données",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Soins néonatals",
          "label": "Réanimation du nouveau-né, soins essentiels et prise en charge des prématurés",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Qualité et droits",
          "label": "Protocoles appliqués, consentement, confidentialité, respect et plaintes",
          "unit": "Oui-non / preuve",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Activité",
          "label": "Volume mensuel des services SSR sur les 3 derniers mois",
          "unit": "Nombre par mois",
          "sub": []
        },
        {
          "num": 9,
          "domain": "Obstacles",
          "label": "Barrières d’accès, coûts, horaires, acceptabilité et ruptures de services",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 10,
          "domain": "Améliorations",
          "label": "Actions prioritaires pour rendre les services disponibles et de qualité",
          "unit": "Texte / priorité",
          "sub": []
        }
      ]
    },
    {
      "key": "Médicaments et intrants",
      "kind": "thematic",
      "title": "DISPONIBILITÉ DES MÉDICAMENTS, CONTRACEPTIFS ET INTRANTS",
      "anchor": "PAR-MNM — Extrant 1.3: continuité d’approvisionnement et suivi SIGL/LMIS",
      "items": [
        {
          "num": 1,
          "domain": "Stocks SSR",
          "label": "Contraceptifs par méthode: stock utilisable, consommation moyenne, jours de rupture",
          "unit": "Unité / jours",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Produits PAC/SCACF",
          "label": "Médicaments et consommables essentiels; stock utilisable et péremption",
          "unit": "Unité / date",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Maternité et néonatal",
          "label": "Utérotoniques, sulfate de magnésium, antibiotiques, kits d’accouchement et intrants NN",
          "unit": "Unité",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Diagnostic",
          "label": "Tests, réactifs et consommables de laboratoire utiles aux soins SSR",
          "unit": "Unité",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Gestion des stocks",
          "label": "Fiches de stock, inventaire physique, rapports SIGL et fréquence de mise à jour",
          "unit": "Oui-non / fréquence",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Approvisionnement",
          "label": "Source, fréquence, délai, dernier kilomètre et contraintes logistiques",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Ruptures",
          "label": "Produits en rupture au cours des 3 derniers mois; durée et cause",
          "unit": "Produit / jours",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Stockage",
          "label": "Espace, température, sécurité, rangement FEFO/FIFO et chaîne du froid si applicable",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 9,
          "domain": "Besoins",
          "label": "Quantité à commander, seuil minimum, priorité et délai requis",
          "unit": "Quantité / date",
          "sub": []
        }
      ]
    },
    {
      "key": "Référence et transport",
      "kind": "thematic",
      "title": "RÉFÉRENCE, CONTRE-RÉFÉRENCE, SANG ET TRANSPORT SANITAIRE",
      "anchor": "PAR-MNM — Effet 1 et Extrant 1.2: réseaux EmONC, références obstétricales et ambulances",
      "items": [
        {
          "num": 1,
          "domain": "Circuit de référence",
          "label": "Structures de référence, critères, contacts et itinéraires connus",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Fonctionnement",
          "label": "Références réalisées et reçues; délais et issues (3 derniers mois)",
          "unit": "Nombre / délai",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Transport",
          "label": "Ambulance/véhicule disponible, état, conducteur, carburant et entretien",
          "unit": "Nombre / état",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Communication",
          "label": "Téléphone/radio, réseau, répertoire d’urgence et disponibilité 24/7",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Contre-référence",
          "label": "Retour d’information documenté vers structure d’origine",
          "unit": "Oui-non / proportion",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Sang",
          "label": "Banque/dépôt de sang, tests, disponibilité, chaîne de froid et délai d’accès",
          "unit": "Texte / délai",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Obstacles",
          "label": "Coût, distance, routes, sécurité, barrières communautaires ou organisationnelles",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Besoins",
          "label": "Ambulance, moto-ambulance, carburant, communication, accords ou équipements requis",
          "unit": "Texte / priorité",
          "sub": []
        }
      ]
    },
    {
      "key": "Espaces femmes",
      "kind": "thematic",
      "title": "ESPACES COMMUNAUTAIRES POUR LES FEMMES ET PRÉPARATION À LA NAISSANCE",
      "anchor": "PAR-MNM — Extrant 2.1: 128 espaces communautaires fonctionnels",
      "items": [
        {
          "num": 1,
          "domain": "Existence",
          "label": "Espace identifié, localisation, statut et responsable",
          "unit": "Oui-non / texte",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Fonctionnalité",
          "label": "Ouverture, fréquence, sécurité, intimité et accessibilité",
          "unit": "Fréquence / oui-non",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Infrastructure",
          "label": "État du local, mobilier, eau, éclairage et sanitaires",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Activités",
          "label": "Sensibilisation SSR, PF, préparation à la naissance, signes de danger et référencement",
          "unit": "Liste / fréquence",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Animation",
          "label": "Relais, CODESA, pairs éducatrices; effectif et formation",
          "unit": "Nombre / texte",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Participation",
          "label": "Femmes/adolescentes touchées par mois et méthode de comptage",
          "unit": "Nombre",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Supports",
          "label": "Outils de communication, registres, supports adaptés et besoins",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Référencement",
          "label": "Liens avec ESS, cas orientés et retour d’information",
          "unit": "Nombre / texte",
          "sub": []
        },
        {
          "num": 9,
          "domain": "Besoins",
          "label": "Espace à créer/réhabiliter/équiper, fonctionnement et coût estimatif",
          "unit": "Texte / montant",
          "sub": []
        }
      ]
    },
    {
      "key": "Espaces jeunes",
      "kind": "thematic",
      "title": "SERVICES ET ESPACES ADAPTÉS AUX ADOLESCENTS ET AUX JEUNES",
      "anchor": "PAR-MNM — Extrant 2.2: 12 espaces adaptés aux jeunes opérationnels",
      "items": [
        {
          "num": 1,
          "domain": "Existence",
          "label": "Espace jeune dédié ou service adapté; localisation et responsable",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Confidentialité",
          "label": "Intimité, horaires adaptés, accueil sans jugement et consentement",
          "unit": "Oui-non / texte",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Services",
          "label": "Information, conseil, PF, orientation SSR et liens de référence disponibles",
          "unit": "Liste / oui-non",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Prestataires",
          "label": "Personnel formé à l’accueil des adolescents et jeunes",
          "unit": "Nombre / oui-non",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Participation",
          "label": "Jeunes consultés/impliqués dans la conception et le suivi",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Fréquentation",
          "label": "Visites et services rendus par âge/genre (données agrégées)",
          "unit": "Nombre",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Protection",
          "label": "Procédures de protection, confidentialité des données et gestion des plaintes",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Besoins",
          "label": "Création/adaptation, équipements, supports, formation et fonctionnement",
          "unit": "Texte / priorité",
          "sub": []
        }
      ]
    },
    {
      "key": "Données et supervision",
      "kind": "thematic",
      "title": "DONNÉES SANITAIRES, DHIS2, SUPERVISION ET REVUES",
      "anchor": "PAR-MNM — Extrant 3.1: tableaux de bord, équipes de supervision et 4 revues trimestrielles",
      "items": [
        {
          "num": 1,
          "domain": "Rapports",
          "label": "Rapports SNIS/DHIS2 soumis à temps et complétude des rapports SSR",
          "unit": "% / période",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Indicateurs",
          "label": "Disponibilité des indicateurs SSR, définitions, désagrégation et qualité",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Outils",
          "label": "Registres, formulaires, ordinateur/tablette et connectivité disponibles",
          "unit": "Nombre / état",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Qualité",
          "label": "Vérification des données, cohérence registres-rapports et dernières corrections",
          "unit": "Texte / date",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Tableau de bord",
          "label": "Tableau de bord SSR actualisé au niveau ESS/ZS et responsable identifié",
          "unit": "Oui-non / date",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Supervision",
          "label": "Dernière supervision intégrée, fréquence, recommandations et suivi",
          "unit": "Date / texte",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Revues",
          "label": "Réunions d’analyse trimestrielles tenues; décisions consignées",
          "unit": "Nombre / date",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Besoins",
          "label": "Formation, équipement, connectivité, outils ou appui supervision à fournir",
          "unit": "Texte / priorité",
          "sub": []
        }
      ]
    },
    {
      "key": "Décès maternels",
      "kind": "thematic",
      "title": "SURVEILLANCE, NOTIFICATION ET REVUE DES DÉCÈS MATERNELS ET PÉRINATALS",
      "anchor": "PAR-MNM — Extrant 3.2: notification, revue des décès et actions correctives",
      "items": [
        {
          "num": 1,
          "domain": "Mécanisme",
          "label": "Comité SDMPR/MPDSR établi, membres et calendrier de réunion",
          "unit": "Oui-non / date",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Notification",
          "label": "Procédure de notification connue et canal opérationnel",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Cas",
          "label": "Décès maternels/périnatals enregistrés sur la période (agrégés, sans données identifiantes)",
          "unit": "Nombre",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Délai",
          "label": "Délai entre décès, notification et revue selon les directives nationales",
          "unit": "Jours",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Revues",
          "label": "Proportion de cas revus, causes évitables et facteurs contributifs documentés",
          "unit": "Nombre / %",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Confidentialité",
          "label": "Dossiers sécurisés, anonymisation et approche non punitive",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Actions correctives",
          "label": "Recommandations, responsable, échéance et état de mise en œuvre",
          "unit": "Texte / statut",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Besoins",
          "label": "Formation, outils, transport, connectivité et appui aux revues",
          "unit": "Texte / priorité",
          "sub": []
        }
      ]
    },
    {
      "key": "Gouvernance et gestion",
      "kind": "thematic",
      "title": "GOUVERNANCE, COORDINATION, GESTION ET REDEVABILITÉ",
      "anchor": "PAR-MNM — Activité de soutien: gestion financière/fiduciaire; leadership et redevabilité",
      "items": [
        {
          "num": 1,
          "domain": "Coordination",
          "label": "Cadre de concertation ESS-ZS-DPS; membres et fréquence des réunions",
          "unit": "Texte / fréquence",
          "sub": []
        },
        {
          "num": 2,
          "domain": "Planification",
          "label": "Plan d’action SSR, activités, responsable, échéance et suivi",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 3,
          "domain": "Redevabilité",
          "label": "Mécanisme d’écoute/plaintes, accès usagers et suite donnée",
          "unit": "Oui-non / texte",
          "sub": []
        },
        {
          "num": 4,
          "domain": "Gestion",
          "label": "Procédures administratives, inventaire, archivage et contrôle interne",
          "unit": "Oui-non",
          "sub": []
        },
        {
          "num": 5,
          "domain": "Financement",
          "label": "Budget de fonctionnement, dépenses, justificatifs et besoins non financés",
          "unit": "Montant / texte",
          "sub": []
        },
        {
          "num": 6,
          "domain": "Partenaires",
          "label": "Partenaires intervenant, domaines, couverture et coordination",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 7,
          "domain": "Risques",
          "label": "Risques opérationnels et mesures de mitigation",
          "unit": "Texte",
          "sub": []
        },
        {
          "num": 8,
          "domain": "Plan d’amélioration",
          "label": "Action prioritaire, responsable, échéance, ressources et preuve de clôture",
          "unit": "Texte",
          "sub": []
        }
      ]
    },
    {
      "key": "Suivi indicateurs",
      "kind": "indicators",
      "title": "SUIVI DES INDICATEURS DU CADRE DE PERFORMANCE PAR-MNM",
      "anchor": "Collecte agrégée par établissement / zone / période — reporter les valeurs issues des registres, DHIS2, rapports de supervision ou SIGL. Ne pas saisir de données nominatives.",
      "items": [
        {
          "code": "E1.1",
          "level": "Effet 1 — Offre",
          "label": "ESS capable d’offrir SCACF/PAC",
          "unit": "Nombre / proportion",
          "source": "Registre de services; DHIS2; supervision",
          "comment": "Préciser le dénominateur des ESS ciblés"
        },
        {
          "code": "E1.2",
          "level": "Effet 1 — Continuité",
          "label": "Femmes ayant reçu un PAC et repartant avec une méthode contraceptive moderne",
          "unit": "Proportion",
          "source": "Registre PAC / PF",
          "comment": "Données agrégées"
        },
        {
          "code": "E1.3",
          "level": "Effet 1 — CPN",
          "label": "CPN1 commencées avant 16 semaines",
          "unit": "Proportion",
          "source": "Registre CPN; DHIS2",
          "comment": ""
        },
        {
          "code": "E1.4",
          "level": "Effet 1 — CPN",
          "label": "Femmes ayant réalisé au moins 4 CPN / grossesses attendues",
          "unit": "Proportion",
          "source": "Registre CPN; DHIS2",
          "comment": "Conserver le dénominateur du cadre"
        },
        {
          "code": "E1.5",
          "level": "Effet 1 — Référence",
          "label": "Grossesses à haut risque référées / cas identifiés",
          "unit": "Proportion",
          "source": "Registre de référence",
          "comment": ""
        },
        {
          "code": "E1.6",
          "level": "Effet 1 — Référence",
          "label": "Complications postpartum référées / complications identifiées",
          "unit": "Proportion",
          "source": "Registre postpartum; référence",
          "comment": ""
        },
        {
          "code": "E1.7",
          "level": "Effet 1 — Accouchement",
          "label": "Accouchements assistés par personnel qualifié",
          "unit": "Proportion",
          "source": "Registre maternité; DHIS2",
          "comment": ""
        },
        {
          "code": "E1.8",
          "level": "Effet 1 — PF",
          "label": "Prévalence contraceptive moderne",
          "unit": "Proportion",
          "source": "Registre PF; DHIS2",
          "comment": ""
        },
        {
          "code": "E1.9",
          "level": "Effet 1 — Intrants",
          "label": "Établissements ayant connu une rupture d’une méthode contraceptive",
          "unit": "Proportion",
          "source": "SIGL/LMIS; fiches de stock",
          "comment": "Noter produit et jours de rupture"
        },
        {
          "code": "X1.1",
          "level": "Extrant 1.1 — Capacités",
          "label": "Prestataires formés/certifiés (thème, catégorie, date)",
          "unit": "Nombre",
          "source": "Rapport de formation/certification",
          "comment": "Désagréger par thème et sexe si disponible"
        },
        {
          "code": "X1.2–X1.3",
          "level": "Extrant 1.1 — Mentorat",
          "label": "Hôpitaux et ESS affiliés bénéficiant du mentorat",
          "unit": "Nombre",
          "source": "Rapport de mentorat",
          "comment": "Distinguer hôpitaux et ESS"
        },
        {
          "code": "X1.4–X1.5",
          "level": "Extrant 1.2 — Équipement",
          "label": "Hôpitaux et ESS équipés/soutenus",
          "unit": "Nombre",
          "source": "PV de réception; inventaire",
          "comment": "Distinguer les deux catégories"
        },
        {
          "code": "X1.6",
          "level": "Extrant 1.2 — Ambulance",
          "label": "Ambulances disponibles, fonctionnelles et entretenues",
          "unit": "Nombre",
          "source": "Registre véhicule; maintenance",
          "comment": ""
        },
        {
          "code": "X1.7",
          "level": "Extrant 1.2 — Sang sûr",
          "label": "Réseaux EmONC appuyés avec accès aux produits sanguins sûrs",
          "unit": "Nombre",
          "source": "Registre transfusion / EmONC",
          "comment": ""
        },
        {
          "code": "X2.1",
          "level": "Extrant 2.1 — Femmes",
          "label": "Espaces communautaires pour femmes fonctionnels",
          "unit": "Nombre",
          "source": "Rapport communautaire; supervision",
          "comment": ""
        },
        {
          "code": "X2.2",
          "level": "Extrant 2.2 — Jeunes",
          "label": "Espaces adaptés aux jeunes fonctionnels",
          "unit": "Nombre",
          "source": "Rapport espace jeune; fréquentation",
          "comment": "Données agrégées"
        },
        {
          "code": "X3.1",
          "level": "Extrant 3.1 — Données",
          "label": "Tableaux de bord SSR opérationnels au niveau des districts",
          "unit": "Nombre",
          "source": "DHIS2; rapport déploiement",
          "comment": ""
        },
        {
          "code": "X3.2",
          "level": "Extrant 3.1 — Revues",
          "label": "Réunions trimestrielles d’analyse de données tenues",
          "unit": "Nombre",
          "source": "PV et plans de suivi",
          "comment": ""
        },
        {
          "code": "X3.3",
          "level": "Extrant 3.2 — Décès maternels",
          "label": "Décès maternels notifiés et revus / décès identifiés",
          "unit": "Proportion",
          "source": "SDMPR/MPDSR; rapports anonymisés",
          "comment": "Aucune donnée nominative"
        },
        {
          "code": "Soutien 19",
          "level": "Gestion financière",
          "label": "Rapports financiers, audits, conformité et pièces justificatives",
          "unit": "Statut / référence",
          "source": "Rapports financiers; audit",
          "comment": "Renseigner période, statut et référence documentaire"
        }
      ]
    }
  ]
};

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
