// =============================================================================
// ACTE VII : SEO - RÉFÉRENCEMENT, MÉTADONNÉES & INDEXATION (ÉTAPES 51 À 60)
// =============================================================================

const { getFilesForStep } = require('./canonical-definitions');

const stepsAct7Seo = [
  // ===========================================================================
  // ÉTAPE 51 : BALISE <TITLE> OPTIMISÉE POUR LE SEO
  // ===========================================================================
  {
    id: 'step-51',
    number: 51,
    character: 'bodhi',
    pose: 'pointing',
    speaker: "MAÎTRE BODHI",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'index.html',
    title: "Balise <title> optimisée pour le SEO (50 à 60 caractères)",
    proverb: "« Le nom gravé au fronton du temple est la première parole que le voyageur lit dans l'horizon lointain. »",
    mentorSpeech: "Approche, Grand Architecte. Notre Sanctuaire est splendide, animé et persistant. Mais NULL nous interpelle : sur les moteurs de recherche mondiaux, notre balise <title> actuelle est trop concise ! Un titre de page idéal en SEO compte entre 50 et 65 caractères. Il commence par les mots-clés stratégiques que les humains tapent sur leur clavier, suivis du nom de la marque. Enrichissons le titre de index.html pour guider les moteurs de recherche !",
    riddle: "Écris un titre <title> d'au moins 45 caractères incluant 'Le Sanctuaire du Savoir' et des mots-clés d'apprentissage.",
    secretTip: "Dans index.html, remplace <title>Le Sanctuaire du Savoir</title> par <title>Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript</title>.",
    instructions: [
      "Dans index.html, localise la balise <title> à l'intérieur du <head>.",
      "Modifie son contenu pour atteindre une longueur optimale en référencement naturel : <title>Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript</title>",
      "Vérifie que la balise contient au moins 45 caractères et mentionne les langages enseignés.",
      "Clique sur 'Vérifier mon code' !"
    ],
    starterFiles: getFilesForStep(51),
    check: function(files) {
      const html = files['index.html'] || '';
      const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      if (!match) {
        return { pass: false, message: "La balise <title> est introuvable dans le <head> de index.html." };
      }
      const titleText = match[1].trim();
      if (titleText.length < 40) {
        return { pass: false, message: `Ton titre ne fait que ${titleText.length} caractères. En SEO, vise entre 50 et 65 caractères pour une visibilité optimale sur Google.` };
      }
      if (!titleText.toLowerCase().includes('sanctuaire') && !titleText.toLowerCase().includes('html')) {
        return { pass: false, message: "Inclus le nom 'Le Sanctuaire du Savoir' ou les mots-clés comme 'HTML' dans ton titre." };
      }
      return { pass: true, message: `Titre SEO parfait (${titleText.length} caractères) ! Les moteurs de recherche afficheront une accroche nette et complète.` };
    }
  },

  // ===========================================================================
  // ÉTAPE 52 : BALISE <META NAME="DESCRIPTION"> PERSUASIVE
  // ===========================================================================
  {
    id: 'step-52',
    number: 52,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'index.html',
    title: "Balise <meta name=\"description\"> persuasive (140 à 160 caractères)",
    proverb: "« Le titre attire le regard, mais c'est la description qui décide le cœur à franchir la porte. »",
    mentorSpeech: "Ada entre en scène ! Dans les résultats de recherche Google, le court paragraphe affiché sous le titre s'appelle le 'snippet'. Il provient de ta balise <meta name=\"description\"> ! Si elle est trop courte, Google la remplace par un texte aléatoire pris sur la page. Si elle dépasse 160 caractères, elle est brutalement tronquée avec des points de suspension. Rédigeons une description percutante entre 130 et 165 caractères !",
    riddle: "Rédige une <meta name=\"description\"> persuasive entre 130 et 165 caractères dans index.html.",
    secretTip: "Dans index.html, remplace la meta description par : <meta name=\"description\" content=\"Apprends les bases et les secrets du Web moderne avec le Sanctuaire du Savoir : cours et exercices pratiques en HTML sémantique, CSS moderne et JavaScript.\">",
    instructions: [
      "Dans index.html, repère la balise <meta name=\"description\" content=\"...\"> dans le <head>.",
      "Enrichis l'attribut content pour synthétiser fidèlement l'offre du site : 'Apprends les bases et les secrets du Web moderne avec le Sanctuaire du Savoir : cours et exercices pratiques en HTML sémantique, CSS moderne et JavaScript.'",
      "Vérifie que le texte compte entre 130 et 165 caractères.",
      "Valide ton snippet pour maximiser le taux de clic (CTR) !"
    ],
    starterFiles: getFilesForStep(52),
    check: function(files) {
      const html = files['index.html'] || '';
      const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
      if (!match) {
        return { pass: false, message: "La balise <meta name=\"description\" content=\"...\"> est manquante dans index.html." };
      }
      const desc = match[1].trim();
      if (desc.length < 120) {
        return { pass: false, message: `Ta meta description ne compte que ${desc.length} caractères. Vise entre 130 et 165 caractères pour occuper tout l'espace alloué par Google sans être tronqué.` };
      }
      if (desc.length > 175) {
        return { pass: false, message: `Ta meta description est trop longue (${desc.length} caractères). Raccourcis-la sous 165 caractères pour éviter les points de suspension sur mobile.` };
      }
      return { pass: true, message: `Extrait de recherche impeccable (${desc.length} caractères) ! Le taux de clic de ton Sanctuaire s'envole.` };
    }
  },

  // ===========================================================================
  // ÉTAPE 53 : BALISE <LINK REL="CANONICAL"> & URL CANONIQUE
  // ===========================================================================
  {
    id: 'step-53',
    number: 53,
    character: 'ada',
    pose: 'thinking',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'index.html',
    title: "Balise <link rel=\"canonical\"> & URL Canonique",
    proverb: "« Quand plusieurs chemins mènent au même temple, le guide doit désigner la voie royale pour éviter la confusion. »",
    mentorSpeech: "Voici l'un des pièges SEO les plus fréquents : le contenu dupliqué (Duplicate Content) ! Une page accessible via https://sanctuaire.web, https://sanctuaire.web/index.html ou https://sanctuaire.web/?ref=social risque d'être perçue par les robots d'indexation comme trois pages concurrentes. La balise <link rel=\"canonical\" href=\"...\"> indique formellement aux moteurs l'adresse officielle de référence.",
    riddle: "Ajoute la balise <link rel=\"canonical\" href=\"https://sanctuaire.web/index.html\"> dans le <head> de index.html.",
    secretTip: "Dans index.html, ajoute sous la feuille de style : <link rel=\"canonical\" href=\"https://sanctuaire.web/index.html\">",
    instructions: [
      "Dans index.html, dans le <head>, ajoute la balise de référence canonique :",
      "<link rel=\"canonical\" href=\"https://sanctuaire.web/index.html\">",
      "Cette directive unifie le score d'autorité de la page auprès de tous les robots de la toile.",
      "Valide ton code !"
    ],
    starterFiles: getFilesForStep(53),
    check: function(files) {
      const html = files['index.html'] || '';
      if (!html.includes('rel="canonical"') && !html.includes("rel='canonical'")) {
        return { pass: false, message: "Ajoute la balise <link rel=\"canonical\" href=\"...\"> dans le <head> de index.html." };
      }
      if (!html.includes('sanctuaire') && !html.includes('index.html')) {
        return { pass: false, message: "Précise l'URL canonique absolue dans l'attribut href (ex: https://sanctuaire.web/index.html)." };
      }
      return { pass: true, message: "L'autorité de la page est verrouillée ! Plus aucun risque de pénalité pour contenu dupliqué." };
    }
  },

  // ===========================================================================
  // ÉTAPE 54 : BALISE <META NAME="ROBOTS"> & FICHIER ROBOTS.TXT
  // ===========================================================================
  {
    id: 'step-54',
    number: 54,
    character: 'null',
    pose: 'neutral',
    speaker: "NULL (AUDITEUR DU RÉSEAU)",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'robots.txt',
    title: "Balise <meta name=\"robots\"> & Fichier robots.txt",
    proverb: "« Avant de franchir le seuil d'une forteresse, la sentinelle consulte le registre des autorisations. »",
    mentorSpeech: "Intervention système NULL. Chaque robot d'indexation mondial (Googlebot, Bingbot, DuckDuckBot) interroge prioritairement le fichier /robots.txt à la racine du domaine pour savoir quelles zones explorer. Sans directive explicite, l'exploration est désordonnée. Créez 'robots.txt' avec User-agent: * et Allow: /, et déclarez <meta name=\"robots\" content=\"index, follow\"> dans le <head> de index.html.",
    riddle: "Crée le fichier robots.txt autorisant l'exploration, et ajoute <meta name=\"robots\" content=\"index, follow\"> dans index.html.",
    secretTip: "Crée le fichier robots.txt avec le contenu : User-agent: *\\nAllow: /\\n\\nSitemap: https://sanctuaire.web/sitemap.xml. Dans index.html, ajoute <meta name=\"robots\" content=\"index, follow\">.",
    instructions: [
      "Dans l'éditeur, clique sur '+ Nouveau fichier' et nomme-le 'robots.txt'.",
      "Dans robots.txt, écris les directives pour tous les robots :",
      "User-agent: *",
      "Allow: /",
      "Sitemap: https://sanctuaire.web/sitemap.xml",
      "Dans index.html, dans le <head>, ajoute : <meta name=\"robots\" content=\"index, follow\">"
    ],
    starterFiles: getFilesForStep(54),
    check: function(files) {
      if (files['robots.txt'] === undefined) {
        return { pass: false, message: "Crée le fichier 'robots.txt' à la racine du projet via le bouton '+ Nouveau fichier'." };
      }
      const robots = files['robots.txt'] || '';
      if (!robots.toLowerCase().includes('user-agent') || !robots.toLowerCase().includes('allow')) {
        return { pass: false, message: "Dans robots.txt, déclare au minimum 'User-agent: *' et 'Allow: /'." };
      }
      const html = files['index.html'] || '';
      if (!html.toLowerCase().includes('name="robots"') && !html.toLowerCase().includes("name='robots'")) {
        return { pass: false, message: "Dans index.html, ajoute la balise <meta name=\"robots\" content=\"index, follow\"> dans le <head>." };
      }
      return { pass: true, message: "Autorisations de crawl certifiées ! Tous les robots d'indexation savent désormais où circuler." };
    }
  },

  // ===========================================================================
  // ÉTAPE 55 : PROTOCOLE OPEN GRAPH (OG:TITLE, OG:DESCRIPTION & OG:IMAGE)
  // ===========================================================================
  {
    id: 'step-55',
    number: 55,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'index.html',
    title: "Protocole Open Graph : og:title, og:description & og:image",
    proverb: "« L'ambassadeur qui voyage à l'étranger doit porter les insignes étincelants de son royaume. »",
    mentorSpeech: "Le SEO moderne ne se limite pas aux moteurs de recherche textuels ! Dès qu'un visiteur partage le lien du Sanctuaire sur Discord, WhatsApp, LinkedIn ou Facebook, les robots des réseaux lisent le protocole Open Graph pour générer une splendide vignette illustrée. Configurons les balises og:type, og:title, og:description, og:url et og:image dans le <head> de index.html !",
    riddle: "Configure les métadonnées Open Graph (og:type, og:title, og:description, og:url, og:image) dans index.html.",
    secretTip: "Dans index.html, ajoute : <meta property=\"og:type\" content=\"website\">\n<meta property=\"og:title\" content=\"Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript\">\n<meta property=\"og:description\" content=\"Apprends les bases et les secrets du Web moderne...\">\n<meta property=\"og:url\" content=\"https://sanctuaire.web/index.html\">\n<meta property=\"og:image\" content=\"https://sanctuaire.web/assets/sanctuary-preview.jpg\">",
    instructions: [
      "Dans index.html, dans le <head>, déclare le type : <meta property=\"og:type\" content=\"website\">",
      "Déclare le titre social : <meta property=\"og:title\" content=\"...\">",
      "Déclare la description sociale : <meta property=\"og:description\" content=\"...\">",
      "Déclare l'URL canonique sociale : <meta property=\"og:url\" content=\"https://sanctuaire.web/index.html\">",
      "Déclare la bannière d'aperçu : <meta property=\"og:image\" content=\"https://sanctuaire.web/assets/sanctuary-preview.jpg\">"
    ],
    starterFiles: getFilesForStep(55),
    check: function(files) {
      const html = files['index.html'] || '';
      if (!html.includes('property="og:title"') && !html.includes("property='og:title'")) {
        return { pass: false, message: "Ajoute la balise <meta property=\"og:title\" content=\"...\"> dans index.html." };
      }
      if (!html.includes('property="og:description"') && !html.includes("property='og:description'")) {
        return { pass: false, message: "Ajoute la balise <meta property=\"og:description\" content=\"...\"> pour le résumé social." };
      }
      if (!html.includes('property="og:image"') && !html.includes("property='og:image'")) {
        return { pass: false, message: "Ajoute la balise <meta property=\"og:image\" content=\"...\"> pour afficher la miniature illustrée lors des partages." };
      }
      return { pass: true, message: "Protocole Open Graph actif ! Chaque partage sur Discord ou les réseaux fera resplendir le Sanctuaire." };
    }
  },

  // ===========================================================================
  // ÉTAPE 56 : BALISES TWITTER CARDS
  // ===========================================================================
  {
    id: 'step-56',
    number: 56,
    character: 'ada',
    pose: 'code_magic',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'index.html',
    title: "Balises Twitter Cards : twitter:card, twitter:title & twitter:image",
    proverb: "« Le messager ailé déploie ses cartes illustrées pour captiver l'assemblée en une seconde. »",
    mentorSpeech: "Complétons l'arsenal social avec les Twitter Cards (utilisées par X, Telegram et d'autres messageries modernes) ! En déclarant <meta name=\"twitter:card\" content=\"summary_large_image\">, nous ordonnons aux clients d'afficher une grande carte visuelle immersive au lieu d'un lien textuel miniature. Ajoutons twitter:title, twitter:description et twitter:image !",
    riddle: "Déclare la carte Twitter summary_large_image avec twitter:title, twitter:description et twitter:image.",
    secretTip: "Dans index.html, ajoute : <meta name=\"twitter:card\" content=\"summary_large_image\">\n<meta name=\"twitter:title\" content=\"Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript\">\n<meta name=\"twitter:description\" content=\"Apprends les bases et les secrets du Web moderne...\">\n<meta name=\"twitter:image\" content=\"https://sanctuaire.web/assets/sanctuary-preview.jpg\">",
    instructions: [
      "Dans index.html, dans le <head>, insère : <meta name=\"twitter:card\" content=\"summary_large_image\">",
      "Ajoute le titre Twitter : <meta name=\"twitter:title\" content=\"...\">",
      "Ajoute la description Twitter : <meta name=\"twitter:description\" content=\"...\">",
      "Ajoute l'image Twitter : <meta name=\"twitter:image\" content=\"https://sanctuaire.web/assets/sanctuary-preview.jpg\">"
    ],
    starterFiles: getFilesForStep(56),
    check: function(files) {
      const html = files['index.html'] || '';
      if (!html.includes('name="twitter:card"') && !html.includes("name='twitter:card'")) {
        return { pass: false, message: "Ajoute la balise <meta name=\"twitter:card\" content=\"summary_large_image\"> dans le <head> de index.html." };
      }
      if (!html.includes('name="twitter:title"') && !html.includes("name='twitter:title'")) {
        return { pass: false, message: "Ajoute la balise <meta name=\"twitter:title\" content=\"...\">." };
      }
      return { pass: true, message: "Twitter Cards validées ! Ton aperçu visuel en grand format attirera tous les regards." };
    }
  },

  // ===========================================================================
  // ÉTAPE 57 : ATTRIBUT ALT DESCRIPTIF & PERFORMANCE CORE WEB VITALS
  // ===========================================================================
  {
    id: 'step-57',
    number: 57,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'galerie.html',
    title: "Attribut alt descriptif & Performance Core Web Vitals (width & height)",
    proverb: "« Décris l'image pour ceux qui ne voient pas et cale ses dimensions pour que le monde ne vacille pas à son apparition. »",
    mentorSpeech: "Grand bâtisseur, retournons dans galerie.html. L'algorithme Google Images et les critères Core Web Vitals (Google PageSpeed) exigent deux règles capitales : premièrement, des attributs alt précis et riches en mots-clés (pas seulement 'Fresque', mais une vraie description textuelle). Deuxièmement, des attributs width=\"600\" et height=\"400\" sur chaque balise <img> pour réserver l'espace avant le chargement et éliminer le redouté saut de mise en page CLS (Cumulative Layout Shift) !",
    riddle: "Dans galerie.html, donne des alt détaillés et des dimensions width=\"600\" height=\"400\" avec loading=\"lazy\" à tes 3 images.",
    secretTip: "Dans galerie.html, ajoute width=\"600\" height=\"400\" loading=\"lazy\" sur chaque balise <img> et enrichis leur texte alt.",
    instructions: [
      "Ouvre galerie.html dans l'éditeur.",
      "Sur chaque balise <img>, enrichis l'attribut alt avec une description complète.",
      "Ajoute les dimensions explicites : width=\"600\" height=\"400\"",
      "Ajoute l'attribut de chargement différé : loading=\"lazy\" pour accélérer le temps de chargement initial (LCP)."
    ],
    starterFiles: getFilesForStep(57),
    check: function(files) {
      const html = files['galerie.html'] || '';
      if (!html.includes('width=') || !html.includes('height=')) {
        return { pass: false, message: "Ajoute les attributs width=\"600\" et height=\"400\" sur tes balises <img> dans galerie.html pour éliminer le CLS (Cumulative Layout Shift)." };
      }
      if (!html.includes('loading="lazy"') && !html.includes("loading='lazy'")) {
        return { pass: false, message: "Ajoute l'attribut loading=\"lazy\" sur tes images pour optimiser le temps de chargement (Core Web Vitals)." };
      }
      return { pass: true, message: "Images ultra-performantes et accessibles ! Google Images et Lighthouse t'accordent la note maximale." };
    }
  },

  // ===========================================================================
  // ÉTAPE 58 : HIÉRARCHIE SÉMANTIQUE DES TITRES & FIL D'ARIANE (BREADCRUMB)
  // ===========================================================================
  {
    id: 'step-58',
    number: 58,
    character: 'bodhi',
    pose: 'zen',
    speaker: "MAÎTRE BODHI",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'chroniques.html',
    title: "Hiérarchie sémantique des titres & Fil d'Ariane (Breadcrumb)",
    proverb: "« Le voyageur qui sait d'où il vient et où il va ne se perd jamais dans les méandres du savoir. »",
    mentorSpeech: "Les robots d'indexation adorent comprendre l'arborescence exacte d'un site. Pour cela, deux piliers sémantiques sont indispensables : une hiérarchie stricte des titres (un seul h1 principal par page, suivi de h2 puis h3 sans jamais sauter de niveau) et un fil d'Ariane (Breadcrumb) balisé avec <nav aria-label=\"Fil d'Ariane\" class=\"breadcrumb\">. Ajoutons ce fil d'Ariane au sommet de nos chroniques.html !",
    riddle: "Ajoute un fil d'Ariane sémantique <nav aria-label=\"Fil d'Ariane\"> avec une liste de liens en haut du main de chroniques.html.",
    secretTip: "Dans chroniques.html, juste après <main>, insère : <nav aria-label=\"Fil d'Ariane\" class=\"breadcrumb\"><ol><li><a href=\"index.html\">Accueil</a></li><li><span aria-current=\"page\">Chroniques</span></li></ol></nav>",
    instructions: [
      "Dans chroniques.html, au tout début de <main>, insère l'élément sémantique :",
      "<nav aria-label=\"Fil d'Ariane\" class=\"breadcrumb\">",
      "  <ol>",
      "    <li><a href=\"index.html\">Accueil</a></li>",
      "    <li><span aria-current=\"page\">Chroniques</span></li>",
      "  </ol>",
      "</nav>",
      "Vérifie que la page contient bien un unique h1 pour garantir une hiérarchie parfaite !"
    ],
    starterFiles: getFilesForStep(58),
    check: function(files) {
      const html = files['chroniques.html'] || '';
      if (!html.toLowerCase().includes('aria-label="fil d\'ariane"') && !html.toLowerCase().includes('breadcrumb') && !html.toLowerCase().includes('fil d\'ariane')) {
        return { pass: false, message: "Ajoute l'élément de navigation sémantique pour le fil d'Ariane : <nav aria-label=\"Fil d'Ariane\" class=\"breadcrumb\">." };
      }
      const h1Count = (html.match(/<h1\b/gi) || []).length;
      if (h1Count !== 1) {
        return { pass: false, message: `Ta page chroniques.html doit contenir exactement 1 titre <h1> unique (actuellement : ${h1Count}).` };
      }
      return { pass: true, message: "L'arborescence est limpide ! Le fil d'Ariane guide parfaitement les robots et les disciples." };
    }
  },

  // ===========================================================================
  // ÉTAPE 59 : DONNÉES STRUCTURÉES JSON-LD & SCHEMA.ORG
  // ===========================================================================
  {
    id: 'step-59',
    number: 59,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'index.html',
    title: "Données structurées JSON-LD & Schema.org",
    proverb: "« Parle aux machines dans leur propre dialecte structuré, et elles t'accorderont la première place dans leurs registres. »",
    mentorSpeech: "Voici le Graal absolu du SEO technique : les Données Structurées Schema.org au format JSON-LD ! En insérant un bloc <script type=\"application/ld+json\"> dans index.html, nous fournissons directement aux moteurs de recherche un objet JSON typé décrivant notre organisation éducative. C'est ce bloc qui permet à Google d'afficher les Rich Snippets, les étoiles d'avis et les panneaux de connaissances Knowledge Graph !",
    riddle: "Insère un script JSON-LD Schema.org de type EducationalOrganization dans le <head> de index.html.",
    secretTip: "Dans index.html, ajoute dans le head : <script type=\"application/ld+json\">{ \"@context\": \"https://schema.org\", \"@type\": \"EducationalOrganization\", \"name\": \"Le Sanctuaire du Savoir\", \"url\": \"https://sanctuaire.web\", \"description\": \"Académie interactive d'apprentissage du Web.\" }</script>",
    instructions: [
      "Dans index.html, juste avant la fermeture de </head>, ouvre la balise : <script type=\"application/ld+json\">",
      "Rédige l'objet JSON Schema.org :",
      "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"EducationalOrganization\",\n  \"name\": \"Le Sanctuaire du Savoir\",\n  \"url\": \"https://sanctuaire.web\",\n  \"description\": \"Académie interactive d'apprentissage du Web, du code pur et des standards ouverts.\"\n}",
      "Referme la balise </script> et valide !"
    ],
    starterFiles: getFilesForStep(59),
    check: function(files) {
      const html = files['index.html'] || '';
      if (!html.includes('application/ld+json')) {
        return { pass: false, message: "Insère la balise <script type=\"application/ld+json\"> dans le <head> de index.html." };
      }
      if (!html.includes('schema.org')) {
        return { pass: false, message: "N'oublie pas le contexte '@context': 'https://schema.org' dans ton bloc JSON-LD." };
      }
      if (!html.includes('EducationalOrganization') && !html.includes('WebSite') && !html.includes('Organization')) {
        return { pass: false, message: "Précise le type d'entité Schema.org comme '@type': 'EducationalOrganization'." };
      }
      return { pass: true, message: "Données structurées JSON-LD validées ! Google peut désormais générer les Rich Snippets dorés de ton Sanctuaire." };
    }
  },

  // ===========================================================================
  // ÉTAPE 60 : FICHIER SITEMAP.XML & AUDIT SEO GLOBAL
  // ===========================================================================
  {
    id: 'step-60',
    number: 60,
    character: 'null',
    pose: 'ascended',
    speaker: "NULL, MAÎTRE BODHI & ADA",
    act: "Acte VII : SEO - Référencement, Métadonnées & Indexation",
    targetFile: 'sitemap.xml',
    title: "Fichier sitemap.xml & Audit SEO global",
    proverb: "« Quand la carte du monde est complète, aucun navire ne navigue plus à l'aveugle. »",
    mentorSpeech: "Rapport d'audit final de NULL : Le runtime fonctionne, les feuilles de style sculptent chaque interface, et les métadonnées SEO sont prêtes. Pour achever l'indexation totale de notre univers sur le Web mondial, forgez la clé de voûte : le fichier sitemap.xml répertoriant les 4 pavillons du Sanctuaire (index.html, chroniques.html, galerie.html, contact.html) au format standard sitemaps.org. Une fois validé, le Sanctuaire sera immortel, universellement accessible et indexé par l'humanité entière !",
    riddle: "Crée sitemap.xml avec les 4 URL du Sanctuaire au format standard XML sitemaps.org.",
    secretTip: "Clique sur '+ Nouveau fichier', nomme-le sitemap.xml, et écris : <?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\\n  <url><loc>https://sanctuaire.web/index.html</loc><priority>1.0</priority></url>\\n  <url><loc>https://sanctuaire.web/chroniques.html</loc><priority>0.8</priority></url>\\n  <url><loc>https://sanctuaire.web/galerie.html</loc><priority>0.8</priority></url>\\n  <url><loc>https://sanctuaire.web/contact.html</loc><priority>0.7</priority></url>\\n</urlset>",
    instructions: [
      "Dans l'éditeur, clique sur '+ Nouveau fichier' et saisis le nom : 'sitemap.xml'.",
      "Écris le prologue XML : <?xml version=\"1.0\" encoding=\"UTF-8\"?>",
      "Ouvre l'espace de noms : <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
      "Déclare les 4 balises <url> avec leurs adresses <loc> : index.html, chroniques.html, galerie.html et contact.html.",
      "Ferme avec </urlset>.",
      "Clique sur 'Vérifier mon code' pour déclencher l'Audit SEO Suprême et la consécration définitive !"
    ],
    starterFiles: getFilesForStep(60),
    check: function(files) {
      if (files['sitemap.xml'] === undefined) {
        return { pass: false, message: "Crée le fichier 'sitemap.xml' à la racine du projet via le bouton '+ Nouveau fichier'." };
      }
      const sitemap = files['sitemap.xml'] || '';
      if (!sitemap.includes('<urlset') || !sitemap.includes('sitemaps.org')) {
        return { pass: false, message: "Dans sitemap.xml, ouvre la balise racine : <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">." };
      }
      if (!sitemap.includes('index.html') || !sitemap.includes('chroniques.html') || !sitemap.includes('galerie.html') || !sitemap.includes('contact.html')) {
        return { pass: false, message: "sitemap.xml doit répertorier les 4 pages du Sanctuaire : index.html, chroniques.html, galerie.html et contact.html." };
      }
      if (!files['index.html'] || !files['style.css'] || !files['script.js'] || !files['robots.txt']) {
        return { pass: false, message: "L'infrastructure complète (HTML, CSS, JS, robots.txt et sitemap.xml) doit être présente." };
      }
      return { pass: true, message: "AUDIT SEO 100/100 VALIDÉ PAR NULL ! Le Sanctuaire du Savoir est officiellement référencé dans l'index éternel du Web." };
    }
  }
];

console.log('Acte VII loaded: 10 SEO steps.');
module.exports = { stepsAct7Seo };
