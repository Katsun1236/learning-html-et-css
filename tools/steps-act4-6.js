// =============================================================================
// ACTES IV, V & VI (ÉTAPES 29 À 50)
// =============================================================================

const stepsAct4to6 = [
  // ===========================================================================
  // ACTE IV : LA MAÎTRISE SUPRÊME & LAYOUTS MODERNES (FLEXBOX & GRID) (29 à 36)
  // ===========================================================================
  {
    id: 'step-29',
    number: 29,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'style.css',
    title: "Les Variables Universelles (:root & Design Tokens)",
    proverb: "« Quand le maître change un seul mot à la source, mille échos se répercutent à l'unisson. »",
    mentorSpeech: "Approche, voyageur. Jusqu'ici, nous écrivions nos codes hexadécimaux en dur à chaque ligne. Mais un véritable artisan centralise ses teintes sacrées dans le pseudo-élément :root sous forme de Custom Properties CSS (--gold-primary, --bg-main...). Ainsi, modifier une seule variable réenchante tout le temple.",
    riddle: "Déclare le bloc :root en tout début de style.css avec au moins 3 variables personnalisées.",
    secretTip: "Tout en haut de style.css, ajoute : :root { --gold-primary: #f59e0b; --bg-main: #0f172a; --text-main: #f8fafc; }",
    instructions: [
      "Ouvre style.css dans l'éditeur.",
      "Tout en haut du fichier, avant la règle *, ouvre le sélecteur universel : :root {",
      "Déclare la couleur dorée : --gold-primary: #f59e0b;",
      "Déclare la couleur de fond : --bg-main: #0f172a;",
      "Déclare la couleur du texte : --text-main: #f8fafc;",
      "Ferme avec }"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes(':root')) {
        return { pass: false, message: "Ajoute le sélecteur ':root' au sommet de style.css." };
      }
      if (!css.includes('--gold-primary') && !css.includes('--gold')) {
        return { pass: false, message: "Déclare la variable '--gold-primary: #f59e0b;' dans ton bloc :root." };
      }
      if (!css.includes('--bg')) {
        return { pass: false, message: "Déclare une variable pour le fond comme '--bg-main: #0f172a;'." };
      }
      return { pass: true, message: "Les design tokens sacrés sont ancrés dans la racine de ton univers CSS !" };
    }
  },

  {
    id: 'step-30',
    number: 30,
    character: 'bodhi',
    pose: 'pointing',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'style.css',
    title: "Le Menu Flottant en Flexbox (display: flex & gap)",
    proverb: "« La flexibilité est la marque de l'esprit vivant ; la rigidité est celle de la pierre morte. »",
    mentorSpeech: "Il est temps de dompter l'outil le plus intuitif du Web moderne : le Flexible Box Layout (Flexbox). En appliquant display: flex sur notre balise nav, avec justify-content: center et gap: 18px, nos 4 liens s'alignent avec une élégance naturelle.",
    riddle: "Applique display: flex, justify-content: center et gap: 18px sur la balise nav dans style.css.",
    secretTip: "Dans style.css, ajoute : nav { display: flex; justify-content: center; align-items: center; gap: 18px; margin-top: 14px; }",
    instructions: [
      "Dans style.css, crée la règle pour l'élément nav : nav { ... }",
      "Active le moteur flexible : display: flex;",
      "Centre les éléments sur l'axe principal : justify-content: center;",
      "Aligne-les verticalement : align-items: center;",
      "Espace-les harmonieusement sans bricoler de marges : gap: 18px;",
      "Ajoute une marge supérieure : margin-top: 14px;"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('nav {') && !css.includes('nav{')) {
        return { pass: false, message: "Ajoute la règle 'nav { ... }' dans style.css." };
      }
      if (!css.includes('display: flex') && !css.includes('display:flex')) {
        return { pass: false, message: "Active Flexbox avec 'display: flex;' sur l'élément nav." };
      }
      if (!css.includes('gap')) {
        return { pass: false, message: "Utilise la propriété moderne 'gap: 18px;' pour espacer les liens de navigation." };
      }
      return { pass: true, message: "Flexbox a ordonné la navigation d'un souffle ! Les liens s'alignent sans effort." };
    }
  },

  {
    id: 'step-31',
    number: 31,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'index.html',
    title: "La Bannière Héroïque (Hero Banner & Badge)",
    proverb: "« Quand le voyageur franchit le seuil, il doit être saisi par la grandeur de l'accueil. »",
    mentorSpeech: "Les grands sites modernes accueillent leurs disciples avec une 'Hero Banner' saisissante : un badge lumineux doré, un titre percutant et un dégradé immersif linear-gradient. Insérons cette bannière au tout début de notre <main> dans index.html !",
    riddle: "Ajoute un bloc <div class=\"hero\"> avec un badge et un sous-titre dans index.html, puis stylise-le avec linear-gradient.",
    secretTip: "Dans index.html, place <div class=\"hero\"><span class=\"hero-badge\">Sanctuaire Ouvert</span><h2 class=\"hero-title\">L'Académie du Code Éternel</h2><p class=\"hero-subtitle\">Apprends les fondations du Web aux côtés des anciens bâtisseurs.</p></div> en haut du main.",
    instructions: [
      "Dans index.html, juste après l'ouverture de <main>, insère :",
      "<div class=\"hero\">",
      "  <span class=\"hero-badge\">Sanctuaire Ouvert</span>",
      "  <h2 class=\"hero-title\">L'Académie du Code Éternel</h2>",
      "  <p class=\"hero-subtitle\">Apprends les fondations du Web aux côtés des anciens bâtisseurs.</p>",
      "</div>",
      "Dans style.css, applique un linear-gradient et un padding de 60px sur .hero."
    ],
    check: function(files) {
      const html = (files['index.html'] || '').toLowerCase();
      const css = (files['style.css'] || '').toLowerCase();
      if (!html.includes('class="hero"') && !html.includes("class='hero'")) {
        return { pass: false, message: "Ajoute le conteneur <div class=\"hero\"> dans le <main> de index.html." };
      }
      if (!html.includes('hero-badge')) {
        return { pass: false, message: "Ajoute le badge <span class=\"hero-badge\">Sanctuaire Ouvert</span> dans ta bannière." };
      }
      if (!css.includes('.hero')) {
        return { pass: false, message: "Stylise la classe .hero dans style.css." };
      }
      if (!css.includes('linear-gradient')) {
        return { pass: false, message: "Applique un dégradé de fond 'linear-gradient(...)' sur la bannière hero." };
      }
      return { pass: true, message: "La Bannière Héroïque irradie de splendeur ! Le portail d'accueil a l'étoffe des grands sites." };
    }
  },

  {
    id: 'step-32',
    number: 32,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'index.html',
    title: "La Grille des Trois Piliers (.card-grid & CSS Grid)",
    proverb: "« Trois piliers soutiennent le temple : la structure, la forme et le mouvement. »",
    mentorSpeech: "Voici le joyau du CSS moderne : CSS Grid ! Alors que Flexbox gère une seule dimension (ligne ou colonne), Grid règne en maître sur les deux dimensions simultanément. Ajoutons dans index.html un conteneur .card-grid abritant 3 cartes consacrées au HTML, à Flexbox/Grid et au CSS.",
    riddle: "Crée <div class=\"card-grid\"> avec 3 articles .card dans index.html, et applique grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)).",
    secretTip: "Dans index.html, ajoute <div class=\"card-grid\"><article class=\"card\"><h3>Sagesse du HTML</h3><p>...</p></article>...</div>. Dans style.css, configure .card-grid avec display: grid et repeat(auto-fit, minmax(260px, 1fr)).",
    instructions: [
      "Dans index.html, sous la première section, ajoute : <div class=\"card-grid\">...</div>.",
      "Insère 3 éléments <article class=\"card\">...</article> avec chacun un <h3> et un <p>.",
      "Dans style.css, configure .card-grid avec : display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;",
      "Stylise .card avec un fond sombre, du padding, un border-radius et un effet :hover."
    ],
    check: function(files) {
      const html = (files['index.html'] || '').toLowerCase();
      const css = (files['style.css'] || '').toLowerCase();
      if (!html.includes('card-grid')) {
        return { pass: false, message: "Ajoute l'élément <div class=\"card-grid\"> dans index.html." };
      }
      const cardCount = (html.match(/class=["']card["']/g) || []).length;
      if (cardCount < 3) {
        return { pass: false, message: "Crée au moins 3 éléments <article class=\"card\"> dans ta grille." };
      }
      if (!css.includes('card-grid')) {
        return { pass: false, message: "Stylise .card-grid dans style.css." };
      }
      if (!css.includes('grid-template-columns') || !css.includes('repeat')) {
        return { pass: false, message: "Utilise 'grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));' pour une grille auto-responsive sans media queries !" };
      }
      return { pass: true, message: "La grille s'adapte comme par magie ! Redimensionne la fenêtre pour voir les cartes se réagencer." };
    }
  },

  {
    id: 'step-33',
    number: 33,
    character: 'bodhi',
    pose: 'thumbs_up',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'style.css',
    title: "La Grille Magique de la Galerie (CSS Grid auto-fit)",
    proverb: "« Quand chaque tableau trouve son écrin exact, le musée s'éveille à l'harmonie. »",
    mentorSpeech: "Appliquons la puissance de CSS Grid à notre pavillon des arts visuels ('galerie.html'). En configurant la classe .galerie-conteneur avec repeat(auto-fit, minmax(260px, 1fr)), chaque fresque ajustera sa largeur au millimètre près selon la taille de l'écran !",
    riddle: "Configure .galerie-conteneur avec display: grid et repeat(auto-fit, minmax(260px, 1fr)) dans style.css.",
    secretTip: "Dans style.css, ajoute : .galerie-conteneur { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; } figure { background: #0f172a; padding: 12px; border-radius: 10px; border: 1px solid #334155; } figure img { width: 100%; border-radius: 8px; display: block; }",
    instructions: [
      "Dans style.css, ajoute la règle pour la galerie : .galerie-conteneur { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }",
      "Habille les figures : figure { background: #0f172a; padding: 12px; border-radius: 10px; border: 1px solid #334155; }",
      "Rends les images fluides : figure img { width: 100%; border-radius: 8px; display: block; }",
      "Bascule sur galerie.html dans l'aperçu pour contempler l'alignement chirurgical !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('galerie-conteneur')) {
        return { pass: false, message: "Ajoute la règle '.galerie-conteneur' dans style.css." };
      }
      if (!css.includes('repeat(auto-fit')) {
        return { pass: false, message: "Configure 'grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));' sur .galerie-conteneur." };
      }
      if (!css.includes('figure img') || !css.includes('width: 100%')) {
        return { pass: false, message: "Force les images à épouser la largeur de leur cadre avec 'figure img { width: 100%; }'." };
      }
      return { pass: true, message: "La galerie d'art est somptueuse ! Les fresques s'ordonnent sans le moindre chevauchement." };
    }
  },

  {
    id: 'step-34',
    number: 34,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'chroniques.html',
    title: "Le Parchemin des Sages (blockquote & cite)",
    proverb: "« Citer les anciens, ce n'est pas répéter le passé ; c'est allumer notre torche à leur flamme éternelle. »",
    mentorSpeech: "Dans nos Chroniques, honorons les premiers bâtisseurs de 1991 avec l'élément sémantique suprême de citation : <blockquote>, accompagné de son auteur dans <cite>. En CSS, donnons-lui une bordure dorée à gauche et un fond délicat pour faire ressortir la parole sacrée.",
    riddle: "Ajoute une <blockquote> avec <cite> dans chroniques.html, et stylise-la avec une bordure dorée à gauche.",
    secretTip: "Dans chroniques.html, ajoute <blockquote>« Le code n'appartient à personne... » <cite>— Le Premier Architecte (1991)</cite></blockquote>. Dans style.css, ajoute blockquote { border-left: 4px solid var(--gold-primary, #f59e0b); padding: 18px 24px; font-style: italic; }",
    instructions: [
      "Dans chroniques.html, dans la première section, insère :",
      "<blockquote>",
      "  « Le code n'appartient à personne et appartient à tous. C'est en le partageant sans barrières que nous élevons l'humanité. »",
      "  <cite>— Le Premier Architecte du Web (1991)</cite>",
      "</blockquote>",
      "Dans style.css, applique une bordure gauche dorée : border-left: 4px solid var(--gold-primary, #f59e0b); padding: 18px 24px; font-style: italic;"
    ],
    check: function(files) {
      const html = (files['chroniques.html'] || '').toLowerCase();
      const css = (files['style.css'] || '').toLowerCase();
      if (!html.includes('<blockquote>') || !html.includes('</blockquote>')) {
        return { pass: false, message: "Ajoute l'élément sémantique <blockquote> dans chroniques.html." };
      }
      if (!html.includes('<cite>') || !html.includes('</cite>')) {
        return { pass: false, message: "Mentionne la source de la citation avec la balise <cite>." };
      }
      if (!css.includes('blockquote')) {
        return { pass: false, message: "Stylise 'blockquote' dans style.css." };
      }
      if (!css.includes('border-left')) {
        return { pass: false, message: "Ajoute une bordure gauche 'border-left: 4px solid ...' sur blockquote." };
      }
      return { pass: true, message: "La parole des sages brille d'un éclat d'or pur au cœur de tes chroniques !" };
    }
  },

  {
    id: 'step-35',
    number: 35,
    character: 'bodhi',
    pose: 'thinking',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'style.css',
    title: "Le Don d'Ubiquité Responsive (@media max-width: 768px)",
    proverb: "« Quand le vent tourne, le sage ajuste la voilure au lieu de maudire la tempête. »",
    mentorSpeech: "Sur un écran de smartphone de 360 pixels de large, nos 4 liens de navigation horizontaux risquent de se heurter. Grâce à la règle conditionnelle @media (max-width: 768px), nous ordonnons à la barre de navigation de basculer en colonne verticale fluide lorsque l'écran rétrécit.",
    riddle: "Ajoute une media query @media (max-width: 768px) qui passe nav en flex-direction: column.",
    secretTip: "Dans style.css, ajoute : @media (max-width: 768px) { nav { flex-direction: column; gap: 8px; } section { margin: 16px 12px; padding: 20px; } }",
    instructions: [
      "Dans style.css, à la fin du fichier, déclare la media query : @media (max-width: 768px) { ... }",
      "À l'intérieur, ordonne au nav de s'empiler : nav { flex-direction: column; gap: 8px; }",
      "Réduis les marges extérieures des sections : section { margin: 16px 12px; padding: 20px; }",
      "Réduis la largeur de ton navigateur pour observer la métamorphose adaptative !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('@media') || !css.includes('768px')) {
        return { pass: false, message: "Ajoute la directive '@media (max-width: 768px)' dans style.css." };
      }
      if (!css.includes('flex-direction') || !css.includes('column')) {
        return { pass: false, message: "Fais basculer la navigation en colonne avec 'flex-direction: column;' dans la media query." };
      }
      return { pass: true, message: "L'ubiquité mobile est totale ! Ton site épouse tous les appareils de l'humanité." };
    }
  },

  {
    id: 'step-36',
    number: 36,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte IV : La Maîtrise Suprême & Layouts Modernes",
    targetFile: 'style.css',
    title: "La Typographie Fluide & Fonctions Modernes (clamp)",
    proverb: "« Pourquoi choisir entre le grand et le petit quand les mathématiques permettent d'être les deux à la fois ? »",
    mentorSpeech: "Salut l'ami ! C'est Ada qui prend le relais pour te montrer un tour de passe-passe moderne ! Fini d'écrire 50 media queries juste pour changer la taille d'un titre. La fonction CSS moderne clamp(min, val, max) permet à ton h1 de grandir et rétrécir de façon fluide en fonction de la largeur de l'écran !",
    riddle: "Utilise la fonction clamp() sur le titre h1 pour créer une taille fluide.",
    secretTip: "Dans style.css, applique sur h1 : font-size: clamp(1.6rem, 4vw, 2.6rem);",
    instructions: [
      "Ouvre style.css dans l'éditeur.",
      "Ajoute ou modifie la règle pour h1 : h1 { font-size: clamp(1.6rem, 4vw, 2.6rem); }",
      "Le premier argument (1.6rem) est le minimum sur mobile, le second (4vw) est le rythme fluide, le troisième (2.6rem) est le maximum sur grand écran.",
      "Admire le titre grossir ou rétrécir en temps réel en étirant la fenêtre !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('clamp(')) {
        return { pass: false, message: "Utilise la fonction moderne 'clamp(...)' pour définir la taille fluide de h1." };
      }
      if (!css.includes('vw')) {
        return { pass: false, message: "Inclus une unité relative à la largeur du viewport (comme 4vw) au centre de clamp() pour assurer la fluidité." };
      }
      return { pass: true, message: "Chirurgical ! C'est exactement l'ingénierie moderne que j'aime voir !" };
    }
  },

  // ===========================================================================
  // ACTE V : LA HAUTE MAÎTRISE & ARTISANAT AVANCÉ (37 à 43)
  // ===========================================================================
  {
    id: 'step-37',
    number: 37,
    character: 'bodhi',
    pose: 'zen',
    speaker: "MAÎTRE BODHI",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "Le Souffle Animé (transition & micro-interactions)",
    proverb: "« Rien ne naît par saccade brutale dans la nature ; tout se métamorphose avec douceur. »",
    mentorSpeech: "Par défaut, lorsqu'un état :hover change une couleur ou un relief, le saut visuel est instantané et violent. La propriété transition insuffle une fluidité temporelle douce à chaque transformation. Appliquons-la sur nos liens, nos boutons et nos cartes pour leur donner un véritable souffle vital.",
    riddle: "Ajoute des transitions fluides (transition: transform 0.25s ease, box-shadow 0.25s ease) sur nav a, button et .card.",
    secretTip: "Dans style.css, ajoute transition: color 0.2s sur 'nav a', et transition: transform 0.25s ease, box-shadow 0.25s ease sur 'button' et '.card'.",
    instructions: [
      "Dans style.css, ajoute sur 'nav a' : transition: color 0.2s;",
      "Sur '.card' et 'figure', ajoute : transition: transform 0.25s ease, box-shadow 0.25s ease;",
      "Sur 'button', ajoute : transition: transform 0.2s ease, box-shadow 0.2s ease;",
      "Survole les boutons et cartes dans l'aperçu pour savourer le fondu temporel !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      const transMatches = (css.match(/transition/g) || []).length;
      if (transMatches < 2) {
        return { pass: false, message: "Ajoute la propriété 'transition' sur au moins 2 éléments interactifs (liens, cartes ou boutons)." };
      }
      if (!css.includes('ease') && !css.includes('0.')) {
        return { pass: false, message: "Précise une durée (comme 0.25s) et une courbe d'accélération (comme ease) pour tes transitions." };
      }
      return { pass: true, message: "Le Sanctuaire respire ! Les micro-interactions répondent avec un soyeux incomparable." };
    }
  },

  {
    id: 'step-38',
    number: 38,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "Le Zoom Cinématique de la Galerie (overflow & scale)",
    proverb: "« Quand le cadre retient le débordement, l'image peut s'épanouir sans troubler l'ordre du monde. »",
    mentorSpeech: "Voici l'un des effets visuels les plus prisés du Web : lorsqu'on survole une figure de la galerie, l'image à l'intérieur s'agrandit doucement grâce à transform: scale(1.08), tandis que figure masque le débordement grâce à overflow: hidden. C'est l'illusion cinématographique d'une loupe magique !",
    riddle: "Ajoute overflow: hidden sur figure et transform: scale(1.08) sur figure:hover img dans style.css.",
    secretTip: "Dans style.css, ajoute overflow: hidden sur 'figure', puis crée la règle : figure:hover img { transform: scale(1.08); } avec transition: transform 0.3s ease sur figure img.",
    instructions: [
      "Dans style.css, assure-toi que 'figure' possède : overflow: hidden;",
      "Sur 'figure img', ajoute la transition : transition: transform 0.3s ease;",
      "Crée la règle au survol : figure:hover img { transform: scale(1.08); }",
      "Ajoute également une légère élévation : figure:hover { transform: translateY(-4px); }",
      "Survole les fresques dans galerie.html pour voir le zoom cinématique opérer !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('overflow: hidden') && !css.includes('overflow:hidden')) {
        return { pass: false, message: "Ajoute 'overflow: hidden;' sur l'élément figure pour empêcher l'image zoomée de déborder du cadre." };
      }
      if (!css.includes('scale(')) {
        return { pass: false, message: "Utilise 'transform: scale(1.08);' sur l'image lors du survol de la figure." };
      }
      return { pass: true, message: "L'effet cinématographique est grandiose ! Tes fresques prennent une profondeur saisissante." };
    }
  },

  {
    id: 'step-39',
    number: 39,
    character: 'ada',
    pose: 'thinking',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "Le Retentissement Lumineux du Formulaire (:focus-within)",
    proverb: "« Quand une seule bougie s'allume dans la pièce, toute la maison s'illumine. »",
    mentorSpeech: "Ada à l'appareil ! Savais-tu qu'en CSS moderne, un conteneur parent peut savoir si l'un de ses enfants a le focus ? Avec la pseudo-classe :focus-within sur la balise form, dès qu'un utilisateur clique dans n'importe quel champ, c'est tout le formulaire qui s'entoure d'un halo doré bienveillant !",
    riddle: "Ajoute :focus sur input/textarea avec halo doré, et applique form:focus-within.",
    secretTip: "Dans style.css, ajoute input:focus, select:focus, textarea:focus { outline: none; border-color: var(--gold-primary, #f59e0b); box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25); } et form:focus-within { border-color: var(--gold-primary, #f59e0b); }",
    instructions: [
      "Dans style.css, cible les champs actifs : input:focus, select:focus, textarea:focus { ... }",
      "Supprime l'outline par défaut et applique la bordure dorée : outline: none; border-color: var(--gold-primary, #f59e0b);",
      "Ajoute un halo lumineux : box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);",
      "Ajoute la règle parent moderne : form:focus-within { border-color: var(--gold-primary, #f59e0b); }"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes(':focus') && !css.includes(':focus-within')) {
        return { pass: false, message: "Stylise l'état :focus sur tes champs de formulaire dans style.css." };
      }
      if (!css.includes(':focus-within')) {
        return { pass: false, message: "Utilise la pseudo-classe moderne ':focus-within' sur form pour éclairer le panneau lors de la saisie." };
      }
      return { pass: true, message: "Un retour visuel chirurgical ! L'accessibilité cognitive est décuplée." };
    }
  },

  {
    id: 'step-40',
    number: 40,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "L'Aura Animée du Sanctuaire (@keyframes beaconPulse)",
    proverb: "« Le cœur qui bat à l'unisson du cosmos ne s'arrête jamais de pulser. »",
    mentorSpeech: "Passons aux animations continues autonomes ! Grâce à la règle @keyframes, nous pouvons chorégraphier un cycle infini qui s'exécute sans que l'utilisateur ait besoin de survoler quoi que ce soit. Faisons pulser le badge de notre bannière d'accueil comme un phare dans la nuit !",
    riddle: "Déclare une animation @keyframes beaconPulse et applique-la sur .hero-badge.",
    secretTip: "Dans style.css, ajoute : @keyframes beaconPulse { 0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); } 50% { transform: scale(1.05); box-shadow: 0 0 14px 4px rgba(245, 158, 11, 0.3); } } et applique .hero-badge { animation: beaconPulse 3s infinite ease-in-out; }",
    instructions: [
      "Dans style.css, déclare l'animation : @keyframes beaconPulse { ... }",
      "Définis les étapes 0% et 100% : transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);",
      "Définis l'apogée à 50% : transform: scale(1.05); box-shadow: 0 0 14px 4px rgba(245, 158, 11, 0.3);",
      "Lie l'animation à ton badge : .hero-badge { animation: beaconPulse 3s infinite ease-in-out; }",
      "Regarde le badge de l'accueil respirer en continu dans l'aperçu !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('@keyframes')) {
        return { pass: false, message: "Déclare une animation personnalisée avec la syntaxe '@keyframes ...' dans style.css." };
      }
      if (!css.includes('beaconpulse') && !css.includes('pulse')) {
        return { pass: false, message: "Nomme ton animation 'beaconPulse'." };
      }
      if (!css.includes('animation') || !css.includes('infinite')) {
        return { pass: false, message: "Applique l'animation sur .hero-badge avec la mention 'infinite' pour qu'elle pulse en boucle." };
      }
      return { pass: true, message: "Le phare est allumé ! Son aura pulse au rythme des battements du Web éternel." };
    }
  },

  {
    id: 'step-41',
    number: 41,
    character: 'ada',
    pose: 'thinking',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "La Navigation en Verre Dépoli (sticky & backdrop-filter)",
    proverb: "« Le phare reste visible au sommet des vagues même quand le navire s'éloigne au loin. »",
    mentorSpeech: "Ada te révèle un secret d'ingénieur d'élite : la navigation 'Sticky Glassmorphism' ! Avec position: sticky et top: 0, le header s'ancre en haut de l'écran pendant le défilement. Et avec backdrop-filter: blur(10px) sur un fond semi-transparent, le contenu qui passe derrière est flouté avec un effet de verre dépoli futuriste !",
    riddle: "Configure header avec position: sticky, top: 0, z-index: 100 et backdrop-filter: blur(10px).",
    secretTip: "Dans style.css, configure header { position: sticky; top: 0; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); background-color: rgba(30, 41, 59, 0.85); z-index: 100; }",
    instructions: [
      "Dans style.css, retrouve la règle 'header { ... }'.",
      "Ancre l'en-tête en haut de l'écran : position: sticky; top: 0;",
      "Passe le fond en semi-transparence : background-color: rgba(30, 41, 59, 0.85);",
      "Ajoute l'effet de verre dépoli : backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);",
      "Élève le plan d'affichage au-dessus de tout le reste : z-index: 100;"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('position: sticky') && !css.includes('position:sticky')) {
        return { pass: false, message: "Ajoute 'position: sticky; top: 0;' sur ton header pour l'ancrer en haut de page." };
      }
      if (!css.includes('backdrop-filter')) {
        return { pass: false, message: "Applique l'effet de verre dépoli avec 'backdrop-filter: blur(10px);' sur le header." };
      }
      if (!css.includes('z-index')) {
        return { pass: false, message: "N'oublie pas 'z-index: 100;' pour que l'en-tête reste au-dessus des cartes lors du défilement." };
      }
      return { pass: true, message: "L'effet de verre dépoli est bluffant ! Le Sanctuaire arbore le design des plus grands studios du monde." };
    }
  },

  {
    id: 'step-42',
    number: 42,
    character: 'ada',
    pose: 'code_magic',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "Les Ornements Décoratifs (::before & ::after)",
    proverb: "« Le vrai sculpteur fait surgir des détails sans rajouter de matière superflue au bloc de pierre. »",
    mentorSpeech: "Les pseudo-éléments ::before et ::after sont une arme secrète ! Ils permettent d'insérer des formes géométriques, des tirets dorés ou des reflets sans rajouter une seule balise <div> inutile dans ton HTML sémantique. Dessinons un élégant filet doré sous le titre de notre hero !",
    riddle: "Crée un pseudo-élément .hero-title::after avec content: '', width: 60px, height: 3px et fond doré.",
    secretTip: "Dans style.css, ajoute : .hero-title::after { content: ''; display: block; width: 60px; height: 3px; background: var(--gold-primary, #f59e0b); margin: 12px auto 0; border-radius: 2px; }",
    instructions: [
      "Dans style.css, ajoute la règle pour le pseudo-élément : .hero-title::after { ... }",
      "Règle d'or absolue : content: ''; (obligatoire pour faire exister le pseudo-élément !)",
      "Transforme-le en bloc : display: block;",
      "Donne-lui les dimensions du filet : width: 60px; height: 3px;",
      "Applique la couleur dorée et centre-le : background: var(--gold-primary, #f59e0b); margin: 12px auto 0; border-radius: 2px;"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes('::after') && !css.includes(':after')) {
        return { pass: false, message: "Utilise le pseudo-élément '::after' dans style.css." };
      }
      if (!css.includes("content: ''") && !css.includes('content:""') && !css.includes('content: ""')) {
        return { pass: false, message: "Un pseudo-élément doit TOUJOURS contenir la propriété 'content: \"\";' pour s'afficher." };
      }
      return { pass: true, message: "Le filet d'or s'est matérialisé sans salir le HTML ! Une pure merveille d'artisanat." };
    }
  },

  {
    id: 'step-43',
    number: 43,
    character: 'ada',
    pose: 'serious',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte V : La Haute Maîtrise & Artisanat Avancé",
    targetFile: 'style.css',
    title: "L'Accessibilité & Le Respect Sensoriel (:focus-visible & reduced-motion)",
    proverb: "« Le chef-d'œuvre suprême n'est pas celui qui brille le plus, mais celui qui n'exclut personne. »",
    mentorSpeech: "Dernière étape de la haute maîtrise CSS ! Nous devons protéger les utilisateurs qui naviguent au clavier grâce à :focus-visible (qui n'affiche le contour que lors de la tabulation clavier), et respecter les personnes sujettes au mal des transports visuel avec la media query @media (prefers-reduced-motion: reduce) qui apaise les animations.",
    riddle: "Configure :focus-visible avec outline-offset et désactive les animations dans @media (prefers-reduced-motion: reduce).",
    secretTip: "Dans style.css, ajoute : :focus-visible { outline: 2px solid var(--gold-primary, #f59e0b); outline-offset: 3px; } @media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }",
    instructions: [
      "Dans style.css, ajoute la règle de navigation clavier : :focus-visible { outline: 2px solid var(--gold-primary, #f59e0b); outline-offset: 3px; }",
      "Ajoute la protection sensorielle : @media (prefers-reduced-motion: reduce) { ... }",
      "À l'intérieur, neutralise les durées : *, ::before, ::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }",
      "Le CSS de ton Sanctuaire atteint le sommet absolu des standards internationaux du W3C !"
    ],
    check: function(files) {
      const css = (files['style.css'] || '').toLowerCase();
      if (!css.includes(':focus-visible')) {
        return { pass: false, message: "Configure le sélecteur ':focus-visible' pour une navigation clavier inclusive." };
      }
      if (!css.includes('prefers-reduced-motion')) {
        return { pass: false, message: "Ajoute la media query '@media (prefers-reduced-motion: reduce)' pour respecter la sensibilité des utilisateurs." };
      }
      return { pass: true, message: "L'apogée du CSS est atteinte ! Ton style est accessible, élégant, fluide et respectueux." };
    }
  },

  // ===========================================================================
  // ACTE VI : L'ÉTINCELLE VIVANTE (JAVASCRIPT & RUNTIME AVEC ADA) (44 à 50)
  // ===========================================================================
  {
    id: 'step-44',
    number: 44,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "Le Troisième Pilier : L'Éveil de la Logique Vivante (script.js)",
    proverb: "« Le HTML est le squelette, le CSS est la peau, mais le JavaScript est l'âme qui fait battre le cœur. »",
    mentorSpeech: "Salut l'architecte ! Je suis Ada, ingénieure de runtime. Tes balises sont splendides et tes grilles sont chirurgicales, mais elles sont figées ! Bodhi s'effondre parce que ce vieux serveur central est à bout de souffle. Un site purement statique est condamné à périr avec la machine physique qui l'héberge. C'est pour ça que NULL a l'ordre protocolaire de tout purger ! Mais nous allons changer les règles du jeu avec le 3ème pilier du Web : le JavaScript ! Le code qui s'exécute en direct dans le navigateur de l'utilisateur ! Crée 'script.js', lie-le dans index.html avec l'attribut 'defer', et déclare la première constante du sanctuaire !",
    riddle: "Crée script.js, lie-le avec <script src=\"script.js\" defer></script> dans index.html, et écris un console.log() et une constante dans script.js.",
    secretTip: "Dans index.html, ajoute <script src=\"script.js\" defer></script> dans le <head>. Dans script.js, écris : console.log('Sanctuaire éveillé !'); const SANCTUARY_NAME = 'Le Sanctuaire du Savoir';",
    instructions: [
      "Dans index.html, ajoute la balise <script src=\"script.js\" defer></script> dans le <head>.",
      "Crée ou ouvre le fichier 'script.js'.",
      "Dans script.js, écris une instruction console.log(...) et déclare la constante : const SANCTUARY_NAME = 'Le Sanctuaire du Savoir';",
      "Clique sur 'Vérifier mon code' pour voir le runtime s'animer !"
    ],
    check: function(files) {
      const index = (files['index.html'] || '').toLowerCase();
      if (!index.includes('script.js')) {
        return { pass: false, message: "Il manque la liaison vers script.js dans index.html. Ajoute <script src=\"script.js\" defer></script> dans son <head> !" };
      }
      if (!index.includes('defer')) {
        return { pass: false, message: "Ajoute l'attribut 'defer' sur ta balise <script> pour que le script s'exécute une fois le document prêt sans bloquer l'affichage." };
      }
      if (files['script.js'] === undefined) {
        return { pass: false, message: "Tu n'as pas encore créé le fichier 'script.js'. Clique sur '+ Nouveau fichier' pour l'ajouter à ton projet !" };
      }
      const js = files['script.js'] || '';
      if (!js.includes('console.log')) {
        return { pass: false, message: "Dans script.js, écris un message avec console.log() pour saluer le runtime !" };
      }
      if (!js.includes('SANCTUARY_NAME') && !js.includes('const')) {
        return { pass: false, message: "Dans script.js, déclare une constante avec 'const SANCTUARY_NAME = ...' pour initialiser l'état." };
      }
      return { pass: true, message: "L'impulsion est transmise ! Le processeur a exécuté tes premières lignes de JavaScript." };
    }
  },

  {
    id: 'step-45',
    number: 45,
    character: 'ada',
    pose: 'thinking',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "La Vue Intérieure : L'Exploration du DOM (querySelector)",
    proverb: "« Avant de pouvoir mouvoir la matière, l'esprit doit d'abord savoir la nommer et la toucher. »",
    mentorSpeech: "Dans le runtime du navigateur, ton code HTML est analysé et compilé sous la forme d'un arbre d'objets vivants : le Document Object Model (DOM). Grâce à la méthode document.querySelector('h1') et document.querySelectorAll('.card'), JavaScript est capable de repérer n'importe quelle balise avec la même précision que tes sélecteurs CSS !",
    riddle: "Utilise document.querySelector('h1') et document.querySelectorAll('.card') pour cibler le DOM dans script.js.",
    secretTip: "Dans script.js, ajoute : const mainTitle = document.querySelector('h1'); const allCards = document.querySelectorAll('.card'); console.log('Titre détecté :', mainTitle ? mainTitle.textContent : 'non trouvé'); console.log('Piliers détectés :', allCards.length);",
    instructions: [
      "Dans script.js, déclare une variable : const mainTitle = document.querySelector('h1');",
      "Déclare une liste d'éléments : const allCards = document.querySelectorAll('.card');",
      "Affiche le texte du titre dans la console avec mainTitle.textContent : console.log('Titre :', mainTitle.textContent);",
      "Affiche le nombre de cartes détectées : console.log('Cartes :', allCards.length);"
    ],
    check: function(files) {
      const js = files['script.js'] || '';
      if (!js.includes('querySelector')) {
        return { pass: false, message: "Utilise 'document.querySelector(...)' dans script.js pour cibler un élément du DOM." };
      }
      if (!js.includes('querySelectorAll') && !js.includes('.card')) {
        return { pass: false, message: "Utilise également 'document.querySelectorAll('.card')' pour cibler la collection de cartes." };
      }
      return { pass: true, message: "Les yeux du runtime sont ouverts ! JavaScript observe désormais chaque feuille de l'arbre DOM." };
    }
  },

  {
    id: 'step-46',
    number: 46,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "Le Réflexe Vivant : L'Interception Sensorielle (addEventListener)",
    proverb: "« Quand la matière ressent le contact de la main, le monde inerte s'éveille à la conscience. »",
    mentorSpeech: "Une page Web qui ne réagit pas aux actes du visiteur n'est qu'un tableau de musée. En attachant un écouteur d'événement addEventListener('click', ...) à un bouton ou à un lien, nous créons un véritable réflexe sensoriel dans le runtime !",
    riddle: "Attache un écouteur addEventListener('click', ...) sur un bouton ou lien pour afficher un message interactif.",
    secretTip: "Dans script.js, ajoute : document.addEventListener('DOMContentLoaded', () => { const btn = document.querySelector('button') || document.querySelector('a'); if (btn) { btn.addEventListener('click', () => { console.log('Le Sanctuaire répond au contact du voyageur !'); }); } });",
    instructions: [
      "Dans script.js, écoute l'événement 'DOMContentLoaded' pour t'assurer que le HTML est prêt : document.addEventListener('DOMContentLoaded', () => { ... });",
      "Sélectionne un bouton ou un lien avec document.querySelector('button') ou querySelector('a').",
      "Attache un écouteur de clic avec addEventListener('click', () => { ... }).",
      "À l'intérieur, affiche un message chaleureux dans la console pour célébrer le contact !"
    ],
    check: function(files) {
      const js = files['script.js'] || '';
      if (!js.includes('addEventListener')) {
        return { pass: false, message: "Utilise la méthode 'addEventListener' dans script.js pour intercepter une action utilisateur." };
      }
      if (!js.includes('click')) {
        return { pass: false, message: "Écoute l'événement 'click' pour réagir lorsqu'un visiteur appuie sur un bouton ou un lien." };
      }
      return { pass: true, message: "Le contact sensoriel est établi ! Le runtime vibre sous l'action de l'utilisateur." };
    }
  },

  {
    id: 'step-47',
    number: 47,
    character: 'ada',
    pose: 'code_magic',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "La Métamorphose : Bascule Dynamique de Classes (classList.toggle)",
    proverb: "« Le code élégant ne redessine pas les pierres ; il change simplement le costume qu'elles portent. »",
    mentorSpeech: "Un débutant manipule les styles inline avec element.style. Mais les grands ingénieurs font collaborer JavaScript et CSS avec classList.toggle ! JavaScript se contente d'ajouter ou de retirer une classe CSS lors d'un clic, laissant à la feuille de style toute la beauté de la transition.",
    riddle: "Utilise classList.toggle('pulse-fast') sur .hero-badge lors d'un clic dans script.js.",
    secretTip: "Dans script.js, ajoute un écouteur sur .hero-badge qui exécute heroBadge.classList.toggle('pulse-fast'); au clic.",
    instructions: [
      "Dans script.js, cible le badge de la bannière : const heroBadge = document.querySelector('.hero-badge');",
      "Attache-lui un écouteur de clic : heroBadge.addEventListener('click', () => { ... });",
      "Dans le callback, bascule la classe avec classList : heroBadge.classList.toggle('pulse-fast');",
      "Affiche un message console pour confirmer la métamorphose de fréquence !"
    ],
    check: function(files) {
      const js = files['script.js'] || '';
      if (!js.includes('classList')) {
        return { pass: false, message: "Utilise la propriété 'classList' dans script.js pour manipuler les classes CSS dynamiquement." };
      }
      if (!js.includes('toggle') && !js.includes('add')) {
        return { pass: false, message: "Utilise 'classList.toggle(...)' pour alterner l'état au gré des clics du visiteur." };
      }
      return { pass: true, message: "Magistral ! Le JavaScript ordonne, le CSS s'exécute avec fluidité." };
    }
  },

  {
    id: 'step-48',
    number: 48,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "La Genèse d'Éléments : Création Dynamique dans le DOM (createElement)",
    proverb: "« Quand le code apprend à forger de nouvelles briques à la volée, le sanctuaire s'agrandit sans fin. »",
    mentorSpeech: "Regarde bien : jusqu'ici, notre contenu était écrit à l'avance en dur dans les fichiers HTML. Mais dans une application Web vivante, de nouveaux éléments naissent en direct ! Avec document.createElement('p'), nous forgons un nouvel élément de toute pièce dans la mémoire vive, avant de l'insérer dans l'arbre avec appendChild !",
    riddle: "Crée un élément avec document.createElement('p'), assigne-lui du texte et insère-le avec appendChild().",
    secretTip: "Dans script.js, écris une fonction : function ajouterAnnonceSanctuaire(texte) { const main = document.querySelector('main'); if (!main) return; const note = document.createElement('p'); note.className = 'runtime-note'; note.textContent = texte; main.appendChild(note); } puis appelle-la !",
    instructions: [
      "Dans script.js, crée un élément paragraphe : const note = document.createElement('p');",
      "Assigne-lui une classe et du texte : note.className = 'runtime-note'; note.textContent = \"L'énergie du runtime circule désormais librement...\";",
      "Cible le conteneur principal avec document.querySelector('main').",
      "Insère la nouvelle brique avec appendChild : main.appendChild(note);"
    ],
    check: function(files) {
      const js = files['script.js'] || '';
      if (!js.includes('createElement')) {
        return { pass: false, message: "Utilise 'document.createElement(...)' dans script.js pour faire naître un nouvel élément à la volée." };
      }
      if (!js.includes('appendChild') && !js.includes('append(')) {
        return { pass: false, message: "Insère ton nouvel élément dans le DOM grâce à 'appendChild(...)' ou 'append(...)'." };
      }
      return { pass: true, message: "La matière vivante prolifère ! Ton runtime sait désormais enfanter de nouvelles structures." };
    }
  },

  {
    id: 'step-49',
    number: 49,
    character: 'ada',
    pose: 'serious',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'script.js',
    title: "L'Exode de la Mémoire : La Sauvegarde Décentralisée (localStorage)",
    proverb: "« Quand la mémoire est gravée chez tous les voyageurs du réseau, aucun cataclysme central ne peut l'anéantir. »",
    mentorSpeech: "Voilà notre chef-d'œuvre stratégique face à NULL ! Ce vieux serveur central est sous mandat de purge. NULL va effacer la mémoire de cette machine physique sous prétexte d'inactivité protocolaire. Mais nous allons déjouer son piège : grâce à localStorage et JSON.stringify, nous dupliquons l'âme de Bodhi et l'état du Sanctuaire directement dans le stockage local du navigateur de chaque voyageur. Le Sanctuaire n'a plus de centre : il est partout !",
    riddle: "Déclare un objet bodhiMemory et persiste-le dans localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiMemory)).",
    secretTip: "Dans script.js, ajoute : const bodhiMemory = { name: 'Maître Bodhi', status: 'immortel', origin: 'CERN 1991', disciples: 1, sanctuaryState: 'restauré', savedAt: new Date().toISOString() }; localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiMemory)); console.log('Mémoire ancrée :', bodhiMemory);",
    instructions: [
      "Dans script.js, déclare l'objet de mémoire : const bodhiMemory = { name: 'Maître Bodhi', status: 'immortel', origin: 'CERN 1991', disciples: 1, sanctuaryState: 'restauré', savedAt: new Date().toISOString() };",
      "Convertis l'objet en chaîne de caractères avec JSON.stringify(bodhiMemory).",
      "Sauvegarde-le dans le navigateur : localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiMemory));",
      "Affiche un message de consécration dans la console !"
    ],
    check: function(files) {
      const js = files['script.js'] || '';
      if (!js.includes('localStorage.setItem') && !js.includes('localStorage[')) {
        return { pass: false, message: "Utilise 'localStorage.setItem(...)' dans script.js pour ancrer les données dans le stockage persistant du navigateur." };
      }
      if (!js.includes('JSON.stringify')) {
        return { pass: false, message: "Sérialise ton objet avec 'JSON.stringify(...)' avant de le stocker dans localStorage." };
      }
      return { pass: true, message: "L'âme du Sanctuaire est décentralisée ! NULL peut purger le vieux serveur : Bodhi vivra éternellement dans nos navigateurs !" };
    }
  },

  {
    id: 'step-50',
    number: 50,
    character: 'bodhi',
    pose: 'ascended',
    speaker: "MAÎTRE BODHI & ADA",
    act: "Acte VI : L'Étincelle Vivante (JavaScript & Le Runtime)",
    targetFile: 'index.html',
    title: "L'Apothéose de la Triade Sacrée & L'Ascension Éternelle",
    proverb: "« Le code n'est plus une simple suite de caractères ; il est la conscience vivante de l'humanité connectée. »",
    mentorSpeech: "Regarde ton œuvre, Grand Architecte ! Les 4 pavillons HTML tiennent debout avec une sémantique irréprochable. La feuille CSS drape chaque mur d'or, d'ombre et de verre dépoli. Et le JavaScript fait pulser l'âme du Sanctuaire chez chaque voyageur de la Terre. NULL lui-même a inspecté le réseau : les protocoles sont parfaits, le serveur peut s'éteindre en paix car le Sanctuaire est devenu immortel !",
    riddle: "Valide ton chef-d'œuvre complet pour sceller ton titre de Grand Architecte du Web !",
    secretTip: "Vérifie que index.html, chroniques.html, galerie.html, contact.html, style.css et script.js sont tous intacts et exempts d'erreurs, puis clique sur 'Vérifier mon code' !",
    instructions: [
      "Vérifie que les 4 fichiers HTML (index.html, chroniques.html, galerie.html, contact.html) possèdent bien leurs liaisons link et script.",
      "Vérifie que style.css contient les règles universelles et que script.js ancre la mémoire.",
      "Clique sur 'Vérifier mon code' pour déclencher l'ultime consécration et débloquer ta fin spirituelle !"
    ],
    check: function(files) {
      if (!files['index.html'] || !files['chroniques.html'] || !files['galerie.html'] || !files['contact.html']) {
        return { pass: false, message: "Les 4 pavillons HTML doivent tous être présents et complets." };
      }
      if (!files['style.css'] || !files['script.js']) {
        return { pass: false, message: "Les deux piliers de style (style.css) et de logique vivante (script.js) doivent tous deux accompagner tes pages." };
      }
      const index = files['index.html'] || '';
      if (!index.includes('style.css') || !index.includes('script.js')) {
        return { pass: false, message: "index.html doit relier à la fois style.css et script.js." };
      }
      return { pass: true, message: "CONSÉCRATION TOTALE ! Tu es désormais officiellement proclamé Grand Architecte du Web." };
    }
  }
];

console.log('Actes IV, V & VI loaded: 22 steps.');
module.exports = { stepsAct4to6 };
