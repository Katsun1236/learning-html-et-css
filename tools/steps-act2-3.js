// =============================================================================
// ACTE II & ACTE III (ÉTAPES 9 À 28)
// =============================================================================

const stepsAct2And3 = [
  // ===========================================================================
  // ACTE II : L'EXPANSION MULTI-PAGES, TABLEAUX & FORMULAIRES (9 à 18)
  // ===========================================================================
  {
    id: 'step-9',
    number: 9,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'chroniques.html',
    title: "L'Éveil du Deuxième Pavillon (chroniques.html)",
    proverb: "« Un voyageur qui ne lit pas les chroniques d'hier bâtit sur des sables mouvants. »",
    mentorSpeech: "Notre accueil est debout. Mais le Web est une toile immense ! Donnons naissance au deuxième fichier de notre réseau : 'chroniques.html'. C'est ici que nous consignerons la grande histoire des pionniers du réseau.",
    riddle: "Crée le fichier 'chroniques.html' avec son DOCTYPE, head, title et header.",
    secretTip: "Crée 'chroniques.html' et colle la structure de base avec <title>Les Chroniques du Web</title> et un header contenant un <h1>.",
    instructions: [
      "Clique sur '+ Nouveau fichier' et nomme-le : chroniques.html",
      "Écris le DOCTYPE et ouvre <html lang=\"fr\">.",
      "Ajoute un <head> avec charset UTF-8, viewport et le titre : <title>Les Chroniques du Web</title>.",
      "Dans le <body>, crée un <header> avec <h1>Les Chroniques du Web</h1>."
    ],
    check: function(files) {
      if (files['chroniques.html'] === undefined) {
        return { pass: false, message: "Le fichier 'chroniques.html' n'existe pas encore. Clique sur '+ Nouveau fichier' pour le créer !" };
      }
      const code = (files['chroniques.html'] || '').toLowerCase();
      if (!code.includes('<!doctype html>')) {
        return { pass: false, message: "N'oublie pas le <!DOCTYPE html> sur la première ligne de chroniques.html." };
      }
      if (!code.includes('<title>les chroniques du web</title>')) {
        return { pass: false, message: "Donne le titre <title>Les Chroniques du Web</title> dans le <head> de chroniques.html." };
      }
      if (!/<h1>[\s\S]*?chroniques[\s\S]*?<\/h1>/i.test(files['chroniques.html'] || '')) {
        return { pass: false, message: "Ajoute le titre principal <h1>Les Chroniques du Web</h1> dans le header." };
      }
      return { pass: true, message: "Le second pavillon a ouvert ses portes ! L'histoire peut désormais s'écrire." };
    }
  },

  {
    id: 'step-10',
    number: 10,
    character: 'bodhi',
    pose: 'pointing',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'chroniques.html',
    title: "Le Pont Réciproque (Navigation Bidirectionnelle)",
    proverb: "« Tout chemin qui mène quelque part doit offrir la promesse d'un retour. »",
    mentorSpeech: "Si un visiteur arrive sur les Chroniques mais ne peut pas revenir à l'Accueil, il se retrouve piégé dans un cul-de-sac. Dupliquons notre barre de navigation dans 'chroniques.html' pour tisser un réseau indestructible.",
    riddle: "Insère la balise <nav> avec les 4 liens dans chroniques.html.",
    secretTip: "Dans le <header> de chroniques.html, insère le même bloc <nav> contenant les liens vers index.html, chroniques.html, galerie.html et contact.html.",
    instructions: [
      "Ouvre le fichier chroniques.html dans l'éditeur.",
      "À l'intérieur du <header>, sous le <h1>, insère la balise <nav>...</nav>.",
      "Ajoute les 4 liens : index.html, chroniques.html, galerie.html, contact.html.",
      "Clique sur les liens dans l'aperçu pour tester la navigation en direct !"
    ],
    check: function(files) {
      const code = (files['chroniques.html'] || '').toLowerCase();
      if (!code.includes('<nav>') || !code.includes('</nav>')) {
        return { pass: false, message: "Ajoute la balise <nav> dans le <header> de chroniques.html." };
      }
      const links = ['index.html', 'chroniques.html', 'galerie.html', 'contact.html'];
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (!code.includes('href="' + link + '"') && !code.includes("href='" + link + "'")) {
          return { pass: false, message: "Il manque le lien relatif vers " + link + " dans la navigation de chroniques.html." };
        }
      }
      return { pass: true, message: "Le pont réciproque est scellé ! Le voyageur peut aller et venir entre les mondes sans encombre." };
    }
  },

  {
    id: 'step-11',
    number: 11,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'chroniques.html',
    title: "La Bibliothèque des Ères (Listes & Éléments de Liste)",
    proverb: "« L'ordre est le rempart secret contre le chaos de l'oubli. »",
    mentorSpeech: "Les Chroniques ont besoin de substance. Pour énumérer les grands âges du Web sans les perdre dans un bloc de texte indigeste, les listes non ordonnées <ul> et leurs éléments <li> sont l'outil sémantique idéal.",
    riddle: "Ajoute un <main> avec une <section>, un <h2> et une liste <ul> de 3 éléments <li>.",
    secretTip: "Dans chroniques.html, ajoute <main><section><h2>Les Âges du Réseau</h2><ul><li>...</li><li>...</li><li>...</li></ul></section></main> suivi du footer.",
    instructions: [
      "Dans chroniques.html, crée un <main> après le header.",
      "Ouvre une <section> avec le titre <h2>Les Âges du Réseau</h2>.",
      "Ouvre une liste non ordonnée <ul> et insère 3 éléments <li> détaillant les grandes dates du Web.",
      "N'oublie pas d'ajouter le <footer> en bas de page pour harmoniser le document."
    ],
    check: function(files) {
      const code = (files['chroniques.html'] || '').toLowerCase();
      if (!code.includes('<main>') || !code.includes('</main>')) {
        return { pass: false, message: "Ajoute la balise <main> dans chroniques.html." };
      }
      if (!code.includes('<ul>') || !code.includes('</ul>')) {
        return { pass: false, message: "Utilise une liste à puces sémantique <ul>...</ul> pour ordonner les ères." };
      }
      const liMatches = code.match(/<li>/g) || [];
      if (liMatches.length < 3) {
        return { pass: false, message: "Rédige au moins 3 éléments <li> dans ta liste pour évoquer 3 âges différents du Web." };
      }
      return { pass: true, message: "Les archives du Web prennent vie sous les yeux de tes visiteurs !" };
    }
  },

  {
    id: 'step-12',
    number: 12,
    character: 'bodhi',
    pose: 'thinking',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'chroniques.html',
    title: "Les Annales Tabulaires (table, thead, tbody, tr, th, td)",
    proverb: "« Quand les données s'alignent en colonnes et rangées, la vérité se dévoile d'un seul regard. »",
    mentorSpeech: "Certaines vérités nécessitent une rigueur géométrique. Lorsqu'il s'agit de comparer des faits, un tableau sémantique <table> avec son en-tête <thead> et son corps <tbody> surpasse tous les discours. Dressons le tableau des 3 technologies fondatrices du Web : HTML, CSS et JavaScript.",
    riddle: "Ajoute un tableau <table> avec <thead>, <tbody>, <tr>, <th> et <td> dans une seconde section.",
    secretTip: "Dans chroniques.html, ajoute une section contenant : <table><thead><tr><th>Technologie</th><th>Année</th><th>Rôle</th></tr></thead><tbody><tr><td>HTML</td><td>1991</td><td>Squelette</td></tr>...</tbody></table>",
    instructions: [
      "Dans chroniques.html, ajoute une seconde <section> avec le titre <h2>Les Trois Fondations Sacrées</h2>.",
      "Ouvre la balise <table> et son en-tête <thead>.",
      "Dans thead, crée une ligne <tr> contenant 3 en-têtes de colonnes <th> (Technologie, Année, Rôle).",
      "Ouvre le corps <tbody> et crée au moins 3 lignes <tr> avec leurs cellules <td> pour HTML, CSS et JavaScript."
    ],
    check: function(files) {
      const code = (files['chroniques.html'] || '').toLowerCase();
      if (!code.includes('<table>') || !code.includes('</table>')) {
        return { pass: false, message: "Il te manque l'élément sémantique <table>...</table> dans chroniques.html." };
      }
      if (!code.includes('<thead>') || !code.includes('<tbody>')) {
        return { pass: false, message: "Structure ton tableau avec <thead> pour l'en-tête et <tbody> pour les données." };
      }
      if (!code.includes('<th>') || !code.includes('<td>')) {
        return { pass: false, message: "Utilise <th> pour les titres de colonnes et <td> pour les cellules de contenu." };
      }
      if (!code.includes('html') || !code.includes('css') || !code.includes('javascript')) {
        return { pass: false, message: "Mentionne les 3 piliers dans ton tableau : HTML, CSS et JavaScript !" };
      }
      return { pass: true, message: "Un tableau d'une clarté exemplaire ! Les moteurs de recherche et les lecteurs d'écran te remercient." };
    }
  },

  {
    id: 'step-13',
    number: 13,
    character: 'bodhi',
    pose: 'thumbs_up',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'galerie.html',
    title: "Le Pavillon des Arts Visuels (galerie.html)",
    proverb: "« Une fresque sans cadre s'effrite ; un tableau sans lieu d'exposition reste dans l'ombre. »",
    mentorSpeech: "Le troisième pavillon sera le sanctuaire de l'image : 'galerie.html'. Nous allons y exposer les fresques antiques du Web. Bâtissons d'abord ses fondations complètes avec son header, son nav et son espace d'exposition.",
    riddle: "Crée 'galerie.html' avec la structure complète, header, nav et section d'exposition.",
    secretTip: "Crée 'galerie.html' avec le titre <title>Galerie des Bâtisseurs</title>, le même nav et une section avec <h2>Fresques du Premier Siècle</h2>.",
    instructions: [
      "Clique sur '+ Nouveau fichier' et nomme-le : galerie.html",
      "Rédige le DOCTYPE et la structure HTML5 complète.",
      "Définis le titre : <title>Galerie des Bâtisseurs</title>.",
      "Insère le <header> avec son <h1>, sa barre de navigation <nav> (les 4 liens) et un <footer>."
    ],
    check: function(files) {
      if (files['galerie.html'] === undefined) {
        return { pass: false, message: "Le fichier 'galerie.html' n'existe pas encore. Crée-le avec '+ Nouveau fichier' !" };
      }
      const code = (files['galerie.html'] || '').toLowerCase();
      if (!code.includes('<title>galerie des bâtisseurs</title>')) {
        return { pass: false, message: "Donne le titre <title>Galerie des Bâtisseurs</title> dans galerie.html." };
      }
      if (!code.includes('<nav>') || !code.includes('chroniques.html')) {
        return { pass: false, message: "Assure-toi que la barre <nav> avec les 4 liens relatifs est bien présente dans galerie.html." };
      }
      return { pass: true, message: "Le Pavillon des Arts est érigé ! Les cadres sont prêts à accueillir les œuvres." };
    }
  },

  {
    id: 'step-14',
    number: 14,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'galerie.html',
    title: "L'Exposition des Œuvres (figure, img & figcaption)",
    proverb: "« Une image sans légende est une énigme ; une image sans texte alternatif est aveugle. »",
    mentorSpeech: "En HTML5 moderne, on n'abandonne jamais une balise <img> seule dans la nature. On l'abrite dans un conteneur sémantique <figure>, accompagné de sa légende <figcaption>, et on n'oublie jamais l'attribut alt pour les esprits qui naviguent par la voix.",
    riddle: "Ajoute 4 éléments <figure> contenant <img> (avec src et alt) et <figcaption>.",
    secretTip: "Dans galerie.html, crée un conteneur avec <div class=\"galerie-conteneur\"> contenant 4 <figure> avec les images du sanctuaire.",
    instructions: [
      "Dans galerie.html, dans la section d'exposition, crée un conteneur : <div class=\"galerie-conteneur\">.",
      "À l'intérieur, insère au moins 3 ou 4 blocs <figure>...</figure>.",
      "Dans chaque figure, place une balise <img src=\"assets/gallery/...\" alt=\"...\">.",
      "Ajoute juste sous chaque image sa légende sémantique : <figcaption>Description de l'œuvre...</figcaption>."
    ],
    check: function(files) {
      const code = (files['galerie.html'] || '').toLowerCase();
      if (!code.includes('<figure>') || !code.includes('</figure>')) {
        return { pass: false, message: "Utilise la balise sémantique <figure>...</figure> pour envelopper chaque œuvre." };
      }
      if (!code.includes('<figcaption>') || !code.includes('</figcaption>')) {
        return { pass: false, message: "Accompagne chaque figure d'une légende <figcaption>...</figcaption>." };
      }
      const figMatches = code.match(/<figure>/g) || [];
      if (figMatches.length < 3) {
        return { pass: false, message: "Expose au moins 3 œuvres distinctes dans ta galerie pour créer une vraie collection." };
      }
      if (!code.includes('alt="') && !code.includes("alt='")) {
        return { pass: false, message: "N'oublie jamais l'attribut alt=\"...\" sur chaque balise <img> pour l'accessibilité !" };
      }
      return { pass: true, message: "La galerie s'illumine de mille feux visuels ! L'art et la sémantique s'épousent parfaitement." };
    }
  },

  {
    id: 'step-15',
    number: 15,
    character: 'bodhi',
    pose: 'pointing',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'contact.html',
    title: "Le Pavillon du Messager (contact.html & form)",
    proverb: "« Le voyageur qui ne peut transmettre sa pensée reste un fantôme silencieux. »",
    mentorSpeech: "Le quatrième et dernier pavillon est le plus interactif de tous : 'contact.html'. C'est le portail par lequel les visiteurs de ton univers pourront t'envoyer leurs missives. Érigeons le pavillon et son élément central : la balise <form>.",
    riddle: "Crée 'contact.html' avec la structure complète et un élément <form action=\"#\" method=\"post\">.",
    secretTip: "Crée contact.html avec le titre <title>Contacter le Sanctuaire</title>, le nav, un main, et un <form action=\"#\" method=\"post\"></form>.",
    instructions: [
      "Clique sur '+ Nouveau fichier' et nomme-le : contact.html",
      "Mets en place la structure HTML5 complète avec <title>Contacter le Sanctuaire</title>.",
      "Ajoute le header et la barre de navigation avec les 4 liens.",
      "Dans le <main>, crée une <section> avec le titre <h2>Envoyer un Parchemin à Maître Bodhi</h2> et la balise <form action=\"#\" method=\"post\">...</form>."
    ],
    check: function(files) {
      if (files['contact.html'] === undefined) {
        return { pass: false, message: "Le fichier 'contact.html' n'existe pas encore. Crée-le avec '+ Nouveau fichier' !" };
      }
      const code = (files['contact.html'] || '').toLowerCase();
      if (!code.includes('<form') || !code.includes('</form>')) {
        return { pass: false, message: "Il te manque la balise <form action=\"#\" method=\"post\">...</form> dans contact.html." };
      }
      if (!code.includes('method="post"') && !code.includes("method='post'")) {
        return { pass: false, message: "Ajoute method=\"post\" sur ton formulaire pour indiquer que les données seront envoyées au serveur." };
      }
      return { pass: true, message: "Le portail du messager est ouvert ! Il ne nous reste plus qu'à forger ses commandes." };
    }
  },

  {
    id: 'step-16',
    number: 16,
    character: 'bodhi',
    pose: 'thinking',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'contact.html',
    title: "Les Écrous du Formulaire (label for, input text & email)",
    proverb: "« Un champ sans étiquette est une porte sans poignée. »",
    mentorSpeech: "Attention, apprenti : lier une étiquette <label> à son champ <input> grâce à l'attribut for qui répond à l'id du champ est une règle absolue d'accessibilité. Quand un utilisateur clique sur le texte du label, le curseur doit se poser instantanément dans le champ.",
    riddle: "Ajoute deux paires label / input (nom et email) avec l'attribut required.",
    secretTip: "Dans le formulaire de contact.html, ajoute <label for=\"nom\">...</label><input type=\"text\" id=\"nom\" required> et <label for=\"email\">...</label><input type=\"email\" id=\"email\" required>.",
    instructions: [
      "Dans le formulaire de contact.html, ajoute un <label for=\"nom\">Ton nom d'apprenti :</label>.",
      "Juste en dessous, place le champ texte : <input type=\"text\" id=\"nom\" name=\"nom\" required placeholder=\"Ex: Scribe du Web\">.",
      "Ajoute un <label for=\"email\">Ton adresse de contact :</label>.",
      "Et son champ spécialisé : <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"nom@domaine.org\">."
    ],
    check: function(files) {
      const code = (files['contact.html'] || '').toLowerCase();
      if (!code.includes('for="nom"') && !code.includes("for='nom'")) {
        return { pass: false, message: "Lie ton premier label au champ avec l'attribut for=\"nom\"." };
      }
      if (!code.includes('id="nom"') && !code.includes("id='nom'")) {
        return { pass: false, message: "Donne l'id=\"nom\" à ton champ texte pour correspondre au label." };
      }
      if (!code.includes('type="email"') && !code.includes("type='email'")) {
        return { pass: false, message: "Utilise le type natif type=\"email\" pour le champ d'adresse électronique." };
      }
      if (!code.includes('required')) {
        return { pass: false, message: "Ajoute l'attribut required sur tes champs obligatoires pour activer la validation native du navigateur." };
      }
      return { pass: true, message: "Parfait ! Tes champs sont reliés à leurs étiquettes avec une rigueur exemplaire." };
    }
  },

  {
    id: 'step-17',
    number: 17,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'contact.html',
    title: "Le Choix des Bâtisseurs & Le Message (select & textarea)",
    proverb: "« Quand le choix est offert, le chemin se précise ; quand le parchemin s'élargit, l'âme s'exprime. »",
    mentorSpeech: "Un simple champ de texte à ligne unique est trop étroit pour les grandes missives de l'esprit. Offrons au voyageur un menu déroulant <select> pour catégoriser sa demande, ainsi qu'une vaste zone de texte <textarea> pour rédiger son message.",
    riddle: "Ajoute un <select> avec plusieurs <option>, puis un <textarea> pour le message.",
    secretTip: "Dans contact.html, ajoute <label for=\"sujet\">...</label><select id=\"sujet\" name=\"sujet\"><option value=\"question\">Question</option>...</select> et <textarea id=\"message\" name=\"message\" rows=\"5\" required></textarea>.",
    instructions: [
      "Dans le formulaire de contact.html, ajoute un <label for=\"sujet\">Objet de la missive :</label>.",
      "Ajoute le menu déroulant : <select id=\"sujet\" name=\"sujet\"> avec au moins 3 balises <option>.",
      "Ajoute ensuite un <label for=\"message\">Ton message pour le sanctuaire :</label>.",
      "Insère la zone multiligne : <textarea id=\"message\" name=\"message\" rows=\"5\" required placeholder=\"Écris ton message ici...\"></textarea>."
    ],
    check: function(files) {
      const code = (files['contact.html'] || '').toLowerCase();
      if (!code.includes('<select') || !code.includes('</select>')) {
        return { pass: false, message: "Ajoute un menu déroulant <select id=\"sujet\" name=\"sujet\"> dans ton formulaire." };
      }
      const optCount = (code.match(/<option/g) || []).length;
      if (optCount < 2) {
        return { pass: false, message: "Insère au moins 2 choix distincts avec la balise <option> dans ton select." };
      }
      if (!code.includes('<textarea') || !code.includes('</textarea>')) {
        return { pass: false, message: "Ajoute la zone de texte multiligne <textarea id=\"message\" ...></textarea>." };
      }
      return { pass: true, message: "Les commandes de saisie sont complètes ! Le voyageur peut maintenant formuler sa pensée." };
    }
  },

  {
    id: 'step-18',
    number: 18,
    character: 'bodhi',
    pose: 'thumbs_up',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : L'Expansion Multi-Pages & Formulaires",
    targetFile: 'contact.html',
    title: "L'Envoi Sacré & Le Bouton Submit",
    proverb: "« Une flèche encochée ne sert à rien si la corde ne la libère jamais. »",
    mentorSpeech: "Tous les champs sont en place, mais comment le visiteur déclenche-t-il l'envoi vers le serveur ? Avec la balise reine de l'action : <button type=\"submit\">. Scellons notre formulaire avec ce bouton décisif !",
    riddle: "Ajoute le bouton de soumission <button type=\"submit\">Envoyer la missive</button> dans ton formulaire.",
    secretTip: "À la fin de ton formulaire dans contact.html, juste avant </form>, ajoute : <button type=\"submit\">Envoyer la missive</button>",
    instructions: [
      "Ouvre contact.html dans l'éditeur.",
      "Juste avant la fermeture de </form>, ajoute le bouton de soumission :",
      "<button type=\"submit\">Envoyer la missive</button>",
      "Teste le clic dans l'aperçu : admire le navigateur vérifier automatiquement les champs requis !"
    ],
    check: function(files) {
      const code = (files['contact.html'] || '').toLowerCase();
      if (!code.includes('<button') || !code.includes('</button>')) {
        return { pass: false, message: "Il te manque la balise <button> dans le formulaire de contact.html." };
      }
      if (!code.includes('type="submit"') && !code.includes("type='submit'")) {
        return { pass: false, message: "Précise explicitement type=\"submit\" sur ton bouton pour valider l'action d'envoi." };
      }
      return { pass: true, message: "Gloire aux bâtisseurs ! L'architecture HTML multi-pages est totalement achevée !" };
    }
  },

  // ===========================================================================
  // ACTE III : L'HARMONIE VISUELLE & CSS FONDAMENTAL (19 à 28)
  // ===========================================================================
  {
    id: 'step-19',
    number: 19,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'index.html',
    title: "Le Câblage Universel (link rel=\"stylesheet\")",
    proverb: "« Le squelette d'albâtre attend la robe de pourpre et d'or. »",
    mentorSpeech: "Nos 4 pavillons HTML sont solides comme du granit, mais leurs murs sont encore bruts et nus. Nous allons forger le deuxième grand pilier du Web : les Cascading Style Sheets (CSS). La première étape consiste à relier chaque page à la future feuille universelle 'style.css'.",
    riddle: "Ajoute la balise <link rel=\"stylesheet\" href=\"style.css\"> dans le <head> de index.html.",
    secretTip: "Dans le <head> de index.html, ajoute : <link rel=\"stylesheet\" href=\"style.css\">",
    instructions: [
      "Dans index.html, repère le bloc <head>.",
      "Juste après la balise <title>, ajoute la liaison : <link rel=\"stylesheet\" href=\"style.css\">.",
      "Assure-toi que rel=\"stylesheet\" et href=\"style.css\" sont écrits sans faute."
    ],
    check: function(files) {
      const code = (files['index.html'] || '').toLowerCase();
      if (!code.includes('rel="stylesheet"') && !code.includes("rel='stylesheet'")) {
        return { pass: false, message: "Ajoute la balise <link rel=\"stylesheet\" ...> dans le <head> de index.html." };
      }
      if (!code.includes('href="style.css"') && !code.includes("href='style.css'")) {
        return { pass: false, message: "La balise link doit pointer vers href=\"style.css\"." };
      }
      return { pass: true, message: "Le câble mystique est branché ! index.html est prêt à recevoir la lumière du CSS." };
    }
  },

  {
    id: 'step-20',
    number: 20,
    character: 'bodhi',
    pose: 'zen',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "Le Grand Reset Universel & Box-Sizing",
    proverb: "« Pour bâtir un palais droit, il faut d'abord niveler le sol jusqu'à la racine. »",
    mentorSpeech: "Chaque navigateur applique des marges et des espacements arbitraires par défaut. Tout grand artisan commence par un reset universel grâce au sélecteur astérisque *, en forçant le calcul moderne box-sizing: border-box.",
    riddle: "Crée le fichier 'style.css' et déclare la règle universelle * { box-sizing: border-box; margin: 0; padding: 0; }.",
    secretTip: "Crée le fichier style.css et écris : * { box-sizing: border-box; margin: 0; padding: 0; }",
    instructions: [
      "Clique sur '+ Nouveau fichier' et nomme-le : style.css",
      "Écris le sélecteur universel : * {",
      "Définis la boîte moderne : box-sizing: border-box;",
      "Remets à zéro les marges par défaut : margin: 0; padding: 0;",
      "Ferme avec }"
    ],
    check: function(files) {
      if (files['style.css'] === undefined) {
        return { pass: false, message: "Le fichier 'style.css' n'existe pas encore. Crée-le avec '+ Nouveau fichier' !" };
      }
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('*')) {
        return { pass: false, message: "Utilise le sélecteur universel * dans style.css." };
      }
      if (!css.includes('box-sizing') || !css.includes('border-box')) {
        return { pass: false, message: "Inscris 'box-sizing: border-box;' pour que padding et bordures soient inclus dans la largeur des éléments." };
      }
      if (!css.includes('margin: 0') && !css.includes('margin:0')) {
        return { pass: false, message: "Réinitialise la marge extérieure avec 'margin: 0;'." };
      }
      return { pass: true, message: "Le sol est nivelé ! Les marges sauvages des navigateurs sont domptées." };
    }
  },

  {
    id: 'step-21',
    number: 21,
    character: 'bodhi',
    pose: 'thinking',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "La Teinte Profonde & La Typographie Système (body)",
    proverb: "« Le fond sombre apaise le regard ; la police claire guide l'esprit dans la sérénité. »",
    mentorSpeech: "Donnons une âme nocturne et noble à notre Sanctuaire. Appliquons à l'élément <body> un fond bleu nuit obscur (#0f172a), un texte blanc cassé doux (#f8fafc), une hauteur de ligne aérée (1.6) et la police système moderne.",
    riddle: "Stylise l'élément body avec font-family, background-color: #0f172a, color: #f8fafc et line-height: 1.6.",
    secretTip: "Dans style.css, ajoute : body { font-family: system-ui, -apple-system, sans-serif; background-color: #0f172a; color: #f8fafc; line-height: 1.6; }",
    instructions: [
      "Dans style.css, ajoute la règle pour l'élément body : body { ... }",
      "Définis la typographie système : font-family: system-ui, -apple-system, sans-serif;",
      "Applique le fond sombre : background-color: #0f172a;",
      "Définis la couleur du texte : color: #f8fafc;",
      "Aère la lecture avec un interligne : line-height: 1.6;"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('body')) {
        return { pass: false, message: "Ajoute la règle de style pour l'élément body dans style.css." };
      }
      if (!css.includes('background') || (!css.includes('#0f172a') && !css.includes('rgb(15, 23, 42)'))) {
        return { pass: false, message: "Applique la couleur de fond sombre background-color: #0f172a; sur le body." };
      }
      if (!css.includes('color') || (!css.includes('#f8fafc') && !css.includes('#fff') && !css.includes('#ffffff'))) {
        return { pass: false, message: "Définis la couleur de texte color: #f8fafc; pour un contraste lisible." };
      }
      if (!css.includes('line-height')) {
        return { pass: false, message: "Définis un interligne agréable avec line-height: 1.6;." };
      }
      return { pass: true, message: "L'ambiance nocturne s'installe ! Regarde le contraste saisissant dans l'aperçu." };
    }
  },

  {
    id: 'step-22',
    number: 22,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "Le Modèle de Boîte des Cartes (section & border-radius)",
    proverb: "« Une pensée a besoin d'espace intérieur pour respirer et de limites douces pour s'apaiser. »",
    mentorSpeech: "Le Modèle de Boîte (Box Model) est le cœur de la mise en page CSS. Chaque élément possède son contenu, son padding (espace intérieur), sa bordure et son margin (espace extérieur). Donnons à nos balises <section> l'allure d'un beau panneau centré aux coins arrondis.",
    riddle: "Stylise 'section' avec un fond #1e293b, un padding de 28px, un centrage margin: 24px auto, et border-radius: 14px.",
    secretTip: "Dans style.css, ajoute : section { background-color: #1e293b; border: 1px solid #334155; padding: 28px; max-width: 800px; margin: 24px auto; border-radius: 14px; }",
    instructions: [
      "Dans style.css, crée la règle : section { ... }",
      "Donne un fond plus clair que le body : background-color: #1e293b;",
      "Ajoute une bordure subtile : border: 1px solid #334155;",
      "Donne du souffle intérieur : padding: 28px;",
      "Centre le panneau avec une largeur maximale : max-width: 800px; margin: 24px auto;",
      "Adoucis les angles : border-radius: 14px;"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('section')) {
        return { pass: false, message: "Ajoute la règle pour l'élément section dans style.css." };
      }
      if (!css.includes('padding')) {
        return { pass: false, message: "Ajoute un espace intérieur avec padding: 28px; sur tes sections." };
      }
      if (!css.includes('margin') || !css.includes('auto')) {
        return { pass: false, message: "Centre tes sections horizontalement avec margin: 24px auto; et une max-width." };
      }
      if (!css.includes('border-radius')) {
        return { pass: false, message: "Arrondis les coins avec border-radius: 14px;." };
      }
      return { pass: true, message: "Le Modèle de Boîte est dompté ! Tes sections forment de superbes cartes bien centrées." };
    }
  },

  {
    id: 'step-23',
    number: 23,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "La Cascade & Les Niveaux de Titres (h1, h2, h3)",
    proverb: "« Quand la hiérarchie est claire, le regard se pose sans hésitation. »",
    mentorSpeech: "En CSS, plusieurs sélecteurs peuvent partager des règles communes grâce à la virgule. Rassemblons h1, h2 et h3 pour leur donner une couleur éclatante, une marge inférieure aérée et un resserrement typographique élégant.",
    riddle: "Groupe les titres h1, h2, h3 pour leur donner color: #f8fafc, letter-spacing: -0.02em et margin-bottom: 12px.",
    secretTip: "Dans style.css, ajoute : h1, h2, h3 { color: #f8fafc; letter-spacing: -0.02em; margin-bottom: 12px; }",
    instructions: [
      "Dans style.css, écris le sélecteur groupé : h1, h2, h3 {",
      "Assure leur éclat blanc : color: #f8fafc;",
      "Resserre légèrement les lettres : letter-spacing: -0.02em;",
      "Crée un espace sous les titres : margin-bottom: 12px;",
      "Ferme la règle avec }"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('h1') || !css.includes('h2')) {
        return { pass: false, message: "Cible les titres h1, h2, h3 dans style.css." };
      }
      if (!css.includes('letter-spacing')) {
        return { pass: false, message: "Ajoute la propriété letter-spacing sur les titres pour affiner leur silhouette." };
      }
      if (!css.includes('margin-bottom')) {
        return { pass: false, message: "Ajoute margin-bottom pour aérer l'espace sous les titres." };
      }
      return { pass: true, message: "L'harmonie typographique est sublime ! Chaque titre s'impose avec distinction." };
    }
  },

  {
    id: 'step-24',
    number: 24,
    character: 'bodhi',
    pose: 'pointing',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "La Grâce des Liens & Le Survol (nav a & :hover)",
    proverb: "« Le lien qui ne réagit pas sous la main semble endormi ou mort. »",
    mentorSpeech: "Les liens hypertexte bleus et soulignés par défaut rappellent les années 1990. Offrons à nos liens de navigation une teinte cyan céleste (#38bdf8), retirons le soulignement disgracieux, et ajoutons la pseudo-classe :hover pour qu'ils s'embrasent en or (#f59e0b) au survol.",
    riddle: "Stylise 'nav a' avec color: #38bdf8, text-decoration: none, et 'nav a:hover' avec color: #f59e0b.",
    secretTip: "Dans style.css, ajoute : header { background-color: #1e293b; padding: 24px; text-align: center; } nav a { color: #38bdf8; text-decoration: none; padding: 8px 14px; font-weight: 600; } nav a:hover { color: #f59e0b; }",
    instructions: [
      "Dans style.css, donne un fond sombre au header : header { background-color: #1e293b; text-align: center; padding: 24px 20px; border-bottom: 2px solid #334155; }",
      "Stylise les liens : nav a { color: #38bdf8; text-decoration: none; font-weight: 600; padding: 8px 14px; }",
      "Ajoute l'état de survol : nav a:hover { color: #f59e0b; }",
      "Survole les liens dans l'aperçu pour admirer la métamorphose lumineuse !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('nav a')) {
        return { pass: false, message: "Crée une règle spécifique pour les liens de navigation avec le sélecteur 'nav a'." };
      }
      if (!css.includes('text-decoration: none') && !css.includes('text-decoration:none')) {
        return { pass: false, message: "Supprime le soulignement par défaut avec 'text-decoration: none;' sur 'nav a'." };
      }
      if (!css.includes(':hover')) {
        return { pass: false, message: "Utilise la pseudo-classe ':hover' pour réagir lorsque le visiteur survole le lien." };
      }
      return { pass: true, message: "Tes liens prennent vie sous la souris ! Le survol apporte une réactivité magique." };
    }
  },

  {
    id: 'step-25',
    number: 25,
    character: 'bodhi',
    pose: 'thinking',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "La Beauté des Annales Tabulaires (table & border-collapse)",
    proverb: "« Sans le ciment du style, les rangées de données ne sont que des briques éparses. »",
    mentorSpeech: "Par défaut, les tableaux HTML séparent les cellules avec des bordures doubles assez rudes. La propriété magique border-collapse: collapse fusionne les bordures en une ligne épurée. Ajoutons aussi la pseudo-classe structurelle :nth-child(even) pour créer une zébrure discrète.",
    riddle: "Stylise 'table', 'th', 'td' avec border-collapse: collapse et une alternance de fond sur les rangées paires.",
    secretTip: "Dans style.css, ajoute : table { width: 100%; border-collapse: collapse; margin-top: 16px; } th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #334155; } th { background-color: #0f172a; color: #f59e0b; } tr:nth-child(even) { background-color: rgba(255, 255, 255, 0.03); }",
    instructions: [
      "Dans style.css, ajoute la règle pour le tableau : table { width: 100%; border-collapse: collapse; margin-top: 16px; }",
      "Harmonise les cellules : th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #334155; }",
      "Dore les en-têtes : th { background-color: #0f172a; color: #f59e0b; }",
      "Crée la zébrure subtile : tr:nth-child(even) { background-color: rgba(255, 255, 255, 0.03); }"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('table')) {
        return { pass: false, message: "Ajoute la règle de style pour l'élément table dans style.css." };
      }
      if (!css.includes('border-collapse') || !css.includes('collapse')) {
        return { pass: false, message: "Fusionne les bordures du tableau avec 'border-collapse: collapse;'." };
      }
      if (!css.includes('th') || !css.includes('td')) {
        return { pass: false, message: "Donne du padding aux cellules th et td pour aérer la lecture." };
      }
      return { pass: true, message: "Les annales tabulaires sont dignes des plus grandes bibliothèques d'Alexandrie !" };
    }
  },

  {
    id: 'step-26',
    number: 26,
    character: 'bodhi',
    pose: 'thumbs_up',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "Le Relief de la Pierre (box-shadow)",
    proverb: "« La lumière seule révèle la forme ; l'ombre portée lui confère sa profondeur dans l'espace. »",
    mentorSpeech: "Sur un écran plat à deux dimensions, nos cartes semblent encore plaquées sur le fond. En déposant une ombre douce avec box-shadow, nous faisons léviter chaque section au-dessus de l'abîme sombre.",
    riddle: "Ajoute une ombre portée box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); sur l'élément section.",
    secretTip: "Dans la règle 'section' de style.css, ajoute : box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);",
    instructions: [
      "Ouvre style.css dans l'éditeur.",
      "Retrouve la règle 'section { ... }'.",
      "Ajoute la propriété d'élévation : box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);",
      "Regarde la section se détacher du fond avec élégance dans l'aperçu."
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('box-shadow')) {
        return { pass: false, message: "Ajoute la propriété 'box-shadow' sur tes sections dans style.css." };
      }
      if (!css.includes('rgba(0') && !css.includes('#000') && !css.includes('black')) {
        return { pass: false, message: "Utilise une couleur sombre semi-transparente comme rgba(0, 0, 0, 0.4) pour une ombre naturelle." };
      }
      return { pass: true, message: "Le relief est né ! Les cartes du Sanctuaire flottent avec majesté." };
    }
  },

  {
    id: 'step-27',
    number: 27,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "Le Portique des Formulaires (form, input, select & textarea)",
    proverb: "« Quand l'instrument d'écriture est agréable au toucher, la lettre est un délice à composer. »",
    mentorSpeech: "Regarde notre page de contact : les champs de formulaire par défaut sont étroits et grisâtres. Donnons à form un agencement vertical aéré grâce à display: grid, et habillons input, select et textarea du même bleu nuit soigné que nos cartes.",
    riddle: "Stylise form avec display: grid et gap: 14px, puis donne un fond sombre et du padding aux champs.",
    secretTip: "Dans style.css, ajoute : form { display: grid; gap: 14px; margin-top: 16px; } input, select, textarea { background: #0f172a; border: 1px solid #334155; color: #f8fafc; padding: 12px 14px; border-radius: 8px; font-family: inherit; } label { font-size: 0.9rem; color: #94a3b8; font-weight: 600; }",
    instructions: [
      "Dans style.css, ajoute : form { display: grid; gap: 14px; margin-top: 16px; }",
      "Cible les champs : input, select, textarea { ... }",
      "Donne un fond sombre et une bordure fine : background: #0f172a; border: 1px solid #334155;",
      "Définis le texte blanc et le padding : color: #f8fafc; padding: 12px 14px; border-radius: 8px; font-family: inherit;",
      "Stylise les étiquettes : label { font-size: 0.9rem; color: #94a3b8; font-weight: 600; }"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('form') || !css.includes('gap')) {
        return { pass: false, message: "Ajoute la règle 'form' avec un espacement 'gap: 14px;' dans style.css." };
      }
      if (!css.includes('input') || !css.includes('textarea')) {
        return { pass: false, message: "Stylise les éléments 'input, select, textarea' pour éliminer leur apparence brute par défaut." };
      }
      if (!css.includes('border-radius')) {
        return { pass: false, message: "Arrondis les coins de tes champs de formulaire avec border-radius." };
      }
      return { pass: true, message: "Le portique des messages est superbe ! Remplir un parchemin devient un plaisir." };
    }
  },

  {
    id: 'step-28',
    number: 28,
    character: 'bodhi',
    pose: 'thumbs_up',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : L'Harmonie Visuelle & CSS Fondamental",
    targetFile: 'style.css',
    title: "Le Bouton d'Action & L'État Actif (button, :hover & :active)",
    proverb: "« Le geste qui engage l'action doit être franc, doré et tactile. »",
    mentorSpeech: "Le bouton submit est la clé finale de l'engagement. Il doit se distinguer de tout le reste ! Donnons-lui notre or éclatant (#f59e0b), un curseur en forme de main (cursor: pointer), et la pseudo-classe :active avec transform: scale(0.98) pour ressentir physiquement le clic sous le doigt.",
    riddle: "Stylise 'button' avec un fond or, un texte sombre en gras, cursor: pointer, et les états :hover et :active.",
    secretTip: "Dans style.css, ajoute : button { background: #f59e0b; color: #1e293b; font-weight: 800; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; } button:hover { background: #d97706; } button:active { transform: scale(0.98); }",
    instructions: [
      "Dans style.css, crée la règle pour les boutons : button { ... }",
      "Applique la teinte or : background: #f59e0b; color: #1e293b; font-weight: 800; border: none;",
      "Définis les dimensions : padding: 12px 20px; border-radius: 8px; font-size: 1rem;",
      "Indique l'interactivité : cursor: pointer;",
      "Ajoute les états dynamiques : button:hover { background: #d97706; } button:active { transform: scale(0.98); }"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('button')) {
        return { pass: false, message: "Ajoute la règle de style pour l'élément button dans style.css." };
      }
      if (!css.includes('cursor: pointer') && !css.includes('cursor:pointer')) {
        return { pass: false, message: "Indique au visiteur que le bouton est cliquable avec 'cursor: pointer;'." };
      }
      if (!css.includes(':active')) {
        return { pass: false, message: "Ajoute l'état ':active' sur le bouton pour simuler l'enfoncement physique au clic." };
      }
      return { pass: true, message: "L'Acte III est couronné de gloire ! Le CSS fondamental est totalement assimilé." };
    }
  }
];

console.log('Actes II & III loaded: 20 steps.');
module.exports = { stepsAct2And3 };
