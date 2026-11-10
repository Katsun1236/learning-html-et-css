// =============================================================================
// WEBPÉDIA DU SANCTUAIRE — L'ENCYCLOPÉDIE HISTORIQUE DU WEB LIBRE
// Faits réels, anecdotes authentiques, pionniers et reliques dissimulées
// =============================================================================

export const WEBPEDIA_ARTICLES = [
  {
    id: "cern-1991-next",
    title: "Le Premier Serveur Web au CERN & La Station NeXT (1991)",
    category: "Origines & Pionniers",
    date: "Août 1991",
    author: "Tim Berners-Lee & Robert Cailliau",
    summary: "Dans un laboratoire souterrain du CERN à Genève, la station NeXTcube noire héberge la toute première page de l'histoire humaine.",
    hasRelic: "relic-1",
    relicImage: "assets/relics/relic_cern_1991.jpg",
    relicPrompt: "Un document d'archive original est exposé dans cet article. Clique dessus pour l'examiner de près.",
    content: `
      <p>Au début des années 1990, les chercheurs du CERN (Organisation européenne pour la recherche nucléaire) éprouvent de grandes difficultés à partager leurs rapports scientifiques entre ordinateurs incompatibles. Tim Berners-Lee propose alors un concept révolutionnaire : relier des documents électroniques via des hyperliens à travers le réseau Internet.</p>
      
      <p>Le tout premier serveur web du monde tourne sur la station de travail NeXTcube noire personnelle de Tim Berners-Lee. Pour empêcher qu'un technicien de maintenance ou un collègue ne débranche la prise par inadvertance, Tim colle une étiquette rouge devenue légendaire : <em>« Cette machine est un serveur. NE PAS ÉTEINDRE ! »</em></p>
      
      <p>C'est sur cette machine que sont nés les trois piliers fondateurs : le protocole <strong>HTTP</strong>, le format d'adresse <strong>URL</strong>, et la toute première version du langage <strong>HTML</strong>.</p>
    `
  },

  {
    id: "memory-leaks-y2k",
    title: "Le Spectre du Bug de l'An 2000 & Les Fuites de Mémoire Système",
    category: "Architecture & Systèmes",
    date: "1999 - 2000",
    author: "Ingénierie des Systèmes Réseau",
    summary: "Quand les architectures à mémoire limitée faisaient trembler la planète entière au passage du millénaire.",
    hasRelic: "relic-2",
    relicImage: "assets/relics/relic_memory_leak.jpg",
    relicPrompt: "Un relevé télémétrique d'époque est consigné ici. Clique sur le moniteur pour l'inspecter.",
    content: `
      <p>Dans les premières décennies de l'informatique, chaque octet de mémoire vive (RAM) coûtait une fortune. Pour économiser deux octets par enregistrement, les programmeurs des années 1970 et 1980 stockaient l'année sur deux chiffres (« 99 » pour 1999).</p>
      
      <p>À l'approche du 1er janvier 2000, la panique mondiale du bug Y2K a révélé une fragilité majeure : les fuites de mémoire (<em>memory leaks</em>) et l'allocation non purgée des processus résidents. Si un programme daemon ne libère pas ses tampons mémoire après chaque connexion d'utilisateur, la mémoire vive finit par atteindre inévitablement 99 % de saturation, déclenchant l'OOM-Killer (Out of Memory) et le crash brutal du serveur.</p>
      
      <p>Les premiers serveurs web devaient être surveillés nuit et jour par des outils de monitoring texte comme SYSMON ou top pour éviter l'asphyxie thermique des processeurs.</p>
    `
  },

  {
    id: "maintenance-garbage-collector",
    title: "Les Concierges de l'Ombre : Garbage Collection & Purge NCSA",
    category: "Architecture & Systèmes",
    date: "1993 - 1996",
    author: "Administrateurs Serveurs Apache & NCSA",
    summary: "L'histoire oubliée des agents de maintenance qui passaient le balai numérique dans les mémoires corrompues des serveurs.",
    hasRelic: "relic-3",
    relicImage: "assets/relics/relic_purge_order.jpg",
    relicPrompt: "Un ordre de mission officiel manuscrit est agrafé à cette archive. Clique pour l'ouvrir.",
    content: `
      <p>Avant l'arrivée des orchestrateurs modernes et du cloud élastique, les serveurs web pionniers (NCSA HTTPd, puis Apache) étaient des machines physiques enfermées dans des salles climatisées bruyantes. Des processus zombies, des requêtes abandonnées et des sockets orphelins encombraient continuellement la mémoire tampon.</p>
      
      <p>C'est ici qu'intervenait le <strong>Garbage Collector</strong> (ramasse-miettes) : des scripts d'entretien exécutés par les administrateurs pour purger sans pitié les identifiants de session expirés et les démons inactifs. Si un processus refusait de mourir, un ordre de terminaison automatique (<em>kill -9</em>) était consigné sur les feuilles de tournée pour réinitialiser le bloc mémoire avant l'aube.</p>
    `
  },

  {
    id: "philosophie-web-libre",
    title: "La Philosophie du Web Libre : L'Éthique du Don Universel",
    category: "Philosophie & Société",
    date: "30 Avril 1993",
    author: "Direction du CERN & Communauté Open Source",
    summary: "Le document historique par lequel le CERN a renoncé à tout droit de brevet sur le Web, l'offrant gratuitement à l'humanité.",
    hasRelic: "relic-4",
    relicImage: "assets/relics/relic_bodhi_diary.jpg",
    relicPrompt: "Un carnet manuscrit avec des annotations personnelles repose ici. Clique pour le consulter.",
    content: `
      <p>Le 30 avril 1993 est sans doute la date la plus importante de l'histoire moderne de l'information : le CERN publie une déclaration officielle plaçant le code source du World Wide Web dans le domaine public, sans aucune redevance financière ni brevet restrictif.</p>
      
      <p>Tim Berners-Lee a refusé de commercialiser sa création. Son idée fondatrice était qu'aucun individu, aucune corporation, aucun gouvernement ne devait posséder le réseau des savoirs. Cette éthique humaniste et désintéressée a permis l'explosion créative du Web mondial : chacun était libre d'apprendre, de coder sa page et d'accueillir des visiteurs du monde entier avec humilité et bienveillance.</p>
    `
  },

  {
    id: "javascript-10-days",
    title: "La Naissance Éclair de JavaScript : 10 Jours pour Changer le Monde (1995)",
    category: "Langages & Standards",
    date: "Mai 1995",
    author: "Brendan Eich (Netscape)",
    summary: "Comment un ingénieur sous pression créa le langage le plus populaire de la planète en seulement dix jours de travail forcené.",
    content: `
      <p>Au printemps 1995, Marc Andreessen, cofondateur de Netscape, constate une faiblesse flagrante du Web naissant : le HTML est statique. Si un utilisateur remplit mal un formulaire, la page doit être renvoyée au serveur pour qu'une erreur soit détectée, ce qui prend de longues secondes sur les connexions par modem 28.8k.</p>
      
      <p>Il embauche Brendan Eich avec une mission presque impossible : concevoir un langage de script dynamique, léger et facile d'accès, directement intégré dans le navigateur Netscape Navigator. En seulement <strong>10 jours</strong> (du 4 au 15 mai 1995), Brendan Eich invente la première version du langage, initialement baptisée <em>Mocha</em>, puis <em>LiveScript</em>, avant d'être renommée commercialement <strong>JavaScript</strong>.</p>
      
      <p>Malgré sa conception précipitée, JavaScript possédait des concepts brillants : fonctions de première classe héritées de Scheme et héritage prototypal inspiré de Self. Il est aujourd'hui le moteur d'exécution incontournable de tous les navigateurs du monde.</p>
    `
  },

  {
    id: "invention-css-1994",
    title: "L'Invention du CSS : La Séparation du Fond et de la Forme (1994)",
    category: "Langages & Standards",
    date: "Octobre 1994",
    author: "Håkon Wium Lie & Bert Bos",
    summary: "Avant CSS, les développeurs utilisaient des tableaux imbriqués et des balises propriétaires pour aligner le texte au pixel près.",
    content: `
      <p>En 1993, les concepteurs de sites web vivaient un cauchemar : pour modifier la couleur d'un titre ou centrer un paragraphe, il fallait répéter la balise obsolète <code>&lt;font color="red"&gt;</code> ou imbriquer des dizaines de balises <code>&lt;table&gt;</code> invisibles.</p>
      
      <p>Le 10 octobre 1994, le chercheur norvégien Håkon Wium Lie publie une proposition révolutionnaire intitulée <em>« Cascading HTML Style Sheets »</em>. Son collaborateur néerlandais Bert Bos travaillait sur un navigateur expérimental nommé Argo ; ils s'associent pour concevoir le standard officiel du <strong>CSS (Cascading Style Sheets)</strong>.</p>
      
      <p>Leur coup de génie : la cascade. Le style est complètement séparé de la sémantique HTML. Une seule feuille de style externe peut désormais métamorphoser en un instant des milliers de pages d'un même domaine.</p>
    `
  },

  {
    id: "guerre-des-navigateurs",
    title: "La Première Guerre des Navigateurs : Netscape contre Internet Explorer",
    category: "Grandes Batailles",
    date: "1995 - 2001",
    author: "Chroniques de l'Alliance W3C",
    summary: "Une décennie d'affrontements commerciaux sans merci qui a failli briser le Web en morceaux incompatibles.",
    content: `
      <p>Au milieu des années 1990, Netscape Navigator domine 90 % du marché. Microsoft prend alors conscience de la menace existentielle du Web pour Windows et lance Internet Explorer en l'intégrant gratuitement au cœur de son système d'exploitation.</p>
      
      <p>Pour surpasser l'autre, chaque éditeur commence à inventer ses propres balises non standards. Internet Explorer invente la balise <code>&lt;marquee&gt;</code> pour faire défiler le texte de droite à gauche, tandis que Netscape réplique avec la tristement célèbre balise clignotante <code>&lt;blink&gt;</code>.</p>
      
      <p>Les développeurs étaient obligés d'afficher un macaron sur leur page d'accueil : <em>« Ce site est optimisé pour Netscape Navigator »</em> ou <em>« Optimisé pour Internet Explorer »</em>. Cette guerre a poussé la création du <strong>W3C (World Wide Web Consortium)</strong> pour forcer les industriels à adopter des normes communes et universelles.</p>
    `
  },

  {
    id: "geocities-web-personnel",
    title: "GeoCities & L'Âge d'Or des Pages Personnelles (1994 - 2000)",
    category: "Culture Web",
    date: "1994",
    author: "Archives Populaires du Réseau",
    summary: "L'époque artisanale où chaque internaute construisait sa maisonnette numérique avec des GIFs animés et des compteurs de visites.",
    content: `
      <p>Fondé en 1994 sous le nom de Beverly Hills Internet, GeoCities permettait à n'importe qui de créer gratuitement sa propre page web. Les sites étaient regroupés par quartiers thématiques virtuels : <em>SiliconValley</em> pour les geeks, <em>Colosseum</em> pour le sport, <em>Area51</em> pour le paranormal et la science-fiction.</p>
      
      <p>C'était l'ère du Web brut, coloré et sincère : fonds d'écran étoilés carrelés, bannières d'alerte <em>« Site en construction »</em> avec des ouvriers animés, musique MIDI qui démarre automatiquement, et livre d'or où chaque passant laissait un petit mot chaleureux.</p>
      
      <p>GeoCities hébergeait plus de 38 millions de pages personnelles avant sa fermeture par Yahoo en 2009. C'est l'ancêtre direct des blogs et des réseaux sociaux modernes, mais avec une liberté de personnalisation absolue.</p>
    `
  },

  {
    id: "error-404-origins",
    title: "Le Mystère de l'Erreur 404 : Mythe et Réalité de la Chambre 404",
    category: "Légendes & Réseaux",
    date: "1992",
    author: "Pionniers du Protocole HTTP",
    summary: "D'où vient le code d'erreur le plus célèbre du monde lorsqu'une page est introuvable ?",
    content: `
      <p>Une légende urbaine tenace raconte que l'erreur 404 proviendrait d'une salle physique au quatrième étage du bâtiment 2 du CERN, où se serait trouvé le serveur central abritant la base de données originelle. Lorsque les chercheurs s'y rendaient et ne trouvaient pas le fichier sur les étagères, ils disaient : <em>« Erreur : introuvable en chambre 404 »</em>.</p>
      
      <p>En réalité, la vérité est bien plus rationnelle et rigoureuse : lors de la conception de la spécification HTTP, les codes de statut ont été découpés en classes logiques. La classe 4xx désigne une erreur côté client. Le premier chiffre (4) indique une faute de requête, le deuxième (0) indique une erreur de syntaxe générale, et le dernier (4) désigne l'absence de ressource (<em>Not Found</em>).</p>
      
      <p>Ce code simple et universel est devenu l'une des icônes culturelles les plus reconnaissables de la civilisation numérique.</p>
    `
  },

  {
    id: "first-image-1992",
    title: "La Première Photographie Publiée sur le Web (1992)",
    category: "Culture Web",
    date: "18 Juillet 1992",
    author: "Les Horribles Cernettes",
    summary: "Une troupe de musique pop parodique féminine du CERN est devenue la première image couleur de l'histoire du Web.",
    content: `
      <p>Avant 1992, le Web ne supportait que le texte pur et les liens hypertextes. Mais Tim Berners-Lee et son équipe souhaitaient tester l'intégration d'images couleur au format GIF.</p>
      
      <p>Le 18 juillet 1992, Silvio de Gennaro, analyste au CERN, prend en photo le groupe de musique pop amateur du laboratoire, <em>Les Horribles Cernettes</em>, fondé par des secrétaires et collaboratrices du CERN. Tim Berners-Lee scanne la photographie sur son Mac et la met en ligne sur le serveur.</p>
      
      <p>Cette photo amusante est entrée dans l'histoire comme le tout premier cliché photographique jamais hébergé sur le World Wide Web, ouvrant la voie à la révolution visuelle des médias en ligne.</p>
    `
  },

  {
    id: "pizza-hut-first-commerce",
    title: "Le Premier Achat en Ligne de l'Histoire : Une Pizza aux Champignons (1994)",
    category: "Culture Web",
    date: "Août 1994",
    author: "PizzaNet (Pizza Hut)",
    summary: "Comment une commande de pizza pepperoni et champignons a marqué le point de départ du commerce électronique mondial.",
    content: `
      <p>À l'été 1994, la chaîne de restauration Pizza Hut lance un service expérimental nommé <strong>PizzaNet</strong> dans la ville de Santa Cruz en Californie.</p>
      
      <p>Pour la première fois, un client a pu ouvrir un navigateur web sur son ordinateur, cocher des garnitures sur un formulaire HTML basique, et envoyer sa commande directement à la cuisine du restaurant local. Pour vérifier que ce n'était pas un canular d'étudiant farceur, le gérant de la pizzeria devait téléphoner au domicile du client pour confirmer la commande avant de l'enfourner.</p>
      
      <p>Quelques semaines plus tard naissaient les premiers systèmes de paiement sécurisé par carte bancaire avec SSL chez Netscape, posant les fondations d'un commerce mondial pesant aujourd'hui des milliers de milliards de dollars.</p>
    `
  },

  {
    id: "responsive-design-2010",
    title: "La Révolution du Responsive Web Design par Ethan Marcotte (2010)",
    category: "Design & Ergonomie",
    date: "Mai 2010",
    author: "Ethan Marcotte (A List Apart)",
    summary: "Le manifeste qui a libéré les sites web du carcan rigide des moniteurs d'ordinateurs de bureau.",
    content: `
      <p>À la fin des années 2000, l'apparition des premiers smartphones (notamment l'iPhone en 2007) plonge les créateurs de sites dans un désarroi total. Pour chaque projet, les agences concevaient deux sites distincts : un site pour ordinateur de bureau et un sous-domaine <code>m.monsite.com</code> lourd et coûteux à maintenir.</p>
      
      <p>En mai 2010, le designer américain Ethan Marcotte publie un article fondateur sur le magazine en ligne <em>A List Apart</em> intitulé <strong>« Responsive Web Design »</strong>. Il propose une approche unifiée reposant sur trois ingrédients magiques :</p>
      
      <ol>
        <li>Une grille fluide en pourcentages plutôt qu'en pixels fixes.</li>
        <li>Des images flexibles adaptables (<code>max-width: 100%</code>).</li>
        <li>Les Media Queries CSS (<code>@media</code>) pour réordonner les blocs selon la taille de l'écran.</li>
      </ol>
      
      <p>Cette philosophie a redéfini le Web moderne : un seul code source qui s'adapte comme de l'eau au récipient qui l'accueille.</p>
    `
  },

  {
    id: "steve-jobs-flash-2010",
    title: "« Thoughts on Flash » : La Lettre Ouverte de Steve Jobs Qui Tenta Flash (2010)",
    category: "Grandes Batailles",
    date: "Avril 2010",
    author: "Steve Jobs (Apple)",
    summary: "Comment une lettre publique de quelques pages a scellé le destin de la technologie reine des animations des années 2000.",
    content: `
      <p>Pendant plus de dix ans, Macromedia (puis Adobe) Flash régnait en maître absolu sur les jeux web, les lecteurs vidéo et les animations spectaculaires. Mais Flash était un plugin propriétaire, lourd, fermé et vorace en batterie.</p>
      
      <p>En avril 2010, Steve Jobs publie une lettre ouverte cinglante expliquant pourquoi Apple refuse catégoriquement d'autoriser Flash sur iPhone et iPad : manque de sécurité, absence de support tactile, consommation excessive d'énergie et dépendance envers une technologie fermée.</p>
      
      <p>Il invite le monde à miser sur les standards ouverts du Web : <strong>HTML5, CSS3 et JavaScript</strong>. Cette prise de position a accéléré la standardisation des balises <code>&lt;video&gt;</code>, <code>&lt;canvas&gt;</code> et des animations CSS fluides à 60 images par seconde.</p>
    `
  },

  {
    id: "v8-engine-chrome-2008",
    title: "Le Moteur V8 de Chrome : Quand JavaScript est Devenu un Bolide (2008)",
    category: "Architecture & Systèmes",
    date: "Septembre 2008",
    author: "Lars Bak & L'Équipe V8",
    summary: "La compilation JIT native qui a permis à JavaScript de rivaliser en vitesse avec les langages compilés traditionnels.",
    content: `
      <p>Pendant treize ans, JavaScript était considéré comme un simple langage de bricolage lent, exécuté ligne par ligne par un interpréteur basique. Il était impensable de faire tourner des logiciels complexes ou des visualisations 3D directement dans un onglet de navigateur.</p>
      
      <p>En septembre 2008, Google dévoile son navigateur Chrome, propulsé par un tout nouveau moteur d'exécution JavaScript nommé <strong>V8</strong>, conçu par l'ingénieur danois Lars Bak. V8 introduit la compilation à la volée (JIT - <em>Just-In-Time</em>) qui traduit directement le code JavaScript en code machine binaire exécuté à pleine vitesse par le processeur.</p>
      
      <p>Cette percée a rendu possible les applications web modernes, les suites bureautiques en ligne complètes, et a donné naissance à Node.js en 2009, permettant à JavaScript d'être exécuté partout, des navigateurs jusqu'aux serveurs.</p>
    `
  }
];
