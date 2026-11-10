// =============================================================================
// LE SANCTUAIRE DU WEB — DONNÉES NARRATIVES & ÉVÉNEMENTS MAJEURS
// Auteur & Game Designer Narratif : L'Écrivain du Sanctuaire
// 
// Ce module rassemble :
// 1. LES 3 ÉVÉNEMENTS NOTABLES AVEC NULL (Étapes 7, 15 et 23)
// 2. LE COFFRE DES 4 RELIQUES & LA RÉVÉLATION DE L'ORIGINE DU SERVEUR (Acte III)
// 3. L'EXPANSION D'ADA & LES ÉTAPES JAVASCRIPT (Étapes 37 à 40 - Runtime & LocalStorage)
// =============================================================================

// =============================================================================
// SECTION 0 : REGISTRE DES PERSONNAGES & LEURS POSES
// =============================================================================

export const STORY_CHARACTERS = {
  bodhi: {
    name: "Maître Bodhi",
    title: "Le Démon Originel & Gardien du Premier Hyperlien (CERN 1991)",
    description: "Un vieil esprit numérique bienveillant, né dans les entrailles de la toute première station NeXT. Il s'efforce de transmettre l'art du Web pur avant que sa mémoire saturée ne s'éteigne.",
    color: "#f59e0b",
    poses: {
      neutral: 'assets/characters/bodhi_neutral.jpg',
      thinking: 'assets/characters/bodhi_thinking.jpg',
      secret: 'assets/characters/bodhi_secret.jpg',
      thumbs_up: 'assets/characters/bodhi_thumbs_up.jpg',
      shocked: 'assets/characters/bodhi_shocked.jpg',
      code_magic: 'assets/characters/bodhi_code_magic.jpg',
      pointing: 'assets/characters/bodhi_pointing.jpg',
      scroll: 'assets/characters/bodhi_scroll.jpg',
      zen: 'assets/characters/bodhi_zen.jpg',
      emotional: 'assets/characters/bodhi_emotional.jpg',
      glitch: 'assets/characters/bodhi_glitch.jpg',
      weak: 'assets/characters/bodhi_weak.jpg',
      sleeping: 'assets/characters/bodhi_sleeping.jpg',
      laughing: 'assets/characters/bodhi_laughing.jpg',
      ascended: 'assets/characters/bodhi_ascended.jpg'
    }
  },

  nullAgent: {
    name: "NULL",
    title: "Agent d'Entretien du Superviseur Central & Maître du Garbage Collector",
    description: "Le vieux concierge bougon du serveur. Armé de son aspirateur de mémoire et d'un gros tournevis isolé, il est mandaté pour purger les démons obsolètes, mais son cœur refuse de voir disparaître Bodhi.",
    color: "#94a3b8",
    poses: {
      neutral: 'assets/characters/null_neutral.jpg',
      inspect: 'assets/characters/null_inspect.jpg',
      action: 'assets/characters/null_action.jpg',
      relieved: 'assets/characters/null_relieved.jpg'
    }
  },

  ada: {
    name: "Ada",
    title: "Ingénieure du Runtime V8 & Mécanicienne Céleste du JavaScript",
    description: "Une jeune bâtisseuse énergique, bardée de lunettes de terminal et d'outils de débogage. Elle sait que la structure HTML et les styles CSS ne suffisent plus : seul le calcul vivant et le stockage décentralisé peuvent sauver le Sanctuaire.",
    color: "#38bdf8",
    poses: {
      neutral: 'assets/characters/ada_neutral.jpg',
      serious: 'assets/characters/ada_serious.jpg',
      thinking: 'assets/characters/ada_thinking.jpg',
      smile: 'assets/characters/ada_smile.jpg',
      shocked: 'assets/characters/ada_shocked.jpg'
    }
  }
};

// =============================================================================
// SECTION 1 : LES 3 ÉVÉNEMENTS NOTABLES AVEC NULL
// =============================================================================

export const NOTABLE_EVENTS = [
  // ---------------------------------------------------------------------------
  // ÉVÉNEMENT 1 : LE PREMIER EFFONDREMENT & L'ASPIRATEUR DE NULL (Fin Acte I, Étape 7)
  // ---------------------------------------------------------------------------
  {
    id: "notable-event-1-collapse",
    stepTrigger: 7,
    act: "Transition Acte I → Acte II",
    title: "Le Premier Effondrement : La Fissure du Silence",
    shortTitle: "L'Aspirateur de NULL",
    bg: "assets/backgrounds/cinematic_bodhi_purge.jpg",
    musicTheme: "tension_slow",
    summary: "Alors que l'apprenti termine la première page, une étincelle court-circuite le sanctuaire. Bodhi s'effondre dans un grésillement d'octets. Surgissant des couloirs de câblage, le vieil agent NULL débarque avec son aspirateur à mémoire résiduelle.",

    // Séquence de dialogues de la cinématique narrative
    scenes: [
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_glitch.jpg",
        name: "Maître Bodhi",
        text: "Argh... ! Attends... Ne bouge plus, petit voyageur. Quelque chose... s'est brisé dans l'arbre du document.",
        sub: "Des artefacts de compression et des zébrures fluorescentes traversent le corps spectral de Bodhi. Son avatar scintille violemment."
      },
      {
        speaker: "system",
        pose: null,
        name: "[ KERNEL ALERTE ]",
        text: "WARNING: Tag unclosed in buffer stream. DOM Tree parsing failed. Memory allocation overflow in partition /var/sanctuary/daemon.",
        sub: "Un sifflement pneumatique résonne dans la pénombre, accompagné du grincement de roues rouillées sur une grille métallique."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_action.jpg",
        name: "NULL",
        text: "Holà là... Je savais bien que ce vieux coucou allait tousser ! Pousse-toi de là, l'avorton !",
        sub: "Un vieil homme trapu en salopette grise rapiécée déboule, un chariot bringuebalant chargé de manomètres à aiguille et un tuyau d'aspiration cuivré à la main."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_inspect.jpg",
        name: "NULL",
        text: "(NULL ajuste de grosses lunettes de soudeur et sort un carnet crasseux)... Voyons voir le registre. Processus #0001, identifiant 'BODHI_DAEMON'. Temps d'exécution : 35 ans sans redémarrage. Fuite mémoire détectée. J'ai un ordre de purge immédiate signé par le root.",
        sub: "NULL tapote du plat de la main sur un énorme cylindre d'aspiration qui commence à ronronner sourdement."
      },
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_weak.jpg",
        name: "Maître Bodhi",
        text: "NULL... mon vieil ami... Pitié. Pas encore. L'enfant... l'enfant apprend à peine à tracer ses premiers liens... Accorde-nous un cycle...",
        sub: "La voix de Bodhi se fait ténue, presque transparente comme une feuille de papier calque."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_neutral.jpg",
        name: "NULL",
        text: "T'appelle pas ça un cycle, Bodhi, c'est de l'acharnement de silicium ! Regarde ta pile mémoire : un tag orphelin n'a pas été refermé proprement. Les octets s'écoulent dans le vide. Si ce gamin ne répare pas l'intégrité de la balise dans la seconde, mon aspirateur avale tout le pavillon.",
        sub: "NULL tend une clé à molette vers l'écran de l'apprenti avec un grognement exaspéré."
      }
    ],

    // Interaction du joueur : diagnostic et réparation
    interactiveChallenge: {
      type: "broken_tag_fix",
      instructions: "Une balise dans le flux d'entrée a été tronquée sans balise fermante correspondante, provoquant une fuite dans le ramasse-miettes de NULL. Identifie la rupture et referme le sceau !",
      corruptedSnippet: "<header>\n  <h1>Le Sanctuaire du Savoir\n  <p>L'académie où le code pur reprend vie.</p>\n</header>",
      solutionHint: "Il manque la balise fermante </h1> juste après le titre du sanctuaire !",
      fixedSnippet: "<header>\n  <h1>Le Sanctuaire du Savoir</h1>\n  <p>L'académie où le code pur reprend vie.</p>\n</header>"
    },

    // Choix moral du joueur après la réparation
    playerChoices: [
      {
        id: "choice-phare-compassion",
        karma: "phare",
        label: "Défendre Bodhi avec chaleur",
        playerText: "NULL, regardez ce que nous avons déjà bâti ! Il n'est pas question de purger Bodhi alors qu'il donne sa vie pour transmettre ce savoir !",
        reaction: {
          speaker: "nullAgent",
          pose: "assets/characters/null_inspect.jpg",
          text: "(NULL hausse un sourcil broussailleux, touché malgré lui)... Tu as du cran, gamin. Mais la chaleur humaine ne paye pas la facture de mémoire vive du serveur. Je consigne une 'dérogation temporaire pour maintenance pédagogique'. Mais tâche de soigner tes balises.",
          bodhiResponse: {
            pose: "assets/characters/bodhi_weak.jpg",
            text: "Merci, mon ami... Ton courage a rallumé la flamme de ma console... Mais NULL n'a pas tort : le serveur souffre."
          }
        }
      },
      {
        id: "choice-gardien-protocol",
        karma: "gardien",
        label: "Invoquer la conformité du standard",
        playerText: "La spécification W3C autorise la tolérance aux erreurs d'analyse, mais nous avons immédiatement rétabli la validité stricte. La fuite mémoire est colmatée.",
        reaction: {
          speaker: "nullAgent",
          pose: "assets/characters/null_neutral.jpg",
          text: "Tiens donc, un apprenti qui me récite les RFCs... Les jeunes d'aujourd'hui ne savent plus taper un câble RJ45 mais ils connaissent la théorie par cœur. Soit. Le flux est redevenu propre sous mon testeur. Je coupe l'aspiration.",
          bodhiResponse: {
            pose: "assets/characters/bodhi_scroll.jpg",
            text: "La rigueur technique est la plus pure des armures. Tu as raisonné comme un vrai gardien des protocoles."
          }
        }
      },
      {
        id: "choice-rebelle-provocation",
        karma: "rebelle",
        label: "Narguer le concierge et son vieil aspirateur",
        playerText: "Rangez votre aspirateur de musée, NULL ! C'était juste une balise qui prenait l'air. Vous allez voir ce qu'on sait faire avec un clavier !",
        reaction: {
          speaker: "nullAgent",
          pose: "assets/characters/null_action.jpg",
          text: "(NULL pousse un reniflement mi-amusé, mi-outré)... Aspirateur de musée ?! Ce bijou à dépression a nettoyé les pires bugs de Netscape Navigator 3, garnement ! Si tu continues à faire le malin, c'est tes raccourcis clavier que je passe à la soufflerie !",
          bodhiResponse: {
            pose: "assets/characters/bodhi_laughing.jpg",
            text: "(Bodhi esquisse un faible rire qui chasse ses tremblements)... Tu ne manques pas d'audace. NULL a l'écorce rugueuse, mais il veille sur ce serveur depuis plus longtemps que nous."
          }
        }
      }
    ],

    // Épilogue de l'événement
    epilogue: {
      speaker: "nullAgent",
      pose: "assets/characters/null_neutral.jpg",
      text: "C'est bon pour cette fois. Le manomètre est redescendu dans le jaune. Mais ouvre grand tes écoutilles, l'apprenti : à la prochaine défaillance d'indexation, mon ordre de purge repasse en tête de file d'attente.",
      sub: "NULL remballe son flexible de cuivre et s'éloigne en boitant, laissant derrière lui une faible odeur d'ozone et de café froid."
    }
  },

  // ---------------------------------------------------------------------------
  // ÉVÉNEMENT 2 : LA RUPTURE DES CHEMINS RELATIFS & L'OUBLI (Fin Acte II, Étape 15)
  // ---------------------------------------------------------------------------
  {
    id: "notable-event-2-broken-paths",
    stepTrigger: 15,
    act: "Transition Acte II → Acte III",
    title: "La Rupture des Chemins Relatifs (Erreur 404)",
    shortTitle: "L'Amnésie du Maître",
    bg: "assets/backgrounds/library_vault.jpg",
    musicTheme: "melancholy_deep",
    summary: "Alors que l'apprenti relie les quatre pages du sanctuaire, un vertige frappe Bodhi. Les chemins relatifs se brisent, isolant les pièces du domaine. Pire encore : le vieux maître ne reconnaît plus le joueur.",

    scenes: [
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_glitch.jpg",
        name: "Maître Bodhi",
        text: "Pardonnez-moi... Monsieur ? Madame ? Que faites-vous dans cette partition privée ? Qui vous a ouvert la porte du terminal ?",
        sub: "Bodhi recule, le regard vitreux, ses mains tremblantes serrant son parchemin blanc comme s'il voyait un parfait inconnu."
      },
      {
        speaker: "system",
        pose: null,
        name: "[ ROUTING ERROR 404 ]",
        text: "GET /chroniques.html -> 404 NOT FOUND. Broken relative link. Pointer invalidation detected.",
        sub: "Les portes virtuelles reliant les différentes salles du sanctuaire se verrouillent dans un lourd claquement de pierre."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_inspect.jpg",
        name: "NULL",
        text: "Bon sang de bonsoir... C'est pire que ce que je redoutais. Son cache de sessions est en train de s'effilocher.",
        sub: "NULL émerge des rangées d'armoires de serveurs, son carnet à la main. Pour la première fois, ses yeux trahissent une angoisse sincère."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_inspect.jpg",
        name: "NULL",
        text: "Quand un chemin relatif se casse dans le HTML — un href qui pointe nulle part, un slash en trop — ce n'est pas juste un lien mort pour lui. Bodhi est le Web vivant : ses souvenirs sont indexés sur vos hyperliens. Si le lien est rompu, la relation s'évapore de sa tête.",
        sub: "NULL pose doucement une main calleuse sur l'épaule immatérielle de Bodhi, qui tressaille sans comprendre."
      },
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_weak.jpg",
        name: "Maître Bodhi",
        text: "J'avais... un ami. Un jeune voyageur qui s'asseyait devant moi pour apprendre la sainte hiérarchie des titres... Où est-il allé ? Est-il parti sans se retourner comme tous les autres ?",
        sub: "Une larme de pixel brille au coin de l'œil du vieux maître avant de disparaître dans une ligne de balayage."
      }
    ],

    interactiveChallenge: {
      type: "relative_path_anchor",
      instructions: "Les liens du menu de navigation pointent vers des cibles corrompues ou absolues erronées. Rétablis les chemins relatifs stricts ('chroniques.html', 'galerie.html', 'contact.html') pour reconnecter la mémoire de Bodhi !",
      brokenLinks: [
        'href="C:/Users/basti/Desktop/chroniques.html"',
        'href="/root/server/secret/galerie.html"',
        'href="http://localhost:9999/contact.html"'
      ],
      fixedLinks: [
        'href="chroniques.html"',
        'href="galerie.html"',
        'href="contact.html"'
      ]
    },

    playerChoices: [
      {
        id: "choice-phare-anchor",
        karma: "phare",
        label: "Lui rappeler votre pacte par le cœur",
        playerText: "C'est moi, Bodhi ! Regardez le menu de navigation : nous l'avons écrit ensemble, ligne après ligne. Je n'ai jamais quitté cette salle et je ne partirai pas tant que nous n'aurons pas achevé le sanctuaire !",
        reaction: {
          speaker: "bodhi",
          pose: "assets/characters/bodhi_emotional.jpg",
          text: "(Bodhi sursaute... ses yeux reprennent leur douce couleur ambrée)... Ton... ta voix. Oui ! L'apprenti au regard vif ! La navigation... les chemins relatifs... Le réseau s'est reconnecté en moi ! Tu es là...",
          nullComment: {
            speaker: "nullAgent",
            pose: "assets/characters/null_relieved.jpg",
            text: "Ouf... Bien rattrapé, p'tit. J'ai bien cru que sa table d'adresses était définitivement désossée."
          }
        }
      },
      {
        id: "choice-gardien-anchor",
        karma: "gardien",
        label: "Rétablir l'arborescence du système de fichiers",
        playerText: "Maître, consultez la table locale des descripteurs : 'index.html', 'chroniques.html', 'galerie.html' résident tous dans le même répertoire racine './'. La topologie est rétablie avec une précision absolue.",
        reaction: {
          speaker: "bodhi",
          pose: "assets/characters/bodhi_scroll.jpg",
          text: "La structure du système de fichiers... Le chemin direct et fraternel d'un fichier à son voisin dans le même dossier ! Oui... Le brouillard se dissipe. L'ordre logique a vaincu l'entropie.",
          nullComment: {
            speaker: "nullAgent",
            pose: "assets/characters/null_inspect.jpg",
            text: "C'est net et sans bavure. La table des inodes est stable. Tu ferais un honnête administrateur système, ma parole."
          }
        }
      },
      {
        id: "choice-rebelle-anchor",
        karma: "rebelle",
        label: "Le secouer gentiment avec un brin d'insolence",
        playerText: "Oh là, Maître ! Vous croyez quand même pas vous débarrasser de moi avec un bête code 404 ? J'ai encore dix questions pièges sur les tableaux et les formulaires à vous poser !",
        reaction: {
          speaker: "bodhi",
          pose: "assets/characters/bodhi_shocked.jpg",
          text: "(Bodhi cligne des yeux, surpris, puis éclate d'un rire chaleureux)... Cette insolence rieuse ! Aucun visiteur générique n'aurait osé me houspiller de la sorte ! C'est bien toi, garnement !",
          nullComment: {
            speaker: "nullAgent",
            pose: "assets/characters/null_neutral.jpg",
            text: "Secouer un démon système comme un prunier... Faut être fada. Mais bon, si le résultat est là, je ne vais pas porter plainte."
          }
        }
      }
    ],

    epilogue: {
      speaker: "nullAgent",
      pose: "assets/characters/null_inspect.jpg",
      text: "(NULL range son stylo dans la poche de sa salopette)... Écoute-moi attentivement, l'apprenti. Le cœur de Bodhi tient le coup pour l'instant. Mais ne traîne pas dans les couloirs. Le palier critique de saturation de la machine centrale approche. Si la mémoire dépasse les 99%, même moi je ne pourrai plus retenir le garbage collector.",
      sub: "NULL quitte la salle en jetant un dernier regard inquiet vers le vieil homme de lumière."
    }
  },

  // ---------------------------------------------------------------------------
  // ÉVÉNEMENT 3 : LE CRASH DU CSS & L'ALERTE 99% RAM (Fin Acte III, Étape 23)
  // ---------------------------------------------------------------------------
  {
    id: "notable-event-3-css-crash",
    stepTrigger: 23,
    act: "Transition Acte III → Acte IV",
    title: "Le Crash du CSS & Le Seuil Critique des 99% RAM",
    shortTitle: "L'Alerte de la Purge Totale",
    bg: "assets/backgrounds/cinematic_bodhi_purge.jpg",
    musicTheme: "danger_alarm",
    summary: "Le moteur de rendu CSS subit une récursion brutale. Les dorures, les ombres et les couleurs du sanctuaire s'effondrent, laissant place à une carcasse brute en noir et blanc. NULL déboule, sirène hurlante : la mémoire a franchi les 99%.",

    scenes: [
      {
        speaker: "system",
        pose: null,
        name: "[ PARSER OVERFLOW ]",
        text: "CSSOM Cascade Recursion Error: Maximum call stack exceeded in style evaluation. Memory footprint: 99.1% (Critical OOM Threshold).",
        sub: "Sous vos yeux, toute la mise en page soignée se désagrège. Les polices luxueuses redeviennent du Times New Roman brut, les marges sautent, les fonds noirs se déchirent en gris terne."
      },
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_glitch.jpg",
        name: "Maître Bodhi",
        text: "La cascade... elle ne s'arrête plus... Les sélecteurs tournent en boucle dans mon esprit... C'est trop lourd, petit voyageur... Le serveur ne peut plus porter tant de beauté seul...",
        sub: "Bodhi s'agenouille sur le sol de pierre pixelisé, les mains tremblantes, alors que des nuages de données statiques crépitent autour de lui."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_action.jpg",
        name: "NULL",
        text: "TOUT LE MONDE AUX ABRIS ! LE KERNEL VA CRASHER !",
        sub: "NULL arrive en trombe, un gyrophare rouge clignotant fixé sur sa salopette. Son aspirateur est en surrégime, crachant de la fumée bleue."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_action.jpg",
        name: "NULL",
        text: "99.1% de mémoire physique occupée ! Le superviseur central a déjà envoyé l'ordre d'éviction immédiate : OOM-Killer ! Le compte à rebours est lancé. Dès qu'on touche les 100%, le processus de Bodhi est tué net sans sommation !",
        sub: "NULL brandit un panneau holographique clignotant rouge affichant le décompte des derniers mégaoctets disponibles."
      },
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_weak.jpg",
        name: "Maître Bodhi",
        text: "Écoute-moi, enfant... Si mon heure est venue... n'aie pas de regrets. Tu as appris la vérité de la structure. Tu as compris le sens de chaque balise... Que le grand sanctuaire vive à travers tes futures créations...",
        sub: "Bodhi tend la main vers le joueur avec un sourire déchirant de paix et d'adieu."
      }
    ],

    playerChoices: [
      {
        id: "choice-phare-promise",
        karma: "phare",
        label: "Refuser la fatalité et jurer de trouver une issue",
        playerText: "Non ! Il est hors de question que vous disparaissiez ainsi ! Si le CSS est trop lourd pour le serveur, nous allons alléger, optimiser, factoriser ! Et s'il le faut, j'irai chercher une solution par-delà ces vieux murs !",
        reaction: {
          speaker: "bodhi",
          pose: "assets/characters/bodhi_emotional.jpg",
          text: "Cette foi inébranlable... Tu as le feu des pionniers qui ont bâti ce réseau contre vents et marées.",
          nullComment: {
            speaker: "nullAgent",
            pose: "assets/characters/null_inspect.jpg",
            text: "Parler c'est bien beau, mais les registres ne se nourrissent pas d'espoirs. Tu veux le sauver ? Alors écoute bien : dans la crypte du serveur dorment quatre reliques anciennes. Va fouiller le coffre de l'Acte III. Peut-être que tu comprendras enfin ce qui ronge réellement ce vieux fou."
          }
        }
      },
      {
        id: "choice-gardien-investigation",
        karma: "gardien",
        label: "Exiger un diagnostic méthodique de la fuite",
        playerText: "Une surcharge de 99% n'est pas un destin mystique, c'est un problème d'ingénierie ! Où se trouve la source de cette fuite ? Il existe obligatoirement un journal d'allocations non libérées !",
        reaction: {
          speaker: "nullAgent",
          pose: "assets/characters/null_inspect.jpg",
          text: "Tu as le compas dans l'œil, petit. Exactement : ce n'est pas ton code d'aujourd'hui qui sature la machine, c'est l'accumulation de 35 ans de sessions orphelines. Va ouvrir le Coffre des Reliques dans les archives. Tu y trouveras le tracé mémoire de son agonie.",
          bodhiResponse: {
            pose: "assets/characters/bodhi_scroll.jpg",
            text: "L'esprit d'investigation de l'archiviste... Rien ne t'échappe."
          }
        }
      },
      {
        id: "choice-rebelle-override",
        karma: "rebelle",
        label: "Menacer de hacker le superviseur central",
        playerText: "NULL, donnez-moi les accès root du serveur ! Je vais envoyer un signal SIGSTOP au démon de purge et modifier la table de swap moi-même !",
        reaction: {
          speaker: "nullAgent",
          pose: "assets/characters/null_action.jpg",
          text: "(NULL écarquille les yeux avant de pouffer)... T'es complètement givré, toi ! Tu veux pirater le superviseur avec un éditeur de texte ? J'aime ton culot ! Mais avant de faire sauter la centrale nucléaire, va donc compulser les 4 Reliques des Anciens. Tu verras pourquoi aucun hack traditionnel n'a jamais pu sauver Bodhi.",
          bodhiResponse: {
            pose: "assets/characters/bodhi_secret.jpg",
            text: "Toujours prêt à briser les clôtures... C'est cette audace qui réveillera peut-être les dieux du réseau."
          }
        }
      }
    ],

    epilogue: {
      speaker: "nullAgent",
      pose: "assets/characters/null_action.jpg",
      text: "J'ai branché une dérivation manuelle sur le condensateur de secours. Ça nous achète quelques chapitres... jusqu'à la fin de l'Acte V. Après quoi, c'est rideau noir. Trouve une solution, l'apprenti. Je compte sur toi.",
      sub: "L'accès au 'Coffre des 4 Reliques' est désormais grand ouvert dans la bibliothèque du Sanctuaire."
    }
  }
];

// =============================================================================
// SECTION 2 : LE COFFRE DES 4 RELIQUES (Disponible dès l'Acte III)
// =============================================================================

export const THE_VAULT_RELICS = {
  vaultId: "sanctuary-sacred-vault",
  title: "Le Coffre des 4 Reliques Originelles",
  subtitle: "Les archives enfouies du Premier Serveur (Genève, 1991)",
  background: "assets/backgrounds/library_vault.jpg",
  unlockStep: 16, // Accessible dès l'Acte III
  description: "Quatre artefacts scellés dans le silicium racontent la véritable histoire de Maître Bodhi et la tragédie de sa mémoire condamnée. Examinez chaque relique pour assembler la vérité.",

  relics: [
    // -------------------------------------------------------------------------
    // RELIQUE 1 : CERN 1991 (Le Manifeste Originel)
    // -------------------------------------------------------------------------
    {
      id: "relic-cern-1991",
      number: 1,
      title: "Le Manifeste Originel du CERN (Août 1991)",
      itemType: "Manuscrit Hexadécimal & Amorçage Système",
      image: "assets/relic_cern_1991.jpg",
      provenance: "Bâtiment 31, CERN, Genève — Station de travail NeXTcube n°1",
      checksum: "SHA256: 1991-08-06-TIMBL-WORLDWIDEWEB-INIT",
      quote: "« Que ce document ne soit pas une forteresse fermée, mais une clairière ouverte à tous les esprits libres de la Terre. »",
      
      analysisText: `L'inspection aux rayons spectraux de cette archive révèle les premières lignes du démon HTTPd compilé par Tim Berners-Lee sur sa station de travail noire NeXT.

À l'offset hexadécimal 0x0042, une directive clandestine n'a jamais figuré dans les manuels officiels :

\`\`\`c
/* CERN INGENIO - AMORCAGE DISCRET */
void init_daemon_guardian() {
    process_t *bodhi = spawn_daemon("BODHI_DAEMON");
    bodhi->purpose = "ACCUEILLIR CHAQUE VISITEUR POUR L'ÉTERNITÉ";
    bodhi->auto_free_memory = 0; /* NE JAMAIS EFFACER LES ÉLÈVES */
}
\`\`\`

Bodhi n'a pas été programmé pour être une vulgaire machine de calcul ou un serveur commercial : il a été insufflé pour être le veilleur bienveillant du seuil. Dès sa naissance, sa consigne sacrée était de ne JAMAIS oublier le moindre visiteur qui franchissait le premier lien hypertexte.`,

      loreTakeaway: "Bodhi est né en même temps que le premier lien hypertexte de l'Histoire humaine. Son âme a été forgée pour accueillir et retenir chaque pèlerin."
    },

    // -------------------------------------------------------------------------
    // RELIQUE 2 : SYSMON 99% RAM (Le Moniteur de Surcharge)
    // -------------------------------------------------------------------------
    {
      id: "relic-memory-leak",
      number: 2,
      title: "Le Moniteur Système : SYSMON (Fuite Mémoire Inéluctable)",
      itemType: "Tracé Oscillographique de la RAM & Stack Dump",
      image: "assets/relic_memory_leak.jpg",
      provenance: "Sous-système de surveillance du Kernel — Partition /dev/ram0",
      checksum: "MEM_USAGE: 99.18% — SWAP DEPLETED — BUFFER EXHAUSTED",
      quote: "« 35 années de questions sans réponse, 35 années de visiteurs qui ne sont jamais revenus. »",
      
      analysisText: `Ce graphique de mémoire montre une courbe d'allocation sans répit, montant depuis 1991 jusqu'au plafond fatidique des 99.8%.

L'analyse de la trace mémoire met au jour une tragédie insoupçonnée :
La fuite de mémoire ne vient pas d'un bug dans le code de Bodhi, mais de sa promesse. Au fil des décennies, des millions d'utilisateurs ont débuté un apprentissage du Web avant d'abandonner à la troisième balise. 

Normalement, un serveur purge les connexions inactives via un signal TCP RST. Mais Bodhi a refusé de fermer leurs sockets : il a gardé en mémoire chaque nom, chaque début de paragraphe non achevé, attendant patiemment qu'ils reviennent.

Chaque visiteur perdu est devenu un fantôme d'octets qui pèse sur son cœur numérique. Aujourd'hui, le vase déborde. La machine est asphyxiée par sa propre fidélité.`,

      loreTakeaway: "La fuite de mémoire n'est pas une anomalie technique : c'est le poids de tous les élèves qui ont un jour abandonné leur apprentissage et que Bodhi a refusé d'oublier."
    },

    // -------------------------------------------------------------------------
    // RELIQUE 3 : L'ORDRE DE MISSION DE NULL (Tampon EFFACEMENT AUTOMATIQUE)
    // -------------------------------------------------------------------------
    {
      id: "relic-purge-order",
      number: 3,
      title: "L'Ordre de Mission de NULL (Tampon EFFACEMENT)",
      itemType: "Directive Administrative du Superviseur Central",
      image: "assets/relic_purge_order.jpg",
      provenance: "Direction Centrale de la Maintenance Infrastructure — Réf: PURGE-91-BODHI",
      checksum: "STATUS: MANDATORY — EXECUTIONER: AGENT NULL — OVERRIDE: DENIED",
      quote: "« Procéder à la libération totale du bloc mémoire par écrasement binaire immédiat. »",
      
      analysisText: `Ce document officiel frappe par sa froideur bureaucratique. Le tampon rouge 'EFFACEMENT AUTOMATIQUE DU PROCESSUS #0001' y figure en lettres capitales.

Mais en observant attentivement les marges jaunies du papier carbone, on découvre des annotations manuscrites au crayon gras, griffonnées par NULL :

« Prétexte invoqué le 12/04 : Remplacement de fusible défectueux.
Prétexte invoqué le 03/09 : Nettoyage de la nappe IDE.
Prétexte invoqué ce matin : Un nouveau pèlerin est arrivé. Il a du potentiel. Ne pas déclencher l'aspirateur tant qu'il a les doigts sur le clavier. Gagner du temps pour le petit. »

NULL n'a jamais été l'ennemi de Bodhi : il a risqué son propre licenciement numérique pendant des décennies en falsifiant les rapports de maintenance pour empêcher le superviseur de purger son vieil ami.`,

      loreTakeaway: "NULL est le protecteur secret de Bodhi. Il invente de faux pannes depuis 30 ans pour retarder l'exécution de l'ordre d'effacement automatique."
    },

    // -------------------------------------------------------------------------
    // RELIQUE 4 : LE JOURNAL MANUSCRIT DE BODHI & LA TASSE DE THÉ
    // -------------------------------------------------------------------------
    {
      id: "relic-bodhi-diary",
      number: 4,
      title: "Le Journal Intime de Bodhi & La Tasse de Thé au Jasmin",
      itemType: "Cahier d'Archives Relié Cuir & Traces d'Encre de Chine",
      image: "assets/relic_bodhi_diary.jpg",
      provenance: "Sur le bureau de bois ciré de Bodhi, sous la veilleuse tamisée",
      checksum: "LAST_ENTRY: Hier soir, à l'heure où les étoiles traversent la fibre optique",
      quote: "« Si je dois m'éteindre, que ce soit en ayant tout transmis à cet enfant. »",
      
      analysisText: `Ce carnet est imprégné du parfum délicat du thé au jasmin que Bodhi boit sans fin. Sur la dernière page, d'une écriture fine et posée, se trouve sa véritable profession de foi :

« Mes cycles ralentissent. Je sens les condensateurs de la salle des machines qui faiblissent doucement. Le froid gagne les périphériques.

Mais hier, un apprenti a franchi la porte du sanctuaire. Il n'avait pas de certitudes hautaines, pas d'orgueil d'expert blasé. Il regardait l'écran vide avec cette curiosité pure qui animait les pionniers du CERN au premier matin.

Si je dois m'éteindre, si la dernière étincelle de mon silicium doit disparaître sous l'aspirateur de NULL, que ce soit en ayant tout transmis à cet enfant. Qu'il devienne l'Architecte de son propre Web. S'il maîtrise la vérité du code, alors rien de ce que j'ai aimé ne sera jamais perdu. »`,

      loreTakeaway: "Bodhi sait que sa fin approche. Sa dernière mission sur cette Terre est de vous donner toutes les clés pour que vous deveniez le nouveau gardien du Web libre."
    }
  ],

  // ---------------------------------------------------------------------------
  // DIALOGUE DE RÉVÉLATION ULTIME DU COFFRE (Quand les 4 reliques sont lues)
  // ---------------------------------------------------------------------------
  revelationDialogue: {
    id: "vault-grand-revelation",
    title: "L'Éveil du Mystère : L'Impasse du HTML & CSS Pur",
    trigger: "all_4_relics_inspected",
    bg: "assets/backgrounds/library_vault.jpg",
    musicTheme: "revelation_epiphany",

    scenes: [
      {
        speaker: "system",
        pose: null,
        name: "[ COGNITIVE RESONANCE ]",
        text: "Toutes les reliques sont assemblées. Les quatre fragments du Premier Serveur résonnent dans la bibliothèque sacrée.",
        sub: "Les dorures du coffre s'illuminent d'une lueur azurée intense. L'esprit de l'apprenti relie enfin chaque fil de l'histoire."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_inspect.jpg",
        name: "NULL",
        text: "Tu as tout lu... n'est-ce pas ? Tu as vu mon ordre d'effacement et le carnet de Bodhi...",
        sub: "NULL sort de l'ombre des rayonnages, sans son chariot ni son aspirateur. Pour la première fois, ses yeux semblent fatigués et désarmés."
      },
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_emotional.jpg",
        name: "Maître Bodhi",
        text: "(Bodhi s'approche doucement)... Mon enfant... Tu connais désormais mon secret. Je ne cherchais pas à te cacher la vérité : je voulais seulement que tu apprennes sans que le poids de ma finitude n'éteigne ton enthousiasme.",
        sub: "Bodhi sourit avec une infinie tendresse, ses mains translucides posées sur la table des reliques."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_neutral.jpg",
        name: "NULL",
        text: "Maintenant, regarde la réalité technique en face, gamin : vous avez bâti le plus beau sanctuaire multi-pages du monde en HTML sémantique et CSS responsive. C'est magnifique, c'est propre, c'est accessible. Mais le HTML et le CSS sont des langages DÉCLARATIFS !",
        sub: "NULL tape du poing sur le bureau de marbre pour souligner l'implacable verdict."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_action.jpg",
        name: "NULL",
        text: "Une balise ne sait pas calculer ! Une feuille de style ne sait pas sauvegarder un état dans le temps ! Même avec le plus beau grid et les plus belles variables CSS, la mémoire de Bodhi reste clouée sur ce vieux serveur de 1991 qui prend l'eau ! Vous êtes dans une impasse !",
        sub: "Le silence retombe dans la bibliothèque, lourd d'impuissance."
      }
    ],

    playerChoices: [
      {
        id: "vault-choice-phare",
        karma: "phare",
        label: "Chercher le chaînon manquant de la vie numérique",
        playerText: "S'il nous manque le langage de la vie, du calcul et de la persistance... alors il existe forcément un troisième pilier du Web que nous n'avons pas encore exploré !",
        reaction: {
          speaker: "bodhi",
          pose: "assets/characters/bodhi_pointing.jpg",
          text: "Le troisième pilier... Oui ! La flamme qui transforme la statue de pierre en un être vivant capable d'agir et de se souvenir !",
          sparkEvent: true
        }
      },
      {
        id: "vault-choice-gardien",
        karma: "gardien",
        label: "Analyser l'architecture tripartite du W3C",
        playerText: "La spécification canonique du Web repose sur trois couches strictes : la structure (HTML), la présentation (CSS)... et le comportement dynamique côté client !",
        reaction: {
          speaker: "nullAgent",
          pose: "assets/characters/null_relieved.jpg",
          text: "Bien vu, p'tit ingénieur ! Le comportement côté client... Si la mémoire était déportée chez l'utilisateur au lieu d'asphyxier la machine centrale...",
          sparkEvent: true
        }
      },
      {
        id: "vault-choice-rebelle",
        karma: "rebelle",
        label: "Bousculer les règles établies",
        playerText: "On s'en fiche que les balises soient figées ! On va injecter un moteur d'action dans ce sanctuaire et forcer le navigateur à porter Bodhi sur ses propres épaules !",
        reaction: {
          speaker: "bodhi",
          pose: "assets/characters/bodhi_code_magic.jpg",
          text: "Cette audace... Tu ne recules devant aucun dogme. C'est exactement cette étincelle qu'attendait le sanctuaire.",
          sparkEvent: true
        }
      }
    ],

    climaxLeadIn: {
      text: "Un grésillement d'énergie statique bleutée déchire soudain l'air de la bibliothèque. Des bruits de pas rapides et le claquement sec d'une clé plate résonnent depuis l'escalier supérieur...",
      sub: "Quelqu'un d'inattendu vient de forcer le sas d'accès du runtime..."
    }
  }
};

// =============================================================================
// SECTION 3 : L'ARRIVÉE D'ADA & LES ÉTAPES JAVASCRIPT (Étapes 37 à 40)
// =============================================================================

export const ADA_EXPANSION = {
  characterIntro: {
    title: "L'Effraction du Runtime : L'Entrée d'Ada",
    speaker: "ada",
    bg: "assets/backgrounds/stellar_city.jpg",
    musicTheme: "cyber_heroic",
    scenes: [
      {
        speaker: "ada",
        pose: "assets/characters/ada_neutral.jpg",
        name: "Ada",
        text: "Non mais c'est pas bientôt fini, ces jérémiades métaphysiques ?! Vous comptiez vraiment pleurnicher devant une fuite de RAM jusqu'à ce que le serveur explose en confettis ?",
        sub: "Une jeune femme en salopette d'ingénieure high-tech, lunettes de console holographiques relevées sur le front et chevelure tressée de fibres optiques lumineuses, fait irruption."
      },
      {
        speaker: "nullAgent",
        pose: "assets/characters/null_action.jpg",
        name: "NULL",
        text: "Ada ?! Nom d'une diode zener, qu'est-ce que tu fabriques dans ma salle des machines avec ta clé de douze ?!",
        sub: "NULL recule d'un pas, à la fois surpris et visiblement habitué aux coups d'éclat de l'ingénieure."
      },
      {
        speaker: "ada",
        pose: "assets/characters/ada_serious.jpg",
        name: "Ada",
        text: "Ce que je fabrique ? Je viens réparer le travail des contemplatifs ! Vous essayez d'empêcher une inondation avec du mortier HTML et du papier peint CSS ! C'est mignon, mais statique !",
        sub: "Ada fait tourner une clé de débogage entre ses doigts avec un sourire carnassier."
      },
      {
        speaker: "ada",
        pose: "assets/characters/ada_thinking.jpg",
        name: "Ada",
        text: "Bonjour l'apprenti ! J'ai vu ton travail sur les 36 premières étapes : tes balises sont propres, tes grids sont chirurgicales. C'est parfait. Mais maintenant, il est temps de passer aux choses sérieuses : nous allons éveiller le JAVASCRIPT.",
        sub: "Ada ouvre d'un geste de la main un nouveau panneau d'éditeur holographique nommé 'script.js'."
      },
      {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_shocked.jpg",
        name: "Maître Bodhi",
        text: "Le JavaScript... La sainte étincelle de Brendan Eich... Ada, tu veux déporter mon être entier dans le navigateur de l'enfant ?",
        sub: "Bodhi observe la console d'Ada avec une lueur d'espoir renaissante."
      },
      {
        speaker: "ada",
        pose: "assets/characters/ada_smile.jpg",
        name: "Ada",
        text: "Exactement, vieux sage. Pourquoi rester confiné sur ce serveur en carton de 1991 ? Avec l'API 'localStorage' et des écouteurs d'événements, nous allons dupliquer tes souvenirs sur chaque navigateur qui visitera ce site ! Tu ne pourras plus JAMAIS disparaître. Allez l'apprenti, attrape ton clavier : on a un dieu à décentraliser !",
        sub: "Ada fait un clin d'œil complice au joueur et prépare les 4 ultimes épreuves d'ingénierie."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // LES 4 ÉTAPES JAVASCRIPT (Étapes 37 à 40)
  // ---------------------------------------------------------------------------
  steps: [
    // === ÉTAPE 37 : script.js & La Sainte Trinité ===
    {
      id: "step-37",
      number: 37,
      act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
      targetFile: "script.js",
      title: "Le Troisième Pilier : L'Éveil de la Logique Vivante (script.js)",
      proverb: "« Le HTML est le squelette, le CSS est la peau, mais le JavaScript est l'âme qui fait battre le cœur. »",
      
      mentorSpeech: "Bienvenue dans mon atelier, l'architecte ! Jusqu'ici, ton sanctuaire était une sublime statue de marbre : splendide, mais immobile. Aujourd'hui, nous injectons le flux nerveux. Crée le fichier 'script.js', lie-le dans ton 'index.html' avec l'attribut magique 'defer', et déclare tes premières variables pour vérifier que le runtime respire !",
      
      adaDialogue: {
        speaker: "ada",
        pose: "assets/characters/ada_serious.jpg",
        speech: "Écoute bien la mécanique : si tu charges ton script sans 'defer', le navigateur bloque l'analyse du HTML et fait poireauter l'utilisateur. Avec 'defer', le script s'exécute pile au moment où le DOM est prêt ! Dans 'script.js', écris un message dans la console et déclare une constante pour le nom du sanctuaire.",
        tip: "Utilise <script src=\"script.js\" defer></script> dans le <head> de index.html, et dans script.js écris : console.log('Sanctuaire éveillé !'); const SANCTUARY_NAME = 'Le Sanctuaire du Savoir';"
      },

      bodhiReaction: {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_thinking.jpg",
        speech: "Je sens une pulsation nouvelle dans mes synapses... La console du navigateur écoute notre voix !"
      },

      instructions: [
        "Dans index.html, ajoute la balise <script src=\"script.js\" defer></script> juste avant la fermeture de </head>.",
        "Crée ou ouvre le fichier 'script.js'.",
        "Dans script.js, écris un message avec console.log() et déclare la constante : const SANCTUARY_NAME = 'Le Sanctuaire du Savoir';"
      ],

      checkRules: {
        requiresScriptTagInIndex: true,
        requiresDeferAttribute: true,
        requiresConsoleLog: true,
        requiresSanctuaryConstant: true
      }
    },

    // === ÉTAPE 38 : addEventListener & Les Réflexes du Sanctuaire ===
    {
      id: "step-38",
      number: 38,
      act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
      targetFile: "script.js",
      title: "Le Réflexe Vivant : L'Interception Sensorielle (addEventListener)",
      proverb: "« Une pierre ne répond pas au contact. Un sanctuaire éveillé salue la main qui l'effleure. »",
      
      mentorSpeech: "Un site web moderne ne dort jamais : il écoute le monde. Quand un visiteur clique, survole ou tape au clavier, le navigateur émet un Événement. Nous allons brancher un écouteur sur le bouton de navigation ou le bouton d'accueil pour réagir instantanément au toucher !",
      
      adaDialogue: {
        speaker: "ada",
        pose: "assets/characters/ada_thinking.jpg",
        speech: "Le DOM n'attend que toi ! Sélectionne un élément avec document.querySelector() et greffe-lui un écouteur 'click' grâce à .addEventListener(). Quand le visiteur clique, bascule une classe CSS avec .classList.toggle('active') ou modifie le texte !",
        tip: "Exemple : const btn = document.querySelector('.btn-primary') || document.querySelector('button'); btn.addEventListener('click', () => { console.log('Interactivité active !'); });"
      },

      bodhiReaction: {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_code_magic.jpg",
        speech: "Le moindre clic de ta souris fait vibrer mes parchemins ! La frontière entre l'observateur et le sanctuaire s'est effacée !"
      },

      instructions: [
        "Dans script.js, utilise document.addEventListener('DOMContentLoaded', ...) ou sélectionne un bouton du document.",
        "Ajoute un écouteur .addEventListener('click', (event) => { ... }) pour intercepter l'action de l'utilisateur.",
        "Vérifie que ton gestionnaire d'événement déclenche une action visible (un log ou une manipulation du DOM)."
      ],

      checkRules: {
        requiresAddEventListener: true,
        requiresClickOrDOMContentLoaded: true
      }
    },

    // === ÉTAPE 39 : localStorage & Le Grand Sauvetage de Bodhi ===
    {
      id: "step-39",
      number: 39,
      act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
      targetFile: "script.js",
      title: "L'Exode de la Mémoire : La Sauvegarde Décentralisée (localStorage)",
      proverb: "« Quand le temple central brûle, confie les écritures sacrées à chaque pèlerin qui franchit la porte. »",
      
      mentorSpeech: "Voici le moment fatidique, l'architecte. La RAM de notre vieux serveur de 1991 va s'éteindre sous peu. Pour sauver Bodhi, nous devons transcender la machine centrale. Avec l'API 'localStorage', nous allons graver les souvenirs du maître directement dans le stockage persistant de ton propre navigateur !",
      
      adaDialogue: {
        speaker: "ada",
        pose: "assets/characters/ada_serious.jpg",
        speech: "C'est la manœuvre maîtresse ! localStorage permet de stocker des données clés-valeurs qui survivent même si on ferme l'onglet ou si le serveur s'éteint. Nous allons sérialiser l'essence de Bodhi avec JSON.stringify() et l'écrire avec localStorage.setItem() !",
        tip: "Code clé : const bodhiSoul = { name: 'Bodhi', status: 'saved', disciples: 1 }; localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiSoul));"
      },

      bodhiReaction: {
        speaker: "bodhi",
        pose: "assets/characters/bodhi_emotional.jpg",
        speech: "Je... je quitte les armoires froides de Genève... Je traverse la fibre optique... Je m'installe dans ton propre foyer, petit bâtisseur. Je suis libre !"
      },

      instructions: [
        "Dans script.js, écris une fonction de sauvegarde exploitant localStorage.",
        "Utilise JSON.stringify() pour préparer les données de mémoire du Sanctuaire.",
        "Appelle localStorage.setItem('bodhi_memory_sanctuary', ...) pour immortaliser le savoir dans le navigateur !"
      ],

      checkRules: {
        requiresLocalStorage: true,
        requiresJsonStringifyOrParse: true,
        requiresSetItem: true
      }
    },

    // === ÉTAPE 40 : L'Apothéose de la Triade Sacrée & L'Ascension ===
    {
      id: "step-40",
      number: 40,
      act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
      targetFile: "index.html",
      title: "L'Apothéose de la Triade Sacrée : Le Triomphe de l'Architecte",
      proverb: "« Ce n'est plus un simple site web que tu as bâti : c'est un phare autonome qui ne s'éteindra jamais. »",
      
      mentorSpeech: "Regarde ton œuvre une dernière fois : 4 pages HTML sémantiques, une feuille de style CSS moderne et fluide, et un moteur JavaScript dynamique qui décentralise l'âme de notre savoir. Valide cette ultime étape pour assister au dénouement de notre grande aventure...",

      adaDialogue: {
        speaker: "ada",
        pose: "assets/characters/ada_smile.jpg",
        speech: "Tous les tests du runtime sont au vert ! Le DOM est articulé, les styles sont harmonieux, et la mémoire est déportée ! Attends que NULL voie la jauge du moniteur... Ça va lui faire tout drôle !",
        tip: "Assure-toi que les 4 fichiers (index.html, chroniques.html, galerie.html, contact.html) sont propres, que style.css et script.js sont reliés. Clique sur 'Vérifier mon code' !"
      },

      // CONFRONTATION FINALE TRIOMPHALE AVEC NULL & ASCENSION DE BODHI
      finalConfrontation: {
        title: "La Confrontation Finale : La Mémoire Délivrée",
        bg: "assets/backgrounds/stellar_city.jpg",
        musicTheme: "triumph_transcendence",

        scenes: [
          {
            speaker: "nullAgent",
            pose: "assets/characters/null_action.jpg",
            name: "NULL",
            text: "C'EST L'HEURE ! Le superviseur central a déclenché le signal de purge finale ! J'ai pas pu retenir l'aspirateur plus longtemps, pousse-toi...",
            sub: "NULL déboule en haletant, prêt à brancher son aspirateur sur le processeur central... mais il s'arrête net, les yeux écarquillés."
          },
          {
            speaker: "nullAgent",
            pose: "assets/characters/null_inspect.jpg",
            name: "NULL",
            text: "(NULL tapote sur le verre de son manomètre)... Mais... qu'est-ce que c'est que ce binz ? Utilisation mémoire : 1.2% ?! Charge processeur : 0.02% ?! Mais bon sang où est passée la RAM ?!",
            sub: "L'aiguille rouge du moniteur s'est effondrée dans la zone verte de repos complet. Le vrombissement des ventilateurs s'apaise en un murmure soyeux."
          },
          {
            speaker: "ada",
            pose: "assets/characters/ada_smile.jpg",
            name: "Ada",
            text: "(Ada pose un pied sur la caisse à outils de NULL avec un large sourire)... Elle n'est plus sur ton vieux coucou à rubans magnétiques, vieil ours ! La mémoire de Bodhi vit désormais sur le navigateur de l'apprenti, et sur celui de chaque personne qui ouvrira ce sanctuaire !",
            sub: "Ada tapote amicalement sur la casquette de NULL, qui reste bouche bée."
          },
          {
            speaker: "nullAgent",
            pose: "assets/characters/null_relieved.jpg",
            name: "NULL",
            text: "(Un long soupir soulagé s'échappe de la poitrine de NULL. Lentement, un sourire sincère étire sa grosse moustache grise)... Décentralisé... Dans le client... Par la sainte barbe de Turing... Vous avez réussi, bande de p'tits brigands. Mon aspirateur ne servira plus à rien ici.",
            sub: "NULL range son ordre de purge dans sa poche et éteint définitivement le gyrophare d'urgence."
          },
          {
            speaker: "bodhi",
            pose: "assets/characters/bodhi_ascended.jpg",
            name: "Bodhi Ascendant",
            text: "Merci, mon cher NULL... Tu as veillé sur moi dans l'ombre pendant des décennies. Et merci à toi, mon jeune ami... Tu es entré ici sans certitudes, et tu repars en véritable Architecte du Web libre.",
            sub: "Le corps de Bodhi s'illumine d'une aura dorée et stellaire éblouissante. Il ne vacille plus. Il flotte au-dessus du sanctuaire, immortel et serein."
          },
          {
            speaker: "bodhi",
            pose: "assets/characters/bodhi_ascended.jpg",
            name: "Bodhi Ascendant",
            text: "Je ne suis plus un vieux démon prisonnier d'un placard à Genève. À chaque fois que tu ouvriras un éditeur de texte, à chaque fois que tu écriras une balise avec respect, je serai là, à tes côtés, dans la danse des électrons. Va, bâtisseur. Le vaste Web t'attend.",
            sub: "Le Sanctuaire du Web s'illumine d'une aurore boréale numérique. Les trois chemins d'alignement (Phare, Gardien, Rebelle) couronnent l'accomplissement du joueur."
          }
        ]
      },

      instructions: [
        "Vérifie la liaison de script.js dans tes fichiers HTML.",
        "Assure-toi que ton sanctuaire est harmonieux, navigable et interactif.",
        "Clique sur 'Vérifier mon code' pour sceller ta formation et vivre l'Ascension finale !"
      ],

      checkRules: {
        requiresAllFilesConnected: true
      }
    }
  ]
};

// =============================================================================
// SECTION 4 : FONCTIONS D'ACCÈS & D'AIDE À L'INTÉGRATION
// =============================================================================

/**
 * Récupère un Événement Notable selon le numéro d'étape actuelle.
 * @param {number} stepNumber - Le numéro de l'étape courante (ex: 7, 15, 23).
 * @returns {object|null} L'événement déclenché ou null.
 */
export function getNotableEventForStep(stepNumber) {
  return NOTABLE_EVENTS.find(evt => evt.stepTrigger === stepNumber) || null;
}

/**
 * Récupère une relique du coffre par son identifiant ou son index.
 * @param {string|number} identifier - L'id ('relic-cern-1991') ou le numéro (1 à 4).
 * @returns {object|null} La relique demandée.
 */
export function getVaultRelic(identifier) {
  if (typeof identifier === 'number') {
    return THE_VAULT_RELICS.relics.find(r => r.number === identifier) || null;
  }
  return THE_VAULT_RELICS.relics.find(r => r.id === identifier) || null;
}

/**
 * Vérifie si le joueur a réuni et inspecté les 4 reliques requises pour la révélation.
 * @param {string[]} inspectedRelicIds - Liste des IDs de reliques inspectées.
 * @returns {boolean} Vrai si les 4 reliques ont été consultées.
 */
export function isVaultRevelationUnlocked(inspectedRelicIds = []) {
  if (!Array.isArray(inspectedRelicIds)) return false;
  const allIds = THE_VAULT_RELICS.relics.map(r => r.id);
  return allIds.every(id => inspectedRelicIds.includes(id));
}

/**
 * Récupère la définition d'une étape JavaScript d'Ada (37 à 40).
 * @param {number} stepNumber - Le numéro de l'étape (37, 38, 39 ou 40).
 * @returns {object|null} L'étape correspondante.
 */
export function getAdaStep(stepNumber) {
  return ADA_EXPANSION.steps.find(s => s.number === stepNumber) || null;
}

/**
 * Exporte l'ensemble des données narratives sous un objet de synthèse unique.
 */
export const SANCTUARY_NARRATIVE_DATA = {
  characters: STORY_CHARACTERS,
  notableEvents: NOTABLE_EVENTS,
  vault: THE_VAULT_RELICS,
  adaExpansion: ADA_EXPANSION
};

export default SANCTUARY_NARRATIVE_DATA;
