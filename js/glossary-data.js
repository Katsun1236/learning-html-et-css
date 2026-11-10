// =============================================================================
// LE GRAND GRIMOIRE VIVANT & ENCYCLOPÉDIE DE MAÎTRE BODHI
// Dictionnaire encyclopédique exhaustif de 181 termes, balises, concepts et règles HTML & CSS
// Détection automatique des mots-clés cliquables dans les dialogues et missions
// =============================================================================

export const GLOSSARY_ITEMS = [
  {
    "id": "doctype",
    "name": "<!DOCTYPE html>",
    "patterns": [
      "<!doctype html>",
      "<!doctype>",
      "doctype"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Déclaration obligatoire en tout premier octet d'un fichier web. Elle ordonne au navigateur d'adopter le mode de rendu standard de HTML5 au lieu du mode de compatibilité dégradé ('quirks mode') des années 90.",
    "code": "<!DOCTYPE html>",
    "bodhiTip": "C'est la première pierre de l'édifice : sans elle, les navigateurs interprètent les marges et les boîtes avec les bugs d'Internet Explorer 5 !"
  },
  {
    "id": "html-tag",
    "name": "<html>",
    "patterns": [
      "<html>",
      "<html lang=\"fr\">",
      "<html lang=\"en\">",
      "balise html",
      "élément html"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "L'élément racine ('root') qui englobe l'intégralité du document web. L'attribut lang=\"fr\" informe les synthèses vocales pour aveugles et les robots d'indexation de la langue du contenu.",
    "code": "<html lang=\"fr\">\n  <!-- Tout le document réside ici -->\n</html>",
    "bodhiTip": "Ne l'omets jamais : si un lecteur d'écran lit du français avec les règles phonétiques anglaises, le visiteur ne comprendra absolument rien."
  },
  {
    "id": "head-tag",
    "name": "<head>",
    "patterns": [
      "<head>",
      "</head>",
      "balise head",
      "en-tête head"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Le cerveau invisible de la page web. Il héberge toutes les métadonnées (encodage, viewport, titre de l'onglet, liaisons CSS et polices) qui orchestrent la page sans apparaître directement dans le corps visible.",
    "code": "<head>\n  <meta charset=\"UTF-8\">\n  <title>Titre</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
    "bodhiTip": "Tout ce qui est dans le head prépare le monde ; ce qui est dans le body le donne à voir."
  },
  {
    "id": "body-tag",
    "name": "<body>",
    "patterns": [
      "<body>",
      "</body>",
      "balise body",
      "corps body"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Le corps visible de la page. C'est le conteneur unique de tous les éléments perceptibles par l'utilisateur : textes, images, vidéos, menus, boutons et formulaires.",
    "code": "<body>\n  <header>...</header>\n  <main>...</main>\n  <footer>...</footer>\n</body>",
    "bodhiTip": "Il n'y a qu'un seul <body> par page. Toute balise visible placée en dehors du body est invalide."
  },
  {
    "id": "title-tag",
    "name": "<title>",
    "patterns": [
      "<title>",
      "</title>",
      "balise title"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Définit le titre affiché dans l'onglet du navigateur, les favoris et la première ligne bleue des résultats de recherche Google. Élément capital pour le référencement (SEO).",
    "code": "<title>Sanctuaire du Web — Chroniques</title>",
    "bodhiTip": "Sois concis : entre 50 et 60 caractères pour éviter d'être tronqué par les moteurs de recherche."
  },
  {
    "id": "meta-tag",
    "name": "<meta>",
    "patterns": [
      "<meta>",
      "<meta charset",
      "<meta name",
      "balise meta"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Balise orpheline du <head> transportant des informations structurées sur le document : jeu de caractères, configuration d'affichage mobile, description pour les moteurs de recherche, ou directives pour les réseaux sociaux.",
    "code": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "bodhiTip": "Les balises <meta> sont les messagers invisibles qui murmurent aux robots de Google et aux téléphones comment interpréter ta création."
  },
  {
    "id": "link-tag",
    "name": "<link>",
    "patterns": [
      "<link rel=\"stylesheet\"",
      "<link>",
      "</link>",
      "balise link",
      "link rel"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Établit un pont vers une ressource externe, principalement la feuille de style CSS (rel=\"stylesheet\"), une icône d'onglet favicon (rel=\"icon\") ou une police web préchargée (rel=\"preconnect\").",
    "code": "<link rel=\"stylesheet\" href=\"style.css\">\n<link rel=\"icon\" href=\"favicon.ico\">",
    "bodhiTip": "C'est l'essence de l'architecture web moderne : séparer strictement la structure (HTML) du stylisme (CSS)."
  },
  {
    "id": "style-tag",
    "name": "<style>",
    "patterns": [
      "<style>",
      "</style>",
      "balise style"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Balise permettant d'insérer des règles CSS directement à l'intérieur d'un document HTML, généralement dans le <head>.",
    "code": "<style>\n  body { background-color: #0f172a; }\n</style>",
    "bodhiTip": "Pratique pour un prototype rapide ou des e-mails, mais dans un sanctuaire pérenne, privilégie toujours une feuille de style externe avec <link>."
  },
  {
    "id": "script-tag",
    "name": "<script>",
    "patterns": [
      "<script>",
      "</script>",
      "balise script"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Permet d'embarquer ou de lier du code JavaScript interactif pour animer et rendre la page dynamique.",
    "code": "<script src=\"app.js\" defer></script>",
    "bodhiTip": "Pense toujours à l'attribut 'defer' pour que le téléchargement du script ne bloque pas le rendu visuel de ta page !"
  },
  {
    "id": "noscript-tag",
    "name": "<noscript>",
    "patterns": [
      "<noscript>",
      "</noscript>",
      "balise noscript"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Contenu alternatif de secours affiché uniquement si l'utilisateur a désactivé JavaScript sur son navigateur ou si le moteur de script a échoué.",
    "code": "<noscript><p>Activez JavaScript pour profiter du sanctuaire interactif.</p></noscript>",
    "bodhiTip": "Une délicate attention d'accessibilité pour ceux dont l'environnement de navigation est très restreint."
  },
  {
    "id": "base-tag",
    "name": "<base>",
    "patterns": [
      "<base>",
      "<base href",
      "balise base"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Spécifie l'URL de base et la cible par défaut pour tous les liens relatifs d'un document.",
    "code": "<base href=\"https://sanctuaire.dev/\">",
    "bodhiTip": "Attention avec cette balise : elle réécrit la destination de tous tes liens relatifs !"
  },
  {
    "id": "header-tag",
    "name": "<header>",
    "patterns": [
      "<header>",
      "</header>",
      "balise header",
      "en-tête"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Représente l'en-tête introductif d'une page ou d'une section. Il accueille typiquement le logo, le titre principal du sanctuaire et la barre de navigation.",
    "code": "<header>\n  <div class=\"logo\">Sanctuaire</div>\n  <nav>...</nav>\n</header>",
    "bodhiTip": "Ne confonds jamais <header> (en-tête visible de page) et <head> (cerveau invisible des métadonnées) !"
  },
  {
    "id": "nav-tag",
    "name": "<nav>",
    "patterns": [
      "<nav>",
      "</nav>",
      "balise nav",
      "navigation"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Définit une zone de navigation majeure regroupant des liens internes vers les sections capitales du site ou d'autres pages.",
    "code": "<nav>\n  <ul>\n    <li><a href=\"index.html\">Accueil</a></li>\n    <li><a href=\"contact.html\">Contact</a></li>\n  </ul>\n</nav>",
    "bodhiTip": "Réserve <nav> aux menus principaux. Les liens secondaires de mentions légales en pied de page n'en ont généralement pas besoin."
  },
  {
    "id": "main-tag",
    "name": "<main>",
    "patterns": [
      "<main>",
      "</main>",
      "balise main"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Englobe le contenu central et exclusif de la page. Ce contenu ne doit pas être répété sur les autres pages du sanctuaire (contrairement à l'en-tête ou au pied de page).",
    "code": "<main>\n  <h1>Le Récit du Novice</h1>\n  <p>...</p>\n</main>",
    "bodhiTip": "Règle d'or du W3C : il ne peut y avoir qu'un seul élément <main> visible par document HTML."
  },
  {
    "id": "section-tag",
    "name": "<section>",
    "patterns": [
      "<section>",
      "</section>",
      "balise section"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Délimite une section thématique autonome et structurée dans un document. Chaque <section> doit impérativement posséder son propre titre (h2-h6) décrivant son sujet.",
    "code": "<section>\n  <h2>Les Fondations de la Pierre</h2>\n  <p>Texte explicatif...</p>\n</section>",
    "bodhiTip": "N'utilise jamais <section> comme un simple conteneur visuel de stylisme : pour décorer ou centrer sans valeur sémantique, utilise <div>."
  },
  {
    "id": "article-tag",
    "name": "<article>",
    "patterns": [
      "<article>",
      "</article>",
      "balise article"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Représente une composition autonome, indépendante et distribuable telle quelle : un article de blog, une chronique, un avis utilisateur ou une carte produit réutilisable.",
    "code": "<article>\n  <h3>Chronique du Navigateur</h3>\n  <p>L'histoire de Mosaic...</p>\n</article>",
    "bodhiTip": "Test de l'article : si tu pouvais découper ce bloc et le publier seul dans un flux RSS ou un journal, c'est un <article> !"
  },
  {
    "id": "aside-tag",
    "name": "<aside>",
    "patterns": [
      "<aside>",
      "</aside>",
      "balise aside"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Désigne un contenu complémentaire ou tangentiel au contenu principal : barre latérale, encadré d'astuces, glossaire ou liens connexes.",
    "code": "<aside>\n  <h4>Note du Maître</h4>\n  <p>La persévérance surpasse le génie.</p>\n</aside>",
    "bodhiTip": "Les lecteurs d'écran permettent aux non-voyants de sauter l'aside pour rester concentrés sur la lecture du flux principal."
  },
  {
    "id": "footer-tag",
    "name": "<footer>",
    "patterns": [
      "<footer>",
      "</footer>",
      "balise footer",
      "pied de page"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Représente le pied de page du document ou d'une section. Il accueille les droits d'auteur (copyright), les mentions légales, les coordonnées et les liens de contact.",
    "code": "<footer>\n  <p>&copy; 2026 Sanctuaire Web. Tous droits réservés.</p>\n</footer>",
    "bodhiTip": "Tu peux avoir un <footer> pour toute la page, mais aussi un petit <footer> à l'intérieur d'un <article> pour indiquer la date et l'auteur."
  },
  {
    "id": "address-tag",
    "name": "<address>",
    "patterns": [
      "<address>",
      "</address>",
      "balise address"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Fournit les informations de contact pour l'auteur ou le propriétaire du document ou de l'article le plus proche.",
    "code": "<address>\n  Écrit par Bodhi<br>\n  <a href=\"mailto:bodhi@sanctuaire.dev\">bodhi@sanctuaire.dev</a>\n</address>",
    "bodhiTip": "Ne l'utilise pas pour afficher n'importe quelle adresse postale : réserve-la pour l'auteur du document."
  },
  {
    "id": "h1-tag",
    "name": "<h1>",
    "patterns": [
      "<h1>",
      "</h1>",
      "balise h1",
      "titre h1"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Le titre suprême et le plus important du document. Il exprime le sujet central absolu de la page. Essentiel pour le classement Google et la clarté des visiteurs.",
    "code": "<h1>Le Sanctuaire de l'Apprenti Web</h1>",
    "bodhiTip": "Une page web ne doit posséder qu'un seul et unique <h1>. En mettre plusieurs affaiblit la hiérarchie et perturbe les robots d'indexation."
  },
  {
    "id": "h2-h6-tags",
    "name": "<h2> à <h6>",
    "patterns": [
      "<h2>",
      "<h3>",
      "<h4>",
      "<h5>",
      "<h6>",
      "</h2>",
      "</h3>",
      "balises de titres",
      "hiérarchie de titres"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Les six niveaux de titres hiérarchiques du Web, du plus important (h1) au plus précis (h6). Ils dessinent le plan logique et la table des matières de ton document.",
    "code": "<h1>Grand Sujet</h1>\n  <h2>Chapitre Un</h2>\n    <h3>Sous-section A</h3>",
    "bodhiTip": "Ne saute jamais de niveau pour des raisons purement visuelles (par exemple passer de h2 à h4). Change plutôt la taille visuelle en CSS avec 'font-size' !"
  },
  {
    "id": "div-tag",
    "name": "<div>",
    "patterns": [
      "<div>",
      "</div>",
      "balise div",
      "élément div"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Le conteneur universel en bloc par excellence. Dépourvu de toute sémantique propre, il sert uniquement de point d'ancrage pour la mise en page CSS, Flexbox et Grid.",
    "code": "<div class=\"grille-cartes\">\n  <div class=\"carte\">...</div>\n</div>",
    "bodhiTip": "Attention au piège de la 'divite aiguë' : n'utilise pas <div> quand une balise sémantique (<header>, <main>, <nav>, <article>) existe !"
  },
  {
    "id": "hr-tag",
    "name": "<hr>",
    "patterns": [
      "<hr>",
      "<hr/>",
      "balise hr"
    ],
    "category": "HTML : Structure & Sémantique",
    "desc": "Représente une rupture thématique ou un changement de sujet entre deux paragraphes. Visuellement rendu par une ligne de séparation horizontale.",
    "code": "<p>Fin de la première leçon.</p>\n<hr>\n<p>Début des exercices pratiques.</p>",
    "bodhiTip": "En HTML5, <hr> a un vrai sens sémantique de rupture de sujet, pas seulement un trait décoratif."
  },
  {
    "id": "p-tag",
    "name": "<p>",
    "patterns": [
      "<p>",
      "</p>",
      "balise p",
      "paragraphe",
      "paragraphes"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Définit un paragraphe de texte textuel. Le navigateur applique par défaut une marge au-dessus et en dessous pour rythmer la lecture humaine.",
    "code": "<p>Chaque ligne de code est une brique posée avec soin.</p>",
    "bodhiTip": "N'insère jamais d'éléments de bloc (comme <div>, <h1> ou <ul>) à l'intérieur d'un <p> : le navigateur fermera automatiquement ton paragraphe !"
  },
  {
    "id": "pre-tag",
    "name": "<pre>",
    "patterns": [
      "<pre>",
      "</pre>",
      "balise pre"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Affiche du texte préformaté où tous les espaces, retours à la ligne et tabulations sont scrupuleusement respectés tels qu'écrits dans le code source.",
    "code": "<pre>\n  function init() {\n    return true;\n  }\n</pre>",
    "bodhiTip": "Indispensable pour afficher des blocs de code source ou de l'art ASCII en combinaison avec la balise <code>."
  },
  {
    "id": "blockquote-tag",
    "name": "<blockquote>",
    "patterns": [
      "<blockquote>",
      "</blockquote>",
      "balise blockquote",
      "citation blockquote"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Indique une citation longue et substantielle extraite d'une source extérieure. Elle est généralement mise en retrait avec des marges généreuses.",
    "code": "<blockquote cite=\"https://w3.org\">\n  <p>Le pouvoir du Web réside dans son universalité.</p>\n</blockquote>",
    "bodhiTip": "Accompagne toujours ta citation de la balise <cite> pour créditer dignement l'auteur ou l'ouvrage !"
  },
  {
    "id": "cite-tag",
    "name": "<cite>",
    "patterns": [
      "<cite>",
      "</cite>",
      "balise cite"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Représente le titre d'une œuvre citée : un livre, un article, une chanson, un tableau ou une spécification technique.",
    "code": "<p>Comme l'écrivait Tim Berners-Lee dans <cite>Weaving the Web</cite>...</p>",
    "bodhiTip": "Par convention typographique, le navigateur affiche automatiquement le contenu de <cite> en italique."
  },
  {
    "id": "q-tag",
    "name": "<q>",
    "patterns": [
      "<q>",
      "</q>",
      "balise q"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Désigne une citation courte en ligne (inline). Le navigateur l'entoure automatiquement des guillemets typographiques adaptés à la langue (ex: « » en français).",
    "code": "<p>Le maître a dit : <q>Pratique chaque jour</q>.</p>",
    "bodhiTip": "Ne tape pas manuellement les guillemets dans ton texte : laisse <q> gérer les guillemets appropriés selon l'attribut lang !"
  },
  {
    "id": "abbr-tag",
    "name": "<abbr>",
    "patterns": [
      "<abbr>",
      "</abbr>",
      "balise abbr"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Définit une abréviation ou un acronyme. L'attribut 'title' fournit l'explication complète au survol et pour les lecteurs d'écran.",
    "code": "<abbr title=\"HyperText Markup Language\">HTML</abbr>",
    "bodhiTip": "Idéal pour guider les débutants à travers le jargon technique sans alourdir la lecture."
  },
  {
    "id": "dfn-tag",
    "name": "<dfn>",
    "patterns": [
      "<dfn>",
      "</dfn>",
      "balise dfn"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Indique le terme en train d'être défini pour la toute première fois dans un document.",
    "code": "<p>Le <dfn>DOM</dfn> est la structure arborescente créée par le navigateur.</p>",
    "bodhiTip": "Permet aux moteurs d'indexation de construire automatiquement des glossaires savants."
  },
  {
    "id": "time-tag",
    "name": "<time>",
    "patterns": [
      "<time>",
      "</time>",
      "balise time"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Représente une date ou une heure précise compréhensible à la fois par les humains et par les machines via l'attribut datetime.",
    "code": "<time datetime=\"2026-11-10\">10 novembre 2026</time>",
    "bodhiTip": "Permet aux calendriers, moteurs de recherche et agrégateurs de repérer automatiquement les dates de parution de tes articles."
  },
  {
    "id": "ul-tag",
    "name": "<ul>",
    "patterns": [
      "<ul>",
      "</ul>",
      "balise ul",
      "liste à puces"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Crée une liste non ordonnée à puces. L'ordre des éléments n'altère pas le sens du document (ex: ingrédients, technologies, liste de liens).",
    "code": "<ul>\n  <li>HTML5</li>\n  <li>CSS3</li>\n</ul>",
    "bodhiTip": "<ul> ne doit contenir que des balises <li> en enfants directs. N'y glisse aucun texte libre ni balise <div> directe !"
  },
  {
    "id": "ol-tag",
    "name": "<ol>",
    "patterns": [
      "<ol>",
      "</ol>",
      "balise ol",
      "liste ordonnée",
      "liste numérotée"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Crée une liste ordonnée numérotée (1, 2, 3...) où la séquence chronologique ou logique est essentielle (recette, étapes d'un tutoriel, classement).",
    "code": "<ol>\n  <li>Créer le fichier HTML</li>\n  <li>Rédiger la structure</li>\n  <li>Styliser en CSS</li>\n</ol>",
    "bodhiTip": "Utilise l'attribut 'start' si tu souhaites commencer la numérotation à un chiffre précis !"
  },
  {
    "id": "li-tag",
    "name": "<li>",
    "patterns": [
      "<li>",
      "</li>",
      "balise li",
      "élément de liste"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Désigne un élément individuel au sein d'une liste ordonnée (<ol>) ou non ordonnée (<ul>).",
    "code": "<li>Apprendre le modèle de boîte</li>",
    "bodhiTip": "Un <li> ne peut exister que dans un parent <ul>, <ol> ou <menu>."
  },
  {
    "id": "dl-dt-dd-tags",
    "name": "<dl>, <dt> et <dd>",
    "patterns": [
      "<dl>",
      "<dt>",
      "<dd>",
      "</dl>",
      "</dt>",
      "</dd>",
      "liste de définition"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Triplet formant une liste de descriptions ou de définitions. <dl> est la liste, <dt> est le terme à définir, et <dd> est la description ou explication.",
    "code": "<dl>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets, langage de mise en forme visuelle.</dd>\n</dl>",
    "bodhiTip": "C'est la structure sémantique parfaite pour un dictionnaire, un glossaire ou une fiche technique produit."
  },
  {
    "id": "a-tag",
    "name": "<a>",
    "patterns": [
      "<a>",
      "</a>",
      "balise a",
      "balise lien",
      "hyperlien",
      "attribut href"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "La balise d'ancrage hypertexte qui a fondé le Web mondial. Elle crée un lien cliquable menant vers une autre page, un ancrage interne (#ancre), une adresse e-mail ou un fichier téléchargeable.",
    "code": "<a href=\"chroniques.html\">Lire les chroniques</a>\n<a href=\"#sommaire\">Retour au sommet</a>",
    "bodhiTip": "N'écris jamais 'cliquez ici' comme libellé : donne toujours un texte descriptif et explicite pour que les personnes aveugles sachent où le lien les mène."
  },
  {
    "id": "strong-tag",
    "name": "<strong>",
    "patterns": [
      "<strong>",
      "</strong>",
      "balise strong"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Confère une importance forte et capitale au texte. Les synthèses vocales accentuent vocalement le ton, et les navigateurs l'affichent par défaut en gras.",
    "code": "<strong>Attention : ne modifiez jamais ce fichier en production !</strong>",
    "bodhiTip": "Ne confonds pas <strong> (importance sémantique) avec <b> (simple gras visuel sans valeur sémantique)."
  },
  {
    "id": "em-tag",
    "name": "<em>",
    "patterns": [
      "<em>",
      "</em>",
      "balise em"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Indique une emphase ou une insistance particulière dans une phrase, qui modifie le sens de l'énoncé. Affiché par défaut en italique.",
    "code": "<p>Je <em>dois</em> réussir cette quête.</p>",
    "bodhiTip": "Utilise <em> quand la voix insiste sur un mot précis, et réserve <i> aux termes techniques en langue étrangère."
  },
  {
    "id": "b-tag",
    "name": "<b>",
    "patterns": [
      "<b>",
      "</b>",
      "balise b"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Attire l'attention visuelle sur un mot en gras sans conférer d'importance sémantique majeure (ex: mots-clés dans un résumé).",
    "code": "<p>Les deux piliers sont <b>HTML</b> et <b>CSS</b>.</p>",
    "bodhiTip": "Si le mot a une réelle importance critique d'avertissement, préfère la balise sémantique <strong>."
  },
  {
    "id": "i-tag",
    "name": "<i>",
    "patterns": [
      "<i>",
      "</i>",
      "balise i"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Représente une voix ou une pensée différente, un terme technique, une expression latine ou une pensée intime. Affiché par défaut en italique.",
    "code": "<p>Le principe du <i>carpe diem</i> s'applique ici.</p>",
    "bodhiTip": "Pour marquer une emphase vocale, utilise plutôt <em>."
  },
  {
    "id": "u-tag",
    "name": "<u>",
    "patterns": [
      "<u>",
      "</u>",
      "balise u"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Souligne visuellement un texte sans impliquer de lien. Rarement utilisé sur le Web pour éviter toute confusion avec un lien hypertexte.",
    "code": "<p>Voici un mot <u>inhabituel</u>.</p>",
    "bodhiTip": "Attention : sur le Web, les utilisateurs s'attendent à ce que tout texte souligné soit un lien cliquable !"
  },
  {
    "id": "s-tag",
    "name": "<s>",
    "patterns": [
      "<s>",
      "</s>",
      "balise s"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Affiche un texte barré pour indiquer qu'une information n'est plus exacte, pertinente ou d'actualité (ex: ancien prix barré).",
    "code": "<p>Prix : <s>50 €</s> 25 €</p>",
    "bodhiTip": "Pour indiquer une suppression officielle dans une révision de document, la balise <del> est sémantiquement plus précise."
  },
  {
    "id": "del-ins-tags",
    "name": "<del> et <ins>",
    "patterns": [
      "<del>",
      "<ins>",
      "</del>",
      "</ins>"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Marquent une modification éditoriale dans un texte : <del> pour une suppression (barrée) et <ins> pour un ajout inséré (souligné).",
    "code": "<p>Version <del>1.0</del> <ins>2.0</ins> disponible.</p>",
    "bodhiTip": "Parfait pour afficher les diffs et historiques de révision d'un parchemin."
  },
  {
    "id": "small-tag",
    "name": "<small>",
    "patterns": [
      "<small>",
      "</small>",
      "balise small"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Représente les petits caractères légaux, les mentions de droits d'auteur, les clauses de non-responsabilité ou les annotations secondaires.",
    "code": "<p><small>Offre soumise à conditions d'inscription.</small></p>",
    "bodhiTip": "Ne l'utilise pas pour réduire la taille d'un paragraphe entier : pour cela, ajuste 'font-size' en CSS."
  },
  {
    "id": "mark-tag",
    "name": "<mark>",
    "patterns": [
      "<mark>",
      "</mark>",
      "balise mark"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Surligne un passage de texte pour mettre en valeur sa pertinence dans un contexte particulier, comme les termes recherchés dans un résultat de recherche.",
    "code": "<p>Résultat pour <mark>CSS</mark> : 42 occurrences trouvées.</p>",
    "bodhiTip": "Visuellement rendu par un surlignage jaune fluo par défaut que tu peux personnaliser en CSS avec 'background-color'."
  },
  {
    "id": "code-tag",
    "name": "<code>",
    "patterns": [
      "<code>",
      "</code>",
      "balise code"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Désigne un fragment de code informatique, une commande de terminal, un nom de fonction ou de variable. Affiché dans une police à chasse fixe (monospace).",
    "code": "<p>Utilise la propriété <code>display: flex</code> pour aligner tes enfants.</p>",
    "bodhiTip": "Pour un bloc de code sur plusieurs lignes, imbrique toujours <code> à l'intérieur d'un élément <pre>."
  },
  {
    "id": "kbd-tag",
    "name": "<kbd>",
    "patterns": [
      "<kbd>",
      "</kbd>",
      "balise kbd"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Représente une touche de clavier physique ou une saisie utilisateur demandée (raccourcis clavier).",
    "code": "<p>Appuie sur <kbd>Ctrl</kbd> + <kbd>S</kbd> pour enregistrer.</p>",
    "bodhiTip": "Stylise tes balises <kbd> en CSS avec une petite bordure grise et un fond dégradé pour simuler l'aspect d'une vraie touche d'ordinateur !"
  },
  {
    "id": "samp-var-tags",
    "name": "<samp> et <var>",
    "patterns": [
      "<samp>",
      "<var>",
      "</samp>",
      "</var>"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "<samp> représente la sortie d'un programme informatique (résultat console), tandis que <var> désigne une variable mathématique ou informatique.",
    "code": "<p>Si <var>x</var> = 5, le terminal renvoie <samp>Succès</samp>.</p>",
    "bodhiTip": "Des balises sémantiques très appréciées des documentations scientifiques."
  },
  {
    "id": "sub-sup-tags",
    "name": "<sub> et <sup>",
    "patterns": [
      "<sub>",
      "<sup>",
      "</sub>",
      "</sup>",
      "balise sub",
      "balise sup"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Formatent le texte en indice (<sub>) pour les formules chimiques (H2O) ou en exposant (<sup>) pour les puissances mathématiques et notes de bas de page (E=mc²).",
    "code": "<p>Formule de l'eau : H<sub>2</sub>O | Surface : 100 m<sup>2</sup></p>",
    "bodhiTip": "Très utile en rédaction scientifique et documentation technique."
  },
  {
    "id": "span-tag",
    "name": "<span>",
    "patterns": [
      "<span>",
      "</span>",
      "balise span"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Le conteneur en ligne (inline) universel et neutre par excellence. Dépourvu de sens sémantique propre, il sert de point d'ancrage pour cibler et styliser un mot précis en CSS.",
    "code": "<p>La lumière <span class=\"highlight\">dorée</span> du sanctuaire.</p>",
    "bodhiTip": "N'utilise <span> que si aucune balise sémantique (comme <strong>, <em>, <code>, <time>) ne convient à ton mot."
  },
  {
    "id": "br-tag",
    "name": "<br>",
    "patterns": [
      "<br>",
      "<br/>",
      "balise br",
      "saut de ligne"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Provoque un saut de ligne immédiat au sein d'un texte sans créer de nouveau paragraphe (adresses postales, strophes de poème).",
    "code": "<p>Sanctuaire Web<br>7 Avenue des Navigateurs<br>75000 Paris</p>",
    "bodhiTip": "Ne l'utilise jamais pour espacer artificiellement deux blocs : gère toujours les espacements avec les marges CSS ('margin') !"
  },
  {
    "id": "wbr-tag",
    "name": "<wbr>",
    "patterns": [
      "<wbr>",
      "balise wbr"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Indique au navigateur une opportunité de rupture de ligne au milieu d'un mot extrêmement long ou d'une URL si l'espace venait à manquer sur mobile.",
    "code": "<p>https://sanctuaire.dev/<wbr>chroniques/<wbr>maitre-bodhi</p>",
    "bodhiTip": "Empêche les très longs mots techniques de déborder sauvagement de l'écran de tes visiteurs mobiles."
  },
  {
    "id": "ruby-rt-tags",
    "name": "<ruby> et <rt>",
    "patterns": [
      "<ruby>",
      "<rt>",
      "</ruby>",
      "</rt>"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "Permettent d'annoter de petits guides de prononciation phonétique au-dessus de caractères asiatiques (furigana / pinyin).",
    "code": "<ruby>漢 <rt>kan</rt> 字 <rt>ji</rt></ruby>",
    "bodhiTip": "Le témoignage de l'universalité mondiale du Web conçu par le W3C."
  },
  {
    "id": "bdi-bdo-tags",
    "name": "<bdi> et <bdo>",
    "patterns": [
      "<bdi>",
      "<bdo>",
      "</bdi>",
      "</bdo>"
    ],
    "category": "HTML : Texte & Formatage",
    "desc": "<bdi> isole un texte dont la direction d'écriture (gauche à droite ou droite à gauche comme l'arabe/hébreu) est inconnue, tandis que <bdo> force une direction précise.",
    "code": "<p>Utilisateur <bdi>أحمد</bdi> : 15 points</p>",
    "bodhiTip": "Essentiel pour éviter que du texte en arabe ne désorganise l'ordre d'affichage des phrases françaises voisines."
  },
  {
    "id": "form-tag",
    "name": "<form>",
    "patterns": [
      "<form>",
      "</form>",
      "balise form",
      "formulaire",
      "formulaires"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Le conteneur maître recueillant les données saisies par l'utilisateur pour les transmettre à un serveur via une méthode HTTP (GET ou POST).",
    "code": "<form action=\"/envoyer\" method=\"POST\">\n  <!-- Champs du formulaire -->\n</form>",
    "bodhiTip": "Pour la transmission de données sensibles ou d'e-mails, utilise toujours method=\"POST\" afin d'éviter d'exposer les valeurs dans l'URL de la barre d'adresse."
  },
  {
    "id": "label-tag",
    "name": "<label>",
    "patterns": [
      "<label>",
      "</label>",
      "balise label"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Associe un intitulé textuel explicite à un champ de formulaire (<input>, <textarea>, <select>). L'attribut 'for' doit correspondre exactement à l'identifiant 'id' du champ cible.",
    "code": "<label for=\"user-email\">Votre adresse e-mail :</label>\n<input type=\"email\" id=\"user-email\" name=\"email\">",
    "bodhiTip": "Règle d'or de l'ergonomie : cliquer sur un <label> donne immédiatement le focus au champ associé ou coche automatiquement la case !"
  },
  {
    "id": "input-tag",
    "name": "<input>",
    "patterns": [
      "<input>",
      "<input/>",
      "balise input",
      "champ input"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Le caméléon des contrôles de saisie. Son comportement et son apparence se métamorphosent selon son attribut 'type' : text, email, password, number, checkbox, radio, date, file, etc.",
    "code": "<input type=\"text\" name=\"nom\" placeholder=\"Ton nom\" required>\n<input type=\"checkbox\" id=\"cgu\" name=\"cgu\">",
    "bodhiTip": "Choisis toujours le type le plus sémantique (ex: type=\"email\" sur mobile affichera automatiquement le clavier virtuel avec le symbole @) !"
  },
  {
    "id": "input-types",
    "name": "Types d'Input (text, email, password, number, checkbox, radio)",
    "patterns": [
      "type=\"text\"",
      "type=\"email\"",
      "type=\"password\"",
      "type=\"number\"",
      "type=\"checkbox\"",
      "type=\"radio\"",
      "type=\"date\"",
      "type=\"file\""
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "L'attribut 'type' de l'<input> configure la validation native et le comportement du clavier mobile : saisie masquée (password), nombres (number), choix multiple (checkbox) ou choix unique exclusif (radio).",
    "code": "<input type=\"email\" required>\n<input type=\"password\" minlength=\"8\">",
    "bodhiTip": "Utilise le bon type d'input : cela active gratuitement la validation de saisie native du navigateur sans une ligne de JavaScript !"
  },
  {
    "id": "textarea-tag",
    "name": "<textarea>",
    "patterns": [
      "<textarea>",
      "</textarea>",
      "balise textarea",
      "champ textarea",
      "zone de texte"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Zone de saisie de texte multiligne idéale pour les longs messages, commentaires ou descriptions détaillées.",
    "code": "<textarea id=\"msg\" name=\"message\" rows=\"5\" placeholder=\"Écris ton message...\"></textarea>",
    "bodhiTip": "Contrairement à <input> qui est auto-fermante, <textarea> nécessite une balise fermante </textarea>. Tout texte inséré entre les deux devient la valeur par défaut !"
  },
  {
    "id": "button-tag",
    "name": "<button>",
    "patterns": [
      "<button>",
      "</button>",
      "balise button",
      "bouton html"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Élément interactif déclenchant une action (soumettre un formulaire, ouvrir une modale, basculer un menu). Peut être de type 'submit', 'reset' ou 'button'.",
    "code": "<button type=\"submit\" class=\"btn-primary\">Envoyer le parchemin</button>",
    "bodhiTip": "Spécifie toujours explicitement type=\"button\" pour tes boutons JavaScript, sinon le navigateur leur attribuera le type \"submit\" par défaut et rechargera ta page !"
  },
  {
    "id": "select-tag",
    "name": "<select>",
    "patterns": [
      "<select>",
      "</select>",
      "balise select",
      "menu déroulant"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Crée une boîte de sélection ou un menu déroulant permettant à l'utilisateur de choisir une ou plusieurs options prédéfinies.",
    "code": "<select name=\"niveau\" id=\"niveau\">\n  <option value=\"novice\">Apprenti</option>\n  <option value=\"expert\">Maître</option>\n</select>",
    "bodhiTip": "Pour regrouper visuellement des options par sous-familles, utilise la balise <optgroup>."
  },
  {
    "id": "option-tag",
    "name": "<option>",
    "patterns": [
      "<option>",
      "</option>",
      "balise option"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Définit un choix individuel au sein d'une liste déroulante <select> ou d'une liste de suggestions <datalist>.",
    "code": "<option value=\"css\" selected>Feuilles de Style CSS</option>",
    "bodhiTip": "L'attribut 'value' contient la donnée brute envoyée au serveur, tandis que le texte entre les balises est le libellé lu par l'humain."
  },
  {
    "id": "optgroup-tag",
    "name": "<optgroup>",
    "patterns": [
      "<optgroup>",
      "</optgroup>",
      "balise optgroup"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Regroupe logiquement plusieurs balises <option> sous un intitulé non sélectionnable via son attribut 'label'.",
    "code": "<select>\n  <optgroup label=\"Front-end\">\n    <option value=\"html\">HTML</option>\n  </optgroup>\n</select>",
    "bodhiTip": "Aère considérablement les très longues listes déroulantes."
  },
  {
    "id": "datalist-tag",
    "name": "<datalist>",
    "patterns": [
      "<datalist>",
      "</datalist>",
      "balise datalist"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Fournit une liste de suggestions de saisie semi-automatique associées à un champ <input> standard via l'attribut 'list'.",
    "code": "<input list=\"couleurs\" name=\"couleur\">\n<datalist id=\"couleurs\">\n  <option value=\"Indigo\">\n  <option value=\"Émeraude\">\n</datalist>",
    "bodhiTip": "Idéal pour guider l'utilisateur tout en lui laissant la liberté de saisir une valeur qui ne figure pas dans la liste."
  },
  {
    "id": "fieldset-legend",
    "name": "<fieldset> et <legend>",
    "patterns": [
      "<fieldset>",
      "<legend>",
      "</fieldset>",
      "</legend>",
      "balise fieldset"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Permet de regrouper logiquement plusieurs contrôles de formulaire apparentés (<fieldset>) et de leur attribuer un titre commun explicatif (<legend>).",
    "code": "<fieldset>\n  <legend>Coordonnées de l'Apprenti</legend>\n  <label>Nom : <input type=\"text\" name=\"nom\"></label>\n</fieldset>",
    "bodhiTip": "Une pratique exemplaire pour l'accessibilité lors de la conception de groupes de boutons radio ou de cases à cocher."
  },
  {
    "id": "progress-tag",
    "name": "<progress>",
    "patterns": [
      "<progress>",
      "</progress>",
      "balise progress"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Indique l'état d'avancement d'une tâche dont la progression est mesurable (téléchargement, progression dans un questionnaire).",
    "code": "<progress value=\"70\" max=\"100\">70%</progress>",
    "bodhiTip": "Ne le confonds pas avec <meter> : progress mesure l'avancement d'un processus, pas une mesure statique."
  },
  {
    "id": "meter-tag",
    "name": "<meter>",
    "patterns": [
      "<meter>",
      "</meter>",
      "balise meter"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Représente une mesure scalaire dans une plage connue ou une valeur fractionnaire (espace disque utilisé, pertinence, note sur 10).",
    "code": "<meter min=\"0\" max=\"100\" low=\"20\" high=\"80\" optimum=\"90\" value=\"85\">85%</meter>",
    "bodhiTip": "Parfait pour afficher une jauge de capacité ou le score de force d'un mot de passe."
  },
  {
    "id": "output-tag",
    "name": "<output>",
    "patterns": [
      "<output>",
      "</output>",
      "balise output"
    ],
    "category": "HTML : Formulaires & Entrées",
    "desc": "Affiche le résultat d'un calcul instantané réalisé par un script ou d'une interaction utilisateur dans un formulaire.",
    "code": "<form oninput=\"result.value = parseInt(a.value) + parseInt(b.value)\">\n  <output name=\"result\">0</output>\n</form>",
    "bodhiTip": "Permet aux aides techniques de repérer automatiquement les résultats dynamiques."
  },
  {
    "id": "img-tag",
    "name": "<img>",
    "patterns": [
      "<img>",
      "<img/>",
      "balise img",
      "image html",
      "attribut alt",
      "src"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Balise orpheline intégrant une image matricielle (PNG, JPEG, WebP) ou vectorielle (SVG). Les attributs 'src' (source du fichier) et 'alt' (texte alternatif d'accessibilité) sont indispensables.",
    "code": "<img src=\"arbre_dom.png\" alt=\"Schéma de l'arbre du DOM\">\n<img src=\"photo.jpg\" alt=\"\" loading=\"lazy\">",
    "bodhiTip": "L'attribut 'alt' est sacré : si l'image est purement décorative, laisse alt=\"\" vide, mais ne supprime jamais l'attribut !"
  },
  {
    "id": "figure-figcaption",
    "name": "<figure> et <figcaption>",
    "patterns": [
      "<figure>",
      "<figcaption>",
      "</figure>",
      "</figcaption>",
      "balise figure"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Duo sémantique associant un contenu autonome (image, diagramme, extrait de code, citation) et sa légende explicite textuelle.",
    "code": "<figure>\n  <img src=\"avatar.png\" alt=\"Portrait de Bodhi\">\n  <figcaption>Maître Bodhi enseignant au sanctuaire.</figcaption>\n</figure>",
    "bodhiTip": "Permet de dissocier la légende du texte courant tout en garantissant un lien sémantique indissoluble."
  },
  {
    "id": "picture-tag",
    "name": "<picture>",
    "patterns": [
      "<picture>",
      "</picture>",
      "balise picture"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Conteneur avancé permettant d'offrir des sources d'images alternatives selon la résolution d'écran (media queries) ou le support des formats modernes (AVIF, WebP, PNG).",
    "code": "<picture>\n  <source srcset=\"hero.avif\" type=\"image/avif\">\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <img src=\"hero.jpg\" alt=\"Sanctuaire au crépuscule\">\n</picture>",
    "bodhiTip": "Le Graal de la performance web : délivre l'image la plus légère possible selon les capacités de chaque navigateur !"
  },
  {
    "id": "video-tag",
    "name": "<video>",
    "patterns": [
      "<video>",
      "</video>",
      "balise video"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Intègre un lecteur vidéo natif dans la page sans avoir besoin d'extension tierce. Supporte les contrôles de lecture, la mise en boucle et le préchargement.",
    "code": "<video controls width=\"640\" poster=\"miniature.jpg\">\n  <source src=\"cours.mp4\" type=\"video/mp4\">\n  Votre navigateur ne supporte pas la balise vidéo.\n</video>",
    "bodhiTip": "Ajoute toujours l'attribut 'poster' pour afficher une belle image de couverture avant le lancement de la vidéo."
  },
  {
    "id": "audio-tag",
    "name": "<audio>",
    "patterns": [
      "<audio>",
      "</audio>",
      "balise audio"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Intègre un flux audio ou un extrait sonore dans le document web avec des commandes de lecture natives.",
    "code": "<audio controls>\n  <source src=\"meditation.mp3\" type=\"audio/mpeg\">\n</audio>",
    "bodhiTip": "Par respect pour tes visiteurs, n'active jamais l'autoplay sans sourdine ('muted') : rien n'est plus agressif qu'un son inattendu à l'ouverture d'une page !"
  },
  {
    "id": "track-tag",
    "name": "<track>",
    "patterns": [
      "<track>",
      "balise track"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Fournit des pistes de sous-titres, de légendes ou de descriptions textuelles synchronisées pour les balises <video> et <audio> via des fichiers au format WebVTT.",
    "code": "<track kind=\"subtitles\" src=\"sub_fr.vtt\" srclang=\"fr\" label=\"Français\" default>",
    "bodhiTip": "Indispensable pour l'accessibilité des personnes sourdes ou malentendantes."
  },
  {
    "id": "iframe-tag",
    "name": "<iframe>",
    "patterns": [
      "<iframe>",
      "</iframe>",
      "balise iframe"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Incorpore une fenêtre de navigation vers un autre document HTML ou un service tiers externe (carte Google Maps, vidéo YouTube, bac à sable).",
    "code": "<iframe src=\"https://example.org\" title=\"Exemple externe\" width=\"600\" height=\"400\" loading=\"lazy\"></iframe>",
    "bodhiTip": "N'oublie jamais l'attribut 'title' sur ton <iframe> pour expliquer aux synthèses vocales le contenu de la fenêtre intégrée !"
  },
  {
    "id": "canvas-tag",
    "name": "<canvas>",
    "patterns": [
      "<canvas>",
      "</canvas>",
      "balise canvas"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Zone de dessin bitmap pilotable par programmation JavaScript pour générer des graphiques 2D dynamiques, des jeux vidéo ou des visualisations de données.",
    "code": "<canvas id=\"monCanvas\" width=\"400\" height=\"300\"></canvas>",
    "bodhiTip": "Pense à placer du contenu textuel de repli à l'intérieur de la balise <canvas> pour les navigateurs anciens."
  },
  {
    "id": "svg-tag",
    "name": "<svg>",
    "patterns": [
      "<svg>",
      "</svg>",
      "balise svg",
      "format svg"
    ],
    "category": "HTML : Médias & Graphisme",
    "desc": "Scalable Vector Graphics : balise et format d'image vectorielle basé sur XML. Permet de tracer des lignes, des courbes et des icônes parfaitement nettes quelle que soit la résolution d'écran.",
    "code": "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n  <circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"currentColor\"/>\n</svg>",
    "bodhiTip": "Les icônes SVG s'adaptent à l'infini sans jamais pixeliser, et leur couleur peut être pilotée directement en CSS avec 'fill' et 'stroke' !"
  },
  {
    "id": "table-tag",
    "name": "<table>",
    "patterns": [
      "<table>",
      "</table>",
      "balise table",
      "tableau html"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Permet de structurer et d'afficher des données multidimensionnelles sous forme de grille rigoureuse composée de lignes et de colonnes.",
    "code": "<table>\n  <caption>Horaires du Sanctuaire</caption>\n  <tr><th>Jour</th><th>Heure</th></tr>\n  <tr><td>Lundi</td><td>08h00</td></tr>\n</table>",
    "bodhiTip": "Une règle historique : n'utilise jamais <table> pour réaliser la mise en page d'un site ! C'était la pratique barbare des années 90 avant l'arrivée de CSS."
  },
  {
    "id": "caption-tag",
    "name": "<caption>",
    "patterns": [
      "<caption>",
      "</caption>",
      "balise caption"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Fournit un titre ou une description textuelle explicite à un tableau <table>, placé en première position immédiate.",
    "code": "<caption>Inventaire des manuscrits anciens</caption>",
    "bodhiTip": "Capital pour les personnes aveugles : leur synthèse vocale lit le caption avant d'énumérer les cellules du tableau."
  },
  {
    "id": "tr-th-td-tags",
    "name": "<tr>, <th> et <td>",
    "patterns": [
      "<tr>",
      "<th>",
      "<td>",
      "</tr>",
      "</th>",
      "</td>",
      "cellule de tableau"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Les composants élémentaires d'un tableau : <tr> délimite une ligne, <th> définit une cellule d'en-tête (en gras et centrée), et <td> contient une cellule de données standard.",
    "code": "<tr>\n  <th>Propriété</th>\n  <td>Valeur</td>\n</tr>",
    "bodhiTip": "Pense à ajouter l'attribut scope=\"col\" ou scope=\"row\" sur tes <th> pour clarifier la direction de l'en-tête."
  },
  {
    "id": "thead-tbody-tfoot",
    "name": "<thead>, <tbody> et <tfoot>",
    "patterns": [
      "<thead>",
      "<tbody>",
      "<tfoot>",
      "</thead>",
      "</tbody>",
      "</tfoot>"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Divisent logiquement un tableau en trois sections maîtresses : l'en-tête (thead), le corps principal des données (tbody), et le pied récapitulatif (tfoot).",
    "code": "<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>...</tfoot>\n</table>",
    "bodhiTip": "Permet aux navigateurs d'imprimer l'en-tête sur chaque page lorsque le tableau s'étend sur plusieurs feuilles de papier."
  },
  {
    "id": "colgroup-col-tags",
    "name": "<colgroup> et <col>",
    "patterns": [
      "<colgroup>",
      "<col>",
      "</colgroup>"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Permettent d'appliquer des styles ou largeurs uniformes à des colonnes entières d'un tableau sans avoir à styliser chaque cellule <td> individuellement.",
    "code": "<colgroup>\n  <col class=\"col-nom\">\n  <col class=\"col-prix\">\n</colgroup>",
    "bodhiTip": "Une technique très élégante pour colorer une colonne entière en CSS."
  },
  {
    "id": "details-summary",
    "name": "<details> et <summary>",
    "patterns": [
      "<details>",
      "<summary>",
      "</details>",
      "</summary>",
      "balise details"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Composant accordéon natif en pur HTML sans une seule ligne de JavaScript ! <summary> sert de titre cliquable pour déplier ou replier le contenu secret de <details>.",
    "code": "<details>\n  <summary>Voir l'indice secret</summary>\n  <p>Pense à appliquer box-sizing: border-box !</p>\n</details>",
    "bodhiTip": "Tu peux tester si l'accordéon est ouvert grâce à la présence de l'attribut booléen 'open'."
  },
  {
    "id": "dialog-tag",
    "name": "<dialog>",
    "patterns": [
      "<dialog>",
      "</dialog>",
      "balise dialog",
      "fenêtre modale"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Élément natif pour créer des boîtes de dialogue et des fenêtres modales avec gestion automatique du focus, touche Échap et arrière-plan assombri via le pseudo-élément ::backdrop.",
    "code": "<dialog id=\"maModale\">\n  <p>Bienvenue dans le sanctuaire !</p>\n  <button onclick=\"this.closest('dialog').close()\">Fermer</button>\n</dialog>",
    "bodhiTip": "Ouvre-le en JavaScript avec showModal() pour verrouiller l'interaction avec le reste de la page."
  },
  {
    "id": "template-tag",
    "name": "<template>",
    "patterns": [
      "<template>",
      "</template>",
      "balise template"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Mécanisme permettant de stocker du code HTML inerte qui n'est pas rendu à l'affichage initial mais peut être cloné et instancié dynamiquement en JavaScript.",
    "code": "<template id=\"carte-produit\">\n  <div class=\"carte\"><h3></h3><p></p></div>\n</template>",
    "bodhiTip": "Idéal pour concevoir des composants répétitifs et légers côté client sans bibliothèque lourde."
  },
  {
    "id": "slot-tag",
    "name": "<slot>",
    "patterns": [
      "<slot>",
      "</slot>",
      "balise slot"
    ],
    "category": "HTML : Tableaux & Composants",
    "desc": "Point d'insertion au sein du Shadow DOM des Web Components permettant d'injecter du balisage personnalisé depuis l'extérieur.",
    "code": "<slot name=\"titre\">Titre par défaut</slot>",
    "bodhiTip": "Le cœur de l'encapsulation modulaire du Web moderne."
  },
  {
    "id": "attr-class",
    "name": "class (Attribut)",
    "patterns": [
      "class=\"",
      "attribut class",
      "classes css"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Permet d'associer un ou plusieurs noms de classes à un élément HTML afin de le cibler en CSS (.nom-classe) ou en JavaScript.",
    "code": "<div class=\"carte carte-vedette sombre\">...</div>",
    "bodhiTip": "Contrairement à l'ID qui doit être unique, une classe peut être partagée par des centaines d'éléments identiques."
  },
  {
    "id": "attr-id",
    "name": "id (Attribut Identifiant)",
    "patterns": [
      "id=\"",
      "attribut id",
      "identifiant unique"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Définit un identifiant strictement unique à l'échelle du document entier. Sert d'ancrage d'URL (#mon-id), de cible de formulaire (<label for=\"mon-id\">) ou de sélecteur CSS (#mon-id).",
    "code": "<section id=\"temple-savoir\">...</section>",
    "bodhiTip": "Deux éléments ne doivent JAMAIS porter le même ID sur une même page : c'est une faute grave qui brise le DOM et l'accessibilité !"
  },
  {
    "id": "attr-href",
    "name": "href (Hypertext Reference)",
    "patterns": [
      "href=\"",
      "href",
      "destination de lien"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Spécifie l'URL de destination d'un lien hypertexte <a> ou l'adresse d'une ressource liée via la balise <link>.",
    "code": "<a href=\"https://developer.mozilla.org\">MDN Web Docs</a>",
    "bodhiTip": "Pour un lien vers une section de la même page, utilise un dièse suivi de l'ID cible : href=\"#contact\"."
  },
  {
    "id": "attr-src",
    "name": "src (Source)",
    "patterns": [
      "src=\"",
      "attribut src"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Indique l'URL ou le chemin absolu/relatif du fichier média (image, vidéo, audio, script) à charger dans le document.",
    "code": "<img src=\"assets/images/temple.webp\" alt=\"Le temple\">",
    "bodhiTip": "Vérifie toujours scrupuleusement la casse de tes chemins de fichiers : Linux et les serveurs web font la différence entre majuscules et minuscules !"
  },
  {
    "id": "attr-alt",
    "name": "alt (Texte Alternatif)",
    "patterns": [
      "alt=\"",
      "attribut alt",
      "texte alternatif"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Fournit une description textuelle de substitution indispensable lorsque l'image ne peut être chargée, et lue à voix haute par les lecteurs d'écran pour personnes déficientes visuelles.",
    "code": "<img src=\"logo.png\" alt=\"Logo du Sanctuaire Web\">",
    "bodhiTip": "Un site sans attributs alt valides est un site qui exclut délibérément les personnes aveugles."
  },
  {
    "id": "attr-target",
    "name": "target=\"_blank\" & rel=\"noopener\"",
    "patterns": [
      "target=\"_blank\"",
      "target=",
      "noopener"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "L'attribut target=\"_blank\" ouvre le lien dans un nouvel onglet. Doit être systématiquement sécurisé avec rel=\"noopener noreferrer\" pour éviter les failles de sécurité de navigation ('tabnabbing').",
    "code": "<a href=\"https://w3.org\" target=\"_blank\" rel=\"noopener noreferrer\">W3C</a>",
    "bodhiTip": "Indique toujours à l'utilisateur que le lien s'ouvre dans un nouvel onglet afin de ne pas désorienter la navigation au clavier."
  },
  {
    "id": "attr-form-attrs",
    "name": "name, value & placeholder",
    "patterns": [
      "name=\"",
      "value=\"",
      "placeholder=\""
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Les attributs essentiels de saisie : 'name' identifie la variable envoyée au serveur, 'value' définit la valeur courante, et 'placeholder' affiche un indice grisé d'exemple.",
    "code": "<input type=\"text\" name=\"pseudo\" placeholder=\"Ex: Bodhi\" value=\"\">",
    "bodhiTip": "Ne remplace JAMAIS une balise <label> par un simple placeholder : dès que l'utilisateur commence à taper, le placeholder disparaît !"
  },
  {
    "id": "attr-form-validation",
    "name": "required, disabled, readonly",
    "patterns": [
      "required",
      "disabled",
      "readonly",
      "minlength",
      "maxlength"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Attributs de contrôle : 'required' bloque la soumission si le champ est vide, 'disabled' désactive le champ et exclut sa valeur de l'envoi, et 'readonly' permet la lecture sans modification.",
    "code": "<input type=\"text\" name=\"code\" required minlength=\"4\">",
    "bodhiTip": "Le navigateur affiche automatiquement un message d'erreur natif si un champ required n'est pas rempli."
  },
  {
    "id": "attr-loading-lazy",
    "name": "loading=\"lazy\" (Chargement Différé)",
    "patterns": [
      "loading=\"lazy\"",
      "chargement différé",
      "lazy loading"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Indique au navigateur de ne télécharger l'image ou l'iframe que lorsque l'utilisateur s'en approche en faisant défiler la page.",
    "code": "<img src=\"tableau-lourd.jpg\" alt=\"Fresque\" loading=\"lazy\">",
    "bodhiTip": "Permet d'économiser d'énormes quantités de bande passante et accélère drastiquement le chargement initial de ta page !"
  },
  {
    "id": "attr-aria",
    "name": "Attributs ARIA (Accessible Rich Internet Applications)",
    "patterns": [
      "aria-label",
      "aria-hidden",
      "aria-expanded",
      "attributs aria",
      "rôle aria"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Ensemble d'attributs préfixés par 'aria-' permettant d'enrichir la sémantique pour les technologies d'assistance lorsque le HTML standard ne suffit pas.",
    "code": "<button aria-label=\"Fermer la fenêtre\" aria-expanded=\"false\">X</button>",
    "bodhiTip": "Premier principe d'ARIA du W3C : si une balise HTML native existe déjà (ex: <button>), utilise-la au lieu de réinventer un <div role=\"button\"> !"
  },
  {
    "id": "attr-tabindex",
    "name": "tabindex (Ordre de Tabulation)",
    "patterns": [
      "tabindex",
      "tabindex=\"0\"",
      "tabindex=\"-1\""
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Contrôle si un élément peut recevoir le focus clavier et son ordre de navigation : 0 l'insère dans le flux normal, -1 le rend focalisable par script sans être dans la boucle Tab.",
    "code": "<div tabindex=\"0\" role=\"button\">Élément interactif</div>",
    "bodhiTip": "Évite absolument les valeurs positives comme tabindex=\"1\" ou tabindex=\"2\" : elles perturbent gravement l'ordre de tabulation naturel de la page !"
  },
  {
    "id": "attr-data",
    "name": "data-* (Attributs de Données Personnalisés)",
    "patterns": [
      "data-",
      "attributs data",
      "dataset"
    ],
    "category": "HTML : Attributs & Accessibilité",
    "desc": "Permet de stocker des données personnalisées directement sur un élément HTML, facilement exploitables en CSS (attr()) ou en JavaScript (element.dataset).",
    "code": "<article data-categorie=\"astuces\" data-difficulte=\"novice\">...</article>",
    "bodhiTip": "Pratique et standardisé, sans polluer les classes CSS."
  },
  {
    "id": "dom-tree",
    "name": "Arbre du DOM (Document Object Model)",
    "patterns": [
      "arbre du dom",
      "arbre dom",
      "le dom",
      "dom"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Représentation arborescente en mémoire vive construite par le navigateur à partir de ton code source HTML. Chaque balise y devient un nœud ('node') interconnecté avec ses parents et ses enfants.",
    "code": "Document -> html -> body -> main -> section -> p",
    "bodhiTip": "Quand ton HTML est mal emboîté, le navigateur doit deviner et réparer le DOM à la volée, ce qui ralentit considérablement l'affichage."
  },
  {
    "id": "cssom-concept",
    "name": "CSSOM (CSS Object Model)",
    "patterns": [
      "cssom",
      "arbre cssom"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Arbre miroir du DOM représentant l'ensemble des règles de style CSS et leurs relations de cascade calculées par le navigateur.",
    "code": "CSS Source -> Analyse des sélecteurs -> Arbre CSSOM",
    "bodhiTip": "Le navigateur fusionne le DOM et le CSSOM pour créer le 'Render Tree' final qui sera dessiné à l'écran."
  },
  {
    "id": "render-tree",
    "name": "Render Tree & Reflow / Repaint",
    "patterns": [
      "render tree",
      "reflow",
      "repaint",
      "arbre de rendu"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "L'arbre de rendu regroupe uniquement les éléments visibles du DOM et leur style calculé. Le 'Reflow' calcule les dimensions et positions, puis le 'Repaint' peint les pixels.",
    "code": "DOM + CSSOM = Render Tree -> Layout (Reflow) -> Paint",
    "bodhiTip": "Modifier des propriétés comme 'width' ou 'top' force un Reflow coûteux ; privilégie 'transform' et 'opacity' pour des animations à 60 images par seconde."
  },
  {
    "id": "http-https",
    "name": "HTTP / HTTPS & Serveur Web",
    "patterns": [
      "http",
      "https",
      "protocole http",
      "serveur web"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Le protocole de communication universel du Web. HTTPS y ajoute une couche de chiffrement TLS garantissant la confidentialité et l'intégrité des échanges entre le navigateur et le serveur.",
    "code": "Client -> Requête HTTP GET /index.html -> Serveur Web -> Réponse 200 OK",
    "bodhiTip": "En 2026, un site web non sécurisé en HTTPS est pénalisé par Google et signalé comme dangereux par les navigateurs."
  },
  {
    "id": "dns-concept",
    "name": "DNS (Domain Name System)",
    "patterns": [
      "dns",
      "résolution dns",
      "serveur dns"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "L'annuaire universel d'Internet qui traduit les noms de domaine mémorisables par les humains (ex: sanctuaire.dev) en adresses IP numériques (ex: 192.0.2.1) compréhensibles par les machines.",
    "code": "sanctuaire.dev <--- DNS ---> 185.199.108.153",
    "bodhiTip": "Sans le DNS, nous devrions mémoriser de longues séries de chiffres pour visiter le moindre site web."
  },
  {
    "id": "url-concept",
    "name": "URL & Chemins Relatifs vs Absolus",
    "patterns": [
      "url",
      "chemin relatif",
      "chemin absolu",
      "uri"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "L'adresse unique d'une ressource web. Un chemin absolu commence par http:// ou par la racine /, tandis qu'un chemin relatif (style.css, ../images/logo.png) part du dossier actuel.",
    "code": "Relatif : href=\"chroniques.html\" | Absolu : href=\"https://sanctuaire.dev/chroniques.html\"",
    "bodhiTip": "Utilise toujours des chemins relatifs dans ton projet local pour qu'il fonctionne quel que soit le dossier ou serveur d'hébergement !"
  },
  {
    "id": "seo-concept",
    "name": "SEO (Search Engine Optimization)",
    "patterns": [
      "seo",
      "référencement naturel",
      "robots d'indexation"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "L'art d'optimiser l'architecture, la sémantique et la vitesse d'un site web afin de figurer en tête des résultats naturels des moteurs de recherche comme Google.",
    "code": "HTML sémantique + Titres h1-h3 clairs + Balise meta description + Vitesse = Succès SEO",
    "bodhiTip": "Les robots des moteurs de recherche ne voient pas les couleurs : ils ne lisent que ton code HTML brut !"
  },
  {
    "id": "open-graph-concept",
    "name": "Open Graph (Protocole OG pour Réseaux Sociaux)",
    "patterns": [
      "open graph",
      "og:title",
      "og:image",
      "og:description"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Métadonnées créées à l'origine par Facebook pour générer de superbes cartes d'aperçu avec photo, titre et résumé lorsqu'un lien est partagé sur Discord, Twitter ou WhatsApp.",
    "code": "<meta property=\"og:title\" content=\"Sanctuaire de l'Apprenti\">\n<meta property=\"og:image\" content=\"apercu.jpg\">",
    "bodhiTip": "Une balise og:image bien configurée multiplie par cinq les clics sur les réseaux sociaux !"
  },
  {
    "id": "responsive-rwd",
    "name": "Responsive Web Design (RWD) & Mobile-First",
    "patterns": [
      "responsive",
      "responsive web design",
      "mobile-first",
      "mobile first"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Philosophie de conception consistant à concevoir d'abord le site pour les petits écrans de smartphones, puis à l'enrichir progressivement pour les tablettes et ordinateurs via des media queries.",
    "code": "@media (min-width: 768px) { ... }",
    "bodhiTip": "Plus de 60% du trafic mondial s'effectue sur mobile : si ton site n'est pas pensé d'abord pour mobile, il est déjà obsolète."
  },
  {
    "id": "devtools-inspector",
    "name": "Outils de Développement (DevTools) & Inspecteur",
    "patterns": [
      "devtools",
      "inspecteur d'éléments",
      "console développeur",
      "inspecter l'élément"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "La boîte à outils suprême intégrée dans chaque navigateur (F12 ou Ctrl+Maj+I). Permet d'inspecter l'arbre du DOM en temps réel, de tester du CSS en direct et de déboguer le réseau.",
    "code": "Touche F12 -> Onglet Éléments -> Modifier le CSS en direct",
    "bodhiTip": "C'est la lampe torche de l'artisan web : ne code jamais à l'aveugle sans ouvrir tes DevTools !"
  },
  {
    "id": "browser-wars",
    "name": "Guerres des Navigateurs (Browser Wars)",
    "patterns": [
      "guerres des navigateurs",
      "guerre des navigateurs",
      "browser wars"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "L'affrontement historique des années 90 et 2000 entre Netscape et Internet Explorer. Chaque entreprise créait ses propres balises propriétaires incompatibles, rendant le Web chaotique.",
    "code": "<!-- Balises sauvages de l'époque : <blink>, <marquee> -->",
    "bodhiTip": "C'est de ce chaos que sont nés les standards ouverts du W3C pour préserver un Web universel et libre."
  },
  {
    "id": "w3c-standard",
    "name": "W3C & WHATWG (Standards du Web)",
    "patterns": [
      "w3c",
      "whatwg",
      "standards du web",
      "standards ouverts"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Les consortiums internationaux garants de la pérennité et de l'interopérabilité des spécifications HTML5 et CSS.",
    "code": "<!-- Spécifications ouvertes, libres de droits et universelles -->",
    "bodhiTip": "Grâce aux standards du W3C, ton code fonctionne à l'identique sur Chrome, Firefox, Safari ou Edge."
  },
  {
    "id": "index-html-file",
    "name": "index.html (Point d'Entrée)",
    "patterns": [
      "index.html",
      "fichier index.html"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Le nom de fichier universel reconnu par tous les serveurs web comme la page d'accueil par défaut d'un dossier ou d'un domaine.",
    "code": "https://monsite.com/ -> Charge automatiquement index.html",
    "bodhiTip": "Appelle toujours ta page principale index.html : le serveur la délivre automatiquement sans qu'on ait besoin de taper son nom dans l'URL."
  },
  {
    "id": "style-css-file",
    "name": "style.css (Feuille de Style)",
    "patterns": [
      "style.css",
      "fichier style.css"
    ],
    "category": "Architecture Web, DOM & SEO",
    "desc": "Le fichier externe contenant l'ensemble des règles de style CSS communes à toutes les pages de ton sanctuaire.",
    "code": "<link rel=\"stylesheet\" href=\"style.css\">",
    "bodhiTip": "Une seule feuille de style centralisée gouverne l'apparence de dizaines de pages HTML."
  },
  {
    "id": "css-concept",
    "name": "CSS (Cascading Style Sheets)",
    "patterns": [
      "css",
      "css3",
      "langage css",
      "feuilles de style"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Le langage déclaratif universel qui insuffle beauté, vie, couleurs, typographies et mises en page au squelette HTML.",
    "code": "sélecteur {\n  propriété: valeur;\n}",
    "bodhiTip": "Le HTML dit 'ce que les choses sont', le CSS ordonne 'comment elles doivent apparaître'."
  },
  {
    "id": "box-sizing",
    "name": "box-sizing: border-box",
    "patterns": [
      "box-sizing: border-box",
      "box-sizing",
      "border-box",
      "modèle de boîte",
      "box model"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Règle d'or de la mise en page moderne. Avec 'border-box', la largeur ('width') et la hauteur ('height') incluent le padding et les bordures sans faire enfler l'élément au-delà de sa taille prévue.",
    "code": "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}",
    "bodhiTip": "Sans 'border-box', ajouter un padding de 20px à une boîte de 100% de large crée un débordement horizontal avec une barre de défilement parasite !"
  },
  {
    "id": "width-height-props",
    "name": "width, height, min-width & max-width",
    "patterns": [
      "width",
      "height",
      "min-width",
      "max-width",
      "min-height",
      "max-height"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Gouvernent les dimensions dimensionnelles d'un élément. 'max-width: 100%' garantit par exemple qu'une image ne débordera jamais de son conteneur.",
    "code": "width: 100%;\nmax-width: 1200px;\nmin-height: 100vh;",
    "bodhiTip": "Préfère 'max-width' à 'width' fixe : sur mobile, une boîte de width: 800px casse l'écran, alors qu'avec max-width elle se rétrécit gracieusement."
  },
  {
    "id": "padding-prop",
    "name": "padding (Marge Interne)",
    "patterns": [
      "padding",
      "padding-top",
      "padding-bottom",
      "padding-left",
      "padding-right"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "L'espace respiratoire intérieur situé entre le contenu d'un élément et sa propre bordure. Adopte la couleur de fond de l'élément.",
    "code": "padding: 1.5rem; /* 4 côtés */\npadding: 1rem 2rem; /* vertical | horizontal */",
    "bodhiTip": "Le padding est l'oxygène intérieur de tes textes : aère tes cartes pour les rendre accueillantes !"
  },
  {
    "id": "margin-prop",
    "name": "margin (Marge Externe)",
    "patterns": [
      "margin",
      "margin-top",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin: 0 auto"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "L'espace de dégagement extérieur qui repousse les éléments voisins. Totalement transparent.",
    "code": "margin: 0 auto; /* Centre un bloc horizontalement */\nmargin-bottom: 2rem;",
    "bodhiTip": "Attention au phénomène de fusion des marges ('margin collapse') : les marges verticales de deux blocs adjacents fusionnent au lieu de s'additionner !"
  },
  {
    "id": "border-prop",
    "name": "border (Bordure)",
    "patterns": [
      "border",
      "border-width",
      "border-style",
      "border-color"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Trace un liseré décoratif ou délimitant autour du padding d'un élément. Se décompose en épaisseur, style (solid, dashed, dotted) et couleur.",
    "code": "border: 1px solid rgba(255, 255, 255, 0.1);",
    "bodhiTip": "Utilise des bordures semi-transparentes subtiles plutôt que de gros traits noirs épais pour un rendu contemporain et raffiné."
  },
  {
    "id": "border-radius-prop",
    "name": "border-radius (Coins Arrondis)",
    "patterns": [
      "border-radius",
      "coins arrondis"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Arrondit les angles d'une boîte. Une valeur de 50% sur un élément carré transforme ce dernier en cercle parfait.",
    "code": "border-radius: 12px;\nborder-radius: 50%; /* Cercle parfait */",
    "bodhiTip": "Les formes adoucies guident le regard avec douceur et fluidité."
  },
  {
    "id": "outline-prop",
    "name": "outline & outline-offset",
    "patterns": [
      "outline",
      "outline-offset"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Trace une bordure extérieure qui ne prend aucune place dans le flux et ne repousse aucun élément voisin. Utilisé en priorité pour l'anneau de focus d'accessibilité.",
    "code": "button:focus-visible {\n  outline: 2px solid #38bdf8;\n  outline-offset: 4px;\n}",
    "bodhiTip": "Ne supprime jamais un 'outline: none' sans proposer une alternative visuelle équivalente pour les personnes naviguant au clavier !"
  },
  {
    "id": "box-shadow-prop",
    "name": "box-shadow (Ombre Portée)",
    "patterns": [
      "box-shadow",
      "ombres portées",
      "ombre"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Projette une ou plusieurs ombres douces derrière la boîte d'un élément, conférant profondeur, relief et illusion de lévitation.",
    "code": "box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);",
    "bodhiTip": "Une ombre réussie est diffuse et subtile, jamais d'un noir opaque saturé."
  },
  {
    "id": "overflow-prop",
    "name": "overflow (Débordement)",
    "patterns": [
      "overflow",
      "overflow: hidden",
      "overflow: auto",
      "overflow-x",
      "overflow-y"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Détermine le comportement du navigateur lorsque le contenu dépasse des limites physiques de sa boîte parente : visible, hidden (coupé), scroll ou auto.",
    "code": "overflow: hidden; /* Masque tout ce qui déborde */\noverflow-y: auto; /* Défilement vertical fluide */",
    "bodhiTip": "L'attribut 'overflow: hidden' est le maître des coins arrondis : il empêche les images enfants de dépasser du border-radius du parent !"
  },
  {
    "id": "position-prop",
    "name": "position (relative, absolute, fixed, sticky)",
    "patterns": [
      "position:",
      "position: relative",
      "position: absolute",
      "position: fixed",
      "position: sticky"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Gouverne le mode de placement d'un élément dans l'espace : static (flux normal), relative (décalage par rapport à sa place), absolute (par rapport au parent positionné le plus proche), fixed (ancré à l'écran) ou sticky (adhésif au défilement).",
    "code": ".parent { position: relative; }\n.enfant { position: absolute; top: 0; right: 0; }",
    "bodhiTip": "Pour positionner un enfant en 'absolute', son parent doit impérativement être en 'position: relative' !"
  },
  {
    "id": "z-index-prop",
    "name": "z-index (Plan d'Élévation)",
    "patterns": [
      "z-index",
      "pile d'empilement",
      "stacking context"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Définit l'ordre d'empilement sur l'axe tridimensionnel Z (profondeur). Un élément au z-index plus élevé recouvre un élément au z-index inférieur.",
    "code": "z-index: 10;\nz-index: 1000; /* Modale au premier plan */",
    "bodhiTip": "Attention : le 'z-index' n'a aucun effet sur un élément en position statique par défaut. Donne-lui au moins 'position: relative' !"
  },
  {
    "id": "opacity-visibility",
    "name": "opacity & visibility",
    "patterns": [
      "opacity",
      "visibility: hidden",
      "visibility"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Contrôlent la transparence ('opacity', de 0 à 1) ou la présence visuelle ('visibility: hidden'). Contrairement à 'display: none', ces deux propriétés conservent la place physique de l'élément dans la page.",
    "code": "opacity: 0.8;\nvisibility: hidden;",
    "bodhiTip": "'opacity' peut être animée en transition de manière extrêmement fluide par la carte graphique."
  },
  {
    "id": "cursor-prop",
    "name": "cursor (Pointeur de Souris)",
    "patterns": [
      "cursor",
      "cursor: pointer",
      "cursor: not-allowed"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Modifie la forme du curseur de la souris lors du survol : pointer (main cliquable), not-allowed (interdit), grab (main de préhension), text (barre de texte).",
    "code": "button { cursor: pointer; }\nbutton:disabled { cursor: not-allowed; }",
    "bodhiTip": "Toujours indiquer un curseur 'pointer' sur les éléments interactifs personnalisés pour informer l'utilisateur qu'ils sont cliquables !"
  },
  {
    "id": "display-prop",
    "name": "display (inline, block, inline-block, none)",
    "patterns": [
      "display:",
      "display: block",
      "display: inline",
      "display: inline-block",
      "display: none"
    ],
    "category": "CSS : Modèle de Boîte & Bases",
    "desc": "Définit la nature fondamentale de la boîte d'un élément dans le flux de la page : 'block' occupe toute la largeur, 'inline' suit le flux du texte, 'none' retire totalement l'élément de la page.",
    "code": "display: block;\ndisplay: inline-block;\ndisplay: none;",
    "bodhiTip": "Un élément en 'inline' ignore les propriétés 'width' et 'height' : transforme-le en 'inline-block' ou 'block' si tu veux lui donner des dimensions."
  },
  {
    "id": "flexbox-engine",
    "name": "display: flex (Moteur Flexbox)",
    "patterns": [
      "display: flex",
      "flexbox",
      "moteur flexbox",
      "conteneur flex"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Le moteur unidimensionnel d'alignement le plus puissant du CSS moderne. Il organise ses enfants en ligne ou en colonne avec une distribution intelligente de l'espace.",
    "code": ".nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
    "bodhiTip": "Flexbox a mis fin à quinze années de cauchemar de centrage vertical sur le Web !"
  },
  {
    "id": "flex-direction",
    "name": "flex-direction (row, column)",
    "patterns": [
      "flex-direction",
      "flex-direction: column",
      "flex-direction: row"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Définit l'axe principal sur lequel s'organisent les enfants d'un conteneur Flexbox : 'row' (horizontal, par défaut) ou 'column' (vertical).",
    "code": "flex-direction: column; /* Empile les enfants verticalement */",
    "bodhiTip": "Quand tu bascules en 'flex-direction: column', l'axe de 'justify-content' devient vertical et celui de 'align-items' devient horizontal !"
  },
  {
    "id": "justify-content",
    "name": "justify-content",
    "patterns": [
      "justify-content",
      "justify-content: center",
      "justify-content: space-between",
      "alignement principal"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Aligne et répartit les enfants le long de l'axe principal du conteneur Flexbox (flex-start, center, flex-end, space-between, space-around, space-evenly).",
    "code": "justify-content: space-between; /* Espace maximal entre les éléments */\njustify-content: center; /* Centre sur l'axe principal */",
    "bodhiTip": "'space-between' pousse le premier élément tout à gauche et le dernier tout à droite : l'arme idéale pour une barre de navigation !"
  },
  {
    "id": "align-items",
    "name": "align-items",
    "patterns": [
      "align-items",
      "align-items: center",
      "alignement transversal"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Aligne tous les enfants le long de l'axe transversal secondaire (perpendiculaire à l'axe principal) : stretch, center, flex-start, flex-end, baseline.",
    "code": "align-items: center; /* Centrage transversal parfait */",
    "bodhiTip": "Combiné avec 'justify-content: center', il réalise le centrage absolu universel en deux lignes."
  },
  {
    "id": "align-self-prop",
    "name": "align-self (Alignement Individuel Flex)",
    "patterns": [
      "align-self",
      "align-self: flex-end"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Permet à un enfant Flexbox particulier de passer outre la directive 'align-items' définie par son conteneur parent.",
    "code": ".enfant-rebelle { align-self: flex-end; }",
    "bodhiTip": "Très utile pour décaler un seul bouton au bas d'une colonne de texte."
  },
  {
    "id": "gap-prop",
    "name": "gap (Espacement Flexible et Grille)",
    "patterns": [
      "gap:",
      "gap",
      "row-gap",
      "column-gap"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Définit l'espace exact entre les lignes et colonnes d'un conteneur Flexbox ou Grid sans avoir besoin d'ajouter de marges manuelles aux enfants.",
    "code": "gap: 1.5rem;\ngap: 1rem 2rem; /* ligne | colonne */",
    "bodhiTip": "Le 'gap' ne crée aucun espace inutile sur les bords extérieurs : c'est un pur bonheur ergonomique !"
  },
  {
    "id": "flex-wrap",
    "name": "flex-wrap: wrap",
    "patterns": [
      "flex-wrap",
      "flex-wrap: wrap"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Autorise les éléments d'un conteneur Flexbox à passer automatiquement à la ligne suivante dès que l'espace horizontal devient insuffisant.",
    "code": "flex-wrap: wrap;",
    "bodhiTip": "Sans 'flex-wrap: wrap', tes enfants Flexbox vont s'écraser et rétrécir jusqu'à déborder de la page !"
  },
  {
    "id": "flex-grow-shrink",
    "name": "flex-grow, flex-shrink & flex-basis",
    "patterns": [
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex: 1"
    ],
    "category": "CSS : Flexbox & Mise en Page",
    "desc": "Triplet gouvernant l'élasticité d'un enfant : 'flex-grow' indique la capacité à grandir pour occuper l'espace vide, 'flex-shrink' la capacité à rétrécir, et 'flex-basis' la taille initiale de départ.",
    "code": "flex: 1; /* Raccourci pour flex-grow: 1, flex-shrink: 1, flex-basis: 0% */",
    "bodhiTip": "'flex: 1' sur tous les enfants d'un menu leur confère instantanément une largeur rigoureusement identique !"
  },
  {
    "id": "css-grid-engine",
    "name": "display: grid (Moteur CSS Grid)",
    "patterns": [
      "display: grid",
      "css grid",
      "grille css",
      "moteur grid"
    ],
    "category": "CSS : Grid Layout",
    "desc": "Le moteur bidimensionnel suprême du Web. Permet de concevoir des mises en page complexes en contrôlant simultanément les lignes horizontales et les colonnes verticales.",
    "code": ".galerie {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}",
    "bodhiTip": "Utilise Flexbox pour un alignement en une seule dimension (ligne ou colonne) et Grid pour une véritable matrice à deux dimensions."
  },
  {
    "id": "grid-template-columns",
    "name": "grid-template-columns",
    "patterns": [
      "grid-template-columns",
      "grid-template-rows"
    ],
    "category": "CSS : Grid Layout",
    "desc": "Définit le nombre, le nom et la largeur respective des colonnes de la grille CSS.",
    "code": "grid-template-columns: 250px 1fr 1fr;\ngrid-template-columns: repeat(3, 1fr);",
    "bodhiTip": "L'unité 'fr' (fraction de l'espace disponible) calcule automatiquement la place restante sans avoir recours aux pourcentages."
  },
  {
    "id": "grid-auto-fit-minmax",
    "name": "repeat(auto-fit, minmax(...))",
    "patterns": [
      "auto-fit",
      "minmax",
      "auto-fill"
    ],
    "category": "CSS : Grid Layout",
    "desc": "La formule magique la plus célèbre du Web responsive moderne. Crée une grille de cartes qui s'adapte automatiquement à n'importe quel écran sans aucune media query !",
    "code": "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
    "bodhiTip": "Plus besoin de breakpoints manuels : les colonnes se réarrangent toutes seules selon la largeur de la fenêtre !"
  },
  {
    "id": "grid-column-row",
    "name": "grid-column & grid-row (Étendue de Cellule)",
    "patterns": [
      "grid-column",
      "grid-row",
      "span 2"
    ],
    "category": "CSS : Grid Layout",
    "desc": "Définit le point de départ, le point d'arrivée ou le nombre de pistes qu'une cellule de grille doit traverser.",
    "code": ".grande-carte {\n  grid-column: span 2;\n  grid-row: span 2;\n}",
    "bodhiTip": "Permet de créer des mises en page asymétriques saisissantes dignes des plus beaux magazines d'art."
  },
  {
    "id": "grid-template-areas",
    "name": "grid-template-areas & grid-area",
    "patterns": [
      "grid-template-areas",
      "grid-area"
    ],
    "category": "CSS : Grid Layout",
    "desc": "Permet de dessiner visuellement le plan d'une page complète avec des mots nommés correspondant aux différentes zones (header, sidebar, content, footer).",
    "code": "grid-template-areas:\n  \"header header\"\n  \"nav main\"\n  \"footer footer\";",
    "bodhiTip": "Une lisibilité architecturale incomparable pour concevoir un gabarit de site entier."
  },
  {
    "id": "font-family-prop",
    "name": "font-family & Polices Web",
    "patterns": [
      "font-family",
      "police de caractères",
      "polices web",
      "google fonts"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Spécifie la liste ordonnée des polices de caractères typographiques à appliquer au texte, avec une police générique de secours (sans-serif, serif, monospace).",
    "code": "font-family: 'Cinzel', 'Trajan Pro', Georgia, serif;",
    "bodhiTip": "Termine toujours ta liste par une police générique système (comme sans-serif) pour garantir un affichage propre si la police web échoue à se télécharger."
  },
  {
    "id": "font-size-prop",
    "name": "font-size (Taille Typographique)",
    "patterns": [
      "font-size",
      "taille de texte"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Définit la hauteur des caractères du texte. Se mesure en pixels (px), en 'rem' (recommandé pour l'accessibilité) ou en pourcentages.",
    "code": "font-size: 1.125rem; /* 18px si la base est de 16px */",
    "bodhiTip": "Privilégie l'unité 'rem' : si un utilisateur malvoyant augmente la taille de police par défaut de son navigateur, tes textes s'adapteront fidèlement."
  },
  {
    "id": "font-weight-prop",
    "name": "font-weight (Graisse du Texte)",
    "patterns": [
      "font-weight",
      "graisse",
      "texte gras"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Règle l'épaisseur du trait des lettres, allant de 100 (ultra-léger) à 900 (très gras). Les valeurs les plus courantes sont 400 (normal) et 700 (gras).",
    "code": "font-weight: 400; /* Normal */\nfont-weight: 700; /* Gras */",
    "bodhiTip": "Assure-toi d'avoir importé la graisse correspondante dans ton <link> Google Fonts, sinon le navigateur tentera de simuler un gras artificiel souvent disgracieux."
  },
  {
    "id": "line-height-prop",
    "name": "line-height (Interligne)",
    "patterns": [
      "line-height",
      "interligne"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Fixe la distance verticale entre deux lignes de texte successives. Capital pour le confort et le repos des yeux lors de la lecture d'un long paragraphe.",
    "code": "line-height: 1.6; /* Ratio sans unité recommandé */",
    "bodhiTip": "Pour un texte de corps de page, un 'line-height' compris entre 1.5 et 1.7 offre une lisibilité optimale."
  },
  {
    "id": "letter-spacing-prop",
    "name": "letter-spacing (Espacement Interlettre)",
    "patterns": [
      "letter-spacing",
      "interlettrage"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Modifie l'espacement entre chaque caractère. Idéal pour donner de la prestance et une touche solennelle aux titres en majuscules.",
    "code": "letter-spacing: 0.1em;\ntext-transform: uppercase;",
    "bodhiTip": "Une petite touche de letter-spacing sur des titres majuscules métamorphose un design amateur en création professionnelle."
  },
  {
    "id": "text-align-prop",
    "name": "text-align (Alignement du Texte)",
    "patterns": [
      "text-align",
      "text-align: center",
      "text-align: justify"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Contrôle l'alignement horizontal du texte au sein de son bloc conteneur : left, right, center ou justify.",
    "code": "text-align: center;\ntext-align: left;",
    "bodhiTip": "Évite le 'text-align: justify' sur le Web : sans césure automatique parfaite des mots, il crée de vilains trous blancs disgracieux appelés 'fleuves de blanc'."
  },
  {
    "id": "text-transform-prop",
    "name": "text-transform (Majuscules & Minuscules)",
    "patterns": [
      "text-transform",
      "text-transform: uppercase"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Gère la casse du texte sans toucher au HTML source : uppercase (TOUT EN MAJUSCULES), lowercase ou capitalize (Première Lettre En Majuscule).",
    "code": "text-transform: uppercase;",
    "bodhiTip": "Règle de pro : écris toujours ton texte normalement en minuscules dans le HTML, et force les majuscules en CSS avec text-transform !"
  },
  {
    "id": "text-decoration-prop",
    "name": "text-decoration (Soulignement & Biffure)",
    "patterns": [
      "text-decoration",
      "text-decoration: none",
      "text-decoration: underline"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Contrôle le soulignement des liens, les lignes au-dessus (overline) ou les barrages (line-through).",
    "code": "a { text-decoration: none; }\na:hover { text-decoration: underline; }",
    "bodhiTip": "Retirer le soulignement par défaut des liens est classique, mais compense toujours au survol (:hover) pour que l'action reste évidente."
  },
  {
    "id": "text-overflow-prop",
    "name": "text-overflow: ellipsis (Troncature)",
    "patterns": [
      "text-overflow",
      "ellipsis",
      "white-space: nowrap"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Affiche des points de suspension (...) lorsqu'un texte trop long dépasse de son conteneur.",
    "code": "white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;",
    "bodhiTip": "Le trio indispensable pour tronquer proprement les longs titres sur mobile."
  },
  {
    "id": "color-prop",
    "name": "color (Couleur du Texte)",
    "patterns": [
      "color:",
      "couleur de texte"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Définit la teinte d'affichage du texte au moyen de noms nommés, de codes hexadécimaux (#ffffff), de fonctions rgb/rgba ou hsl.",
    "code": "color: #f8fafc;\ncolor: rgba(255, 255, 255, 0.9);",
    "bodhiTip": "Veille toujours à respecter un contraste suffisant (ratio minimal de 4.5:1 selon les règles WCAG) entre la couleur de ton texte et son arrière-plan."
  },
  {
    "id": "background-props",
    "name": "background & Arrière-plans",
    "patterns": [
      "background:",
      "background-color",
      "background-image",
      "background-size",
      "linear-gradient"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Gouverne le décor d'arrière-plan d'un élément : couleur unie, dégradé linéaire ou radial, ou image texturée.",
    "code": "background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);\nbackground-size: cover;",
    "bodhiTip": "Les dégradés subtils confèrent une atmosphère mystique et envoûtante à ton sanctuaire sans alourdir le poids de téléchargement."
  },
  {
    "id": "backdrop-filter",
    "name": "backdrop-filter: blur (Effet Verre Dépoli)",
    "patterns": [
      "backdrop-filter",
      "effet verre dépoli",
      "glassmorphism"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Applique un filtre optique (comme un flou gaussien) sur la matière graphique située immédiatement sous l'élément. Cœur de l'effet 'glassmorphism' moderne.",
    "code": "background: rgba(15, 23, 42, 0.75);\nbackdrop-filter: blur(12px);",
    "bodhiTip": "Sublime pour les barres de navigation collantes ('sticky') : le contenu qui défile en dessous devient un doux voile flouté artistique."
  },
  {
    "id": "filter-prop",
    "name": "filter (Filtres Graphiques CSS)",
    "patterns": [
      "filter:",
      "filter: blur",
      "filter: grayscale",
      "filter: drop-shadow"
    ],
    "category": "CSS : Typographie, Couleurs & Effets",
    "desc": "Applique des effets visuels puissants directement sur les images ou éléments : flou (blur), noir et blanc (grayscale), luminosité (brightness), contraste ou drop-shadow.",
    "code": "filter: grayscale(100%);\nfilter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));",
    "bodhiTip": "'drop-shadow' épouse fidèlement la transparence d'une image PNG ou d'un tracé SVG, contrairement à 'box-shadow' qui fait une ombre rectangulaire brute !"
  },
  {
    "id": "transition-prop",
    "name": "transition (Animation Douce)",
    "patterns": [
      "transition:",
      "transition",
      "transition-duration",
      "transition-timing-function"
    ],
    "category": "CSS : Transitions & Animations",
    "desc": "Permet d'animer avec douceur et progressivité le changement d'état d'une propriété CSS (au survol, au focus) au lieu d'une bascule brutale et saccadée.",
    "code": "transition: transform 0.3s ease, box-shadow 0.3s ease;",
    "bodhiTip": "N'écris jamais 'transition: all' sur des éléments complexes : cela force le navigateur à recalculer chaque propriété et peut provoquer des ralentissements."
  },
  {
    "id": "transform-prop",
    "name": "transform (scale, rotate, translate)",
    "patterns": [
      "transform:",
      "transform",
      "scale(",
      "rotate(",
      "translate("
    ],
    "category": "CSS : Transitions & Animations",
    "desc": "Permet de modifier la géométrie spatiale d'un élément sans altérer le flux de la page : translation (déplacement), rotation, mise à l'échelle (scale) ou inclinaison.",
    "code": "transform: translateY(-4px) scale(1.02);",
    "bodhiTip": "Les transformations 2D et 3D sont gérées directement par le processeur graphique (GPU) : elles sont infiniment plus fluides que d'animer les marges !"
  },
  {
    "id": "keyframes-rule",
    "name": "@keyframes & animation",
    "patterns": [
      "@keyframes",
      "animation:",
      "règle keyframes",
      "animations css"
    ],
    "category": "CSS : Transitions & Animations",
    "desc": "Définit une séquence d'étapes d'animation cyclique ou séquentielle (de 0% à 100%) sans nécessiter d'interaction de l'utilisateur.",
    "code": "@keyframes pulsation {\n  0% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.05); opacity: 0.8; }\n  100% { transform: scale(1); opacity: 1; }\n}\n\n.rune {\n  animation: pulsation 3s infinite ease-in-out;\n}",
    "bodhiTip": "Utilise l'accélération matérielle en animant de préférence 'transform' et 'opacity'."
  },
  {
    "id": "will-change-prop",
    "name": "will-change (Optimisation GPU)",
    "patterns": [
      "will-change"
    ],
    "category": "CSS : Transitions & Animations",
    "desc": "Avertit à l'avance le navigateur qu'une propriété va subir des modifications intensives dans une animation, lui permettant d'allouer les ressources matérielles en amont.",
    "code": "will-change: transform, opacity;",
    "bodhiTip": "Utilise cette propriété avec grande parcimonie : l'appliquer partout saturerait la mémoire de la carte graphique !"
  },
  {
    "id": "css-selectors",
    "name": "Sélecteurs CSS (Classes, ID, Éléments)",
    "patterns": [
      "sélecteurs css",
      "sélecteur css",
      "sélecteur de classe",
      "sélecteur d'id"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Les motifs de ciblage permettant d'associer une règle de style aux balises visées : sélecteur de balise (p), de classe (.bouton), d'identifiant (#hero) ou universel (*).",
    "code": "p { color: white; }\n.carte { background: #111; }\n#sommet { top: 0; }",
    "bodhiTip": "Privilégie les classes pour styliser ton sanctuaire : elles sont souples, réutilisables et offrent un équilibre de spécificité parfait."
  },
  {
    "id": "css-specificity",
    "name": "Spécificité et Cascade CSS",
    "patterns": [
      "spécificité",
      "spécificité css",
      "la cascade",
      "cascade css",
      "!important"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "L'algorithme de calcul de poids qui résout les conflits lorsque plusieurs règles concurrentes ciblent un même élément. Un ID (poids 100) bat une classe (poids 10), qui bat une balise (poids 1).",
    "code": "p (1) < .texte (10) < #hero p (101) < style inline (1000)",
    "bodhiTip": "Bannis l'usage de '!important' : c'est un aveu de faiblesse qui brise la cascade naturelle et complique la maintenance future de ton code."
  },
  {
    "id": "combinators-css",
    "name": "Combinateurs CSS (> , + , ~ , espace)",
    "patterns": [
      "combinateur",
      "enfant direct >",
      "adjacent direct +",
      "frère général ~"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Précisent la relation hiérarchique entre deux sélecteurs : 'A B' (descendant), 'A > B' (enfant direct strict), 'A + B' (voisin direct suivant), et 'A ~ B' (tous les frères suivants).",
    "code": "article > p /* Uniquement les paragraphes enfants directs */\nh2 + p /* Le premier paragraphe qui suit immédiatement un h2 */",
    "bodhiTip": "'h2 + p' est l'astuce magique des typographes pour donner un style de 'chapeau' d'article au premier paragraphe !"
  },
  {
    "id": "hover-pseudo",
    "name": ":hover (Survol de Souris)",
    "patterns": [
      ":hover",
      "pseudo-classe :hover",
      "au survol"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Pseudo-classe qui s'active dès que le pointeur de la souris survole la zone d'un élément interactif.",
    "code": "a:hover {\n  color: #38bdf8;\n  text-decoration: underline;\n}",
    "bodhiTip": "Pense aux utilisateurs de smartphones qui naviguent au doigt : le :hover n'existe pas sur écran tactile !"
  },
  {
    "id": "focus-pseudo",
    "name": ":focus et :focus-visible",
    "patterns": [
      ":focus",
      ":focus-visible",
      "pseudo-classe focus",
      "focus-visible"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Pseudo-classes qui s'activent lorsqu'un élément reçoit l'attention (sélection au clavier via la touche Tabulation ou clic). :focus-visible n'apparaît intelligemment que lors d'une navigation au clavier.",
    "code": "button:focus-visible {\n  outline: 3px solid #f59e0b;\n  outline-offset: 2px;\n}",
    "bodhiTip": "La pierre angulaire de l'accessibilité : sans focus visible, un utilisateur naviguant au clavier est totalement aveugle sur ta page."
  },
  {
    "id": "focus-within-pseudo",
    "name": ":focus-within",
    "patterns": [
      ":focus-within"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "S'active sur un élément parent dès que l'un quelconque de ses enfants intérieurs reçoit le focus.",
    "code": "form:focus-within {\n  box-shadow: 0 0 0 2px #d97706;\n}",
    "bodhiTip": "Sublime pour illuminer un formulaire complet dès que l'utilisateur commence à remplir un de ses champs !"
  },
  {
    "id": "active-visited-pseudo",
    "name": ":active et :visited",
    "patterns": [
      ":active",
      ":visited"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": ":active s'active à l'instant précis où l'utilisateur clique ou appuie sur l'élément. :visited applique un style aux liens déjà explorés dans l'historique.",
    "code": "button:active {\n  transform: scale(0.98);\n}",
    "bodhiTip": "Un petit effet scale(0.98) sur :active donne une sensation physique de retour de clic très satisfaisante."
  },
  {
    "id": "form-pseudo-classes",
    "name": ":checked, :disabled & :required",
    "patterns": [
      ":checked",
      ":disabled",
      ":required",
      ":valid",
      ":invalid"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Pseudo-classes dynamiques ciblant l'état des contrôles de formulaires : cases cochées (:checked), champs désactivés (:disabled) ou valides (:valid).",
    "code": "input:invalid {\n  border-color: #ef4444;\n}\ninput:checked + label {\n  color: #22c55e;\n}",
    "bodhiTip": "Permet de styliser des cases à cocher personnalisées sans aucune ligne de JavaScript !"
  },
  {
    "id": "nth-child-pseudo",
    "name": ":nth-child() & Sélecteurs Structurels",
    "patterns": [
      ":nth-child",
      ":first-child",
      ":last-child",
      "pseudo-classes structurelles"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Ciblent des éléments selon leur rang parmi leurs frères : premier enfant (:first-child), dernier (:last-child), ou selon une formule mathématique comme un sur deux (:nth-child(even)).",
    "code": "li:nth-child(odd) { background: rgba(255,255,255,0.05); }",
    "bodhiTip": "Idéal pour créer des tableaux rayés façon zèbre sans avoir à insérer de classes manuelles sur chaque ligne."
  },
  {
    "id": "not-is-where-pseudo",
    "name": ":not(), :is(), :where() & :has()",
    "patterns": [
      ":not(",
      ":is(",
      ":where(",
      ":has("
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "La nouvelle génération de pseudo-classes logiques : :not() filtre par négation, :is() regroupe avec la plus forte spécificité, :where() regroupe avec spécificité nulle, et :has() est le saint graal du sélecteur parent !",
    "code": "article:has(img) { border-color: gold; }\nbutton:not(.disabled) { cursor: pointer; }",
    "bodhiTip": ":has() a révolutionné le CSS : on peut enfin styliser un élément parent en fonction de ce que contient son enfant !"
  },
  {
    "id": "pseudo-elements",
    "name": "::before et ::after (Pseudo-éléments)",
    "patterns": [
      "::before",
      "::after",
      "pseudo-éléments",
      "propriété content"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "Créent des éléments graphiques virtuels insérés au tout début (::before) ou à la toute fin (::after) du contenu d'un élément, pilotés par la propriété 'content'.",
    "code": ".badge::before {\n  content: '';\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #22c55e;\n}",
    "bodhiTip": "Ils requièrent obligatoirement la propriété content: '' (même vide) pour exister et apparaître à l'écran !"
  },
  {
    "id": "selection-placeholder-pseudo",
    "name": "::placeholder et ::selection",
    "patterns": [
      "::placeholder",
      "::selection"
    ],
    "category": "CSS : Sélecteurs & Spécificité",
    "desc": "::placeholder stylise le texte temporaire des champs de saisie, et ::selection personnalise la couleur de surbrillance lorsque l'utilisateur sélectionne du texte au curseur.",
    "code": "::selection {\n  background-color: #d97706;\n  color: #000;\n}",
    "bodhiTip": "Une signature visuelle raffinée qui marque les esprits des visiteurs attentifs !"
  },
  {
    "id": "root-tokens",
    "name": ":root & Variables CSS (Custom Properties)",
    "patterns": [
      ":root",
      "var(--",
      "variables css",
      "custom properties"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Permet de déclarer des variables réutilisables au sommet de l'arbre (:root) : palettes de couleurs, rayons, typographies et ombres, appelées via var(--mon-jeton).",
    "code": ":root {\n  --or-divin: #d97706;\n  --fond-sombre: #090d16;\n}\n\nbody {\n  background-color: var(--fond-sombre);\n  color: var(--or-divin);\n}",
    "bodhiTip": "C'est la colonne vertébrale des systèmes de design modernes : changer une seule variable dans :root métamorphose instantanément tout le site !"
  },
  {
    "id": "units-rem-em-px",
    "name": "Unités : rem, em, px et %",
    "patterns": [
      "rem",
      "em",
      "px",
      "unités css",
      "pourcentage %"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Les unités de mesure du CSS : 'px' est fixe, '%' est relatif au parent, 'rem' est proportionnel à la taille de racine du document (1rem = 16px par défaut), et 'em' est relatif au parent direct.",
    "code": "font-size: 1.25rem;\npadding: 5%;",
    "bodhiTip": "Préfère systématiquement le 'rem' pour les tailles de texte et les espacements : cela respecte les réglages d'accessibilité de tes visiteurs."
  },
  {
    "id": "units-viewport",
    "name": "Unités Viewport : vw, vh, dvh",
    "patterns": [
      "vw",
      "vh",
      "dvh",
      "unités viewport"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Unités relatives aux dimensions de la fenêtre visible du navigateur (viewport). 100vw équivaut à 100% de la largeur de l'écran, et 100dvh à la hauteur dynamique tenant compte de la barre d'adresse mobile.",
    "code": "min-height: 100dvh; /* Occupe exactement tout l'écran sur smartphone */",
    "bodhiTip": "Utilise 'dvh' (dynamic viewport height) plutôt que 'vh' sur mobile pour éviter que la barre de navigation du smartphone ne masque le bas de ta page !"
  },
  {
    "id": "calc-clamp-funcs",
    "name": "calc(), min(), max() et clamp()",
    "patterns": [
      "calc(",
      "clamp(",
      "min(",
      "max(",
      "fonctions css"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Fonctions mathématiques natives du CSS permettant de mélanger des unités différentes (calc(100% - 40px)) ou de définir une typographie fluide et responsive (clamp(min, idéal, max)).",
    "code": "font-size: clamp(1.2rem, 3vw, 2.5rem);",
    "bodhiTip": "'clamp()' est magique : le texte rétrécit sur mobile, grandit sur ordinateur, sans jamais dépasser ses bornes !"
  },
  {
    "id": "aspect-ratio-prop",
    "name": "aspect-ratio (Proportions d'Image)",
    "patterns": [
      "aspect-ratio",
      "ratio d'aspect"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Verrouille le ratio de proportion largeur/hauteur d'un conteneur ou d'une image (16/9, 4/3, 1/1), prévenant les sauts de mise en page brutaux (CLS) pendant le chargement.",
    "code": "aspect-ratio: 16 / 9;\nwidth: 100%;",
    "bodhiTip": "Un allié capital pour préserver la stabilité visuelle de ton site et booster ton score Core Web Vitals chez Google."
  },
  {
    "id": "object-fit-prop",
    "name": "object-fit & object-position",
    "patterns": [
      "object-fit",
      "object-fit: cover",
      "object-fit: contain",
      "object-position"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Détermine comment une image <img> ou une vidéo s'ajuste à l'intérieur de sa boîte aux dimensions imposées : 'cover' remplit la zone en conservant les proportions sans déformation.",
    "code": "width: 100%;\nheight: 250px;\nobject-fit: cover;",
    "bodhiTip": "Adieu les images écrasées et déformées : avec 'object-fit: cover', tes portraits restent toujours gracieux !"
  },
  {
    "id": "media-queries",
    "name": "@media (Media Queries)",
    "patterns": [
      "@media",
      "media query",
      "media queries",
      "points de rupture",
      "breakpoints"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "La directive conditionnelle qui adapte la feuille de style selon les caractéristiques de l'appareil (largeur d'écran, orientation, résolution, préférences utilisateur).",
    "code": "@media (min-width: 768px) {\n  .grille {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}",
    "bodhiTip": "Conçois ton code en Mobile-First : écris le style mobile de base, puis enrichis-le avec des '@media (min-width: ...)' pour les écrans plus larges."
  },
  {
    "id": "reduced-motion",
    "name": "prefers-reduced-motion & Accessibilité Vestibulaire",
    "patterns": [
      "prefers-reduced-motion",
      "mouvement réduit"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Media query respectant le choix des utilisateurs souffrant de troubles vestibulaires ou de vertiges ayant demandé à leur système d'exploitation de désactiver les animations brutales.",
    "code": "@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}",
    "bodhiTip": "Une bienveillance fondamentale pour que ton sanctuaire soit un havre de paix pour tous les êtres vivants."
  },
  {
    "id": "prefers-color-scheme",
    "name": "prefers-color-scheme (Mode Sombre / Clair)",
    "patterns": [
      "prefers-color-scheme",
      "dark mode",
      "mode sombre"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Détecte si l'utilisateur a configuré son système en thème sombre ('dark') ou clair ('light'), permettant d'adapter les variables de couleur automatiquement.",
    "code": "@media (prefers-color-scheme: dark) {\n  :root {\n    --fond: #0b0f19;\n    --texte: #f1f5f9;\n  }\n}",
    "bodhiTip": "Une délicatesse appréciée des pèlerins nocturnes qui explorent le Web dans l'obscurité."
  },
  {
    "id": "scroll-behavior-prop",
    "name": "scroll-behavior: smooth (Défilement Fluide)",
    "patterns": [
      "scroll-behavior",
      "scroll-behavior: smooth",
      "défilement fluide"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Permet un glissement doux et progressif lorsque l'utilisateur clique sur un lien d'ancrage (#section) au lieu d'une téléportation brutale instantanée.",
    "code": "html {\n  scroll-behavior: smooth;\n}",
    "bodhiTip": "Offre une navigation aérienne et élégante lors du saut vers une ancre de la même page."
  },
  {
    "id": "font-face-rule",
    "name": "@font-face (Polices Personnalisées)",
    "patterns": [
      "@font-face",
      "font-face",
      "woff2"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Règle permettant de charger et d'héberger localement une police de caractères typographique personnalisée (formats WOFF2 / WOFF).",
    "code": "@font-face {\n  font-family: 'MonAstral';\n  src: url('fonts/astral.woff2') format('woff2');\n  font-display: swap;\n}",
    "bodhiTip": "L'attribut font-display: swap garantit que le texte reste lisible immédiatement avec une police de secours pendant le chargement !"
  },
  {
    "id": "css-layers",
    "name": "@layer (Cascading Layers)",
    "patterns": [
      "@layer",
      "layers css"
    ],
    "category": "CSS : Unités & Fonctions Modernes",
    "desc": "Fonctionnalité moderne permettant d'organiser les règles CSS en couches de priorité explicites (reset, base, components, utilities) indépendamment de leur spécificité.",
    "code": "@layer reset, base, theme;\n@layer theme { button { background: gold; } }",
    "bodhiTip": "Résout une bonne fois pour toutes les guerres de spécificité au sein des grands projets d'envergure."
  }
];

/**
 * Fonction maîtresse : enrichit n'importe quel texte brut en détectant tous
 * les termes, balises et concepts du glossaire, tout en neutralisant rigoureusement
 * le HTML (< et >) pour éviter tout bogue d'affichage parasite.
 */
export function enrichWithGlossary(rawText) {
  if (!rawText) return '';

  // 1. Échappement de sécurité absolu pour neutraliser toute balise brute
  let safeText = String(rawText)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // 2. Aplatir et trier rigoureusement tous les motifs par ordre de longueur décroissante
  const allPatternEntries = [];
  GLOSSARY_ITEMS.forEach(item => {
    item.patterns.forEach(pattern => {
      allPatternEntries.push({ pattern, item });
    });
  });
  allPatternEntries.sort((a, b) => b.pattern.length - a.pattern.length);

  const replacements = [];

  allPatternEntries.forEach(({ pattern, item }) => {
    // Échapper le pattern pour correspondre au texte déjà échappé (&lt; ... &gt;)
    const escapedPattern = pattern
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Regex insensible à la casse avec délimitation de mot ou ponctuation
    const reg = new RegExp(`(?<![a-zA-Z0-9_\\-])(${escapeRegex(escapedPattern)})(?![a-zA-Z0-9_\\-])`, 'gi');

    safeText = safeText.replace(reg, (match) => {
      const placeholder = `___GLOSSARY_TOKEN_${replacements.length}___`;
      replacements.push({
        token: placeholder,
        html: `<button type="button" class="glossary-term-btn" data-glossary-id="${item.id}" title="Clique pour voir l'explication de Maître Bodhi">${match}</button>`
      });
      return placeholder;
    });
  });

  // 3. Réinjection des tokens enrichis
  replacements.forEach(r => {
    safeText = safeText.replace(r.token, r.html);
  });

  return safeText;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Récupère un élément du glossaire par son identifiant
 */
export function getGlossaryItem(id) {
  return GLOSSARY_ITEMS.find(item => item.id === id) || null;
}
