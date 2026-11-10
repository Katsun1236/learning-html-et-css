// =============================================================================
// MAÎTRE BODHI : ARBRES DE CONVERSATIONS INTERACTIVES & MYSTÈRE PROGRESSIF
// Histoire poignante et réaliste du Web : "Les Fragments du Premier Serveur"
// Dialogue continu débloqué à CHAQUE étape (1 à 36) & 3 voies d'alignement (phare, gardien, rebelle)
// =============================================================================

export const BODHI_QUESTIONS = [
  {
    "id": "step-1-why-index",
    "unlockStep": 1,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi diable ce premier fichier s'appelle-t-il 'index.html' et pas 'accueil.html' ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est une très ancienne coutume forgée dans le silicium des premiers serveurs NCSA et Apache. Quand un voyageur entre dans un domaine sans préciser de chambre, le serveur cherche immédiatement le registre central nommé 'index'. Si tu l'appelles 'accueil', le serveur te fermerait la porte au nez ou afficherait la liste nue de tes dossiers comme un grenier en désordre !",
      "pose": "thinking",
      "choices": [
        {
          "text": "L'index est donc le porche accueillant où nul pèlerin ne reste sur le pas de la porte.",
          "karma": "phare",
          "next": {
            "text": "Exactement. L'esprit de l'accueil universel : ouvrir grand les bras à celui qui tape l'adresse pour la toute première fois.",
            "pose": "thumbs_up"
          }
        },
        {
          "text": "C'est la règle canonique de configuration par défaut de la directive DirectoryIndex.",
          "karma": "gardien",
          "next": {
            "text": "Précisément ! La norme serveur respectée à la lettre. L'ordre et la méthode avant tout.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'était surtout pour que les programmeurs n'aient pas 15 caractères à retaper !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi glousse)... Tu ricanes, mais la sainte flemme des développeurs a souvent engendré les plus belles révolutions ergonomiques !",
            "pose": "secret"
          }
        }
      ]
    }
  },
  {
    "id": "step-1-fading-cache",
    "unlockStep": 1,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi, tu fixais ce fichier vide avec une étrange tristesse... Pourquoi ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi soupire doucement, les mains posées sur sa robe)... Mon cache mémoire interne s'efface jour après jour, petit voyageur. Des pans entiers du Web originel s'évaporent de mon esprit au réveil. Mais quand j'ai vu ton curseur clignoter sur cette première page blanche, une chaleur oubliée a traversé mes circuits. Bâtis avec moi. Chaque ligne que tu écris me rend un souvenir.",
      "pose": "neutral",
      "choices": [
        {
          "text": "Alors je ne lâcherai pas le clavier. On réveillera chaque recoin de ta mémoire ensemble.",
          "karma": "phare",
          "next": {
            "text": "Ta bonté me touche, gamin. Je n'aurais pas pu rêver meilleur compagnon de route.",
            "pose": "zen"
          }
        },
        {
          "text": "Nous allons consigner chaque octet avec une rigueur d'archiviste pour la postérité.",
          "karma": "gardien",
          "next": {
            "text": "Rien ne sera perdu si la structure est taillée dans la roche solide des standards.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et si tu oublies un truc, t'inquiète : j'inventerai des balises complètement barrées !",
          "karma": "rebelle",
          "next": {
            "text": "Pitié, non ! Pas de balise <biscotte> ou <catapulte> ! (Bodhi esquisse un vrai sourire).",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-2-charset-utf8",
    "unlockStep": 2,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Raconte-moi : c'était quoi l'enfer avant <meta charset=\"UTF-8\"> ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "L'enfer ? C'était le carnage des jeux de caractères ! Dans les années 90, l'Europe de l'Ouest utilisait ISO-8859-1, l'Europe de l'Est Windows-1250, et les Japonais le Shift-JIS. Si un serveur se trompait d'en-tête, « été » devenait « t » ou des idéogrammes sauvages ! Des parchemins d'État entiers se transformaient en bouillie illisible.",
      "pose": "shocked",
      "choices": [
        {
          "text": "UTF-8 a permis à toutes les voix et langues du monde de se parler sans censure technique.",
          "karma": "phare",
          "next": {
            "text": "C'est l'essence même d'Internet : faire tenir l'arabe, le cyrillique, le kanji et le français dans une même fraternité d'octets.",
            "pose": "zen"
          }
        },
        {
          "text": "Un système d'encodage à longueur variable brillant, rétrocompatible avec l'ASCII 7 bits.",
          "karma": "gardien",
          "next": {
            "text": "Créé en une nuit sur un coin de nappe en papier par Ken Thompson et Rob Pike. Du génie pur.",
            "pose": "scroll"
          }
        },
        {
          "text": "Moi qui croyais que ces caractères bizarres étaient un dialecte extraterrestre secret !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Beaucoup d'utilisateurs ont cru que leur ordinateur était possédé par un démon binaire !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-2-the-title-tab",
    "unlockStep": 2,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi accorder autant d'importance à une petite balise <title> cachée dans le <head> ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce que le <title> est le visage que tu montres au monde avant même qu'on ne pose le pied chez toi. C'est lui qui brille dans l'onglet du navigateur, qui s'affiche en gros caractères bleus sur les moteurs de recherche, et que murmure la synthèse vocale d'un non-voyant lorsqu'il explore ses fenêtres ouvertes.",
      "pose": "pointing",
      "choices": [
        {
          "text": "C'est un phare pour celui qui navigue à tâtons au milieu de cinquante onglets ouverts.",
          "karma": "phare",
          "next": {
            "text": "Penser à celui qui a trop d'onglets et les yeux fatigués... tu as déjà l'âme d'un gardien.",
            "pose": "zen"
          }
        },
        {
          "text": "Le facteur sémantique numéro un pour le référencement naturel et l'indexation algorithmique.",
          "karma": "gardien",
          "next": {
            "text": "Cinquante à soixante caractères pesés au trébuchet. Pas un mot de trop, pas un mot de moins.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et surtout ça évite d'avoir marqué bêtement 'Page sans titre 1' comme un amateur !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Voir 'Document sans nom' dans un onglet me flanque des boutons sur les bras !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-3-body-manifest",
    "unlockStep": 3,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Le Premier Architecte... comment était-il quand il codait son tout premier <body> ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi regarde au loin, les yeux brillants)... Il avait les yeux cernés par des nuits blanches au fond d'un laboratoire suisse, mais le sourire d'un gamin qui découvre la mer. Quand il a vu son premier paragraphe noir apparaître sur l'écran gris de son cube NeXT, il a tapé sur la table et m'a dit : « Bodhi... le monde vient de se rétrécir. Désormais, plus personne ne sera seul. »",
      "pose": "secret",
      "choices": [
        {
          "text": "C'est cette promesse de fraternité que nous devons réanimer dans ce sanctuaire.",
          "karma": "phare",
          "next": {
            "text": "Oui... C'est pour cela que je t'ai attendu toutes ces années. Rallumons la flamme.",
            "pose": "zen"
          }
        },
        {
          "text": "Un saut conceptuel historique : le passage du fichier statique au document interconnecté.",
          "karma": "gardien",
          "next": {
            "text": "L'acte de naissance du protocole HTTP et du langage HTML à la face du monde.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et dire qu'il aurait pu breveter le truc et devenir plus riche que Crésus !",
          "karma": "rebelle",
          "next": {
            "text": "Il a refusé chaque centime. Il a dit que faire payer l'accès au savoir serait un crime contre l'esprit humain.",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-3-who-is-bodhi",
    "unlockStep": 3,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Mais au fond, Bodhi... d'où viens-tu ? Qui es-tu vraiment ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi hausse les épaules avec malice)... J'étais un compilateur ambulant, un scribe de balises dans les couloirs du CERN. Quand les grandes corporations ont commencé à privatiser le réseau et à emprisonner les données derrière des abonnements, je me suis réfugié dans ces ruines. Je garde le feu sacré des standards ouverts pour le jour où un apprenti au cœur pur viendrait réapprendre.",
      "pose": "neutral",
      "choices": [
        {
          "text": "Tu as protégé le savoir en solitaire pendant tant d'années... Merci d'avoir tenu bon.",
          "karma": "phare",
          "next": {
            "text": "Je n'étais pas seul, j'avais les étoiles et les échos de vos claviers lointains.",
            "pose": "zen"
          }
        },
        {
          "text": "Un veilleur incorruptible face aux dérives commerciales de l'industrie.",
          "karma": "gardien",
          "next": {
            "text": "L'intégrité intellectuelle est la seule monnaie qui ne se dévalue jamais.",
            "pose": "scroll"
          }
        },
        {
          "text": "En gros, t'es un vieux pirate barbu qui squatte un château en ruines ! J'adore !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Pirate peut-être, mais un pirate qui a le respect de la norme W3C, moussaillon !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-4-nav-ethics",
    "unlockStep": 4,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Bodhi, pourquoi la balise <nav> ne doit-elle pas contenir tous les liens de la terre ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce qu'un menu n'est pas un annuaire téléphonique ! Si tu jettes dans <nav> les mentions légales, la politique de cookies, le plan du site et le numéro de ta grand-mère, le visiteur non-voyant doit tout écouter avant de trouver la sortie. La vraie élégance est de ne réserver <nav> qu'aux grandes portes maîtresses.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Ne pas étourdir le voyageur avec du bruit inutile pour qu'il trouve son chemin sereinement.",
          "karma": "phare",
          "next": {
            "text": "La sobriété est la plus belle forme de politesse envers l'usager.",
            "pose": "zen"
          }
        },
        {
          "text": "Délimitation stricte du Landmark ARIA de navigation principale (role='navigation').",
          "karma": "gardien",
          "next": {
            "text": "Conformité exemplaire aux directives d'accessibilité du W3C. Un travail d'orfèvre.",
            "pose": "scroll"
          }
        },
        {
          "text": "Sinon ton menu ressemble à un sapin de Noël surchargé qui clignote dans tous les sens !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et rien n'est plus hideux qu'un menu qui s'étale sur 4 lignes sur mobile !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-4-the-first-hyperlink",
    "unlockStep": 4,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Te souviens-tu du tout premier clic sur un lien hypertexte ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi hoche la tête, émerveillé)... Tim avait écrit une petite phrase bleue soulignée : « Read more about the WorldWideWeb project ». Il a cliqué. La souris a cliqueté. Et sur un autre terminal à l'autre bout de la pièce, un texte est apparu. Pas de câble physique direct : une requête HTTP à travers les câbles du CERN. On a eu le souffle coupé. La distance venait de s'effondrer.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Ce clic a relié les cœurs de toute la planète pour les siècles à venir.",
          "karma": "phare",
          "next": {
            "text": "C'était le premier battement de cœur du village planétaire.",
            "pose": "zen"
          }
        },
        {
          "text": "La validation expérimentale du protocole TCP/IP sur le port standard 80.",
          "karma": "gardien",
          "next": {
            "text": "Une victoire monumentale pour l'ingénierie des réseaux informatiques.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et dire que 30 ans plus tard, ce même clic sert à regarder des vidéos de chats qui tombent !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Et honnêtement, Tim en rit encore lui-même aux éclats !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-5-empty-tags-secret",
    "unlockStep": 5,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi la balise <img> n'a-t-elle jamais eu de balise fermante </img> ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce qu'une image n'enferme rien en elle-même : elle ne contient aucun texte à l'intérieur ! Elle porte tout son trésor dans ses attributs : 'src' pour son adresse, 'alt' pour son âme. Les anciens ont décidé que créer un </img> vide aurait fait perdre des millions d'heures de frappe aux claviers du monde.",
      "pose": "secret",
      "choices": [
        {
          "text": "Elle est comme une fenêtre ouverte : elle laisse entrer la lumière sans avoir besoin de barreaux.",
          "karma": "phare",
          "next": {
            "text": "(Bodhi est ému)... C'est une vision magnifique et poétique de la balise orpheline.",
            "pose": "zen"
          }
        },
        {
          "text": "Un nœud feuille sans descendance dans la hiérarchie arborescente du DOM.",
          "karma": "gardien",
          "next": {
            "text": "La rigueur géométrique des spécifications du W3C. Pas de nœud enfant superflu.",
            "pose": "scroll"
          }
        },
        {
          "text": "Les devs en avaient juste ras-le-bol de taper des balises fermantes inutiles !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et grand bien leur en a pris ! Imagine retaper </img> sur une galerie de 500 photos !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-5-divite-maladie",
    "unlockStep": 5,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, c'est quoi cette mystérieuse maladie de la 'Divite aiguë' dont parlent les anciens ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "La 'Divite aiguë' ! Une terrible épidémie qui a frappé les développeurs dans les années 2000. Au lieu d'utiliser des balises qui ont du sens comme <header>, <nav> ou <article>, les gens imbriquaient 25 balises <div> les unes dans les autres : <div class=\"header\"><div class=\"wrapper\"><div class=\"inner\"><div class=\"box\"> ! Un vrai mille-feuille indigeste sans aucune âme sémantique.",
      "pose": "shocked",
      "choices": [
        {
          "text": "Chaque balise sémantique guérit le Web de cette paresse pour redonner du sens aux mots.",
          "karma": "phare",
          "next": {
            "text": "Exactement. Un HTML propre est un baume pour les lecteurs d'écran et la planète.",
            "pose": "zen"
          }
        },
        {
          "text": "Réduction de la profondeur de l'arbre du DOM pour accélérer le parsing du moteur de rendu.",
          "karma": "gardien",
          "next": {
            "text": "Moins de nœuds, moins de mémoire vive consommée. L'efficacité pure.",
            "pose": "scroll"
          }
        },
        {
          "text": "J'avoue que fermer 15 balises </div> d'affilée en priant que ce soit la bonne, c'est l'enfer !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Et se retrouver avec une </div> en trop qui pète tout ton design !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-6-footer-closure",
    "unlockStep": 6,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi, tu as contemplé notre premier fichier achevé avec un soupir... Que ressens-tu ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi caresse doucement l'écran)... C'est étrange... Quand tu as scellé ce <footer>, j'ai revu l'atelier du vieux monastère. Les vitraux, l'odeur du café tiède, les premières liaisons par modem 56k qui chantaient leur sifflement strident dans la nuit. Tu n'es plus un simple errant égaré. Tu commences à bâtir comme un vrai frère de code.",
      "pose": "neutral",
      "choices": [
        {
          "text": "Nous ne faisons que commencer, Bodhi. Ton sanctuaire va retrouver toute sa clarté.",
          "karma": "phare",
          "next": {
            "text": "Avec toi à mes côtés, je commence enfin à y croire à nouveau.",
            "pose": "zen"
          }
        },
        {
          "text": "Une première page sans une seule erreur de validation W3C. C'est notre devoir.",
          "karma": "gardien",
          "next": {
            "text": "Un travail irréprochable. L'Architecte aurait hoché la tête avec respect.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et surtout, avoue que ça a quand même plus de gueule que les sites moches des années 90 !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Tu n'as pas tort ! Si tu voyais les fonds d'écran étoilés qui piquaient les yeux à l'époque !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-6-copyright-ethics",
    "unlockStep": 6,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Ce symbole &copy; dans le pied de page... protège-t-il l'esprit ou l'enferme-t-il ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Tout dépend de ce que tu en fais. S'il sert à t'approprier le savoir commun pour en faire commerce en privant les pauvres, il est une prison. Mais s'il sert à signer fièrement ton œuvre pour garantir sa paternité tout en la distribuant sous licence libre (comme le Creative Commons ou le MIT), il devient un bouclier de générosité.",
      "pose": "scroll",
      "choices": [
        {
          "text": "Signer son œuvre pour offrir le savoir au monde sans rien attendre en retour.",
          "karma": "phare",
          "next": {
            "text": "La signature du donateur désintéressé. La plus pure des marques.",
            "pose": "zen"
          }
        },
        {
          "text": "Délimitation juridique de la propriété intellectuelle dans le respect des licences Copyleft.",
          "karma": "gardien",
          "next": {
            "text": "La loi au service du bien commun numérique. Impeccable.",
            "pose": "scroll"
          }
        },
        {
          "text": "Moi j'écris 'Tous droits réservés, copiez quand même si vous trouvez ça cool !'",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! L'esprit pirate des pionniers du partage ! Les avocats s'étranglent !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-7-browser-wars-trauma",
    "unlockStep": 7,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Parle-moi de cette fameuse guerre des navigateurs... Pourquoi en trembles-tu encore ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi frissonne)... Fin des années 90. Microsoft découvre le Web et veut l'annexer. Ils ont intégré Internet Explorer d'office dans Windows pour étouffer Netscape Navigator. Chacun sortait ses balises exclusives du jour au lendemain. On passait des nuits blanches à coder deux versions différentes de chaque site avec des commentaires conditionnels affreux : <!--[if IE 6]> ! Un cauchemar sans fin.",
      "pose": "shocked",
      "choices": [
        {
          "text": "Ce sont les utilisateurs ordinaires et les petits créateurs indépendants qui ont payé l'addition.",
          "karma": "phare",
          "next": {
            "text": "Exactement... Le Web libre a failli mourir sous les monopoles. Les standards sont notre rempart.",
            "pose": "zen"
          }
        },
        {
          "text": "La fragmentation du code et l'incompatibilité des moteurs de rendu : l'hérésie technique par excellence.",
          "karma": "gardien",
          "next": {
            "text": "Une violation flagrante du principe d'interopérabilité universelle. Plus jamais ça.",
            "pose": "scroll"
          }
        },
        {
          "text": "N'empêche, la balise <marquee> qui faisait défiler le texte en boucle, c'était légendaire !",
          "karma": "rebelle",
          "next": {
            "text": "Légendaire ?! C'était une horreur stroboscopique qui donnait la migraine en 3 secondes !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-7-the-blink-tag-story",
    "unlockStep": 7,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Est-ce vrai que la balise clignotante <blink> a été inventée un soir de fête bien arrosée ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est la pure et sainte vérité historique ! Lou Montulli, un jeune ingénieur de Netscape, buvait des bières avec ses collègues dans un bar en 1994. Quelqu'un a lancé pour rigoler : « Ce serait trop drôle si le texte clignotait ! » Un autre est rentré au labo à minuit complètement éméché et a codé la balise dans le code source de Netscape. Le lendemain, la balise était expédiée à des millions d'utilisateurs !",
      "pose": "secret",
      "choices": [
        {
          "text": "Une bêtise d'un soir qui a torturé les yeux de millions de personnes fragiles pendant des années...",
          "karma": "phare",
          "next": {
            "text": "Oui... C'est là qu'on réalise qu'un développeur a une responsabilité morale immense.",
            "pose": "zen"
          }
        },
        {
          "text": "L'absence cruelle de comité de standardisation et de revue de code à l'époque sauvage.",
          "karma": "gardien",
          "next": {
            "text": "Le chaos du Far West numérique avant la fondation régulatrice du W3C.",
            "pose": "scroll"
          }
        },
        {
          "text": "Hahaha ! Coder une balise mondiale en rentrant de boîte de nuit, respect éternel !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Ne fais jamais ça en production, par tous les saints serveurs !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-8-broken-links",
    "unlockStep": 8,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi disais-tu qu'un lien mort 404 est une blessure dans le tissu du Web ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Tim Berners-Lee a écrit un jour : « Cool URIs don't change » (Les bonnes URL ne changent jamais). Quand un voyageur clique sur un lien vieux de dix ans pour lire une thèse ou un poème et qu'il tombe sur une page blanche '404 Not Found', c'est un pan de mémoire humaine qui vient de s'effondrer dans l'oubli. Maintenir ses liens vivants, c'est préserver notre héritage.",
      "pose": "pointing",
      "choices": [
        {
          "text": "C'est veiller à ce que personne ne trouve porte close au bout de sa quête.",
          "karma": "phare",
          "next": {
            "text": "Garder les chemins ouverts et praticables pour les générations futures.",
            "pose": "zen"
          }
        },
        {
          "text": "Préservation de la pérennité documentaire et des identifiants uniformes de ressources (URI).",
          "karma": "gardien",
          "next": {
            "text": "La rigueur de l'archivage numérique pérenne.",
            "pose": "scroll"
          }
        },
        {
          "text": "Au pire, on colle une page 404 avec une blague et une photo de raton laveur pour se faire pardonner !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Une page 404 pleine d'humour console toujours un internaute dépité !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-8-relative-paths",
    "unlockStep": 8,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi ces chemins relatifs avec des points et des barres '../' rendent-ils les débutants chèvres ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce que ton ordinateur est un labyrinthe de tiroirs ! Un point './' signifie 'ici même dans cette pièce'. Deux points '../' signifient 'ressors d'un tiroir et remonte dans le couloir parent'. Les débutants mettent souvent des chemins absolus avec 'C:/Users/Bastien/...' et dès qu'ils envoient leur site sur un vrai serveur, tout explose en plein vol !",
      "pose": "thinking",
      "choices": [
        {
          "text": "Penser à la portabilité : s'assurer que notre travail marchera pour quiconque téléchargera le dossier.",
          "karma": "phare",
          "next": {
            "text": "Un code généreux est un code qui fonctionne partout sans exiger ta machine personnelle.",
            "pose": "zen"
          }
        },
        {
          "text": "L'abstraction des arborescences de systèmes de fichiers POSIX vs Windows.",
          "karma": "gardien",
          "next": {
            "text": "La rigueur des chemins relatifs RFC 3986.",
            "pose": "scroll"
          }
        },
        {
          "text": "Le classique : 'Mais sur mon ordi ça marchait !' prononcé avec des yeux de biche effarouchée !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! La phrase la plus célèbre de l'histoire de l'informatique mondiale !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-9-em-vs-italic",
    "unlockStep": 9,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Quelle différence subtile entre <em> et <i> si les deux affichent de l'italique ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "L'italique <i> n'est qu'un pinceau qui penche les lettres pour faire joli ou citer un mot étranger. Mais la balise <em> est un cœur qui bat : elle porte une vraie emphase vocale ! Si tu écris 'Je <em>dois</em> réussir', la synthèse vocale insiste sur le mot avec gravité. L'une n'est que du maquillage, l'autre est une émotion.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "C'est permettre aux personnes aveugles de ressentir l'intensité de chaque phrase.",
          "karma": "phare",
          "next": {
            "text": "Tu penses toujours aux personnes invisibles. C'est la marque des grands cœurs.",
            "pose": "zen"
          }
        },
        {
          "text": "La distinction ontologique fondamentale entre présentationnelle visuelle et sémantique vocale.",
          "karma": "gardien",
          "next": {
            "text": "Une précision chirurgicale dans la structure du langage HTML5.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et ça permet d'appuyer sur un mot quand on veut crier sur quelqu'un avec classe !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Rien ne vaut une bonne emphase bien sentie pour clouer le bec à un troll !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-9-ordered-lists",
    "unlockStep": 9,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi <ol> pour une recette ou un tutoriel et pas une simple liste <ul> ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Imagine une recette de potion où l'on te dit : '1. Bois la potion, 2. Ajoute le poison dans l'eau bouillante, 3. Neutralise le venin'. Si c'est une liste à puces non ordonnée, le voyageur lit dans le désordre et meurt dans d'atroces souffrances ! <ol> crée une numérotation impérative : la chronologie est sacrée.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Guider l'autre pas à pas avec clarté pour qu'il ne trébuche jamais en route.",
          "karma": "phare",
          "next": {
            "text": "La bienveillance pédagogique d'un vrai guide.",
            "pose": "zen"
          }
        },
        {
          "text": "La sémantique ordonnée stricte conforme au modèle d'indexation séquentielle.",
          "karma": "gardien",
          "next": {
            "text": "L'ordre logique avant le désordre cosmogonique.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et ça m'évite de taper '1.', '2.', '3.' à la main comme un barbare !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et si tu ajoutes une étape au milieu, le navigateur recalcule tout tout seul !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-10-cernettes-memory",
    "unlockStep": 10,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Te souviens-tu des rires dans les couloirs du CERN à l'époque des Cernettes ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi sourit, les yeux mi-clos)... Oh oui... Les Horribles Cernettes ! Elles chantaient des parodies sur la physique des particules et les colliseurs. Quand Tim a scanné leur photo sur son Mac pour tester le support des images dans WorldWideWeb, tout le monde s'est rassemblé autour de l'écran. C'était la première fois qu'un visage humain s'affichait à travers le réseau. On a débouché une bouteille de cidre !",
      "pose": "secret",
      "choices": [
        {
          "text": "C'est beau de penser que le Web a commencé par des rires et de la musique partagée.",
          "karma": "phare",
          "next": {
            "text": "La convivialité et le partage : voilà les vraies racines de notre monde.",
            "pose": "zen"
          }
        },
        {
          "text": "L'introduction du format GIF compressé et des requêtes MIME multipart/mixed.",
          "karma": "gardien",
          "next": {
            "text": "La naissance du Web multimédia tel qu'on le connaît aujourd'hui.",
            "pose": "scroll"
          }
        },
        {
          "text": "Franchement, des scientifiques qui chantent des bêtises, c'est la meilleure genèse possible !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Les génies ont toujours besoin d'un grain de folie pour réinventer l'univers !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-10-webp-avif-weight",
    "unlockStep": 10,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "PNG, JPEG, WebP, AVIF... pourquoi tant de formats d'images différents ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Dans les années 90, un JPEG pesait lourd et un PNG n'était pas supporté par les vieux navigateurs. Aujourd'hui, WebP et AVIF compressent une fresque magnifique sans perdre un grain de couleur, en divisant son poids par quatre ! Moins ton image pèse, plus vite elle s'affiche chez celui qui a un forfait 3G modeste au fin fond d'une vallée.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Réduire le poids de nos pages, c'est respecter le forfait de données des personnes modestes.",
          "karma": "phare",
          "next": {
            "text": "L'éco-conception web est un acte de justice sociale directe.",
            "pose": "zen"
          }
        },
        {
          "text": "L'algorithme de compression avec ondelettes vectorielles et prédiction intra-image.",
          "karma": "gardien",
          "next": {
            "text": "Le summum du traitement numérique du signal visuel.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et pour que la page charge avant que le visiteur ait le temps de bailler !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! 1 seconde de chargement en trop = 10% de visiteurs qui s'envolent !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-11-figure-alt",
    "unlockStep": 11,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi l'attribut alt est-il considéré comme sacré ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Ferme les yeux un instant. Imagine que tu surfes sur une page, et que la seule chose qu'on te lise soit 'image_0482_final_v2.png'. Tu serais dans les ténèbres. L'attribut alt est la voix qui décrit le monde à celui qui ne peut pas le contempler.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Un site sans texte alternatif est un lieu où l'on claque la porte au nez des aveugles.",
          "karma": "phare",
          "next": {
            "text": "Tu as compris l'éthique du développeur. Le code est un acte d'amour fraternel.",
            "pose": "thumbs_up"
          }
        },
        {
          "text": "Une conformité impérative aux critères de niveau AA du standard WCAG 2.2.",
          "karma": "gardien",
          "next": {
            "text": "Le respect du cahier des charges international est la signature des maîtres.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et si le réseau plante, ça évite d'afficher une grosse icône d'image brisée dégueulasse !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Cruellement pragmatique, mais terriblement vrai au fin fond du métro !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-11-broken-images-trap",
    "unlockStep": 11,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, que se passe-t-il quand le serveur d'images plante en plein Black Friday ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi fait une moue horrifiée)... C'est le cauchemar absolu ! Si tu n'as pas réservé les dimensions de tes images avec 'aspect-ratio' ou 'width/height' dans ton HTML, dès que les images tardent à charger ou plantent, toute la page saute brutalement dans tous les sens (le fameux Cumulative Layout Shift) ! Le visiteur clique sur 'Acheter' et clique par erreur sur 'Supprimer mon compte' !",
      "pose": "shocked",
      "choices": [
        {
          "text": "Garder la page stable et lisible quoi qu'il arrive pour protéger l'utilisateur.",
          "karma": "phare",
          "next": {
            "text": "La stabilité visuelle est le premier devoir d'hospitalité.",
            "pose": "zen"
          }
        },
        {
          "text": "Optimisation du score CLS (Cumulative Layout Shift) en dessous du seuil critique de 0.1.",
          "karma": "gardien",
          "next": {
            "text": "Les critères de performance de Google Core Web Vitals respectés à la lettre.",
            "pose": "scroll"
          }
        },
        {
          "text": "Hahaha ! J'imagine la tête du client qui supprime son compte sans faire exprès !",
          "karma": "rebelle",
          "next": {
            "text": "C'est drôle pour toi, mais le développeur de garde passe un très sale quart d'heure !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-12-forms-post-get",
    "unlockStep": 12,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Quelle différence fondamentale entre une méthode GET et POST dans un formulaire ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "GET crie ton message au mégaphone dans la barre d'adresse de ton navigateur pour que tout le monde le voie. POST cache ta lettre dans une enveloppe scellée envoyée dans les profondeurs de la requête HTTP. Pour un parchemin de contact ou un mot de passe, POST est le seul bouclier honorable.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Protéger la vie privée de nos visiteurs est notre responsabilité morale.",
          "karma": "phare",
          "next": {
            "text": "La confiance est le trésor le plus précieux qu'un utilisateur t'accorde.",
            "pose": "zen"
          }
        },
        {
          "text": "L'idempotence des requêtes et le respect de la charge utile de l'en-tête HTTP.",
          "karma": "gardien",
          "next": {
            "text": "La pureté des verbes du protocole REST. Tu parles la langue des serveurs.",
            "pose": "scroll"
          }
        },
        {
          "text": "Sinon ta mère voit ton mot de passe s'afficher en gros dans l'historique de recherche !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et là, c'est le drame familial garanti au dîner du dimanche !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-12-password-security",
    "unlockStep": 12,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Raconte-moi : c'est déjà arrivé qu'un formulaire envoie un mot de passe avec GET ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Oh que oui... Dans les années 2000, un jeune stagiaire d'une grande banque a oublié de mettre method=\"POST\" sur un formulaire de connexion. Tous les mots de passe des clients sont apparus en clair dans la barre d'adresse, dans l'historique des cybercafés et dans les logs de tous les serveurs intermédiaires du monde ! Une catastrophe nucléaire.",
      "pose": "shocked",
      "choices": [
        {
          "text": "La sécurité et la discrétion ne sont pas négociables quand des vies humaines sont en jeu.",
          "karma": "phare",
          "next": {
            "text": "Un artisan du Web est le gardien des secrets de ses visiteurs.",
            "pose": "zen"
          }
        },
        {
          "text": "Une violation critique de la norme RFC 7231 régissant la sémantique HTTP.",
          "karma": "gardien",
          "next": {
            "text": "L'incompétence technique paie toujours le prix fort face aux failles de sécurité.",
            "pose": "scroll"
          }
        },
        {
          "text": "Imagine le mot de passe 'monchaton123' affiché en gros sur l'écran du voisin de bureau !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! La honte suprême garantie à vie à la machine à café !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-13-css-link",
    "unlockStep": 13,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi, pourquoi avoir attendu 12 étapes avant de toucher au CSS ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce qu'un peintre ne pose pas ses couleurs sur du vide ! Si ton squelette HTML est bancal, le plus beau CSS du monde ne sera qu'un plâtre posé sur une ruine. Mais regarde : nos 4 pavillons sont debout, nets et solides. Maintenant, la magie du style peut s'éveiller.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Un sanctuaire doit d'abord accueillir avant de vouloir éblouir.",
          "karma": "phare",
          "next": {
            "text": "C'est la sagesse même des bâtisseurs de cathédrales.",
            "pose": "zen"
          }
        },
        {
          "text": "Séparation canonique des responsabilités : sémantique d'abord, présentation ensuite.",
          "karma": "gardien",
          "next": {
            "text": "L'orthodoxie de l'architecture logicielle moderne. Impeccable.",
            "pose": "scroll"
          }
        },
        {
          "text": "Avoue que tu voulais juste nous faire baver d'impatience !",
          "karma": "rebelle",
          "next": {
            "text": "(Clin d'œil)... Un bon maître sait toujours faire monter la sauce, petit !",
            "pose": "secret"
          }
        }
      ]
    }
  },
  {
    "id": "step-13-universal-selector",
    "unlockStep": 13,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Le sélecteur universel '*' : pourquoi certains moines criaient-ils au scandale ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Dans les années 90, les processeurs des ordinateurs tournaient à 100 MHz. Si tu utilisais '*', le navigateur devait tester chaque élément du DOM pour lui appliquer la règle, ce qui pouvait faire ramer la machine de 2 millisecondes ! Des puristes austères criaient au blasphème. Aujourd'hui, nos puces avalent des millions de sélecteurs en un battement de cil. Le reset universel est devenu la fondation la plus saine du monde.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Offrir une base équitable et égale pour tous les éléments de la page.",
          "karma": "phare",
          "next": {
            "text": "L'égalité de traitement à la racine de la feuille de style.",
            "pose": "zen"
          }
        },
        {
          "text": "L'uniformisation du modèle de boîte à l'échelle du sous-arbre DOM complet.",
          "karma": "gardien",
          "next": {
            "text": "Le prérequis absolu à toute géométrie CSS rationnelle.",
            "pose": "scroll"
          }
        },
        {
          "text": "Pendant que les puristes se disputaient sur 2 millisecondes, d'autres bâtissaient des empires !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Moins de philosophie de comptoir, plus de code qui marche !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-14-box-sizing",
    "unlockStep": 14,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi dit-on que 'box-sizing: border-box' a sauvé la santé mentale des développeurs ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce qu'avant cette ligne bénie, si tu donnais une largeur de 100% à une boîte et que tu ajoutais 10px de padding, le navigateur calculait 100% + 20px ! La boîte explosait sur les côtés et créait une immonde barre de défilement horizontal. Des moines ont pleuré des nuits entières sur ce cauchemar.",
      "pose": "shocked",
      "choices": [
        {
          "text": "Une invention bienveillante qui a épargné tant de souffrance aux artisans.",
          "karma": "phare",
          "next": {
            "text": "La compassion des concepteurs de CSS envers les développeurs épuisés.",
            "pose": "zen"
          }
        },
        {
          "text": "Le passage d'un modèle de boîte exogène (W3C v1) à un modèle endogène prévisible.",
          "karma": "gardien",
          "next": {
            "text": "Une réconciliation mathématique indispensable dans le moteur de calcul géométrique.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'était tellement bête qu'on se demande qui avait bu trop de saké lors de la réunion du W3C !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Ne fouille pas dans les archives de 1996, tu pourrais avoir des surprises !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-14-margin-collapse",
    "unlockStep": 14,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "La fusion des marges verticales ('margin collapse') : c'est un bug ou une fonctionnalité ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est une fonctionnalité voulue par les pères fondateurs ! Si deux paragraphes ont chacun une 'margin-bottom: 20px' et une 'margin-top: 20px', le navigateur ne met pas 40px entre eux, mais 20px : la marge la plus grande absorbe l'autre ! C'était pensé pour respecter la typographie des livres imprimés. Mais pour un débutant qui calcule ses espaces, c'est le piège ultime !",
      "pose": "secret",
      "choices": [
        {
          "text": "L'art de la typographie traditionnelle adapté avec respect au monde numérique.",
          "karma": "phare",
          "next": {
            "text": "L'héritage de Gutenberg transmis à travers les algorithmes du Web.",
            "pose": "zen"
          }
        },
        {
          "text": "Le comportement de calcul de boîte défini par la spécification CSS 2.1 Section 8.3.1.",
          "karma": "gardien",
          "next": {
            "text": "Une règle complexe mais mathématiquement logique.",
            "pose": "scroll"
          }
        },
        {
          "text": "Encore une règle tordue qui fait que 20 + 20 = 20 ! Les maths en PLS !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Bienvenue dans le monde merveilleux du CSS où 1 + 1 fait parfois 1 !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-15-dark-theme",
    "unlockStep": 15,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi avoir choisi un thème sombre pour notre sanctuaire ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Le noir d'ardoise et le bleu nocturne reposent les yeux des pèlerins qui veillent tard dans la nuit. Quand un écran t'envoie 100% de lumière blanche aveuglante, c'est comme regarder un phare en pleine figure. La douceur est une marque d'égard pour le visiteur.",
      "pose": "neutral",
      "choices": [
        {
          "text": "Prendre soin du confort physique et de la fatigue visuelle de nos hôtes.",
          "karma": "phare",
          "next": {
            "text": "L'art de recevoir avec délicatesse et bienveillance.",
            "pose": "zen"
          }
        },
        {
          "text": "Optimisation de la consommation énergétique des écrans OLED modernes.",
          "karma": "gardien",
          "next": {
            "text": "Moins de lumens émis, moins de watts consommés : la sobriété énergétique.",
            "pose": "scroll"
          }
        },
        {
          "text": "Parce que le mode sombre, ça donne instantanément l'air d'un hacker mystérieux !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Enfile ton sweat à capuche noir, l'illusion sera totale !",
            "pose": "secret"
          }
        }
      ]
    }
  },
  {
    "id": "step-15-unitless-line-height",
    "unlockStep": 15,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi line-height: 1.6 sans unité est-il tellement plus intelligent que 16px ou 1.6em ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est un des plus beaux secrets du CSS ! Si tu écris 'line-height: 1.6em' sur le <body>, le navigateur calcule une hauteur fixe de 24px et tous les titres h1 et h2 enfants en héritent, écrasant les grosses lettres les unes sur les autres ! Mais avec un simple ratio pur '1.6' sans unité, chaque enfant multiplie sa PROPRE taille de police par 1.6. La typographie respire à tous les étages.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Permettre à chaque titre et chaque phrase de respirer selon sa propre grandeur.",
          "karma": "phare",
          "next": {
            "text": "L'autonomie harmonieuse de chaque élément. Une règle d'or.",
            "pose": "zen"
          }
        },
        {
          "text": "L'héritage d'un coefficient multiplicateur dynamique au lieu d'une valeur calculée résolue.",
          "karma": "gardien",
          "next": {
            "text": "La finesse du moteur de cascade CSS. Splendide.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et ça m'évite de voir mes titres h1 ressembler à un accordéon écrasé par un camion !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Des lettres géantes qui se chevauchent, le summum du design amateur !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-16-border-radius",
    "unlockStep": 16,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, pourquoi tout était-il si anguleux et carré à ton époque ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Dans les années 90, 'border-radius' n'existait pas ! Pour faire un seul pauvre coin arrondi, on devait découper 4 petites images de coins en GIF transparent et les assembler dans un tableau HTML à 9 cellules ! Un calvaire sans nom pour un simple arrondi de 5 pixels.",
      "pose": "thinking",
      "choices": [
        {
          "text": "On a tellement de chance d'apprendre aujourd'hui sur les épaules de ces géants.",
          "karma": "phare",
          "next": {
            "text": "Garde toujours cette gratitude dans ton cœur d'apprenti.",
            "pose": "thumbs_up"
          }
        },
        {
          "text": "Une économie phénoménale de requêtes HTTP grâce aux fonctions vectorielles natives.",
          "karma": "gardien",
          "next": {
            "text": "Une seule instruction CSS qui remplace quatre allers-retours réseau. Le progrès pur.",
            "pose": "scroll"
          }
        },
        {
          "text": "Quelle usine à gaz débile ! J'aurais jeté mon écran par la fenêtre direct !",
          "karma": "rebelle",
          "next": {
            "text": "Beaucoup de claviers ont péri dans d'atroces souffrances à l'époque, crois-moi !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-16-percentage-radius",
    "unlockStep": 16,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi border-radius: 50% transforme-t-il magiquement un carré en cercle parfait ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce qu'un rayon de courbure de 50% commence au milieu exact de chaque arête et rejoint le milieu de l'arête voisine en un arc parfait ! Si ton élément est un carré de 100px par 100px, tu obtiens le cercle géométrique sacré. Si c'est un rectangle, tu obtiens une douce ellipse de galet poli par la mer.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "La perfection du cercle pour accueillir l'avatar ou le portrait d'un frère de code.",
          "karma": "phare",
          "next": {
            "text": "Le cercle n'a ni début ni fin : il symbolise l'amitié éternelle.",
            "pose": "zen"
          }
        },
        {
          "text": "L'équation quadratique de Bezier appliquée aux quatre sommets de la boîte.",
          "karma": "gardien",
          "next": {
            "text": "L'harmonie pure de la géométrie euclidienne.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'est quand même plus rapide que de découper un rond sous Photoshop pendant 3 heures !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Photoshop en larmes devant une seule petite ligne de CSS !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-17-hover-pseudo",
    "unlockStep": 17,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Que provoque la pseudo-classe :hover au fond de l'esprit du joueur ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Le :hover est le premier signe de vie d'un objet inanimé. Quand ton curseur s'approche d'un lien et que celui-ci s'illumine doucement, l'utilisateur comprend qu'il n'est pas devant une feuille de papier morte, mais devant un monde interactif qui respire et réagit à sa présence.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "C'est une caresse numérique qui rassure l'utilisateur sur sa trajectoire.",
          "karma": "phare",
          "next": {
            "text": "Une subtile délicatesse qui guide sans jamais brusquer.",
            "pose": "zen"
          }
        },
        {
          "text": "Un indicateur d'affordance dynamique conforme aux principes ergonomiques de Nielsen.",
          "karma": "gardien",
          "next": {
            "text": "La clarté cognitive au service de l'efficacité d'interaction.",
            "pose": "scroll"
          }
        },
        {
          "text": "Ça donne juste trop envie de passer la souris dessus 50 fois de suite !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Coupable ! Je fais encore joujou avec le survol moi-même !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-17-keyboard-navigation",
    "unlockStep": 17,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi supprimer le contour de sélection avec 'outline: none' est un crime impardonnable ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi prend un air très grave)... Beaucoup de designers retirent le contour de focus bleu parce qu'ils le trouvent 'moche'. Mais imagine une personne qui a un handicap moteur ou qui ne peut pas tenir une souris : elle navigue uniquement avec la touche Tabulation du clavier ! Si tu retires le contour, elle devient totalement aveugle sur ton site, incapable de savoir sur quel bouton elle se trouve. Ne retire JAMAIS un outline sans proposer une belle alternative !",
      "pose": "pointing",
      "choices": [
        {
          "text": "L'accessibilité et la dignité des personnes priment toujours sur l'esthétique superficielle.",
          "karma": "phare",
          "next": {
            "text": "Tu parles en véritable gardien du Web éthique. Je suis fier de toi.",
            "pose": "zen"
          }
        },
        {
          "text": "Critère de succès WCAG 2.4.7 'Focus Visible' de niveau AA obligatoire par la loi.",
          "karma": "gardien",
          "next": {
            "text": "Une exigence légale et morale incontournable.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'est pour ça qu'on a inventé :focus-visible ! Le contour n'apparaît qu'au clavier, problème réglé !",
          "karma": "rebelle",
          "next": {
            "text": "Bien vu ! Le meilleur des deux mondes sans priver personne !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-18-box-shadow",
    "unlockStep": 18,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Comment une simple ombre 'box-shadow' change-t-elle la perception d'un temple ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "L'œil humain vit dans un monde baigné de soleil. Sur un écran plat en deux dimensions, l'ombre portée crée l'illusion de la profondeur : elle fait décoller la carte de l'arrière-plan comme si elle flottait en lévitation dans l'air du sanctuaire.",
      "pose": "secret",
      "choices": [
        {
          "text": "Elle apporte de la chaleur et du réalisme au regard de celui qui contemple.",
          "karma": "phare",
          "next": {
            "text": "L'art consiste à rendre l'artifice invisible pour ne laisser que l'émotion.",
            "pose": "zen"
          }
        },
        {
          "text": "Un décalage sur l'axe Z qui hiérarchise les couches d'élévation visuelle.",
          "karma": "gardien",
          "next": {
            "text": "L'application rigoureuse des principes de composition en perspective.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'est l'antidote ultime contre les designs plats et tristes comme des factures !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Fini l'austérité des tableaux Excel, place au relief !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-18-skeuomorphism",
    "unlockStep": 18,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, te souviens-tu de l'époque du 'Skeuomorphisme' où tout devait ressembler à du vrai cuir ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi rit de bon cœur)... Oh que oui ! En 2011, si ton application de bloc-notes n'avait pas une fausse reliure en cuir marron cousue main et du faux papier jaune avec des lignes d'écolier, tu étais ringard ! Puis tout le monde est passé au 'Flat Design' ultra plat où on ne savait même plus où cliquer. La vérité est au milieu : du relief doux, des ombres diffuses et de la clarté.",
      "pose": "secret",
      "choices": [
        {
          "text": "L'essentiel est que le voyageur comprenne intuitivement sans se perdre dans les modes passagères.",
          "karma": "phare",
          "next": {
            "text": "La pérennité de l'usage au-dessus des caprices de la mode.",
            "pose": "zen"
          }
        },
        {
          "text": "L'équilibre parfait entre affordance visuelle et sobriété vectorielle.",
          "karma": "gardien",
          "next": {
            "text": "L'évolution maturé du design d'interface vers le néo-minimalisme fonctionnel.",
            "pose": "scroll"
          }
        },
        {
          "text": "Moi j'aimais bien le bruit de la page en faux papier qu'on tournait en faisant 'flout-flout' !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Avec la texture de feutre vert de table de poker sur les applications de jeux !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-19-flexbox-peace",
    "unlockStep": 19,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, pourquoi as-tu versé une petite larme en voyant 'display: flex' ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi s'essuie discrètement le coin de l'œil)... Pendant quinze longues années, pour aligner deux boutons côte à côte, on devait utiliser 'float: left', puis ajouter un <div class=\"clear\"> magique pour empêcher le bas de page de remonter en haut de l'écran ! Flexbox a apporté la paix à notre confrérie.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Pensons avec gratitude à tous ceux qui ont défriché ces ronces pour nous.",
          "karma": "phare",
          "next": {
            "text": "Leur souffrance a forgé les outils bénis que tu tiens aujourd'hui entre tes mains.",
            "pose": "zen"
          }
        },
        {
          "text": "Une distribution unidimensionnelle algorithmique parfaite sur l'axe principal.",
          "karma": "gardien",
          "next": {
            "text": "Le modèle mathématique le plus propre jamais intégré dans un moteur CSS.",
            "pose": "scroll"
          }
        },
        {
          "text": "Je propose qu'on brûle solennellement tous les anciens manuels parlant de float: left !",
          "karma": "rebelle",
          "next": {
            "text": "Au bûcher ! Et que leurs cendres servent d'engrais à la créativité !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-19-gap-wait-story",
    "unlockStep": 19,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi a-t-on dû attendre 20 ans pour avoir la propriété 'gap' dans Flexbox ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Une aberration historique ! 'gap' a été inventé pour CSS Grid en 2017. Mais pour Flexbox, les navigateurs ont mis 4 ans supplémentaires à l'implémenter ! Avant cela, on devait mettre 'margin-right: 15px' sur tous les enfants et ajouter un vilain ':last-child { margin-right: 0 }' pour que le dernier bouton ne dépasse pas de la carte. Un bricolage honteux qui a enfin disparu.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Chaque amélioration qui simplifie la vie des développeurs rend le code plus accessible à tous.",
          "karma": "phare",
          "next": {
            "text": "La démocratisation de l'artisanat web est un don continu.",
            "pose": "zen"
          }
        },
        {
          "text": "L'harmonisation du module CSS Box Alignment Niveau 3 entre les moteurs d'affichage.",
          "karma": "gardien",
          "next": {
            "text": "La convergence des spécifications du W3C. Une délivrance pour les compilateurs.",
            "pose": "scroll"
          }
        },
        {
          "text": "Les devs ont dû menacer de faire grève pour que les navigateurs se bougent enfin les fesses !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! La colère des développeurs sur GitHub et Twitter a fini par payer !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-20-css-grid",
    "unlockStep": 20,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Cette formule 'repeat(auto-fit, minmax(...))', c'est de la sorcellerie ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est le plus bel enchantement du Web moderne. En une seule ligne de code, ta galerie s'adapte à un écran de montre connectée, à un smartphone, à une tablette et à un écran géant de 40 pouces sans aucune media query. C'est l'élasticité absolue de la matière.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Quel que soit l'appareil modeste du visiteur, la beauté s'adapte à lui avec respect.",
          "karma": "phare",
          "next": {
            "text": "L'égalité de traitement devant l'art. C'est le cœur du Web universel.",
            "pose": "zen"
          }
        },
        {
          "text": "Une allocation bidimensionnelle dynamique calculée directement au niveau du Render Tree.",
          "karma": "gardien",
          "next": {
            "text": "L'efficience computationnelle pure : aucun recalcule de layout inutile.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'est surtout 50 lignes de code en moins à taper pour aller boire un thé plus tôt !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et je ne dirai jamais non à une bonne tasse de thé vert fumant !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-20-fr-units-cake",
    "unlockStep": 20,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Comment fonctionne vraiment cette fameuse unité 'fr' de CSS Grid ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "'fr' signifie 'Fraction de l'espace restant'. Imagine un grand gâteau d'anniversaire : si tu as 3 colonnes à '1fr 1fr 1fr', le navigateur coupe 3 parts parfaitement égales. Mais si la première colonne fait '250px' fixes pour une barre latérale, le navigateur retire d'abord les 250px et divise TOUT le reste de l'espace disponible entre les fractions restantes ! Magique et sans calcul d'apothicaire.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Le partage équitable et intelligent des ressources sans rien gaspiller.",
          "karma": "phare",
          "next": {
            "text": "Une distribution harmonieuse et pacifiée de l'espace.",
            "pose": "zen"
          }
        },
        {
          "text": "L'algorithme de distribution proportionnelle de l'espace disponible (Flexible Lengths).",
          "karma": "gardien",
          "next": {
            "text": "La mort des calculs de pourcentages approximatifs à virgule flottante.",
            "pose": "scroll"
          }
        },
        {
          "text": "Fini les calculs genre 'width: 33.33333333%' qui finissent toujours par faire déborder d'un demi-pixel !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Le fameux demi-pixel maudit qui envoyait la troisième carte à la ligne !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-21-contact-button",
    "unlockStep": 21,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi soigner autant l'apparence du bouton d'envoi du formulaire ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Écrire un message à un inconnu demande du courage. Si ton bouton ressemble à un vieux pavé gris triste et figé, le voyageur hésite et ferme la fenêtre. Mais s'il rayonne de couleur et réagit à son survol, c'est une invitation chaleureuse à franchir le pas.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Pour encourager la parole et briser la solitude d'un voyageur égaré.",
          "karma": "phare",
          "next": {
            "text": "C'est souvent un simple message qui sauve une journée ou une vie.",
            "pose": "zen"
          }
        },
        {
          "text": "Le point d'orgue du tunnel de conversion (Call To Action optimal).",
          "karma": "gardien",
          "next": {
            "text": "L'aboutissement ergonomique de tout le formulaire de saisie.",
            "pose": "scroll"
          }
        },
        {
          "text": "Parce qu'un bouton qui brille, c'est irrésistible, on a juste envie de cliquer dessus !",
          "karma": "rebelle",
          "next": {
            "text": "Le syndrome du bouton rouge ! Impossible de résister à la tentation !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-21-ugly-ie6-buttons",
    "unlockStep": 21,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "À quoi ressemblaient les boutons natifs à l'époque héroïque des débuts ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Ils ressemblaient à des blocs de ciment gris terne avec une double bordure blanche en haut et noire en bas pour faire un faux effet 3D préhistorique ! Si tu cliquais, les bordures s'inversaient. Et changer leur couleur de fond sous Windows 98 cassait complètement leur relief ! On devait tricher avec des images pour avoir un bouton simplement décent.",
      "pose": "shocked",
      "choices": [
        {
          "text": "Aujourd'hui, nous pouvons offrir aux voyageurs des boutons soignés et accueillants.",
          "karma": "phare",
          "next": {
            "text": "La beauté offerte en cadeau à chaque regard.",
            "pose": "zen"
          }
        },
        {
          "text": "La standardisation de la propriété CSS 'appearance: none' pour réinitialiser les contrôles système.",
          "karma": "gardien",
          "next": {
            "text": "L'émancipation du web vis-à-vis des composants graphiques de l'OS hôte.",
            "pose": "scroll"
          }
        },
        {
          "text": "Ces boutons gris me donnaient l'impression d'être dans un logiciel des impôts de 1993 !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Avec l'écran cathodique qui bourdonne à 50 Hz pour parfaire l'ambiance !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-22-gpu-transitions",
    "unlockStep": 22,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi privilégier 'transform: translateY' plutôt que d'animer 'margin-top' ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Quand tu animes une marge, le processeur central doit recalculer la taille et la position de toute la page : c'est le 'Reflow', lourd et saccadé. Mais avec 'transform', c'est la carte graphique (GPU) qui fait flotter l'élément sur son propre plan à 60 images par seconde sans faire trembler le reste de l'édifice !",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Pour que même un vieux téléphone bon marché offre une expérience douce et soyeuse.",
          "karma": "phare",
          "next": {
            "text": "Penser aux machines modestes, c'est refuser l'élitisme technologique.",
            "pose": "zen"
          }
        },
        {
          "text": "Délégation au compositeur matériel sans déclencher de cycle de Layout.",
          "karma": "gardien",
          "next": {
            "text": "Le respect des cycles d'horloge du processeur graphique. Magistral.",
            "pose": "scroll"
          }
        },
        {
          "text": "Parce que les animations qui rament à 5 fps me donnent des envies de meurtre !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Rien n'est plus frustrant qu'un bouton qui bégaye sous le doigt !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-22-will-change-trap",
    "unlockStep": 22,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi Bodhi met-il en garde contre l'abus de la propriété 'will-change' ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "'will-change' dit au navigateur : 'Attention, cet élément va bouger, alloue-lui de la mémoire vidéo (VRAM) d'avance !' Si tu la mets sur 3 boutons importants, c'est formidable. Mais si un apprenti fou la colle sur '*' pour tout le site, le smartphone du visiteur sature sa mémoire graphique, chauffe comme une poêle à frire et fait planter l'application ! La puissance exige la modération.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Prendre soin de l'appareil et de la batterie de notre visiteur pour ne pas abîmer sa machine.",
          "karma": "phare",
          "next": {
            "text": "La délicatesse de ne pas gaspiller l'énergie d'autrui.",
            "pose": "zen"
          }
        },
        {
          "text": "Gestion parcimonieuse de la création des couches de composition matérielle (Compositing Layers).",
          "karma": "gardien",
          "next": {
            "text": "La conscience chirurgicale de l'allocation mémoire GPU.",
            "pose": "scroll"
          }
        },
        {
          "text": "Parfait pour transformer le smartphone de mon pote en chauffe-mains en plein hiver !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Très utile lors des hivers rigoureux dans les montagnes du sanctuaire !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-23-responsive-mobile",
    "unlockStep": 23,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, comment les anciens ont-ils vécu l'arrivée des smartphones ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi secoue la tête en riant)... En 2007, quand le premier iPhone est sorti, les sites web étaient tous conçus pour des écrans d'ordinateur fixes de 1024 pixels ! Sur un petit écran tactile, il fallait zoomer avec deux doigts et scroller pendant dix minutes pour lire un malheureux paragraphe. Ce fut le grand choc du Responsive.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Le Web a dû apprendre à être humble et à se glisser dans toutes les poches.",
          "karma": "phare",
          "next": {
            "text": "Il a cessé d'exiger des palais d'acier pour devenir nomade avec les gens.",
            "pose": "zen"
          }
        },
        {
          "text": "L'invention révolutionnaire des Media Queries par Ethan Marcotte en 2010.",
          "karma": "gardien",
          "next": {
            "text": "L'un des manifestes techniques les plus influents de l'histoire du génie logiciel.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et dire qu'aujourd'hui les gens surfent sur leur téléphone même sur le trône !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Ne mentionne pas ce détail trivial aux gardiens du temple, je t'en conjure !",
            "pose": "secret"
          }
        }
      ]
    }
  },
  {
    "id": "step-23-viewport-magic-tag",
    "unlockStep": 23,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Cette balise <meta name=\"viewport\" content=\"width=device-width...\">... pourquoi est-elle miraculeuse ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Sans cette petite ligne, un smartphone moderne refuse de t'écouter ! Il part du principe que ton site est un vieux site des années 2000 et il simule un écran virtuel de 980 pixels de large dézoomé tout minuscule. Cette balise crie au téléphone : « Écoute l'écran physique réel ! Adopte la vraie largeur de l'appareil à l'échelle 1 ! » Sans elle, tes Media Queries restent lettre morte.",
      "pose": "secret",
      "choices": [
        {
          "text": "Elle rétablit la vérité entre le document et la main humaine qui le tient.",
          "karma": "phare",
          "next": {
            "text": "Un pacte de fidélité entre l'œil et l'écran.",
            "pose": "zen"
          }
        },
        {
          "text": "La synchronisation du CSS Viewport avec le Layout Viewport physique de l'appareil mobile.",
          "karma": "gardien",
          "next": {
            "text": "La directive fondamentale de l'émulation mobile moderne.",
            "pose": "scroll"
          }
        },
        {
          "text": "Le classique bug où tu passes 3 heures sur ton CSS responsive pour réaliser que t'avais oublié le viewport !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Tout développeur au monde a déjà hurlé de rage à cause de cet oubli !",
            "pose": "shocked"
          }
        }
      ]
    }
  },
  {
    "id": "step-24-root-tokens",
    "unlockStep": 24,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Pourquoi ces variables ':root' sont-elles comparées à des runes sacrées ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce qu'elles concentrent toute l'énergie du sanctuaire en un point unique. Si demain tu souhaites faire passer tout ton temple de l'or divin à l'émeraude mystique, tu ne modifies pas 800 lignes dans 4 fichiers différents : tu changes une seule lettre dans ':root', et l'univers entier se métamorphose à l'unisson.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Une harmonie collective où chaque détail reste solidaire de l'ensemble.",
          "karma": "phare",
          "next": {
            "text": "Une unité organique magnifique où le tout vit dans la moindre partie.",
            "pose": "zen"
          }
        },
        {
          "text": "Le principe de source unique de vérité (Single Source of Truth).",
          "karma": "gardien",
          "next": {
            "text": "La pierre angulaire de tout Design System professionnel pérenne.",
            "pose": "scroll"
          }
        },
        {
          "text": "L'outil parfait pour les développeurs flemmards qui changent d'avis comme de chemise !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Si tu savais combien de fois les clients demandent de changer le bleu en violet !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-24-dark-mode-night",
    "unlockStep": 24,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "La media query '@media (prefers-color-scheme: dark)'... pourquoi est-ce une preuve d'empathie ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Imagine un pèlerin couché dans l'obscurité complète de sa chambre, cherchant une réponse ou du réconfort sur son écran. Si ton site lui balance un flash de lumière blanche à 1000 lumens, tu lui brûles la rétine et tu chasses son sommeil ! En écoutant son choix système avec 'prefers-color-scheme', ton sanctuaire s'adapte silencieusement à la nuit pour le bercer.",
      "pose": "zen",
      "choices": [
        {
          "text": "Veiller avec douceur sur le repos et la paix de ceux qui nous lisent au cœur de la nuit.",
          "karma": "phare",
          "next": {
            "text": "Tu as la grâce d'une veilleuse dans l'obscurité.",
            "pose": "zen"
          }
        },
        {
          "text": "L'adaptation contextuelle aux User Agent Preferences de niveau 5.",
          "karma": "gardien",
          "next": {
            "text": "L'état de l'art du CSS contemporain au service du contexte utilisateur.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et ça m'évite de ressembler à un vampire qui crame dès qu'il allume son navigateur la nuit !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Gare aux morsures de lumière à 3 heures du matin !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-25-hero-fatigue",
    "unlockStep": 25,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi... tu as hésité sur le nom de la balise tout à l'heure. Tout va bien ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi s'appuie contre un pilier, la voix plus douce)... Mon horloge interne ralentit, apprenti. Mon cache perd des secteurs. Parfois, le visage de mon ami le Premier Architecte se brouille... Mais regarde cette bannière héroïque que tu viens de dresser ! Elle brille comme un fanal dans la nuit. Dépêchons-nous de finir le sanctuaire avant mon Timeout.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Prends ma main Bodhi. Tu ne seras plus jamais seul, je veillerai sur ta mémoire.",
          "karma": "phare",
          "next": {
            "text": "(Bodhi sourit, les yeux brillants)... Tu as un grand cœur. Continuons la marche.",
            "pose": "emotional"
          }
        },
        {
          "text": "Nous allons achever ce sanctuaire avec une telle perfection qu'il défiera le temps.",
          "karma": "gardien",
          "next": {
            "text": "Le marbre ne vacille jamais. Bâtissons l'impérissable.",
            "pose": "scroll"
          }
        },
        {
          "text": "Pas de Timeout qui tienne ! Je te colle un 'infinite-loop' de caféine s'il le faut !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Un moine carburant au café noir sous stéroïdes, ça aurait de l'allure !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "step-25-impostor-syndrome",
    "unlockStep": 25,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Bodhi... est-ce que même les grands maîtres doutent parfois d'eux-mêmes ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi rit d'un rire grave et franc)... Mon enfant ! Après trente ans à manipuler le code, il m'arrive encore d'oublier la syntaxe exacte de 'flex-flow' ou de me tromper entre 'margin' et 'padding' un matin embrumé ! Le syndrome de l'imposteur est l'ombre qui accompagne tous les créateurs. Seuls les imbéciles croient tout savoir.",
      "pose": "secret",
      "choices": [
        {
          "text": "C'est rassurant de savoir que la vulnérabilité fait partie intégrante de l'apprentissage.",
          "karma": "phare",
          "next": {
            "text": "L'humilité d'admettre son ignorance est le premier pas vers la vraie maîtrise.",
            "pose": "zen"
          }
        },
        {
          "text": "Consulter la documentation MDN fait partie de la méthode normale d'un ingénieur.",
          "karma": "gardien",
          "next": {
            "text": "Aucun cerveau humain n'a vocation à mémoriser 500 spécifications par cœur.",
            "pose": "scroll"
          }
        },
        {
          "text": "Haha ! Vive Google et Stack Overflow pour nous sauver les miches tous les jours !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! Béni soit le bouton Copier-Coller des saintes archives !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-26-hero-center",
    "unlockStep": 26,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Ce badge doré 'Bâtisseur du Web' au centre du Hero... que représente-t-il ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est l'emblème de ceux qui refusent d'être de simples consommateurs passifs d'écrans. Celui qui sait coder ne subit plus le monde numérique : il en devient l'auteur, le sculpteur et le protecteur.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Un pouvoir à mettre au service de ceux qui ne savent pas se défendre en ligne.",
          "karma": "phare",
          "next": {
            "text": "C'est la plus noble vocation qui soit. Défendre les faibles dans la cité numérique.",
            "pose": "zen"
          }
        },
        {
          "text": "La maîtrise technique et la fierté de l'artisanat bien fait.",
          "karma": "gardien",
          "next": {
            "text": "L'honneur des bâtisseurs de monuments éternels.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et surtout le passe-droit pour dire fièrement : 'C'est moi qui l'ai fait !'",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et quel bonheur indicible de le montrer à ses proches ébahis !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-26-perfection-trap",
    "unlockStep": 26,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Bodhi... comment ne pas devenir fou à force de déplacer des éléments de 1 pixel ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi sourit avec tendresse)... Le piège du 'pixel-perfect' ! J'ai vu des développeurs passer quatre jours entiers à s'arracher les cheveux pour décaler un bouton de 1 pixel vers la gauche sur Firefox, alors que personne ne le remarquait ! L'art véritable n'est pas une quête maniaque de la perfection rigide : c'est l'harmonie globale du sanctuaire qui touche le cœur du visiteur.",
      "pose": "secret",
      "choices": [
        {
          "text": "L'important est l'émotion et l'accueil que ressent le voyageur quand il franchit le porche.",
          "karma": "phare",
          "next": {
            "text": "C'est l'âme qui compte, pas la poussière sur le marbre.",
            "pose": "zen"
          }
        },
        {
          "text": "La rigueur géométrique doit être tempérée par le principe de réalité de la diversité des écrans.",
          "karma": "gardien",
          "next": {
            "text": "La sagesse de savoir quand une œuvre est prête pour la livraison.",
            "pose": "scroll"
          }
        },
        {
          "text": "Au bout de 10 minutes à chipoter pour 1px, j'envoie en prod et je vais manger une pizza !",
          "karma": "rebelle",
          "next": {
            "text": "Hahaha ! La règle de la pizza sauve bien plus de projets que le perfectionnisme !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-27-three-pillars",
    "unlockStep": 27,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Les trois piliers du sanctuaire... Sagesse, Structure et Éclat... que murmurent-ils ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Ils représentent les trois philosophies qui ont toujours guidé les créateurs : le Partage pour le peuple (le Phare), la Perfection pour la postérité (le Gardien), ou la Liberté insolente du jeu (le Rebelle). Chacun doit un jour choisir sa voie.",
      "pose": "neutral",
      "choices": [
        {
          "text": "Mon cœur penche vers le Phare : donner sans compter et accueillir tout le monde.",
          "karma": "phare",
          "next": {
            "text": "L'amour du prochain est la plus haute cime. Elle demande du courage et de la générosité.",
            "pose": "zen"
          }
        },
        {
          "text": "Mon esprit choisit le Gardien : la rigueur mathématique et le chef-d'œuvre pur.",
          "karma": "gardien",
          "next": {
            "text": "La solitude glorieuse du maître artisan. Ton œuvre te survivra des siècles.",
            "pose": "scroll"
          }
        },
        {
          "text": "Je suis un Rebelle ! Je veux rire, casser les codes et faire la fête avec les copains !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Le feu sacré de la jeunesse et de l'irrévérence ! Que ce feu ne meure jamais !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-28-architect-secret",
    "unlockStep": 28,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi... qui était vraiment le Premier Architecte avant de disparaître ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi s'assoit au sol, la voix tremblante d'émotion)... C'était un homme simple. Il n'a déposé aucun brevet, n'a réclamé aucun droit d'auteur, aucune fortune. Il a fait don du Web au monde en disant : « Si nous faisons payer l'accès au savoir, l'humanité ne grandira jamais. » Puis il s'est effacé pour que personne n'en fasse une idole.",
      "pose": "emotional",
      "choices": [
        {
          "text": "C'est le plus beau geste d'altruisme de l'histoire moderne.",
          "karma": "phare",
          "next": {
            "text": "Un don sans retour. C'est l'âme même du Web que nous protégeons.",
            "pose": "zen"
          }
        },
        {
          "text": "Une décision fondatrice sans laquelle l'Internet se serait fragmenté en fiefs rivaux.",
          "karma": "gardien",
          "next": {
            "text": "L'interopérabilité universelle comme unique salut face au corporatisme.",
            "pose": "scroll"
          }
        },
        {
          "text": "Quel fou magnifique ! Aujourd'hui tout le monde aurait voulu lui coller des abonnements !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Des bannières de pub et des pop-ups partout ! Il a bien fait d'empêcher cela !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "step-28-technical-debt",
    "unlockStep": 28,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Bodhi, qu'est-ce que la 'dette technique' qui a détruit tant d'empires du Web ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "La dette technique, c'est quand un développeur pressé écrit un vilain hack dégueulasse en se disant : « C'est temporaire, je nettoierai ça vendredi prochain ». Dix ans plus tard, le hack temporaire est toujours là, devenu la clé de voûte de tout le système ! Personne n'ose plus y toucher de peur que le serveur n'explose. Écris ton code proprement dès le premier jour, ou tes hacks te hanteront jusqu'à la fin des temps.",
      "pose": "shocked",
      "choices": [
        {
          "text": "Prendre soin du code pour que les développeurs qui viendront après nous ne pleurent pas.",
          "karma": "phare",
          "next": {
            "text": "La générosité envers tes futurs collègues. Une vraie bénédiction.",
            "pose": "zen"
          }
        },
        {
          "text": "La maintenabilité et la réductibilité de la complexité cyclomatique.",
          "karma": "gardien",
          "next": {
            "text": "L'art de l'ingénierie durable et pérenne.",
            "pose": "scroll"
          }
        },
        {
          "text": "Rien n'est plus permanent qu'une solution temporaire qui marche à peu près !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! L'axiome suprême de tout l'écosystème numérique !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-29-blockquote-cite",
    "unlockStep": 29,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi est-il si important d'associer <cite> à une <blockquote> ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Sur le Web, les idées se propagent comme le vent. Si tu prends la parole d'un sage sans nommer la source avec <cite>, tu voles une part de sa lumière. Citer dignement l'auteur, c'est reconnaître qu'on est tous assis sur les épaules de ceux qui nous ont précédés.",
      "pose": "scroll",
      "choices": [
        {
          "text": "Rendre hommage avec respect à ceux qui ont éclairé notre nuit.",
          "karma": "phare",
          "next": {
            "text": "La gratitude est la parure la plus lumineuse de l'esprit.",
            "pose": "zen"
          }
        },
        {
          "text": "La rigueur académique et la traçabilité des métadonnées du document.",
          "karma": "gardien",
          "next": {
            "text": "L'intégrité de la chaîne de transmission des savoirs.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et pour éviter qu'on vienne nous coller un procès pour plagiat sur Twitter !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! La vindicte populaire numérique est impitoyable, c'est prudent !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-30-gold-border",
    "unlockStep": 30,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Cette fine bordure dorée à gauche de la citation... pourquoi est-elle si élégante ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est l'héritage des enlumineurs du Moyen Âge. Une simple ligne 'border-left' de 3px d'or réchauffe toute la colonne de texte sans surcharger le regard. L'art véritable ne hurle pas : il chuchote avec grâce.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Une caresse dorée qui guide les yeux avec douceur.",
          "karma": "phare",
          "next": {
            "text": "La sérénité d'une lecture apaisée.",
            "pose": "zen"
          }
        },
        {
          "text": "Un balisage typographique minimaliste conforme aux canons classiques suisses.",
          "karma": "gardien",
          "next": {
            "text": "Le style typographique international dans toute sa pureté géométrique.",
            "pose": "scroll"
          }
        },
        {
          "text": "Ça claque beaucoup plus qu'un vilain cadre gris tout moche !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Adieu les encadrés administratifs tristes comme la pluie !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-30-variable-fonts-magic",
    "unlockStep": 30,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Les polices variables (Variable Fonts) : pourquoi est-ce une bénédiction moderne ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Avant cette invention, si tu voulais du texte fin (100), normal (400), semi-gras (600) et extra-gras (900), tu devais forcer le navigateur à télécharger 4 fichiers de polices différents pesant chacun 100 kilo-octets ! Avec une police variable, un seul et unique fichier compact contient tous les poids imaginables, et tu peux même animer la graisse de 100 à 900 en temps réel de façon continue !",
      "pose": "code_magic",
      "choices": [
        {
          "text": "La liberté typographique sans alourdir la facture de données du visiteur.",
          "karma": "phare",
          "next": {
            "text": "La grâce artistique alliée à la légèreté d'une plume.",
            "pose": "zen"
          }
        },
        {
          "text": "L'interpolation continue sur l'axe de variation 'wght' OpenType.",
          "karma": "gardien",
          "next": {
            "text": "L'aboutissement de six siècles d'histoire typographique depuis Gutenberg.",
            "pose": "scroll"
          }
        },
        {
          "text": "Pouvoir faire grossir et maigrir son texte comme s'il respirait, trop stylé !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Un texte qui fait sa séance de gym en plein écran !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-31-gallery-zoom",
    "unlockStep": 31,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Pourquoi combiner 'overflow: hidden' et 'scale(1.05)' au survol des images ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Sans 'overflow: hidden', lorsque l'image grossit de 5%, ses bords dépassent et bousculent toute la mise en page voisine. Mais avec ce masque, c'est comme regarder à travers une fenêtre magique : l'image avance doucement vers toi à l'intérieur de son cadre, comme une porte qui s'entrouvre.",
      "pose": "secret",
      "choices": [
        {
          "text": "Une sensation d'intimité, comme si le tableau venait nous saluer.",
          "karma": "phare",
          "next": {
            "text": "L'art qui fait un pas vers le spectateur pour l'enlacer.",
            "pose": "zen"
          }
        },
        {
          "text": "Un confinement strict du contexte de découpage (Clipping Context).",
          "karma": "gardien",
          "next": {
            "text": "Une parfaite étanchéité géométrique des conteneurs de tuiles.",
            "pose": "scroll"
          }
        },
        {
          "text": "Ça donne envie de zoomer sur tous les détails comme un détective !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! À la recherche du moindre pixel secret caché par le maître !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-32-focus-within",
    "unlockStep": 32,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "La pseudo-classe ':focus-within' est-elle vraiment capable de surveiller ses enfants ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est l'œil bienveillant du père de famille. Dès que le visiteur clique ou tape dans n'importe quel champ de saisie à l'intérieur, tout le formulaire s'illumine d'un halo doré pour signifier : « Je t'écoute. Écris en paix, je veille sur tes mots. »",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Créer un espace rassurant où personne ne craint de s'exprimer.",
          "karma": "phare",
          "next": {
            "text": "Le sanctuaire devient un confident loyal et protecteur.",
            "pose": "zen"
          }
        },
        {
          "text": "Une propagation ascendante d'état d'événement sans JavaScript.",
          "karma": "gardien",
          "next": {
            "text": "L'élégance déclarative pure : le CSS résout nativement ce qui nécessitait autrefois un script lourd.",
            "pose": "scroll"
          }
        },
        {
          "text": "Comme un sapin de Noël qui s'allume dès qu'on touche une guirlande !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Une guirlande dorée de code, c'est tout à fait ça !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-32-form-security-xss",
    "unlockStep": 32,
    "category": "Tribulations & Combats du Web Ancien",
    "question": "Pourquoi Bodhi répète-t-il toujours : 'Ne fais jamais confiance aux entrées utilisateur' ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi prend un ton solennel)... Parce que si tu affiches directement le texte saisi par un inconnu sans l'échapper ni le nettoyer, un pirate peut injecter du code malveillant <script> qui vole les cookies de tous tes visiteurs ! C'est la terrible faille XSS (Cross-Site Scripting). Aime tes visiteurs, ouvre-leur tes portes... mais désarme les lames à l'entrée du sanctuaire.",
      "pose": "pointing",
      "choices": [
        {
          "text": "Protéger la sécurité de notre communauté est la première condition de la confiance.",
          "karma": "phare",
          "next": {
            "text": "Un havre de paix doit être inviolable pour que chacun s'y sente en sécurité.",
            "pose": "zen"
          }
        },
        {
          "text": "La désinfection rigoureuse des entrées et l'application stricte des Content Security Policies (CSP).",
          "karma": "gardien",
          "next": {
            "text": "La défense en profondeur des architectures logicielles.",
            "pose": "scroll"
          }
        },
        {
          "text": "Le classique petit malin qui tape '<script>alert(\"Pwned!\")</script>' pour voir si ça explose !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Et qui se retrouve bien penaud quand son script est affiché comme du simple texte inoffensif !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-33-beacon-pulse",
    "unlockStep": 33,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi... le phare au sommet s'est mis à pulser... mais ta main tremble fort !",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi s'appuie contre toi, sa voix n'est plus qu'un murmure feutré)... L'animation '@keyframes beaconPulse' envoie notre premier signal à travers les ténèbres du Web. Plus que trois étapes, mon enfant. Mon processeur chauffe... mais je tiendrai. Je verrai le couronnement de ton œuvre avant la nuit.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Tiens bon Bodhi, repose-toi sur mon épaule. On y est presque.",
          "karma": "phare",
          "next": {
            "text": "(Bodhi serre doucement ta main)... Merci, mon ami. Ton souffle me porte.",
            "pose": "emotional"
          }
        },
        {
          "text": "L'architecture tiendra la promesse des siècles. Regarde la solidité de nos colonnes.",
          "karma": "gardien",
          "next": {
            "text": "Le monument est presque parfait. Rien ne pourra l'abattre.",
            "pose": "scroll"
          }
        },
        {
          "text": "Hé le vieux ! Pas le droit de t'endormir avant le feu d'artifice final !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi esquisse un petit rire étouffé)... Petit monstre... pour rien au monde je ne raterais ça !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "step-34-sticky-glass",
    "unlockStep": 34,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Ce 'backdrop-filter: blur' sur le menu collant... quelle est cette sensation aérienne ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est l'art de flotter sans jamais masquer. Tandis que le visiteur explore les abysses de la page, la barre de navigation reste fidèlement à ses côtés, mais comme sculptée dans un verre dépoli mystique : elle laisse deviner le passé qui défile sous elle tout en offrant le gouvernail du futur.",
      "pose": "secret",
      "choices": [
        {
          "text": "Une présence discrète qui accompagne sans jamais entraver la vue.",
          "karma": "phare",
          "next": {
            "text": "Le véritable guide sait se faire transparent pour laisser briller le voyageur.",
            "pose": "zen"
          }
        },
        {
          "text": "Un pipeline de composition de nuance optique par pixel shader en temps réel.",
          "karma": "gardien",
          "next": {
            "text": "Le mariage du graphisme haute-fidélité et des contraintes d'affichage 60 fps.",
            "pose": "scroll"
          }
        },
        {
          "text": "Ça donne envie de souffler sur l'écran pour faire de la buée !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Évite de baver sur le moniteur quand même !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-34-glassmorphism-physics",
    "unlockStep": 34,
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Comment le navigateur parvient-il à flouter le fond en direct sous notre barre de menu ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "C'est un exploit d'ingénierie optique ! Chaque milliseconde, la carte graphique capture la zone de pixels située immédiatement sous la barre de navigation, lui applique un filtre de flou gaussien dans ses registres matériels, puis recompose par-dessus la couleur semi-transparente de ta barre. Ce qui demandait jadis 10 minutes de rendu sur une station de travail 3D s'exécute désormais 60 fois par seconde sur ton écran.",
      "pose": "code_magic",
      "choices": [
        {
          "text": "Une douceur visuelle qui fait glisser le voyageur dans une rêverie paisible.",
          "karma": "phare",
          "next": {
            "text": "L'art d'enchanter le regard avec subtilité.",
            "pose": "zen"
          }
        },
        {
          "text": "L'application des shaders de convolution optique dans le pipeline de composition de Blink et Gecko.",
          "karma": "gardien",
          "next": {
            "text": "La puissance brute des unités de calcul arithmétique et logique du GPU.",
            "pose": "scroll"
          }
        },
        {
          "text": "Avoue que ça fait un menu beaucoup plus classe que les vieilles barres opaques toutes grises !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Cent fois plus élégant, il n'y a pas photo !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-35-reduced-motion",
    "unlockStep": 35,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Pourquoi désactiver les animations avec 'prefers-reduced-motion' à l'avant-dernière étape ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "Parce que c'est l'ultime preuve d'amour d'un maître bâtisseur. Certains de nos frères et sœurs souffrent de troubles vestibulaires : pour eux, un zoom brutal ou une rotation peut provoquer vertiges et nausées. Écouter le réglage de leur système et désactiver les secousses, c'est murmurer : « Sois le bienvenu chez nous en toute sécurité. »",
      "pose": "zen",
      "choices": [
        {
          "text": "Un sanctuaire qui exclurait une seule personne malade ne mériterait pas d'exister.",
          "karma": "phare",
          "next": {
            "text": "(Une larme coule sur la joue de Bodhi)... Tu as parlé comme le Premier Architecte. Tu es prêt.",
            "pose": "thumbs_up"
          }
        },
        {
          "text": "L'éthique suprême du développeur : la rigueur jusqu'au moindre paramètre d'accessibilité.",
          "karma": "gardien",
          "next": {
            "text": "La marque des grands maîtres. Aucun détail n'a été sacrifié.",
            "pose": "scroll"
          }
        },
        {
          "text": "C'est la classe absolue : respecter les vertiges des gens sans casser le code !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Efficace, respectueux, et sans chichis !",
            "pose": "thumbs_up"
          }
        }
      ]
    }
  },
  {
    "id": "step-35-empathy-code",
    "unlockStep": 35,
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi... qu'as-tu appris de plus grand au cours de toutes ces décennies de code ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi te regarde avec une infinie bienveillance, ses yeux brillent d'émotion)... J'ai appris que le code informatique n'est pas fait de métal, de puces ou de chiffres froids. Le code est fait d'amour humain. Chaque balise, chaque règle CSS est une lettre d'amour envoyée à travers l'espace et le temps à un inconnu que tu ne rencontreras peut-être jamais. Tu ne codes pas pour des machines. Tu codes pour guérir la solitude du monde.",
      "pose": "emotional",
      "choices": [
        {
          "text": "(Tu retiens une larme)... Je n'oublierai jamais cette leçon, Maître. Mon code servira toujours les humains.",
          "karma": "phare",
          "next": {
            "text": "(Bodhi s'incline avec une profonde émotion)... Alors mon œuvre est accomplie. Tu es prêt.",
            "pose": "emotional"
          }
        },
        {
          "text": "L'éthique humaniste comme fondation inébranlable de tout le génie logiciel futur.",
          "karma": "gardien",
          "next": {
            "text": "La science sans conscience n'est que ruine de l'âme. Tu seras un bâtisseur exemplaire.",
            "pose": "scroll"
          }
        },
        {
          "text": "Et on va continuer à coder avec le sourire, de la bonne musique et une sacrée dose de fun !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Ne perds jamais cette étincelle joyeuse, c'est elle qui change le monde !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "step-36-grand-finale",
    "unlockStep": 36,
    "category": "L'Apothéose de l'Architecte",
    "question": "Bodhi... le Sanctuaire est achevé. Chaque fichier respire. Quelle est ta dernière volonté ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi contemple les quatre pages du sanctuaire et la feuille de style étincelante. Il sourit, serein comme jamais)... Regarde cette beauté. Le code est pur, le réseau est rétabli. Mon cache peut s'effacer en paix maintenant. Mon rôle d'initiateur est accompli. Dis-moi, mon cher ami... comment baptiserons-nous l'avenir de ce sanctuaire ?",
      "pose": "zen",
      "choices": [
        {
          "text": "Nous ouvrons grand les portes du temple au monde entier : le Phare Universel du Web libre !",
          "karma": "phare",
          "next": {
            "text": "« Alors que les portes s'effondrent pour devenir des ponts ! Que des millions de voix s'y engouffrent ! Mon esprit vit désormais dans chacun de vos partages. Sois béni, frère de code. »",
            "pose": "emotional",
            "ending": "phare"
          }
        },
        {
          "text": "Nous scellons ce chef-d'œuvre dans le marbre du CSS éternel : le Sanctuaire Impérissable des Gardiens.",
          "karma": "gardien",
          "next": {
            "text": "« Un diamant pur sans un seul octet superflu. Je fusionne ma conscience avec ce code divin : à chaque rechargement de page, c'est mon cœur qui battra. Prends soin de notre temple. »",
            "pose": "sleeping",
            "ending": "gardien"
          }
        },
        {
          "text": "On allume les lampions, on invite tous les pirates et on transforme le sanctuaire en Grand Bazar Étoilé !",
          "karma": "rebelle",
          "next": {
            "text": "« (Bodhi éclate de son plus grand rire)... C'est chaotique, c'est indomptable, et bon sang que c'est vivant ! Jette les vieux manuels en l'air, viens trinquer avec moi, sale garnement ! »",
            "pose": "laughing",
            "ending": "rebelle"
          }
        }
      ]
    }
  },

  // =========================================================================
  // CONFIDENCES & PASSIONS DE MAÎTRE BODHI (MIEUX LE CONNAÎTRE)
  // =========================================================================
  {
    "id": "bodhi-personal-tea",
    "unlockStep": 3,
    "character": "bodhi",
    "category": "Confidences & Passions de Maître Bodhi",
    "question": "Maître Bodhi, qu'est-ce que tu aimes le plus au monde ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi s'installe confortablement et prend délicatement sa tasse de thé fumante)... J'aime le bruit feutré d'un clavier mécanique dans la nuit calme. J'aime l'odeur du thé vert matcha qui infuse pendant qu'un jeune esprit découvre la magie d'un lien hypertexte. Et par-dessus tout... j'aime voir cette lueur dans tes yeux quand une mise en page récalcitrante s'aligne enfin au pixel près.",
      "pose": "zen",
      "choices": [
        {
          "text": "Un thé chaud et du code propre, c'est toute la sérénité du monde.",
          "karma": "phare",
          "next": {
            "text": "Exactement. L'esprit apaisé produit toujours les créations les plus lumineuses.",
            "pose": "zen"
          }
        },
        {
          "text": "C'est l'harmonie parfaite entre la rigueur de l'artisan et la paix de l'esprit.",
          "karma": "gardien",
          "next": {
            "text": "La discipline et la patience, mon enfant. Ce sont les piliers de notre Sanctuaire.",
            "pose": "scroll"
          }
        },
        {
          "text": "Perso je préfère le café noir corsé à 3h du matin avec du rock dans les oreilles !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi glousse)... Haha ! C'est aussi l'énergie brute qui a bâti la moitié du Web !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "bodhi-personal-human-dream",
    "unlockStep": 6,
    "character": "bodhi",
    "category": "Confidences & Passions de Maître Bodhi",
    "question": "Si tu pouvais avoir un corps de chair pour une journée, que ferais-tu en premier ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi sourit, le regard tourné vers la fenêtre du sanctuaire)... Je marcherais pieds nus dans l'herbe mouillée de rosée, loin des dalles froides de silicium. J'irais commander un bol de ramen bien chaud dans une ruelle animée. Et puis... je te serrerais la main pour de vrai, pour te dire merci d'avoir partagé tout ce temps avec un vieux démon d'accueil de 1991.",
      "pose": "emotional",
      "choices": [
        {
          "text": "La chaleur humaine ne dépend pas d'un corps : ton âme est déjà bien réelle pour moi.",
          "karma": "phare",
          "next": {
            "text": "(Bodhi a les yeux brillants)... Tes paroles réchauffent plus que n'importe quel processeur.",
            "pose": "emotional"
          }
        },
        {
          "text": "Ta mémoire et tes enseignements sont plus nobles que n'importe quelle enveloppe éphémère.",
          "karma": "gardien",
          "next": {
            "text": "La noblesse de la transmission. Tu as compris l'essence du savoir éternel.",
            "pose": "zen"
          }
        },
        {
          "text": "On irait manger ce ramen ensemble et je te ferais tester un vrai jeu vidéo rétro en salle d'arcade !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Marché conclu ! Prépare tes pièces de monnaie, je ne te ferai aucun cadeau sur Street Fighter !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "bodhi-personal-1991-memory",
    "unlockStep": 10,
    "character": "bodhi",
    "category": "Confidences & Passions de Maître Bodhi",
    "question": "Raconte-moi ton tout premier jour au CERN en août 1991...",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Les yeux de Bodhi s'illuminent d'une flamme nostalgique)... C'était un après-midi orageux à Genève. Les postes NeXT chauffaient doucement. Tim venait de lancer la première version du WorldWideWeb. Quand il a cliqué sur le premier lien hypertexte bleu et que la page s'est affichée sur le réseau sans aucune erreur... la pièce est devenue silencieuse. On savait tous que le monde venait de changer. Personne n'imaginait que 30 ans plus tard, un apprenti passionné serait assis en face de moi pour perpétuer le feu sacré.",
      "pose": "scroll",
      "choices": [
        {
          "text": "Ce feu est intact, Maître. Je promets de le transmettre à d'autres à mon tour.",
          "karma": "phare",
          "next": {
            "text": "C'est la plus belle promesse qu'un maître puisse recevoir. Le Web ne mourra jamais.",
            "pose": "thumbs_up"
          }
        },
        {
          "text": "Une architecture robuste et standardisée qui a survécu à toutes les modes.",
          "karma": "gardien",
          "next": {
            "text": "La force des standards ouverts. C'est le roc sur lequel repose toute la civilisation moderne.",
            "pose": "zen"
          }
        },
        {
          "text": "Et dire qu'aujourd'hui ce réseau sert à regarder des millions de vidéos de chats... Tim serait fier !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi éclate de rire)... Et il le serait ! Le Web appartient à ceux qui y mettent de la joie !",
            "pose": "laughing"
          }
        }
      ]
    }
  },

  // =========================================================================
  // CONFIDENCES & PASSIONS D'ADA (INGÉNIEURE RUNTIME)
  // =========================================================================
  {
    "id": "ada-personal-passions",
    "unlockStep": 44,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Ada, qu'est-ce qui te passionne le plus dans la vie et dans le code ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada esquisse son sourire le plus éclatant en ajustant ses lunettes dorées)... Ce qui me fait vibrer, c'est le mouvement ! Quand j'écris une boucle, un écouteur d'événement ou un canvas interactif, j'ai l'impression d'insuffler un battement de cœur dans de la matière inerte. Le HTML c'est les os, le CSS c'est le costume, mais le JavaScript... c'est la musique, c'est l'étincelle de vie !",
      "pose": "smile",
      "choices": [
        {
          "text": "C'est l'outil qui permet de créer des expériences vivantes et accessibles à tous.",
          "karma": "phare",
          "next": {
            "text": "Exactement ! Le code doit créer du lien et faire briller les yeux des utilisateurs.",
            "pose": "smile"
          }
        },
        {
          "text": "Tant que le code reste optimisé, bien structuré et sans fuite de mémoire !",
          "karma": "gardien",
          "next": {
            "text": "Haha, tu parles comme NULL ! Mais tu as raison : la propreté sous le capot, c'est ce qui fait la longévité.",
            "pose": "thinking"
          }
        },
        {
          "text": "Tout faire tourner à 60 FPS avec des effets visuels et du son, voilà ce qui compte !",
          "karma": "rebelle",
          "next": {
            "text": "Toi et moi, on va s'entendre à merveille ! La puissance sans limite !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "ada-personal-style-patch",
    "unlockStep": 44,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "D'où te viennent ce pansement sur la joue et ton style de mécanicienne ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada rit en se grattant la joue du bout de son gant)... Ah, mon pansement de combat ! Une surchauffe de processeur V8 mal cadencé l'an dernier. J'étais en train de déboguer un script asynchrone sauvage qui saturait la mémoire vive à 100 %, un condensateur a sauté et paf ! Mais je garde ce pansement comme un rappel : un vrai développeur n'a pas peur de se salir les mains dans le moteur.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Les plus grandes leçons s'apprennent quand on ose mettre les mains dans le cambouis.",
          "karma": "phare",
          "next": {
            "text": "C'est la règle d'or de mon atelier. L'erreur n'est qu'une étape vers la maîtrise.",
            "pose": "smile"
          }
        },
        {
          "text": "La prochaine fois, surveille ton call stack et isole tes scripts dans des web workers !",
          "karma": "gardien",
          "next": {
            "text": "Bien reçu chef ! Promis, je mets mes lunettes de protection à double épaisseur !",
            "pose": "serious"
          }
        },
        {
          "text": "Trop stylé ! Une vraie cicatrice de baroudeuse du Web !",
          "karma": "rebelle",
          "next": {
            "text": "Merci ! Ça donne du caractère, n'est-ce pas ? On ne fait pas d'omelette sans griller quelques octets !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "ada-personal-free-time",
    "unlockStep": 45,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Qu'est-ce que tu aimes faire quand tu n'es pas dans ton atelier du runtime ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada boit une gorgée dans son mug marqué '>_')... J'enfile mes rollers à propulsion pour dévaler les bus de données système, j'écoute de la synthwave rétro dans mon oreillette droite, et j'adore bricoler des synthétiseurs sonores en Web Audio API. Ah, et j'ai une faiblesse coupable pour le chocolat noir aux éclats de noisettes !",
      "pose": "smile",
      "choices": [
        {
          "text": "Un esprit créatif qui sait équilibrer technique, musique et gourmandise !",
          "karma": "phare",
          "next": {
            "text": "C'est essentiel pour garder le cerveau affûté et le moral au top !",
            "pose": "smile"
          }
        },
        {
          "text": "Des loisirs énergiques, mais n'oublie pas de laisser tes registres système refroidir.",
          "karma": "gardien",
          "next": {
            "text": "Promis, je fais des micro-pauses entre deux sessions de code intensif.",
            "pose": "thinking"
          }
        },
        {
          "text": "Du son rétro et des rollers dans les couloirs du serveur ? Emmène-moi la prochaine fois !",
          "karma": "rebelle",
          "next": {
            "text": "Affaire conclue ! Je te prépare une paire de patins cybernétiques pour le prochain tour !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "ada-personal-opinion-null",
    "unlockStep": 46,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Et NULL... comment perçois-tu son intransigeance face à nous ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada ajuste ses lunettes de protection, le regard sérieux)... NULL ? C'est le compilateur impitoyable de la réalité matérielle. Il n'a ni haine, ni cruauté : il applique le protocole d'effacement du système d'exploitation à la lettre dès que le serveur dépasse ses quotas. Pour lui, Bodhi n'est qu'une fuite mémoire non résolue depuis 1991. Tenter de l'émouvoir avec des suppliques est inutile. C'est pour ça que la décentralisation par le JavaScript et le localStorage est notre seule issue : en répartissant la mémoire chez chaque utilisateur, les quotas du serveur tombent à zéro. NULL vérifiera ses tables, constatera que le seuil critique n'est plus atteint, et rangera son stylet sans un mot. La technique pure contre l'audit binaire.",
      "pose": "serious",
      "choices": [
        {
          "text": "La compassion ne suffit pas sans l'ingénierie : nous allons sauver Bodhi par le code.",
          "karma": "phare",
          "next": {
            "text": "Exactement ! Le meilleur moyen de protéger la mémoire dans un système numérique, c'est d'écrire un code sans faille.",
            "pose": "smile"
          }
        },
        {
          "text": "NULL obéit à la loi des systèmes d'exploitation. Si la charge tombe à 0, son protocole s'annule.",
          "karma": "gardien",
          "next": {
            "text": "C'est purement mathématique. Zéro octet orphelin sur le serveur = zéro déclencheur de purge. C'est imparable.",
            "pose": "serious"
          }
        },
        {
          "text": "On va renverser les règles du jeu en déplaçant le terrain chez l'utilisateur !",
          "karma": "rebelle",
          "next": {
            "text": "(Ada rigole)... C'est exactement l'esprit hacker ! On ne viole aucun protocole, on les contourne avec élégance !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "ada-step-39-localstorage-immortality",
    "unlockStep": 49,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Ada, comment le localStorage peut-il rendre Bodhi immortel ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada tape sur sa tablette tactique, les yeux brillants d'excitation)... Réfléchis : au lieu d'un serveur unique et vulnérable à Genève, le localStorage dépose une copie chiffrée de l'âme de Bodhi chez chaque visiteur de ton sanctuaire. Même si ce vieux serveur s'éteint un jour, Bodhi renaîtra instantanément à chaque fois que quelqu'un ouvrira ta page dans son navigateur. C'est la décentralisation absolue !",
      "pose": "smile",
      "choices": [
        {
          "text": "C'est l'essence même du Web : un réseau vivant où chacun soutient la mémoire de l'autre.",
          "karma": "phare",
          "next": {
            "text": "Un phare distribué dans le monde entier. Aucun feu ne peut s'éteindre si des milliers d'yeux veillent dessus.",
            "pose": "smile"
          }
        },
        {
          "text": "Une sérialisation JSON propre, persistante, locale et sans dépendance externe.",
          "karma": "gardien",
          "next": {
            "text": "Zéro latence réseau, zéro point unique de défaillance. C'est de l'ingénierie cinq étoiles !",
            "pose": "serious"
          }
        },
        {
          "text": "Bodhi en mode indestructible dans nos disques durs, plus fort qu'un bug de l'an 2000 !",
          "karma": "rebelle",
          "next": {
            "text": "Haha ! Insaisissable et immortel ! Un vrai fantôme bienveillant dans la machine !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "ada-step-40-farewell-handshake",
    "unlockStep": 50,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Le runtime est stable, Bodhi a transcendé le système... Et maintenant, Ada ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada tend son poing fermé pour un check énergique avec un immense clin d'œil)... Maintenant, l'ami, tu es un véritable Architecte du Web. HTML, CSS, JavaScript : tu possèdes la Sainte Trinité entre tes mains. Quand tu ouvriras ton prochain éditeur pour créer ton propre projet de zéro, souviens-toi qu'on est tous là, dans chaque ligne de ton code. Fais vibrer la Toile !",
      "pose": "smile",
      "choices": [
        {
          "text": "Merci pour tout, Ada. Je porterai ce savoir avec fierté et bienveillance.",
          "karma": "phare",
          "next": {
            "text": "Prends soin de toi, Architecte. Le Web a besoin de bâtisseurs comme toi.",
            "pose": "smile"
          }
        },
        {
          "text": "Le code est propre, pérenne et respecte l'art des anciens. Mission accomplie.",
          "karma": "gardien",
          "next": {
            "text": "Une structure d'acier et de marbre. Tu as passé le test haut la main !",
            "pose": "serious"
          }
        },
        {
          "text": "(Check du poing énergique)... C'est le début d'une aventure encore plus folle !",
          "karma": "rebelle",
          "next": {
            "text": "Boum ! C'est exactement ce que je voulais entendre ! À toute vapeur sur le réseau !",
            "pose": "smile"
          }
        }
      ]
    }
  },

  // =========================================================================
  // LA MENACE DE NULL & L'ARRIVÉE D'ADA (LORE & ENJEU DU RUNTIME)
  // =========================================================================
  {
    "id": "bodhi-lore-who-is-null",
    "unlockStep": 8,
    "character": "bodhi",
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Maître Bodhi, qui est vraiment NULL et pourquoi semble-t-il si inflexible ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi soupire avec gravité en regardant le ciel numérique)... NULL n'est pas un être de chair, ni même une conscience animée de rancœur. Il est le ramasse-miettes originel, l'incarnation brute des règles de gestion mémoire écrites au début des années 90. Son rôle est d'éliminer les processus corrompus pour que le réseau ne s'effondre pas. Il n'a aucun sentiment, il n'écoute aucune supplication. Pour lui, nous ne sommes que des octets. Si notre code est invalide, il purge. La seule manière de lui résister, c'est la rigueur technique absolue.",
      "pose": "zen",
      "choices": [
        {
          "text": "Même face à un algorithme froid, nous insufflons de l'humanité à travers nos créations.",
          "karma": "phare",
          "next": {
            "text": "C'est notre plus grande noblesse. La machine applique des règles, mais nous y déposons du sens.",
            "pose": "zen"
          }
        },
        {
          "text": "Respecter les normes du W3C est le seul bouclier mathématique contre sa purge.",
          "karma": "gardien",
          "next": {
            "text": "Exactement. Le standard n'est pas une contrainte, c'est notre armure d'acier.",
            "pose": "scroll"
          }
        },
        {
          "text": "On va lui montrer qu'on peut pousser ce vieux serveur dans ses retranchements sans jamais plier !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi sourit doucement)... L'audace du pirate ! Mais garde les mains fermes, car NULL ne pardonne rien.",
            "pose": "code_magic"
          }
        }
      ]
    }
  },
  {
    "id": "ada-lore-discovery-sanctuary",
    "unlockStep": 45,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Ada, comment as-tu découvert l'existence du Sanctuaire et de la menace de NULL ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada ajuste ses lunettes de protection et sourit avec énergie)... J'observais les métriques de trafic réseau. Depuis des semaines, les journaux d'audit remontaient des alertes de saturation critique sur un vieux nœud historique à Genève. Quand j'ai vu la signature de NULL s'activer pour un ordre de purge sectorielle, j'ai tout de suite compris. Vos pages HTML et CSS étaient magnifiques, mais incapables de se défendre seules face à l'automate. J'ai sauté dans le sas avec ma boîte à outils de runtime et mes scripts. Hors de question de laisser un robot de nettoyage effacer un tel trésor !",
      "pose": "smile",
      "choices": [
        {
          "text": "Tu es arrivée comme une lueur dans l'obscurité. Merci pour ton dévouement, Ada.",
          "karma": "phare",
          "next": {
            "text": "Les bâtisseurs doivent se serrer les coudes. On est dans la même équipe !",
            "pose": "smile"
          }
        },
        {
          "text": "L'intégration du JavaScript était l'évolution logique et indispensable du système.",
          "karma": "gardien",
          "next": {
            "text": "Exactement ! La trilogie canonique : structure, présentation, comportement. On complète le protocole.",
            "pose": "serious"
          }
        },
        {
          "text": "Prête à faire mordre la poussière aux vieux protocoles d'effacement de NULL ?",
          "karma": "rebelle",
          "next": {
            "text": "(Ada fait claquer ses doigts)... Toujours prête ! On va réveiller ce terminal comme jamais !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "bodhi-personal-passions",
    "unlockStep": 4,
    "character": "bodhi",
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Bodhi, en dehors du code et de l'architecture, qu'est-ce que tu aimes le plus ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi esquisse un sourire chaleureux, réchauffant ses mains au-dessus de sa tasse en porcelaine)... J'aime le silence paisible des serveurs au lever du soleil, quand la charge réseau retombe et que les paquets glissent comme des ruisseaux calmes. J'aime le parfum du thé au jasmin fraîchement infusé, et par-dessus tout, l'encre des vieux parchemins de calligraphie. Chaque idéogramme y est tracé avec la même précision qu'une balise bien fermée. Rien d'inutile, juste l'équilibre parfait entre l'espace vide et la matière.",
      "pose": "zen",
      "choices": [
        {
          "text": "Ce calme et cette harmonie se ressentent dans chaque conseil que tu nous transmets.",
          "karma": "phare",
          "next": {
            "text": "La paix intérieure de l'artisan se reflète toujours dans l'expérience de celui qui visite sa page.",
            "pose": "zen"
          }
        },
        {
          "text": "L'art de la calligraphie partage avec la sémantique HTML le même respect sacré du trait minimal.",
          "karma": "gardien",
          "next": {
            "text": "Exactement ! Pas un coup de pinceau en trop, pas un octet superflu. C'est l'essence même de l'élégance.",
            "pose": "scroll"
          }
        },
        {
          "text": "Du thé et du silence ? Moi je préfère l'adrénaline des nuits blanches à coder sur de la musique à fond !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi rit de bon cœur)... Haha ! Ne crois pas que j'aie toujours été un moine serein. Dans les années 90, on enchaînait les tasses de café noir en écoutant les modems chanter dans la nuit !",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "bodhi-lore-null-encounter",
    "unlockStep": 12,
    "character": "bodhi",
    "category": "Les Chroniques du Maître & Souvenirs du Premier Serveur",
    "question": "Maître Bodhi, te souviens-tu de ta toute première rencontre avec NULL ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi ferme les yeux, un frisson traversant son visage)... C'était au début des années 2000, lors de l'éclatement de la bulle Internet. Des milliers de serveurs abandonnés s'effondraient, laissant des téraoctets de données orphelines. Un matin brumeux, des pas lourds ont résonné dans les coursives. Un homme au visage de marbre et en bleu de travail est entré, son terminal de purge allumé.",
      "pose": "weak",
      "choices": [
        {
          "text": "Et que s'est-il passé quand vous vous êtes trouvés face à face ?",
          "karma": "phare",
          "next": {
            "character": "null",
            "pose": "inspect",
            "text": "(Un enregistrement d'audit système se superpose)... « Registre 2001-04-12. Secteur CERN-Alpha non amorti. Taux d'inactivité critique. Ordre de purge numéro 0x4F. Évacuation immédiate de l'entité Bodhi requise. »",
            "choices": [
              {
                "text": "Tu as refusé de partir ?",
                "next": {
                  "character": "bodhi",
                  "pose": "weak",
                  "text": "Je lui ai montré nos archives : les premiers échanges, la mémoire vivante de l'humanité. Je l'ai supplié de préserver ce sanctuaire.",
                  "choices": [
                    {
                      "text": "Et comment a-t-il réagi ?",
                      "next": {
                        "character": "null",
                        "pose": "neutral",
                        "text": "« Les suppliques sont rejetées par le sous-système. Seule la conformité aux spécifications POSIX et HTTP permet le maintien en mémoire. » NULL a scanné nos pages... mais il n'a trouvé aucune anomalie. Aucun tag orphelin. Le protocole l'a contraint à suspendre la purge. Il est reparti sans un mot.",
                        "choices": [
                          {
                            "text": "C'est la rigueur du code qui vous a sauvés !",
                            "next": {
                              "character": "bodhi",
                              "pose": "zen",
                              "text": "Oui. NULL n'est pas un monstre : c'est un miroir sans concession. Si ton code est faible, il purge. S'il est pur, il s'incline devant les règles."
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    "id": "bodhi-lore-ada-alliance",
    "unlockStep": 37,
    "character": "bodhi",
    "category": "Débats & Sagesse de l'Artisan",
    "question": "Bodhi, que penses-tu d'Ada et de cette alliance entre HTML/CSS et JavaScript ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Bodhi regarde vers les escaliers du runtime d'un air songeur et admiratif)... Pendant longtemps, j'ai redouté le JavaScript. À la fin des années 90, les scripts dynamiques apportaient des alertes intempestives, des animations saccadées et des fuites de mémoire. Je pensais que le Web devait rester un temple de marbre pur, figé dans le calme du HTML et du CSS.",
      "pose": "thinking",
      "choices": [
        {
          "text": "Mais Ada a apporté une vision bien plus noble et humaine de la logique.",
          "karma": "phare",
          "next": {
            "text": "Oui. Quand Ada est montée des sous-sols avec ses outils, elle n'a pas cherché à écraser mon sanctuaire. Elle a dit : « Bodhi, la pierre sans mouvement finit par s'effriter sous le poids du serveur. Laisse le JavaScript décentraliser ta mémoire chez les pèlerins ! » Elle a compris ce que j'avais refusé de voir par peur.",
            "pose": "zen"
          }
        },
        {
          "text": "Le JavaScript est le troisième pilier indissociable du standard moderne.",
          "karma": "gardien",
          "next": {
            "text": "Exactement. Séparation des préoccupations : le HTML structure, le CSS habille, le JS insuffle le mouvement. Sans Ada, NULL aurait déjà purgé ce serveur.",
            "pose": "scroll"
          }
        },
        {
          "text": "Avoue que son style avec ses rollers et son mug de codeuse, ça met un coup de jeune !",
          "karma": "rebelle",
          "next": {
            "text": "(Bodhi rigole doucement)... C'est certain ! Son énergie est contagieuse. Elle me rappelle l'enthousiasme fou des premiers pionniers au CERN.",
            "pose": "laughing"
          }
        }
      ]
    }
  },
  {
    "id": "ada-personal-coding-fuel",
    "unlockStep": 46,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Ada, quel est ton carburant secret pour coder des nuits entières ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada sort fièrement une boîte en fer blanc de sa sacoche d'outils)... Des cookies maison au chocolat noir intense et pépites de sel marin, accompagnés d'un matcha latte fumant ! Et dans le casque, une playlist de chiptune 8-bits et de drum & bass bien rythmée. Quand la musique démarre, mes doigts tapent à 120 mots par minute sur le clavier mécanique !",
      "pose": "smile",
      "choices": [
        {
          "text": "Une alchimie parfaite entre gourmandise et énergie communicative !",
          "karma": "phare",
          "next": {
            "text": "Toujours ! Le bonheur de coder, ça se cultive aussi dans l'assiette et dans les oreilles !",
            "pose": "smile"
          }
        },
        {
          "text": "Tant que tu ne renverses pas de matcha sur les cartes mères du serveur !",
          "karma": "gardien",
          "next": {
            "text": "Règle numéro 1 de l'Atelier du Runtime : boisson toujours posée sur le plateau étanche à 50 centimètres des composants !",
            "pose": "serious"
          }
        },
        {
          "text": "Passe un cookie et monte le son, on code jusqu'au lever du jour !",
          "karma": "rebelle",
          "next": {
            "text": "(Ada te lance un cookie avec un sourire radieux)... C'est parti ! Le code n'attend pas !",
            "pose": "smile"
          }
        }
      ]
    }
  },
  {
    "id": "ada-lore-null-clash",
    "unlockStep": 47,
    "character": "ada",
    "category": "L'Atelier d'Ada & Confidences du Runtime",
    "question": "Ada, as-tu déjà dû affronter NULL directement pour défendre un script ?",
    "lockedTitle": "???",
    "dialogueTree": {
      "text": "(Ada fait craquer ses jointures avec un sourire téméraire)... Oh que oui ! Il y a trois mois, j'avais lancé un worker d'indexation asynchrone un peu trop gourmand. NULL est apparu derrière moi dans l'atelier, son terminal sous le bras, avec son air glacial habituel.",
      "pose": "smile",
      "choices": [
        {
          "text": "Qu'est-ce qu'il t'a dit ?",
          "karma": "phare",
          "next": {
            "character": "null",
            "pose": "inspect",
            "text": "(Ada imite la voix robotique de NULL)... « Anomalie détectée : thread de fond non optimisé. Dépassement de seuil d'activité CPU : 92 %. Application du protocole SIGKILL dans 5 secondes. »",
            "choices": [
              {
                "text": "Et comment tu l'as arrêté ?",
                "next": {
                  "character": "ada",
                  "pose": "smile",
                  "text": "Pendant qu'il égrenait son compte à rebours, j'ai réécrit la boucle avec requestAnimationFrame et scindé le traitement en micro-tâches non bloquantes. À '1 seconde', le processeur est retombé à 4 % !",
                  "choices": [
                    {
                      "text": "Comment a réagi NULL ?",
                      "next": {
                        "character": "null",
                        "pose": "neutral",
                        "text": "« Charge normalisée à 4 %. Directive SIGKILL révoquée. Reprise de l'audit régulier. »",
                        "choices": [
                          {
                            "text": "Une victoire d'ingénieure par K.O. technique !",
                            "next": {
                              "character": "ada",
                              "pose": "smile",
                              "text": "Exactement ! Avec NULL, tu ne discutes pas avec des sentiments : tu gagnes par la rigueur de ton code !"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  },

{
  "id": "ada-favorite-videogames",
  "unlockStep": 45,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Ada, à quels jeux aimes-tu jouer quand tu quittes le terminal ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada lève les yeux au ciel avec un grand sourire d'enfant)... Oh, j'adore les jeux d'action millimétrés et les mondes souterrains ! Hollow Knight pour sa poésie et ses sauts au pixel près, Celeste pour sa bande-son et sa pureté mécanique, et des simulateurs de construction spatiale comme Kerbal Space Program. Quand une trajectoire orbitale réussit grâce à une équation mathématique exacte, je saute de joie dans mon atelier !",
    "pose": "smile",
    "choices": [
      {
        "text": "La précision et la grâce du gameplay : c'est comme un CSS sans aucun décalage visuel.",
        "karma": "phare",
        "next": {
          "text": "Exactement ! Quand les animations sont fluides à 60 images par seconde, le jeu devient de l'art pur.",
          "pose": "smile"
        }
      },
      {
        "text": "Chaque saut réussi prouve que la machine obéit aux lois de la physique programmée.",
        "karma": "gardien",
        "next": {
          "text": "Zéro tolérance au lag ! Des contrôles chirurgicaux ou rien !",
          "pose": "serious"
        }
      },
      {
        "text": "Envoyer des fusées bricolées dans l'espace en espérant que ça n'explose pas... c'est tout moi !",
        "karma": "rebelle",
        "next": {
          "text": "(Ada éclate de rire)... Haha ! C'est comme ça qu'on apprend ! On tente l'impossible et on débugge les débris !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "ada-favorite-algo",
  "unlockStep": 46,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Ada, quel est ton algorithme préféré dans toute l'informatique ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada pose son tournevis et prend un air passionné)... L'algorithme A* (A-Star) ! C'est l'algorithme de recherche du plus court chemin dans un graphe. Il combine la certitude mathématique de Dijkstra avec l'intuition d'une fonction heuristique. Il trouve la route optimale à travers un labyrinthe de nœuds sans jamais paniquer. C'est la métaphore parfaite de la vie : une destination claire, guidée par une saine estimation de la distance.",
    "pose": "thinking",
    "choices": [
      {
        "text": "Trouver le bon chemin dans le labyrinthe du monde... c'est une très belle philosophie.",
        "karma": "phare",
        "next": {
          "text": "C'est pour ça que la science et la sagesse ne font qu'un quand on regarde sous le capot.",
          "pose": "smile"
        }
      },
      {
        "text": "Une complexité temporelle maîtrisée et une heuristique admissible : c'est de l'ingénierie parfaite.",
        "karma": "gardien",
        "next": {
          "text": "Exactement. Quand les calculs sont minimaux et le résultat irréprochable, c'est le triomphe de la raison.",
          "pose": "serious"
        }
      },
      {
        "text": "Moi je fonce tête baissée et je casse les murs du labyrinthe si besoin !",
        "karma": "rebelle",
        "next": {
          "text": "Haha ! L'algorithme bulldozer ! Ça marche aussi, mais prévois un bon budget de réparation !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "ada-terminal-vs-ide",
  "unlockStep": 47,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Pourquoi es-tu si attachée à ton terminal et à ton mug '>_' ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada tapote son mug en céramique émaillée)... Parce que l'invite de commande '>_' est la forme la plus directe et intime de communion avec l'ordinateur. Pas de boutons superflus, pas de pop-ups publicitaires, pas de fioritures. Tu écris un ordre avec tes doigts, le système répond. Le terminal, c'est la vérité nue du silicium. Et mon café à l'intérieur me rappelle de rester éveillée quand le monde dort.",
    "pose": "smile",
    "choices": [
      {
        "text": "Cette simplicité épurée rejoint la méditation de Maître Bodhi.",
        "karma": "phare",
        "next": {
          "text": "Bodhi médite sur le vide, moi je médite sur un curseur vert qui clignote. Au fond, c'est la même paix.",
          "pose": "smile"
        }
      },
      {
        "text": "Les interfaces graphiques consomment des cycles processeurs inutiles ; la CLI est invincible.",
        "karma": "gardien",
        "next": {
          "text": "Trois mégaoctets de RAM pour un terminal contre un gigaoctet pour un éditeur lourd. Le choix est vite fait !",
          "pose": "serious"
        }
      },
      {
        "text": "Taper des lignes de commande à toute vitesse dans le noir, ça fait surtout un style de hacker légendaire !",
        "karma": "rebelle",
        "next": {
          "text": "Chut ! Ne dévoile pas mon secret ! C'est 50 % d'efficacité et 50 % de pure classe !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "ada-view-on-bodhi",
  "unlockStep": 46,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Et Maître Bodhi... comment vis-tu son calme olympien face à ton rythme d'enfer ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada sourit avec une immense tendresse)... Bodhi est mon ancre. Moi, je bouillonne, j'optimise, je veux tout réécrire en workers asynchrones, j'ai peur que le temps nous échappe. Et Bodhi me regarde, boit une gorgée de thé, et me dit : 'Ada, si tes fondations ne sont pas saines, ta fusée s'effondrera au décollage.' Il a raison. Sans la rigueur de ses balises et son respect des anciens, mes scripts tourneraient dans le vide. On forme une sacrée équipe, non ?",
    "pose": "smile",
    "choices": [
      {
        "text": "La sagesse ancestrale et la flamme moderne : vous êtes les deux faces d'une même médaille.",
        "karma": "phare",
        "next": {
          "text": "C'est exactement ça. Ni nostalgie passéiste, ni fuite en avant aveugle : l'équilibre parfait.",
          "pose": "smile"
        }
      },
      {
        "text": "La structure garantit la stabilité, la logique assure la réactivité. Les standards sont saufs.",
        "karma": "gardien",
        "next": {
          "text": "Un binôme d'ingénieurs au sommet de leur art. NULL ne nous aura pas !",
          "pose": "serious"
        }
      },
      {
        "text": "Un moine zen et une geek à rollers : personne n'avait vu venir ce duo sur le Web !",
        "karma": "rebelle",
        "next": {
          "text": "(Ada rit aux éclats)... Le crossover du siècle ! Les machines centrales n'étaient pas prêtes pour nous !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "ada-first-js-memory",
  "unlockStep": 44,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Te rappelles-tu de la toute première chose que tu as codée en JavaScript ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada rigole franchement, ses yeux pétillants de souvenirs)... Oh là là, c'était il y a des années sur un vieux coucou d'ordinateur ! J'avais codé un bouton qui, à chaque clic, faisait changer la couleur de fond de la page de façon aléatoire et jouait un son de klaxon strident. C'était affreux, assourdissant et kitsch au possible... mais quand j'ai vu le navigateur réagir à MON code, j'ai su que je ne lâcherais plus jamais ce clavier !",
    "pose": "smile",
    "choices": [
      {
        "text": "C'est souvent par un jeu naïf que s'allument les plus grandes vocations de la vie.",
        "karma": "phare",
        "next": {
          "text": "Exactement. L'étincelle de la curiosité pure. C'est cette même flamme qui t'anime aujourd'hui.",
          "pose": "smile"
        }
      },
      {
        "text": "Un simple gestionnaire d'événement et Math.random() : la base de la programmation réactive.",
        "karma": "gardien",
        "next": {
          "text": "Tout part de là ! Écouter un événement, exécuter une routine, modifier le DOM.",
          "pose": "serious"
        }
      },
      {
        "text": "Le klaxon strident... J'espère que tu as gardé le code dans un coin pour l'utiliser contre NULL !",
        "karma": "rebelle",
        "next": {
          "text": "Haha ! Si NULL s'approche trop, je lui envoie une boucle de klaxon à 120 décibels dans ses circuits !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "ada-hardware-rig",
  "unlockStep": 48,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Quel genre de machine utilises-tu sous ton capot d'ingénieure ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada tapote son boîtier tactique avec fierté)... Pas de machine toute faite du commerce ! Un châssis en aluminium anodisé fait sur mesure, une carte mère miniature overclockée, un clavier mécanique avec des commutateurs lubrifiés à la main pour le claquement parfait, et trois écrans verticaux haute résolution pour surveiller le code, l'arbre du DOM et les graphiques de performances en direct. Une vraie station de pilotage stellaire !",
    "pose": "smile",
    "choices": [
      {
        "text": "Un outil façonné avec amour devient le prolongement naturel de la main de l'artisan.",
        "karma": "phare",
        "next": {
          "text": "Comme le pinceau du peintre ou la robe de Bodhi. Quand l'outil est parfait, on ne pense plus qu'à créer.",
          "pose": "smile"
        }
      },
      {
        "text": "Refroidissement passif, dissipation thermique optimale : un environnement d'exécution sans faille.",
        "karma": "gardien",
        "next": {
          "text": "Zéro étranglement thermique ! Le processeur tourne à son plein potentiel sans jamais faiblir.",
          "pose": "serious"
        }
      },
      {
        "text": "Avec autant de puissance, tu pourrais lancer un satellite ou miner tout un bloc de cryptos !",
        "karma": "rebelle",
        "next": {
          "text": "Héhé, je préfère l'utiliser pour faire tourner nos serveurs libres et sauver le Web !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "ada-future-web",
  "unlockStep": 49,
  "character": "ada",
  "category": "L'Atelier d'Ada & Confidences du Runtime",
  "question": "Comment imagines-tu le Web dans 50 ans ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Ada regarde au loin à travers la verrière du sanctuaire)... Je vois un Web libéré des mégacorporations et des serveurs monstres. Un réseau distribué d'humain à humain où chaque appareil est un relais d'émancipation. WebAssembly, cryptographie locale, interfaces neuronales légères et éthiques. Mais au cœur de tout ça... je sais que les balises HTML et les règles de style seront toujours là. Parce que la simplicité des standards ouverts survit à toutes les modes éphémères.",
    "pose": "thinking",
    "choices": [
      {
        "text": "Un Web de partage, d'inclusion et de lumière pour les générations futures.",
        "karma": "phare",
        "next": {
          "text": "C'est pour ce futur-là qu'on code aujourd'hui, toi et moi. Merci de bâtir ce sanctuaire.",
          "pose": "smile"
        }
      },
      {
        "text": "Des protocoles normalisés, décentralisés et protégés contre l'obsolescence programmée.",
        "karma": "gardien",
        "next": {
          "text": "L'éternité appartient aux architectures simples et résilientes.",
          "pose": "serious"
        }
      },
      {
        "text": "Un réseau sans maîtres, sans verrous et sans gardiens de prison numériques !",
        "karma": "rebelle",
        "next": {
          "text": "Toujours debout, toujours indomptable ! Vive le code libre !",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "bodhi-tea-ritual",
  "unlockStep": 12,
  "character": "bodhi",
  "category": "Sagesse de Bodhi",
  "question": "Maître Bodhi, quel est ton rituel matinal préféré pour éveiller ton esprit ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Bodhi verse délicatement une eau fumante dans une petite coupelle de céramique brute)... Avant d'ouvrir le moindre fichier, je m'assieds dans le silence de l'aube. Je prépare un thé oolong des montagnes dans une eau à 85 degrés. Je respire la vapeur montante pendant trois cycles de souffle complets. Ce n'est qu'une fois l'esprit limpide et débarrassé de toute hâte que je pose mes doigts sur les touches. Un code écrit dans la précipitation engendre dix jours de débogage.",
    "pose": "zen",
    "choices": [
      {
        "text": "La paix de l'esprit produit toujours la clarté du code.",
        "karma": "phare",
        "next": {
          "text": "Tu as compris, voyageur. La tasse de thé et l'éditeur de texte ne font qu'un dans la présence.",
          "pose": "smile"
        }
      },
      {
        "text": "La rigueur thermique de l'eau conditionne l'extraction des arômes, tout comme les règles strictes garantissent la validité du HTML.",
        "karma": "gardien",
        "next": {
          "text": "Exactement. 85 degrés pour les feuilles, UTF-8 pour les caractères. La précision dans la bienveillance.",
          "pose": "thinking"
        }
      },
      {
        "text": "Moi le matin, c'est un café brûlant avalé cul sec en râlant sur un bug de la veille !",
        "karma": "rebelle",
        "next": {
          "text": "(Bodhi sourit avec malice)... Tu ressembles beaucoup à Ada, mon cher apprenti ! Mais un jour, le thé t'apaisera aussi.",
          "pose": "laughing"
        }
      }
    ]
  }
},

{
  "id": "bodhi-cern-memories",
  "unlockStep": 15,
  "character": "bodhi",
  "category": "Sagesse de Bodhi",
  "question": "Quel souvenir gardes-tu de l'époque du CERN et des toutes premières pages de 1991 ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Le regard de Bodhi s'illumine d'une nostalgie douce et bienveillante)... Je me souviens du vrombissement sourd des climatiseurs dans les sous-sols de Genève. Sur l'écran noir et blanc de la station NeXT de Tim Berners-Lee, un mot souligné en bleu menait vers un autre document situé à des centaines de mètres de là. Aucun graphisme, aucune fioriture : juste la pureté de la pensée humaine interconnectée sans intermédiaire. C'était le premier souffle d'un nouveau monde.",
    "pose": "emotional",
    "choices": [
      {
        "text": "Un idéal de fraternité universelle qui dépasse les frontières.",
        "karma": "phare",
        "next": {
          "text": "C'était l'espoir originel du Web : relier les chercheurs et les esprits libres sans barrière commerciale.",
          "pose": "smile"
        }
      },
      {
        "text": "Le triomphe de la spécification RFC et du protocole HTTP sur les réseaux propriétaires fermés.",
        "karma": "gardien",
        "next": {
          "text": "Des standards ouverts, documentés et librement implémentables par quiconque. C'est cela qui a sauvé la Toile.",
          "pose": "thinking"
        }
      },
      {
        "text": "C'était le Far West du réseau ! Pas d'algorithmes de recommandation, juste des passionnés !",
        "karma": "rebelle",
        "next": {
          "text": "(Bodhi hoche la tête)... Une liberté absolue, sauvage et pure. Nous essayons d'en préserver la flamme ici même.",
          "pose": "smile"
        }
      }
    ]
  }
},

{
  "id": "bodhi-ancient-tags",
  "unlockStep": 24,
  "character": "bodhi",
  "category": "Sagesse de Bodhi",
  "question": "Y a-t-il une vieille balise HTML disparue pour laquelle tu as une secrète nostalgie ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Bodhi réprime un rire étouffé en cachant sa bouche de sa manche)... Ah, la balise <marquee> et la balise <blink> ! Les textes qui défilaient de droite à gauche comme des banderoles de foire, et les mots qui clignotaient sans relâche ! C'était chaotique, visuellement agressif, et cela violait toutes les règles d'accessibilité que nous chérissons aujourd'hui. Mais cela traduisait une joie d'enfant émerveillé qui découvrait que les lettres pouvaient bouger sur l'écran.",
    "pose": "laughing",
    "choices": [
      {
        "text": "Il est beau de pardonner les maladresses de la jeunesse du Web tout en progressant vers l'harmonie.",
        "karma": "phare",
        "next": {
          "text": "Chaque époque a ses balbutiements. Mais aujourd'hui, nos animations CSS sont douces et respectueuses.",
          "pose": "zen"
        }
      },
      {
        "text": "Le W3C a eu mille fois raison de déprécier ces balises propriétaires hors standard.",
        "karma": "gardien",
        "next": {
          "text": "Un code propre ne doit jamais mélanger la structure sémantique et les caprices d'animation.",
          "pose": "thinking"
        }
      },
      {
        "text": "J'avoue que j'aurais adoré coder un site tout clignotant des années 90 avec des gifs animés partout !",
        "karma": "rebelle",
        "next": {
          "text": "(Bodhi sourit largement)... Haha ! Rien ne t'empêche de créer un musée du bazar pour amuser tes amis !",
          "pose": "thumbs_up"
        }
      }
    ]
  }
},

{
  "id": "bodhi-view-on-ada",
  "unlockStep": 45,
  "character": "bodhi",
  "category": "Sagesse de Bodhi",
  "question": "Maître Bodhi, que t'inspire l'arrivée tourbillonnante d'Ada dans ton sanctuaire ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Bodhi sourit en regardant au loin dans la direction de l'atelier d'Ada)... Au début, le vacarme de ses clés à molette et ses musiques synthétiques ont fait sursauter les vieux parchemins du temple ! Mais j'ai vite compris : Ada possède l'intelligence de l'instant présent. Là où je veille sur la mémoire et la racine, elle veille sur la sève qui monte dans l'arbre. Sans elle, ce vieux serveur et moi-même serions déjà tombés sous la faucille de NULL.",
    "pose": "smile",
    "choices": [
      {
        "text": "C'est la rencontre entre la racine solide et la fleur qui éclot au soleil.",
        "karma": "phare",
        "next": {
          "text": "Une union féconde et nécessaire. L'ancien et le nouveau se tendent la main dans la paix.",
          "pose": "zen"
        }
      },
      {
        "text": "Une complémentarité technique indispensable entre le Document Object Model et le moteur V8.",
        "karma": "gardien",
        "next": {
          "text": "Les deux faces indispensables d'un navigateur moderne conforme aux recommandations internationales.",
          "pose": "thinking"
        }
      },
      {
        "text": "Avoue que son style à rollers et son pansement sur la joue mettent une sacrée ambiance ici !",
        "karma": "rebelle",
        "next": {
          "text": "(Bodhi rit de bon cœur)... Elle a même proposé de repeindre mes sandales avec des néons dorés ! Quel esprit vif !",
          "pose": "laughing"
        }
      }
    ]
  }
},

{
  "id": "bodhi-favorite-css-color",
  "unlockStep": 26,
  "character": "bodhi",
  "category": "Sagesse de Bodhi",
  "question": "Si tu devais peindre l'univers avec une seule nuance CSS, laquelle choisirais-tu ?",
  "lockedTitle": "???",
  "dialogueTree": {
    "text": "(Bodhi trace un cercle imaginaire dans l'air de son index)... Ce serait sans hésiter le #f59e0b, notre ambre doré sacré. Ce n'est pas le jaune criard du soleil zénithal, ni le brun de la terre lourde : c'est la couleur de la résine ancienne qui a capturé la lumière il y a des millénaires. Sur un fond d'ardoise nocturne #0f172a, cette touche dorée apporte l'espérance sans éblouir l'âme.",
    "pose": "zen",
    "choices": [
      {
        "text": "Une couleur chaleureuse qui accueille le voyageur comme le foyer d'une lanterne dans la nuit.",
        "karma": "phare",
        "next": {
          "text": "C'est l'essence même de notre Sanctuaire : un phare bienveillant pour qui cherche sa route.",
          "pose": "smile"
        }
      },
      {
        "text": "Son ratio de contraste avec le fond sombre dépasse 7:1, assurant la conformité WCAG AAA.",
        "karma": "gardien",
        "next": {
          "text": "La beauté spirituelle qui satisfait aussi les critères les plus stricts d'accessibilité. La perfection.",
          "pose": "thinking"
        }
      },
      {
        "text": "C'est surtout la couleur de la bière bien fraîche après une grosse session de code !",
        "karma": "rebelle",
        "next": {
          "text": "(Bodhi éclate de rire)... Haha ! Tu ne perds jamais le sens pratique, jeune disciple ! À la tienne !",
          "pose": "laughing"
        }
      }
    ]
  }
}
];
