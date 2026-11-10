// =============================================================================
// ENRICHISSEMENT DU LORE ET NOUVEAUX DIALOGUES (ADA & BODHI)
// =============================================================================

const fs = require('fs');
const path = require('path');

const loreFile = path.join(__dirname, '..', 'js', 'bodhi-lore.js');
let content = fs.readFileSync(loreFile, 'utf8');

// 1. Mise à jour des unlockStep existants pour la progression sur 50 étapes
content = content.replace(/"id":\s*"ada-personal-passions",\s*"unlockStep":\s*37,/, '"id": "ada-personal-passions",\n    "unlockStep": 44,');
content = content.replace(/"id":\s*"ada-personal-style-patch",\s*"unlockStep":\s*37,/, '"id": "ada-personal-style-patch",\n    "unlockStep": 44,');
content = content.replace(/"id":\s*"ada-personal-free-time",\s*"unlockStep":\s*38,/, '"id": "ada-personal-free-time",\n    "unlockStep": 45,');
content = content.replace(/"id":\s*"ada-personal-opinion-null",\s*"unlockStep":\s*38,/, '"id": "ada-personal-opinion-null",\n    "unlockStep": 46,');
content = content.replace(/"id":\s*"ada-lore-discovery-sanctuary",\s*"unlockStep":\s*38,/, '"id": "ada-lore-discovery-sanctuary",\n    "unlockStep": 45,');
content = content.replace(/"id":\s*"ada-personal-coding-fuel",\s*"unlockStep":\s*38,/, '"id": "ada-personal-coding-fuel",\n    "unlockStep": 46,');
content = content.replace(/"id":\s*"ada-lore-null-clash",\s*"unlockStep":\s*39,/, '"id": "ada-lore-null-clash",\n    "unlockStep": 47,');
content = content.replace(/"id":\s*"ada-step-39-localstorage-immortality",\s*"unlockStep":\s*39,/, '"id": "ada-step-39-localstorage-immortality",\n    "unlockStep": 49,');
content = content.replace(/"id":\s*"ada-step-40-farewell-handshake",\s*"unlockStep":\s*40,/, '"id": "ada-step-40-farewell-handshake",\n    "unlockStep": 50,');

// 2. Les 15 nouvelles questions uniques d'Ada et de Bodhi
const newQuestions = [
  // --- NOUVELLES QUESTIONS D'ADA ---
  {
    id: "ada-favorite-videogames",
    unlockStep: 45,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Ada, à quels jeux aimes-tu jouer quand tu quittes le terminal ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada lève les yeux au ciel avec un grand sourire d'enfant)... Oh, j'adore les jeux d'action millimétrés et les mondes souterrains ! Hollow Knight pour sa poésie et ses sauts au pixel près, Celeste pour sa bande-son et sa pureté mécanique, et des simulateurs de construction spatiale comme Kerbal Space Program. Quand une trajectoire orbitale réussit grâce à une équation mathématique exacte, je saute de joie dans mon atelier !",
      pose: "smile",
      choices: [
        {
          text: "La précision et la grâce du gameplay : c'est comme un CSS sans aucun décalage visuel.",
          karma: "phare",
          next: {
            text: "Exactement ! Quand les animations sont fluides à 60 images par seconde, le jeu devient de l'art pur.",
            pose: "smile"
          }
        },
        {
          text: "Chaque saut réussi prouve que la machine obéit aux lois de la physique programmée.",
          karma: "gardien",
          next: {
            text: "Zéro tolérance au lag ! Des contrôles chirurgicaux ou rien !",
            pose: "serious"
          }
        },
        {
          text: "Envoyer des fusées bricolées dans l'espace en espérant que ça n'explose pas... c'est tout moi !",
          karma: "rebelle",
          next: {
            text: "(Ada éclate de rire)... Haha ! C'est comme ça qu'on apprend ! On tente l'impossible et on débugge les débris !",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "ada-favorite-algo",
    unlockStep: 46,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Ada, quel est ton algorithme préféré dans toute l'informatique ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada pose son tournevis et prend un air passionné)... L'algorithme A* (A-Star) ! C'est l'algorithme de recherche du plus court chemin dans un graphe. Il combine la certitude mathématique de Dijkstra avec l'intuition d'une fonction heuristique. Il trouve la route optimale à travers un labyrinthe de nœuds sans jamais paniquer. C'est la métaphore parfaite de la vie : une destination claire, guidée par une saine estimation de la distance.",
      pose: "thinking",
      choices: [
        {
          text: "Trouver le bon chemin dans le labyrinthe du monde... c'est une très belle philosophie.",
          karma: "phare",
          next: {
            text: "C'est pour ça que la science et la sagesse ne font qu'un quand on regarde sous le capot.",
            pose: "smile"
          }
        },
        {
          text: "Une complexité temporelle maîtrisée et une heuristique admissible : c'est de l'ingénierie parfaite.",
          karma: "gardien",
          next: {
            text: "Exactement. Quand les calculs sont minimaux et le résultat irréprochable, c'est le triomphe de la raison.",
            pose: "serious"
          }
        },
        {
          text: "Moi je fonce tête baissée et je casse les murs du labyrinthe si besoin !",
          karma: "rebelle",
          next: {
            text: "Haha ! L'algorithme bulldozer ! Ça marche aussi, mais prévois un bon budget de réparation !",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "ada-terminal-vs-ide",
    unlockStep: 47,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Pourquoi es-tu si attachée à ton terminal et à ton mug '>_' ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada tapote son mug en céramique émaillée)... Parce que l'invite de commande '>_' est la forme la plus directe et intime de communion avec l'ordinateur. Pas de boutons superflus, pas de pop-ups publicitaires, pas de fioritures. Tu écris un ordre avec tes doigts, le système répond. Le terminal, c'est la vérité nue du silicium. Et mon café à l'intérieur me rappelle de rester éveillée quand le monde dort.",
      pose: "smile",
      choices: [
        {
          text: "Cette simplicité épurée rejoint la méditation de Maître Bodhi.",
          karma: "phare",
          next: {
            text: "Bodhi médite sur le vide, moi je médite sur un curseur vert qui clignote. Au fond, c'est la même paix.",
            pose: "smile"
          }
        },
        {
          text: "Les interfaces graphiques consomment des cycles processeurs inutiles ; la CLI est invincible.",
          karma: "gardien",
          next: {
            text: "Trois mégaoctets de RAM pour un terminal contre un gigaoctet pour un éditeur lourd. Le choix est vite fait !",
            pose: "serious"
          }
        },
        {
          text: "Taper des lignes de commande à toute vitesse dans le noir, ça fait surtout un style de hacker légendaire !",
          karma: "rebelle",
          next: {
            text: "Chut ! Ne dévoile pas mon secret ! C'est 50 % d'efficacité et 50 % de pure classe !",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "ada-view-on-bodhi",
    unlockStep: 46,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Et Maître Bodhi... comment vis-tu son calme olympien face à ton rythme d'enfer ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada sourit avec une immense tendresse)... Bodhi est mon ancre. Moi, je bouillonne, j'optimise, je veux tout réécrire en workers asynchrones, j'ai peur que le temps nous échappe. Et Bodhi me regarde, boit une gorgée de thé, et me dit : 'Ada, si tes fondations ne sont pas saines, ta fusée s'effondrera au décollage.' Il a raison. Sans la rigueur de ses balises et son respect des anciens, mes scripts tourneraient dans le vide. On forme une sacrée équipe, non ?",
      pose: "smile",
      choices: [
        {
          text: "La sagesse ancestrale et la flamme moderne : vous êtes les deux faces d'une même médaille.",
          karma: "phare",
          next: {
            text: "C'est exactement ça. Ni nostalgie passéiste, ni fuite en avant aveugle : l'équilibre parfait.",
            pose: "smile"
          }
        },
        {
          text: "La structure garantit la stabilité, la logique assure la réactivité. Les standards sont saufs.",
          karma: "gardien",
          next: {
            text: "Un binôme d'ingénieurs au sommet de leur art. NULL ne nous aura pas !",
            pose: "serious"
          }
        },
        {
          text: "Un moine zen et une geek à rollers : personne n'avait vu venir ce duo sur le Web !",
          karma: "rebelle",
          next: {
            text: "(Ada rit aux éclats)... Le crossover du siècle ! Les machines centrales n'étaient pas prêtes pour nous !",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "ada-first-js-memory",
    unlockStep: 44,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Te rappelles-tu de la toute première chose que tu as codée en JavaScript ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada rigole franchement, ses yeux pétillants de souvenirs)... Oh là là, c'était il y a des années sur un vieux coucou d'ordinateur ! J'avais codé un bouton qui, à chaque clic, faisait changer la couleur de fond de la page de façon aléatoire et jouait un son de klaxon strident. C'était affreux, assourdissant et kitsch au possible... mais quand j'ai vu le navigateur réagir à MON code, j'ai su que je ne lâcherais plus jamais ce clavier !",
      pose: "smile",
      choices: [
        {
          text: "C'est souvent par un jeu naïf que s'allument les plus grandes vocations de la vie.",
          karma: "phare",
          next: {
            text: "Exactement. L'étincelle de la curiosité pure. C'est cette même flamme qui t'anime aujourd'hui.",
            pose: "smile"
          }
        },
        {
          text: "Un simple gestionnaire d'événement et Math.random() : la base de la programmation réactive.",
          karma: "gardien",
          next: {
            text: "Tout part de là ! Écouter un événement, exécuter une routine, modifier le DOM.",
            pose: "serious"
          }
        },
        {
          text: "Le klaxon strident... J'espère que tu as gardé le code dans un coin pour l'utiliser contre NULL !",
          karma: "rebelle",
          next: {
            text: "Haha ! Si NULL s'approche trop, je lui envoie une boucle de klaxon à 120 décibels dans ses circuits !",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "ada-hardware-rig",
    unlockStep: 48,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Quel genre de machine utilises-tu sous ton capot d'ingénieure ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada tapote son boîtier tactique avec fierté)... Pas de machine toute faite du commerce ! Un châssis en aluminium anodisé fait sur mesure, une carte mère miniature overclockée, un clavier mécanique avec des commutateurs lubrifiés à la main pour le claquement parfait, et trois écrans verticaux haute résolution pour surveiller le code, l'arbre du DOM et les graphiques de performances en direct. Une vraie station de pilotage stellaire !",
      pose: "smile",
      choices: [
        {
          text: "Un outil façonné avec amour devient le prolongement naturel de la main de l'artisan.",
          karma: "phare",
          next: {
            text: "Comme le pinceau du peintre ou la robe de Bodhi. Quand l'outil est parfait, on ne pense plus qu'à créer.",
            pose: "smile"
          }
        },
        {
          text: "Refroidissement passif, dissipation thermique optimale : un environnement d'exécution sans faille.",
          karma: "gardien",
          next: {
            text: "Zéro étranglement thermique ! Le processeur tourne à son plein potentiel sans jamais faiblir.",
            pose: "serious"
          }
        },
        {
          text: "Avec autant de puissance, tu pourrais lancer un satellite ou miner tout un bloc de cryptos !",
          karma: "rebelle",
          next: {
            text: "Héhé, je préfère l'utiliser pour faire tourner nos serveurs libres et sauver le Web !",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "ada-future-web",
    unlockStep: 49,
    character: "ada",
    category: "L'Atelier d'Ada & Confidences du Runtime",
    question: "Comment imagines-tu le Web dans 50 ans ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Ada regarde au loin à travers la verrière du sanctuaire)... Je vois un Web libéré des mégacorporations et des serveurs monstres. Un réseau distribué d'humain à humain où chaque appareil est un relais d'émancipation. WebAssembly, cryptographie locale, interfaces neuronales légères et éthiques. Mais au cœur de tout ça... je sais que les balises HTML et les règles de style seront toujours là. Parce que la simplicité des standards ouverts survit à toutes les modes éphémères.",
      pose: "thinking",
      choices: [
        {
          text: "Un Web de partage, d'inclusion et de lumière pour les générations futures.",
          karma: "phare",
          next: {
            text: "C'est pour ce futur-là qu'on code aujourd'hui, toi et moi. Merci de bâtir ce sanctuaire.",
            pose: "smile"
          }
        },
        {
          text: "Des protocoles normalisés, décentralisés et protégés contre l'obsolescence programmée.",
          karma: "gardien",
          next: {
            text: "L'éternité appartient aux architectures simples et résilientes.",
            pose: "serious"
          }
        },
        {
          text: "Un réseau sans maîtres, sans verrous et sans gardiens de prison numériques !",
          karma: "rebelle",
          next: {
            text: "Toujours debout, toujours indomptable ! Vive le code libre !",
            pose: "smile"
          }
        }
      ]
    }
  },

  // --- NOUVELLES QUESTIONS DE MAÎTRE BODHI ---
  {
    id: "bodhi-tea-ritual",
    unlockStep: 12,
    character: "bodhi",
    category: "Sagesse de Bodhi",
    question: "Maître Bodhi, quel est ton rituel matinal préféré pour éveiller ton esprit ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Bodhi verse délicatement une eau fumante dans une petite coupelle de céramique brute)... Avant d'ouvrir le moindre fichier, je m'assieds dans le silence de l'aube. Je prépare un thé oolong des montagnes dans une eau à 85 degrés. Je respire la vapeur montante pendant trois cycles de souffle complets. Ce n'est qu'une fois l'esprit limpide et débarrassé de toute hâte que je pose mes doigts sur les touches. Un code écrit dans la précipitation engendre dix jours de débogage.",
      pose: "zen",
      choices: [
        {
          text: "La paix de l'esprit produit toujours la clarté du code.",
          karma: "phare",
          next: {
            text: "Tu as compris, voyageur. La tasse de thé et l'éditeur de texte ne font qu'un dans la présence.",
            pose: "smile"
          }
        },
        {
          text: "La rigueur thermique de l'eau conditionne l'extraction des arômes, tout comme les règles strictes garantissent la validité du HTML.",
          karma: "gardien",
          next: {
            text: "Exactement. 85 degrés pour les feuilles, UTF-8 pour les caractères. La précision dans la bienveillance.",
            pose: "thinking"
          }
        },
        {
          text: "Moi le matin, c'est un café brûlant avalé cul sec en râlant sur un bug de la veille !",
          karma: "rebelle",
          next: {
            text: "(Bodhi sourit avec malice)... Tu ressembles beaucoup à Ada, mon cher apprenti ! Mais un jour, le thé t'apaisera aussi.",
            pose: "laughing"
          }
        }
      ]
    }
  },
  {
    id: "bodhi-cern-memories",
    unlockStep: 15,
    character: "bodhi",
    category: "Sagesse de Bodhi",
    question: "Quel souvenir gardes-tu de l'époque du CERN et des toutes premières pages de 1991 ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Le regard de Bodhi s'illumine d'une nostalgie douce et bienveillante)... Je me souviens du vrombissement sourd des climatiseurs dans les sous-sols de Genève. Sur l'écran noir et blanc de la station NeXT de Tim Berners-Lee, un mot souligné en bleu menait vers un autre document situé à des centaines de mètres de là. Aucun graphisme, aucune fioriture : juste la pureté de la pensée humaine interconnectée sans intermédiaire. C'était le premier souffle d'un nouveau monde.",
      pose: "emotional",
      choices: [
        {
          text: "Un idéal de fraternité universelle qui dépasse les frontières.",
          karma: "phare",
          next: {
            text: "C'était l'espoir originel du Web : relier les chercheurs et les esprits libres sans barrière commerciale.",
            pose: "smile"
          }
        },
        {
          text: "Le triomphe de la spécification RFC et du protocole HTTP sur les réseaux propriétaires fermés.",
          karma: "gardien",
          next: {
            text: "Des standards ouverts, documentés et librement implémentables par quiconque. C'est cela qui a sauvé la Toile.",
            pose: "thinking"
          }
        },
        {
          text: "C'était le Far West du réseau ! Pas d'algorithmes de recommandation, juste des passionnés !",
          karma: "rebelle",
          next: {
            text: "(Bodhi hoche la tête)... Une liberté absolue, sauvage et pure. Nous essayons d'en préserver la flamme ici même.",
            pose: "smile"
          }
        }
      ]
    }
  },
  {
    id: "bodhi-ancient-tags",
    unlockStep: 24,
    character: "bodhi",
    category: "Sagesse de Bodhi",
    question: "Y a-t-il une vieille balise HTML disparue pour laquelle tu as une secrète nostalgie ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Bodhi réprime un rire étouffé en cachant sa bouche de sa manche)... Ah, la balise <marquee> et la balise <blink> ! Les textes qui défilaient de droite à gauche comme des banderoles de foire, et les mots qui clignotaient sans relâche ! C'était chaotique, visuellement agressif, et cela violait toutes les règles d'accessibilité que nous chérissons aujourd'hui. Mais cela traduisait une joie d'enfant émerveillé qui découvrait que les lettres pouvaient bouger sur l'écran.",
      pose: "laughing",
      choices: [
        {
          text: "Il est beau de pardonner les maladresses de la jeunesse du Web tout en progressant vers l'harmonie.",
          karma: "phare",
          next: {
            text: "Chaque époque a ses balbutiements. Mais aujourd'hui, nos animations CSS sont douces et respectueuses.",
            pose: "zen"
          }
        },
        {
          text: "Le W3C a eu mille fois raison de déprécier ces balises propriétaires hors standard.",
          karma: "gardien",
          next: {
            text: "Un code propre ne doit jamais mélanger la structure sémantique et les caprices d'animation.",
            pose: "thinking"
          }
        },
        {
          text: "J'avoue que j'aurais adoré coder un site tout clignotant des années 90 avec des gifs animés partout !",
          karma: "rebelle",
          next: {
            text: "(Bodhi sourit largement)... Haha ! Rien ne t'empêche de créer un musée du bazar pour amuser tes amis !",
            pose: "thumbs_up"
          }
        }
      ]
    }
  },
  {
    id: "bodhi-view-on-ada",
    unlockStep: 45,
    character: "bodhi",
    category: "Sagesse de Bodhi",
    question: "Maître Bodhi, que t'inspire l'arrivée tourbillonnante d'Ada dans ton sanctuaire ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Bodhi sourit en regardant au loin dans la direction de l'atelier d'Ada)... Au début, le vacarme de ses clés à molette et ses musiques synthétiques ont fait sursauter les vieux parchemins du temple ! Mais j'ai vite compris : Ada possède l'intelligence de l'instant présent. Là où je veille sur la mémoire et la racine, elle veille sur la sève qui monte dans l'arbre. Sans elle, ce vieux serveur et moi-même serions déjà tombés sous la faucille de NULL.",
      pose: "smile",
      choices: [
        {
          text: "C'est la rencontre entre la racine solide et la fleur qui éclot au soleil.",
          karma: "phare",
          next: {
            text: "Une union féconde et nécessaire. L'ancien et le nouveau se tendent la main dans la paix.",
            pose: "zen"
          }
        },
        {
          text: "Une complémentarité technique indispensable entre le Document Object Model et le moteur V8.",
          karma: "gardien",
          next: {
            text: "Les deux faces indispensables d'un navigateur moderne conforme aux recommandations internationales.",
            pose: "thinking"
          }
        },
        {
          text: "Avoue que son style à rollers et son pansement sur la joue mettent une sacrée ambiance ici !",
          karma: "rebelle",
          next: {
            text: "(Bodhi rit de bon cœur)... Elle a même proposé de repeindre mes sandales avec des néons dorés ! Quel esprit vif !",
            pose: "laughing"
          }
        }
      ]
    }
  },
  {
    id: "bodhi-favorite-css-color",
    unlockStep: 26,
    character: "bodhi",
    category: "Sagesse de Bodhi",
    question: "Si tu devais peindre l'univers avec une seule nuance CSS, laquelle choisirais-tu ?",
    lockedTitle: "???",
    dialogueTree: {
      text: "(Bodhi trace un cercle imaginaire dans l'air de son index)... Ce serait sans hésiter le #f59e0b, notre ambre doré sacré. Ce n'est pas le jaune criard du soleil zénithal, ni le brun de la terre lourde : c'est la couleur de la résine ancienne qui a capturé la lumière il y a des millénaires. Sur un fond d'ardoise nocturne #0f172a, cette touche dorée apporte l'espérance sans éblouir l'âme.",
      pose: "zen",
      choices: [
        {
          text: "Une couleur chaleureuse qui accueille le voyageur comme le foyer d'une lanterne dans la nuit.",
          karma: "phare",
          next: {
            text: "C'est l'essence même de notre Sanctuaire : un phare bienveillant pour qui cherche sa route.",
            pose: "smile"
          }
        },
        {
          text: "Son ratio de contraste avec le fond sombre dépasse 7:1, assurant la conformité WCAG AAA.",
          karma: "gardien",
          next: {
            text: "La beauté spirituelle qui satisfait aussi les critères les plus stricts d'accessibilité. La perfection.",
            pose: "thinking"
          }
        },
        {
          text: "C'est surtout la couleur de la bière bien fraîche après une grosse session de code !",
          karma: "rebelle",
          next: {
            text: "(Bodhi éclate de rire)... Haha ! Tu ne perds jamais le sens pratique, jeune disciple ! À la tienne !",
            pose: "laughing"
          }
        }
      ]
    }
  }
];

// 3. Insertion avant la fermeture de BODHI_QUESTIONS
const closingBracketIndex = content.lastIndexOf('];');
if (closingBracketIndex === -1) {
  throw new Error("Impossible de trouver la balise de clôture '];' dans bodhi-lore.js");
}

const serializedNewQuestions = newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n\n');
const updatedContent = content.slice(0, closingBracketIndex).trimEnd() + ',\n\n' + serializedNewQuestions + '\n];\n';

fs.writeFileSync(loreFile, updatedContent, 'utf8');
console.log(`bodhi-lore.js enrichi avec succès ! ${newQuestions.length} nouvelles questions injectées.`);
