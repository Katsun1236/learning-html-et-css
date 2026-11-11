// =============================================================================
// DEFINITION ET VALIDATION DES 50 ETAPES PEDAGOGIQUES - ACTE I
// =============================================================================

const fs = require('fs');
const path = require('path');
const { getFilesForStep } = require('./canonical-definitions.js');

const rawPreamble = fs.readFileSync(path.join(__dirname, 'canonical-definitions.js'), 'utf8')
  .replace('module.exports = {\n  getFilesForStep\n};', 'export { getFilesForStep as getStepCanonicalFiles };\n');

// We load the 50 step definitions
const steps = [
  // ===========================================================================
  // ACTE I : HTML - STRUCTURE & BASES (index.html)
  // ===========================================================================
  {
    id: 'step-1',
    number: 1,
    character: 'bodhi',
    pose: 'neutral',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Fichier index.html & <!DOCTYPE html>",
    proverb: "« Le néant n'est pas le vide ; c'est l'espace infini où tout peut advenir. »",
    mentorSpeech: "Approche, voyageur. Ouvre les yeux : ton atelier est totalement vierge. Pas un seul fichier n'existe encore. Avant d'écrire la moindre ligne de code, un véritable bâtisseur doit d'abord faire naître son support. Crée toi-même le tout premier fichier de ton univers, puis proclame l'incantation sacrée du HTML5.",
    riddle: "Crée le fichier 'index.html', proclame le DOCTYPE et ouvre la balise racine html en français.",
    secretTip: "Clique sur '+ Nouveau fichier', tape 'index.html', puis écris : <!DOCTYPE html><html lang=\"fr\"></html>",
    instructions: [
      "Clique sur le bouton '+ Nouveau fichier' au-dessus de l'éditeur.",
      "Nomme ton fichier : index.html",
      "Écris la première ligne absolue du Web moderne : <!DOCTYPE html>",
      "Ouvre et referme la racine sémantique : <html lang=\"fr\"></html>",
      "Clique sur 'Vérifier mon code' pour voir le Sanctuaire s'éveiller."
    ],
    check: function(files) {
      if (files['index.html'] === undefined) {
        return { pass: false, message: "Ton atelier est encore silencieux. Tu dois créer le fichier 'index.html' en cliquant sur '+ Nouveau fichier' !" };
      }
      const raw = files['index.html'].trim();
      if (!raw) {
        return { pass: false, message: "Le fichier 'index.html' existe, mais il est vide. Rédige le DOCTYPE et la balise racine html." };
      }
      if (!/<!doctype\s+html>/i.test(raw)) {
        return { pass: false, message: "Il te manque la déclaration sacrée <!DOCTYPE html> sur la première ligne pour avertir le navigateur." };
      }
      if (!/<html[^>]*lang=["']fr["'][^>]*>/i.test(raw)) {
        return { pass: false, message: "La balise racine <html> doit déclarer la langue française avec l'attribut lang=\"fr\"." };
      }
      if (!/<\/html>/i.test(raw)) {
        return { pass: false, message: "N'oublie pas de refermer la racine avec </html> à la fin de ton fichier." };
      }
      return { pass: true, message: "Le silence est rompu ! La première pierre de ton sanctuaire est scellée." };
    }
  },

  {
    id: 'step-2',
    number: 2,
    character: 'bodhi',
    pose: 'thinking',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Balises <head>, <meta charset> & <title>",
    proverb: "« Ce qui est invisible aux yeux des visiteurs guide la clarté du monde. »",
    mentorSpeech: "Regarde bien la structure : une page web possède deux royaumes. Le premier est le <head>, le sanctuaire de l'esprit invisible où reposent les métadonnées, l'encodage et le nom véritable de ton œuvre dans l'onglet du navigateur.",
    riddle: "Glisse un élément <head> dans <html> avec l'encodage universel UTF-8 et un titre digne.",
    secretTip: "Entre <html> et </html>, ajoute : <head><meta charset=\"UTF-8\"><title>Le Sanctuaire du Savoir</title></head>",
    instructions: [
      "Dans index.html, ouvre la balise <head> juste après <html lang=\"fr\">.",
      "Déclare l'encodage universel des caractères : <meta charset=\"UTF-8\">.",
      "Donne un titre à ta création : <title>Le Sanctuaire du Savoir</title>.",
      "Referme scrupuleusement avec </head>."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('<head>') || !code.includes('</head>')) {
        return { pass: false, message: "Il te manque le bloc <head>...</head> à l'intérieur de <html>." };
      }
      if (!code.includes('charset="utf-8"') && !code.includes("charset='utf-8'") && !code.includes('charset=utf-8')) {
        return { pass: false, message: "Ajoute la balise <meta charset=\"UTF-8\"> dans le <head> pour que les accents s'affichent sans corruption." };
      }
      if (!/<title>[\s\S]*?le sanctuaire[\s\S]*?<\/title>/i.test(files['index.html'] || '')) {
        return { pass: false, message: "Ajoute la balise <title>Le Sanctuaire du Savoir</title> dans ton <head>." };
      }
      return { pass: true, message: "L'esprit du sanctuaire est baptisé ! Regarde le titre flotter fièrement dans l'onglet du mini-navigateur." };
    }
  },

  {
    id: 'step-3',
    number: 3,
    character: 'bodhi',
    pose: 'zen',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Balises <meta name=\"viewport\"> & description",
    proverb: "« Le roseau qui plie sous la brise embrasse toutes les tailles d'écrans. »",
    mentorSpeech: "Un document digne de traverser les âges ne doit ignorer aucun voyageur, qu'il consulte le réseau depuis un écran géant ou une vitre de poche. Pour cela, le viewport ordonne au navigateur d'ajuster l'échelle à la largeur de l'appareil. Ajoutons aussi une description pour que les indexeurs du monde entier comprennent ton intention.",
    riddle: "Insère la balise viewport et une description dans ton <head>.",
    secretTip: "Dans le <head>, ajoute : <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> et <meta name=\"description\" content=\"...\">",
    instructions: [
      "Dans le <head> de index.html, ajoute la balise : <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">.",
      "Ajoute également une métadonnée descriptive : <meta name=\"description\" content=\"Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.\">.",
      "Vérifie que toutes tes métadonnées sont bien abritées dans le <head>."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('name="viewport"') && !code.includes("name='viewport'")) {
        return { pass: false, message: "Il manque la balise <meta name=\"viewport\" ...> dans le <head>." };
      }
      if (!code.includes('width=device-width')) {
        return { pass: false, message: "La balise viewport doit contenir content=\"width=device-width, initial-scale=1.0\" pour s'adapter aux mobiles." };
      }
      if (!code.includes('name="description"') && !code.includes("name='description'")) {
        return { pass: false, message: "Ajoute également <meta name=\"description\" content=\"...\"> pour renseigner les moteurs de recherche." };
      }
      return { pass: true, message: "Ton document est prêt pour tous les appareils de la terre ! L'ubiquité est assurée." };
    }
  },

  {
    id: 'step-4',
    number: 4,
    character: 'bodhi',
    pose: 'thumbs_up',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Balises <body>, <header> & Titre <h1>",
    proverb: "« Ce qui était pensé dans l'ombre doit maintenant rayonner dans la clarté. »",
    mentorSpeech: "Le monde invisible est en ordre. Il est temps d'ouvrir le second royaume : le <body>, le lieu où naît toute forme perçue par l'œil humain. Érigeons-y le fronton du temple : un <header> majestueux couronné par le titre suprême <h1>.",
    riddle: "Ouvre <body>, dresse un <header> avec un <h1> et un paragraphe d'accueil.",
    secretTip: "Après </head>, ouvre <body>. À l'intérieur, place un <header> contenant un <h1> et un <p>, puis referme </header> et </body>.",
    instructions: [
      "Après </head>, ouvre la balise <body> et referme-la avant </html>.",
      "À l'intérieur de <body>, ouvre un <header> et referme-le avec </header>.",
      "Dans ce header, écris le titre principal : <h1>Le Sanctuaire du Savoir</h1>.",
      "Ajoute juste en dessous un sous-titre dans un paragraphe : <p>L'académie sacrée où l'art du code pur reprend vie.</p>."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('<body>') || !code.includes('</body>')) {
        return { pass: false, message: "Il te manque le corps visible du document : <body>...</body>." };
      }
      if (!code.includes('<header>') || !code.includes('</header>')) {
        return { pass: false, message: "N'oublie pas d'envelopper ton en-tête dans les balises sémantiques <header>...</header>." };
      }
      if (!/<h1>[\s\S]*?le sanctuaire[\s\S]*?<\/h1>/i.test(files['index.html'] || '')) {
        return { pass: false, message: "Écris le grand titre <h1>Le Sanctuaire du Savoir</h1> dans ton header." };
      }
      if (!/<header>[\s\S]*?<p>[\s\S]*?<\/p>[\s\S]*?<\/header>/i.test(files['index.html'] || '')) {
        return { pass: false, message: "Ajoute un paragraphe <p> dans ton header pour servir de devise d'introduction." };
      }
      return { pass: true, message: "Le fronton s'illumine ! Regarde ton titre s'afficher enfin sur la toile blanche de l'aperçu." };
    }
  },

  {
    id: 'step-5',
    number: 5,
    character: 'bodhi',
    pose: 'pointing',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Navigation <nav> & Liens <a>",
    proverb: "« Une maison sans porte est une prison ; un site sans liens est une île perdue. »",
    mentorSpeech: "La magie originelle du Web réside dans l'hyperlien : la faculté de franchir les distances d'un simple effleurement. Traçons dans notre <header> la carte des 4 pavillons que nous allons bâtir ensemble.",
    riddle: "Crée un élément <nav> dans ton <header> contenant 4 liens relatifs.",
    secretTip: "Dans le <header>, ajoute <nav><a href=\"index.html\">Accueil</a><a href=\"chroniques.html\">Chroniques</a><a href=\"galerie.html\">Galerie</a><a href=\"contact.html\">Contact</a></nav>",
    instructions: [
      "Dans le <header> de index.html, ajoute une balise sémantique <nav>...</nav> après le paragraphe.",
      "Crée le lien vers l'accueil : <a href=\"index.html\">Accueil</a>.",
      "Crée le lien vers les chroniques : <a href=\"chroniques.html\">Chroniques</a>.",
      "Crée le lien vers la galerie : <a href=\"galerie.html\">Galerie</a>.",
      "Crée le lien vers le contact : <a href=\"contact.html\">Contact</a>."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('<nav>') || !code.includes('</nav>')) {
        return { pass: false, message: "Ajoute la balise sémantique <nav>...</nav> à l'intérieur de ton <header>." };
      }
      const links = ['index.html', 'chroniques.html', 'galerie.html', 'contact.html'];
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (!code.includes('href="' + link + '"') && !code.includes("href='" + link + "'")) {
          return { pass: false, message: "Il manque le lien relatif vers " + link + " dans ta barre de navigation." };
        }
      }
      return { pass: true, message: "Les voies de passage sont tracées ! Les 4 pavillons du Sanctuaire sont désormais reliés." };
    }
  },

  {
    id: 'step-6',
    number: 6,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Contenu principal <main>, <section> & <article>",
    proverb: "« Le corps a son cœur, le navire a sa quille, le document a son main. »",
    mentorSpeech: "Après l'en-tête vient le cœur battant de la page : l'élément <main>. Il ne doit exister qu'une seule fois par page pour accueillir le contenu unique et précieux de ce lieu. Divisons-le avec une <section> thématique et un titre de second niveau <h2>.",
    riddle: "Ajoute un <main> après le header, contenant une <section>, un <h2> et un <article>.",
    secretTip: "Après </header>, ajoute <main><section><h2>Présentation du Sanctuaire</h2><article><p>...</p></article></section></main>",
    instructions: [
      "Après </header>, ouvre la balise sémantique <main> et referme-la avant </body>.",
      "À l'intérieur de <main>, ouvre une balise <section>...</section>.",
      "Dans cette section, pose un titre de niveau 2 : <h2>Présentation du Sanctuaire</h2>.",
      "Place ensuite un bloc <article> contenant un paragraphe <p> expliquant la mission du lieu."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('<main>') || !code.includes('</main>')) {
        return { pass: false, message: "Il te manque la balise sémantique <main>...</main> pour abriter le contenu principal." };
      }
      if (!code.includes('<section>') || !code.includes('</section>')) {
        return { pass: false, message: "Structure ton contenu principal avec une <section>...</section>." };
      }
      if (!/<h2>[\s\S]*?présentation[\s\S]*?<\/h2>/i.test(files['index.html'] || '')) {
        return { pass: false, message: "Ajoute un titre <h2>Présentation du Sanctuaire</h2> dans ta section." };
      }
      if (!code.includes('<article>') || !code.includes('</article>')) {
        return { pass: false, message: "Enveloppe le récit de ta présentation dans une balise sémantique autonome <article>." };
      }
      return { pass: true, message: "Le cœur de l'édifice est scellé ! La hiérarchie des titres h1 -> h2 est respectée à la perfection." };
    }
  },

  {
    id: 'step-7',
    number: 7,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Formatage de texte <strong>, <em> & <code>",
    proverb: "« Le sage ne crie pas pour être entendu ; il choisit le mot juste qui porte son poids d'or. »",
    mentorSpeech: "Autrefois, des scribes égarés utilisaient des balises purement graphiques comme b ou i. Mais un véritable artisan s'adresse aussi bien aux yeux qu'aux liseuses d'écran des malvoyants et aux robots d'indexation. Utilisons <strong> pour une importance capitale, <em> pour une nuance spirituelle et <code> pour citer le langage des machines.",
    riddle: "Enrichis ton paragraphe avec les balises <strong>, <em> et <code>.",
    secretTip: "Dans l'article de index.html, entoure 'Web' de <strong>, 'HTML5' de <code>, et 'véritable intention sémantique' de <em>.",
    instructions: [
      "Dans index.html, repère le paragraphe <p> situé dans ton <article>.",
      "Mets en valeur le mot 'Web' avec la balise de haute importance : <strong>Web</strong>.",
      "Marque la technologie avec la balise de fragment de code : <code>HTML5</code>.",
      "Ajoute une emphase sur l'esprit du code avec la balise : <em>véritable intention sémantique</em>."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('<strong>') || !code.includes('</strong>')) {
        return { pass: false, message: "Ajoute la balise sémantique <strong>Web</strong> pour donner du poids au mot essentiel." };
      }
      if (!code.includes('<code>') || !code.includes('</code>')) {
        return { pass: false, message: "Ajoute la balise <code>HTML5</code> pour signaler qu'il s'agit d'un terme informatique pur." };
      }
      if (!code.includes('<em>') || !code.includes('</em>')) {
        return { pass: false, message: "Ajoute la balise d'accentuation <em>...</em> pour souligner l'intention sémantique." };
      }
      return { pass: true, message: "Splendide ! Chaque mot porte désormais son sens profond dans l'arbre du document." };
    }
  },

  {
    id: 'step-8',
    number: 8,
    character: 'bodhi',
    pose: 'zen',
    speaker: "MAÎTRE BODHI",
    act: "Acte I : HTML - Structure & Bases (index.html)",
    targetFile: 'index.html',
    title: "Pied de page <footer> & Symbole &copy;",
    proverb: "« Tout cycle qui s'achève avec grâce prépare le lever du jour suivant. »",
    mentorSpeech: "Une œuvre accomplie porte toujours la signature de son créateur. Tout en bas de la page, après <main>, déposons l'élément <footer>. Nous y inscrirons l'année et l'entité sacrée &copy; pour sceller les droits du bâtisseur.",
    riddle: "Ajoute un <footer> contenant un paragraphe avec l'entité &copy; et la mention du Sanctuaire.",
    secretTip: "Après </main> et avant </body>, ajoute : <footer><p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p></footer>",
    instructions: [
      "Dans index.html, juste après la fermeture de </main>, ouvre la balise sémantique <footer>.",
      "À l'intérieur, écris un paragraphe avec l'entité de copyright : <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>.",
      "Referme le footer avec </footer> avant la balise de fin </body>."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('<footer>') || !code.includes('</footer>')) {
        return { pass: false, message: "Il te manque le pied de page sémantique <footer>...</footer>." };
      }
      if (!code.includes('&copy;') && !code.includes('©')) {
        return { pass: false, message: "Utilise l'entité HTML sacrée &copy; dans ton footer pour afficher le symbole de copyright." };
      }
      if (!code.includes('le sanctuaire du savoir')) {
        return { pass: false, message: "Mentionne 'Le Sanctuaire du Savoir' dans le paragraphe de ton footer." };
      }
      return { pass: true, message: "L'Acte I est accompli ! Le premier pavillon du Sanctuaire se dresse fièrement sur la toile." };
    }
  }
];

console.log('Acte I loaded: 8 steps.');
module.exports = { steps, rawPreamble };
