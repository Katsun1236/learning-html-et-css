// =============================================================================
// MODÈLES CANONIQUES DU SANCTUAIRE DU SAVOIR (1 À 50)
// =============================================================================

const INDEX_S1 = `<!DOCTYPE html>
<html lang="fr">
</html>`;

const INDEX_S2 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Le Sanctuaire du Savoir</title>
</head>
</html>`;

const INDEX_S3 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.">
  <title>Le Sanctuaire du Savoir</title>
</head>
</html>`;

const INDEX_S4 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
  </header>

</body>
</html>`;

const INDEX_S5 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

</body>
</html>`;

const INDEX_S6 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Présentation du Sanctuaire</h2>
      <article>
        <p>Ce lieu fut érigé pour rappeler aux esprits curieux que le Web appartient à ceux qui apprennent à le bâtir par eux-mêmes, brique par brique, sans dépendre d'artifices éphémères.</p>
      </article>
    </section>
  </main>

</body>
</html>`;

const INDEX_S7 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Présentation du Sanctuaire</h2>
      <article>
        <p>Ce lieu fut érigé pour rappeler aux esprits curieux que le <strong>Web</strong> appartient à ceux qui apprennent à le bâtir par eux-mêmes, brique par brique, avec du code <code>HTML5</code> pur et une <em>véritable intention sémantique</em>.</p>
      </article>
    </section>
  </main>

</body>
</html>`;

const INDEX_S8 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d'apprentissage du Web, du code pur et des standards ouverts.">
  <title>Le Sanctuaire du Savoir</title>
</head>
<body>

  <header>
    <h1>Le Sanctuaire du Savoir</h1>
    <p>L'académie sacrée où l'art du code pur reprend vie.</p>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Présentation du Sanctuaire</h2>
      <article>
        <p>Ce lieu fut érigé pour rappeler aux esprits curieux que le <strong>Web</strong> appartient à ceux qui apprennent à le bâtir par eux-mêmes, brique par brique, avec du code <code>HTML5</code> pur et une <em>véritable intention sémantique</em>.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const INDEX_S19 = INDEX_S8.replace(
  '<title>Le Sanctuaire du Savoir</title>',
  '<title>Le Sanctuaire du Savoir</title>\n  <link rel="stylesheet" href="style.css">'
);

const INDEX_S31 = INDEX_S19.replace(
  '<main>',
  `<main>
    <div class="hero">
      <span class="hero-badge">Sanctuaire Ouvert</span>
      <h2 class="hero-title">L'Académie du Code Éternel</h2>
      <p class="hero-subtitle">Apprends les fondations du Web aux côtés des anciens bâtisseurs.</p>
    </div>`
);

const INDEX_S32 = INDEX_S31.replace(
  '    </section>',
  `    </section>

    <div class="card-grid">
      <article class="card">
        <h3>Sagesse du HTML</h3>
        <p>La sémantique pure qui donne un sens éternel à chaque octet de contenu.</p>
      </article>
      <article class="card">
        <h3>Structure & Flux</h3>
        <p>L'harmonie de Flexbox et de la Grille qui ordonne l'univers visuel.</p>
      </article>
      <article class="card">
        <h3>Éclat du CSS</h3>
        <p>Les teintes profondes et les animations douces qui enchantent le visiteur.</p>
      </article>
    </div>`
);

const INDEX_S44 = INDEX_S32.replace(
  '</head>',
  '  <script src="script.js" defer></script>\n</head>'
);

// === SEO & RÉFÉRENCEMENT (ÉTAPES 51 À 60) ===
const INDEX_S51 = INDEX_S44.replace(
  '<title>Le Sanctuaire du Savoir</title>',
  '<title>Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript</title>'
);

const INDEX_S52 = INDEX_S51.replace(
  '<meta name="description" content="Le Sanctuaire du Savoir : académie sacrée d\'apprentissage du Web, du code pur et des standards ouverts.">',
  '<meta name="description" content="Apprends les bases et les secrets du Web moderne avec le Sanctuaire du Savoir : cours et exercices pratiques en HTML sémantique, CSS moderne et JavaScript.">'
);

const INDEX_S53 = INDEX_S52.replace(
  '  <link rel="stylesheet" href="style.css">',
  '  <link rel="stylesheet" href="style.css">\n  <link rel="canonical" href="https://sanctuaire.web/index.html">'
);

const INDEX_S54 = INDEX_S53.replace(
  '  <link rel="canonical" href="https://sanctuaire.web/index.html">',
  '  <link rel="canonical" href="https://sanctuaire.web/index.html">\n  <meta name="robots" content="index, follow">'
);

const INDEX_S55 = INDEX_S54.replace(
  '  <meta name="robots" content="index, follow">',
  `  <meta name="robots" content="index, follow">
  <!-- Protocole Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript">
  <meta property="og:description" content="Apprends les bases et les secrets du Web moderne : cours et exercices pratiques en HTML sémantique, CSS moderne et JavaScript.">
  <meta property="og:url" content="https://sanctuaire.web/index.html">
  <meta property="og:image" content="https://sanctuaire.web/assets/sanctuary-preview.jpg">`
);

const INDEX_S56 = INDEX_S55.replace(
  '  <meta property="og:image" content="https://sanctuaire.web/assets/sanctuary-preview.jpg">',
  `  <meta property="og:image" content="https://sanctuaire.web/assets/sanctuary-preview.jpg">
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Le Sanctuaire du Savoir - Apprendre HTML, CSS et JavaScript">
  <meta name="twitter:description" content="Apprends les bases et les secrets du Web moderne : cours et exercices pratiques en HTML sémantique, CSS moderne et JavaScript.">
  <meta name="twitter:image" content="https://sanctuaire.web/assets/sanctuary-preview.jpg">`
);

const INDEX_S59 = INDEX_S56.replace(
  '</head>',
  `  <!-- Données structurées Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Le Sanctuaire du Savoir",
    "url": "https://sanctuaire.web",
    "description": "Académie interactive d'apprentissage du Web, du code pur et des standards ouverts."
  }
  </script>
</head>`
);

const INDEX_S60 = INDEX_S59;

const ROBOTS_TXT_S54 = `User-agent: *
Allow: /

Sitemap: https://sanctuaire.web/sitemap.xml
`;

const SITEMAP_XML_S60 = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sanctuaire.web/index.html</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://sanctuaire.web/chroniques.html</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://sanctuaire.web/galerie.html</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://sanctuaire.web/contact.html</loc>
    <priority>0.7</priority>
    <changefreq>yearly</changefreq>
  </url>
</urlset>
`;

// === 2. CHRONIQUES.HTML PROGRESSION ===
const CHRONIQUES_S9 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Les Chroniques du Web</title>
</head>
<body>

  <header>
    <h1>Les Chroniques du Web</h1>
  </header>

</body>
</html>`;

const CHRONIQUES_S10 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Les Chroniques du Web</title>
</head>
<body>

  <header>
    <h1>Les Chroniques du Web</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

</body>
</html>`;

const CHRONIQUES_S11 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Les Chroniques du Web</title>
</head>
<body>

  <header>
    <h1>Les Chroniques du Web</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Les Âges du Réseau</h2>
      <ul>
        <li><strong>L'Ère du Texte Brut (1990) :</strong> Les premiers hyperliens inventés au CERN par Tim Berners-Lee.</li>
        <li><strong>La Guerre des Navigateurs (1995) :</strong> L'affrontement titanesque entre Netscape et Internet Explorer.</li>
        <li><strong>L'Harmonie des Standards (2000+) :</strong> L'avènement du W3C et des feuilles de style CSS universelles.</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const CHRONIQUES_S12 = CHRONIQUES_S11.replace(
  '    </section>',
  `    </section>

    <section>
      <h2>Les Trois Fondations Sacrées</h2>
      <table>
        <thead>
          <tr>
            <th>Technologie</th>
            <th>Année de Création</th>
            <th>Rôle Sacré</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HTML</td>
            <td>1991</td>
            <td>Squelette sémantique et contenu</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>1996</td>
            <td>Présentation visuelle et harmonie</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>1995</td>
            <td>Logique vivante et interactivité</td>
          </tr>
        </tbody>
      </table>
    </section>`
);

const CHRONIQUES_S19 = CHRONIQUES_S12.replace(
  '<title>Les Chroniques du Web</title>',
  '<title>Les Chroniques du Web</title>\n  <link rel="stylesheet" href="style.css">'
);

const CHRONIQUES_S34 = CHRONIQUES_S19.replace(
  '    </section>\n\n    <section>',
  `      <blockquote>
        « Le code n'appartient à personne et appartient à tous. C'est en le partageant sans barrières que nous élevons l'humanité. »
        <cite>— Le Premier Architecte du Web (1991)</cite>
      </blockquote>
    </section>

    <section>`
);

const CHRONIQUES_S58 = CHRONIQUES_S34.replace(
  '<main>',
  `<main>
    <nav aria-label="Fil d'Ariane" class="breadcrumb">
      <ol>
        <li><a href="index.html">Accueil</a></li>
        <li><span aria-current="page">Chroniques</span></li>
      </ol>
    </nav>`
);

// === 3. GALERIE.HTML PROGRESSION ===
const GALERIE_S13 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galerie des Bâtisseurs</title>
</head>
<body>

  <header>
    <h1>Galerie des Bâtisseurs</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Fresques du Premier Siècle</h2>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const GALERIE_S14 = GALERIE_S13.replace(
  '    <section>\n      <h2>Fresques du Premier Siècle</h2>\n    </section>',
  `    <section>
      <h2>Fresques du Premier Siècle</h2>
      <div class="galerie-conteneur">
        <figure>
          <img src="assets/gallery/tree_dom.png" alt="L'Arbre du DOM">
          <figcaption>L'Arbre Sacré du DOM : la hiérarchie des balises vivantes.</figcaption>
        </figure>
        <figure>
          <img src="assets/gallery/cascades_css.png" alt="Les Cascades CSS">
          <figcaption>Les Cascades de Style : la beauté héritée des propriétés.</figcaption>
        </figure>
        <figure>
          <img src="assets/gallery/hyperlink_bridge.png" alt="Le Pont Hypertexte">
          <figcaption>Le Pont Hypertexte : reliant les mondes distants en un clic.</figcaption>
        </figure>
        <figure>
          <img src="assets/gallery/messenger_envoy.png" alt="L'Envoyé Messager">
          <figcaption>L'Envoyé du Réseau : délivrant les formulaires au serveur.</figcaption>
        </figure>
      </div>
    </section>`
);

const GALERIE_S19 = GALERIE_S14.replace(
  '<title>Galerie des Bâtisseurs</title>',
  '<title>Galerie des Bâtisseurs</title>\n  <link rel="stylesheet" href="style.css">'
);

const GALERIE_S57 = GALERIE_S19
  .replace('alt="Le Tisseur du Web"', 'alt="Fresque du Tisseur du Web agençant les nœuds de la toile en 1991" width="600" height="400" loading="lazy"')
  .replace('alt="Le Portail Hypertexte"', 'alt="Illustration du pont hypertexte reliant les documents distants en un clic" width="600" height="400" loading="lazy"')
  .replace('alt="L\'Envoyé Messager"', 'alt="Représentation de l\'envoyé du réseau transmettant les formulaires au serveur" width="600" height="400" loading="lazy"');

// === 4. CONTACT.HTML PROGRESSION ===
const CONTACT_S15 = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacter le Sanctuaire</title>
</head>
<body>

  <header>
    <h1>Contacter le Sanctuaire</h1>
    <nav>
      <a href="index.html">Accueil</a>
      <a href="chroniques.html">Chroniques</a>
      <a href="galerie.html">Galerie</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Envoyer un Parchemin à Maître Bodhi</h2>
      <form action="#" method="post">
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Le Sanctuaire du Savoir — Conçu avec sagesse et code pur.</p>
  </footer>

</body>
</html>`;

const CONTACT_S16 = CONTACT_S15.replace(
  '      <form action="#" method="post">\n      </form>',
  `      <form action="#" method="post">
        <label for="nom">Ton nom d'apprenti :</label>
        <input type="text" id="nom" name="nom" required placeholder="Ex: Scribe du Web">

        <label for="email">Ton adresse de contact :</label>
        <input type="email" id="email" name="email" required placeholder="nom@domaine.org">
      </form>`
);

const CONTACT_S17 = CONTACT_S16.replace(
  '      </form>',
  `        <label for="sujet">Objet de la missive :</label>
        <select id="sujet" name="sujet">
          <option value="question">Question sur le code</option>
          <option value="salutation">Salutation à Maître Bodhi</option>
          <option value="runtime">Requête pour Ada</option>
        </select>

        <label for="message">Ton message pour le sanctuaire :</label>
        <textarea id="message" name="message" rows="5" required placeholder="Écris ton message ici..."></textarea>
      </form>`
);

const CONTACT_S18 = CONTACT_S17.replace(
  '      </form>',
  `        <button type="submit">Envoyer la missive</button>
      </form>`
);

const CONTACT_S19 = CONTACT_S18.replace(
  '<title>Contacter le Sanctuaire</title>',
  '<title>Contacter le Sanctuaire</title>\n  <link rel="stylesheet" href="style.css">'
);

// === 5. STYLE.CSS PROGRESSION ===
const STYLE_S19 = `/* Feuille de style du Sanctuaire */`;

const STYLE_S20 = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;

const STYLE_S21 = STYLE_S20 + `\n
body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  line-height: 1.6;
}`;

const STYLE_S22 = STYLE_S21 + `\n
section {
  background-color: #1e293b;
  border: 1px solid #334155;
  padding: 28px;
  max-width: 800px;
  margin: 24px auto;
  border-radius: 14px;
}`;

const STYLE_S23 = STYLE_S22 + `\n
h1, h2, h3 {
  color: #f8fafc;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}`;

const STYLE_S24 = STYLE_S23 + `\n
header {
  background-color: #1e293b;
  padding: 24px 20px;
  text-align: center;
  border-bottom: 2px solid #334155;
}

nav a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 14px;
}

nav a:hover {
  color: #f59e0b;
}`;

const STYLE_S25 = STYLE_S24 + `\n
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #334155;
}

th {
  background-color: #0f172a;
  color: #f59e0b;
}

tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}`;

const STYLE_S26 = STYLE_S25.replace(
  'border-radius: 14px;',
  'border-radius: 14px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);'
);

const STYLE_S27 = STYLE_S26 + `\n
form {
  display: grid;
  gap: 14px;
  margin-top: 16px;
}

input, select, textarea {
  background: #0f172a;
  border: 1px solid #334155;
  color: #f8fafc;
  padding: 12px 14px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
}

label {
  font-size: 0.9rem;
  color: #94a3b8;
  font-weight: 600;
}`;

const STYLE_S28 = STYLE_S27 + `\n
button {
  background: #f59e0b;
  color: #1e293b;
  font-weight: 800;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #d97706;
}

button:active {
  transform: scale(0.98);
}`;

const STYLE_S29 = `:root {
  --gold-primary: #f59e0b;
  --bg-main: #0f172a;
  --text-main: #f8fafc;
}

` + STYLE_S28;

const STYLE_S30 = STYLE_S29.replace(
  'header {',
  `nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 14px;
}

header {`
);

const STYLE_S31 = STYLE_S30 + `\n
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  border-bottom: 1px solid #334155;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid var(--gold-primary, #f59e0b);
  border-radius: 20px;
  color: var(--gold-primary, #f59e0b);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}`;

const STYLE_S32 = STYLE_S31 + `\n
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 960px;
  margin: 32px auto;
  padding: 0 16px;
}

.card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-primary, #f59e0b);
}`;

const STYLE_S33 = STYLE_S32 + `\n
.galerie-conteneur {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

figure {
  background: #0f172a;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #334155;
}

figure img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

figcaption {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 8px;
  text-align: center;
}`;

const STYLE_S34 = STYLE_S33 + `\n
blockquote {
  border-left: 4px solid var(--gold-primary, #f59e0b);
  padding: 18px 24px;
  margin: 24px 0;
  background: rgba(245, 158, 11, 0.05);
  border-radius: 0 10px 10px 0;
  font-style: italic;
  font-size: 1.05rem;
  color: #e2e8f0;
}

blockquote cite {
  display: block;
  margin-top: 10px;
  font-size: 0.85rem;
  font-style: normal;
  color: var(--gold-primary, #f59e0b);
  font-weight: 700;
}`;

const STYLE_S35 = STYLE_S34 + `\n
footer {
  text-align: center;
  padding: 24px;
  color: #64748b;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 8px;
  }

  section {
    margin: 16px 12px;
    padding: 20px;
  }
}`;

const STYLE_S36 = STYLE_S35.replace(
  'h1, h2, h3 {',
  `h1 {
  font-size: clamp(1.6rem, 4vw, 2.6rem);
}

h1, h2, h3 {`
);

const STYLE_S37 = STYLE_S36.replace(
  'nav a {',
  'nav a {\n  transition: color 0.2s;'
).replace(
  'border: 1px solid #334155;\n}',
  `border: 1px solid #334155;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}`
).replace(
  'font-size: 1rem;\n}',
  `font-size: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}`
);

const STYLE_S38 = STYLE_S37.replace(
  'figure {',
  'figure {\n  overflow: hidden;'
).replace(
  'figure img {',
  `figure:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}

figure:hover img {
  transform: scale(1.08);
}

figure img {
  transition: transform 0.3s ease;`
).replace(
  'button:hover {',
  `button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);`
);

const STYLE_S39 = STYLE_S38 + `\n
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--gold-primary, #f59e0b);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);
}

form:focus-within {
  border-color: var(--gold-primary, #f59e0b);
}`;

const STYLE_S40 = STYLE_S39 + `\n
@keyframes beaconPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 14px 4px rgba(245, 158, 11, 0.3);
  }
}

.hero-badge {
  animation: beaconPulse 3s infinite ease-in-out;
}`;

const STYLE_S41 = STYLE_S40.replace(
  'header {',
  `header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(30, 41, 59, 0.85);
  z-index: 100;`
);

const STYLE_S42 = STYLE_S41 + `\n
.hero-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--gold-primary, #f59e0b);
  margin: 12px auto 0;
  border-radius: 2px;
}`;

const STYLE_S43 = STYLE_S42 + `\n
:focus-visible {
  outline: 2px solid var(--gold-primary, #f59e0b);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`;

// === 6. SCRIPT.JS PROGRESSION (ACTE VI : JAVASCRIPT & RUNTIME AVEC ADA) ===
const SCRIPT_S44 = `// =============================================================================
// L'ATELIER DU RUNTIME — SCRIPT PRINCIPAL DU SANCTUAIRE
// =============================================================================

console.log("Le Sanctuaire du Savoir s'éveille dans le runtime !");
const SANCTUARY_NAME = "Le Sanctuaire du Savoir";
`;

const SCRIPT_S45 = SCRIPT_S44 + `\n// 1. Observation du DOM compilé par le navigateur
const mainTitle = document.querySelector('h1');
const allCards = document.querySelectorAll('.card');
console.log("Titre actif détecté :", mainTitle ? mainTitle.textContent : "Sanctuaire");
console.log("Nombre de piliers architecturaux détectés :", allCards.length);
`;

const SCRIPT_S46 = SCRIPT_S45 + `\n// 2. Interaction sensorielle : écoute des événements utilisateurs
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button') || document.querySelector('a');
  if (btn) {
    btn.addEventListener('click', () => {
      console.log("Le Sanctuaire répond au contact du voyageur !");
    });
  }
});
`;

const SCRIPT_S47 = SCRIPT_S46 + `\n// 3. Bascule dynamique de classe pour animer un élément
document.addEventListener('DOMContentLoaded', () => {
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    heroBadge.addEventListener('click', () => {
      heroBadge.classList.toggle('pulse-fast');
      console.log("Fréquence du phare modifiée par l'Architecte !");
    });
  }
});
`;

const SCRIPT_S48 = SCRIPT_S47 + `\n// 4. Génération dynamique de contenu dans le DOM
function ajouterAnnonceSanctuaire(texte) {
  const main = document.querySelector('main');
  if (!main) return;
  const note = document.createElement('p');
  note.className = 'runtime-note';
  note.textContent = texte;
  main.appendChild(note);
}
ajouterAnnonceSanctuaire("L'énergie du runtime circule désormais librement dans chaque recoin du sanctuaire.");
`;

const SCRIPT_S49 = SCRIPT_S48 + `\n// 5. Déportation de la mémoire de Bodhi dans le navigateur local (localStorage)
const bodhiMemory = {
  name: "Maître Bodhi",
  status: "immortel",
  origin: "CERN 1991",
  disciples: 1,
  sanctuaryState: "restauré",
  savedAt: new Date().toISOString()
};

localStorage.setItem('bodhi_memory_sanctuary', JSON.stringify(bodhiMemory));
console.log("Mémoire de Bodhi ancrée dans localStorage :", bodhiMemory);
`;

const SCRIPT_S50 = SCRIPT_S49;

function getFilesForStep(stepNum) {
  const files = {};
  
  // INDEX.HTML
  if (stepNum === 1) files['index.html'] = INDEX_S1;
  else if (stepNum === 2) files['index.html'] = INDEX_S2;
  else if (stepNum === 3) files['index.html'] = INDEX_S3;
  else if (stepNum === 4) files['index.html'] = INDEX_S4;
  else if (stepNum === 5) files['index.html'] = INDEX_S5;
  else if (stepNum === 6) files['index.html'] = INDEX_S6;
  else if (stepNum === 7) files['index.html'] = INDEX_S7;
  else if (stepNum >= 8 && stepNum <= 18) files['index.html'] = INDEX_S8;
  else if (stepNum >= 19 && stepNum <= 30) files['index.html'] = INDEX_S19;
  else if (stepNum === 31) files['index.html'] = INDEX_S31;
  else if (stepNum >= 32 && stepNum <= 43) files['index.html'] = INDEX_S32;
  else if (stepNum >= 44 && stepNum <= 50) files['index.html'] = INDEX_S44;
  else if (stepNum === 51) files['index.html'] = INDEX_S51;
  else if (stepNum === 52) files['index.html'] = INDEX_S52;
  else if (stepNum === 53) files['index.html'] = INDEX_S53;
  else if (stepNum === 54) files['index.html'] = INDEX_S54;
  else if (stepNum === 55) files['index.html'] = INDEX_S55;
  else if (stepNum >= 56 && stepNum <= 58) files['index.html'] = INDEX_S56;
  else files['index.html'] = INDEX_S59; // 59..60

  // CHRONIQUES.HTML
  if (stepNum === 9) files['chroniques.html'] = CHRONIQUES_S9;
  else if (stepNum === 10) files['chroniques.html'] = CHRONIQUES_S10;
  else if (stepNum === 11) files['chroniques.html'] = CHRONIQUES_S11;
  else if (stepNum >= 12 && stepNum <= 18) files['chroniques.html'] = CHRONIQUES_S12;
  else if (stepNum >= 19 && stepNum <= 33) files['chroniques.html'] = CHRONIQUES_S19;
  else if (stepNum >= 34 && stepNum <= 57) files['chroniques.html'] = CHRONIQUES_S34;
  else if (stepNum >= 58) files['chroniques.html'] = CHRONIQUES_S58;

  // GALERIE.HTML
  if (stepNum === 13) files['galerie.html'] = GALERIE_S13;
  else if (stepNum >= 14 && stepNum <= 18) files['galerie.html'] = GALERIE_S14;
  else if (stepNum >= 19 && stepNum <= 56) files['galerie.html'] = GALERIE_S19;
  else if (stepNum >= 57) files['galerie.html'] = GALERIE_S57;

  // CONTACT.HTML
  if (stepNum === 15) files['contact.html'] = CONTACT_S15;
  else if (stepNum === 16) files['contact.html'] = CONTACT_S16;
  else if (stepNum === 17) files['contact.html'] = CONTACT_S17;
  else if (stepNum === 18) files['contact.html'] = CONTACT_S18;
  else if (stepNum >= 19) files['contact.html'] = CONTACT_S19;

  // STYLE.CSS
  if (stepNum === 19) files['style.css'] = STYLE_S19;
  else if (stepNum === 20) files['style.css'] = STYLE_S20;
  else if (stepNum === 21) files['style.css'] = STYLE_S21;
  else if (stepNum === 22) files['style.css'] = STYLE_S22;
  else if (stepNum === 23) files['style.css'] = STYLE_S23;
  else if (stepNum === 24) files['style.css'] = STYLE_S24;
  else if (stepNum === 25) files['style.css'] = STYLE_S25;
  else if (stepNum === 26) files['style.css'] = STYLE_S26;
  else if (stepNum === 27) files['style.css'] = STYLE_S27;
  else if (stepNum === 28) files['style.css'] = STYLE_S28;
  else if (stepNum === 29) files['style.css'] = STYLE_S29;
  else if (stepNum === 30) files['style.css'] = STYLE_S30;
  else if (stepNum === 31) files['style.css'] = STYLE_S31;
  else if (stepNum === 32) files['style.css'] = STYLE_S32;
  else if (stepNum === 33) files['style.css'] = STYLE_S33;
  else if (stepNum === 34) files['style.css'] = STYLE_S34;
  else if (stepNum === 35) files['style.css'] = STYLE_S35;
  else if (stepNum === 36) files['style.css'] = STYLE_S36;
  else if (stepNum === 37) files['style.css'] = STYLE_S37;
  else if (stepNum === 38) files['style.css'] = STYLE_S38;
  else if (stepNum === 39) files['style.css'] = STYLE_S39;
  else if (stepNum === 40) files['style.css'] = STYLE_S40;
  else if (stepNum === 41) files['style.css'] = STYLE_S41;
  else if (stepNum === 42) files['style.css'] = STYLE_S42;
  else if (stepNum >= 43) files['style.css'] = STYLE_S43;

  // SCRIPT.JS (ACTE VI : JAVASCRIPT & RUNTIME AVEC ADA)
  if (stepNum === 44) files['script.js'] = SCRIPT_S44;
  else if (stepNum === 45) files['script.js'] = SCRIPT_S45;
  else if (stepNum === 46) files['script.js'] = SCRIPT_S46;
  else if (stepNum === 47) files['script.js'] = SCRIPT_S47;
  else if (stepNum === 48) files['script.js'] = SCRIPT_S48;
  else if (stepNum === 49) files['script.js'] = SCRIPT_S49;
  else if (stepNum >= 50) files['script.js'] = SCRIPT_S50;

  // ROBOTS.TXT (ACTE VII : SEO)
  if (stepNum >= 54) files['robots.txt'] = ROBOTS_TXT_S54;

  // SITEMAP.XML (ACTE VII : SEO)
  if (stepNum >= 60) files['sitemap.xml'] = SITEMAP_XML_S60;

  return files;
}

export { getFilesForStep as getStepCanonicalFiles };


export const MULTIPAGE_STEPS = [
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
    starterFiles: getFilesForStep(1),
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
    starterFiles: getFilesForStep(2),
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
    starterFiles: getFilesForStep(3),
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
    starterFiles: getFilesForStep(4),
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
    starterFiles: getFilesForStep(5),
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
    starterFiles: getFilesForStep(6),
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
    starterFiles: getFilesForStep(7),
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
    starterFiles: getFilesForStep(8),
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
  },

  {
    id: 'step-9',
    number: 9,
    character: 'bodhi',
    pose: 'scroll',
    speaker: "MAÎTRE BODHI",
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'chroniques.html',
    title: "Fichier chroniques.html & Structure",
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
    starterFiles: getFilesForStep(9),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'chroniques.html',
    title: "Navigation entre les pages avec <nav> & <a>",
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
    starterFiles: getFilesForStep(10),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'chroniques.html',
    title: "Listes à puces <ul> & <li>",
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
    starterFiles: getFilesForStep(11),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'chroniques.html',
    title: "Tableau <table>, <thead>, <tbody>, <tr>, <th> & <td>",
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
    starterFiles: getFilesForStep(12),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'galerie.html',
    title: "Fichier galerie.html & Navigation",
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
    starterFiles: getFilesForStep(13),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'galerie.html',
    title: "Images <img>, <figure> & Légendes <figcaption>",
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
    starterFiles: getFilesForStep(14),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'contact.html',
    title: "Fichier contact.html & Formulaire <form>",
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
    starterFiles: getFilesForStep(15),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'contact.html',
    title: "Champs de saisie <label>, <input type=\"text\"> & <input type=\"email\">",
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
    starterFiles: getFilesForStep(16),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'contact.html',
    title: "Menu déroulant <select>, <option> & Zone de texte <textarea>",
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
    starterFiles: getFilesForStep(17),
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
    act: "Acte II : HTML - Multi-pages, Tableaux & Formulaires",
    targetFile: 'contact.html',
    title: "Bouton d'envoi <button type=\"submit\">",
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
    starterFiles: getFilesForStep(18),
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

  {
    id: 'step-19',
    number: 19,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'index.html',
    title: "Liaison CSS <link rel=\"stylesheet\" href=\"style.css\">",
    proverb: "« Le squelette d'albâtre attend la robe de pourpre et d'or. »",
    mentorSpeech: "Nos 4 pavillons HTML sont solides comme du granit, mais leurs murs sont encore bruts et nus. Nous allons forger le deuxième grand pilier du Web : les Cascading Style Sheets (CSS). La première étape consiste à relier chaque page à la future feuille universelle 'style.css'.",
    riddle: "Ajoute la balise <link rel=\"stylesheet\" href=\"style.css\"> dans le <head> de index.html.",
    secretTip: "Dans le <head> de index.html, ajoute : <link rel=\"stylesheet\" href=\"style.css\">",
    instructions: [
      "Dans index.html, repère le bloc <head>.",
      "Juste après la balise <title>, ajoute la liaison : <link rel=\"stylesheet\" href=\"style.css\">.",
      "Assure-toi que rel=\"stylesheet\" et href=\"style.css\" sont écrits sans faute."
],
    starterFiles: getFilesForStep(19),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Reset CSS universel * & box-sizing: border-box",
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
    starterFiles: getFilesForStep(20),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Sélecteur body, font-family, background & color",
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
    starterFiles: getFilesForStep(21),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Modèle de boîte : padding, margin, border-radius & section",
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
    starterFiles: getFilesForStep(22),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Hiérarchie des titres h1, h2, h3 & letter-spacing",
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
    starterFiles: getFilesForStep(23),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Style des liens nav a, text-decoration & survol :hover",
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
    starterFiles: getFilesForStep(24),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Style des tableaux : border-collapse, th, td & :nth-child",
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
    starterFiles: getFilesForStep(25),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Ombres portées avec box-shadow",
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
    starterFiles: getFilesForStep(26),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Style des formulaires : form, inputs & labels",
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
    starterFiles: getFilesForStep(27),
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
    act: "Acte III : CSS - Fondamentaux & Modèle de Boîte (style.css)",
    targetFile: 'style.css',
    title: "Style des boutons : button, cursor: pointer & :active",
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
    starterFiles: getFilesForStep(28),
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
  },

  {
    id: 'step-29',
    number: 29,
    character: 'bodhi',
    pose: 'code_magic',
    speaker: "MAÎTRE BODHI",
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'style.css',
    title: "Variables CSS :root & Design Tokens",
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
    starterFiles: getFilesForStep(29),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'style.css',
    title: "Menu en Flexbox : display: flex, justify-content & gap",
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
    starterFiles: getFilesForStep(30),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'index.html',
    title: "Composant Hero & Dégradé linear-gradient",
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
    starterFiles: getFilesForStep(31),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'index.html',
    title: "Grille CSS Grid : display: grid & repeat(auto-fit, minmax())",
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
    starterFiles: getFilesForStep(32),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'style.css',
    title: "Galerie d'images en CSS Grid & Images responsives",
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
    starterFiles: getFilesForStep(33),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'chroniques.html',
    title: "Citations <blockquote>, <cite> & Bordure border-left",
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
    starterFiles: getFilesForStep(34),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'style.css',
    title: "Media Queries : @media (max-width: 768px) & Mobile",
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
    starterFiles: getFilesForStep(35),
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
    act: "Acte IV : CSS - Flexbox, Grid & Responsive",
    targetFile: 'style.css',
    title: "Typographie fluide avec la fonction clamp()",
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
    starterFiles: getFilesForStep(36),
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

  {
    id: 'step-37',
    number: 37,
    character: 'bodhi',
    pose: 'zen',
    speaker: "MAÎTRE BODHI",
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Transitions douces avec la propriété transition",
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
    starterFiles: getFilesForStep(37),
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
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Effet de zoom avec overflow: hidden & transform: scale()",
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
    starterFiles: getFilesForStep(38),
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
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Focus des formulaires avec :focus & :focus-within",
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
    starterFiles: getFilesForStep(39),
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
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Animations en boucle avec @keyframes & animation",
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
    starterFiles: getFilesForStep(40),
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
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Navigation fixe avec position: sticky & backdrop-filter",
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
    starterFiles: getFilesForStep(41),
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
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Pseudo-éléments décoratifs ::before & ::after",
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
    starterFiles: getFilesForStep(42),
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
    act: "Acte V : CSS - Animations, Effets & Accessibilité",
    targetFile: 'style.css',
    title: "Accessibilité : :focus-visible & prefers-reduced-motion",
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
    starterFiles: getFilesForStep(43),
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

  {
    id: 'step-44',
    number: 44,
    character: 'ada',
    pose: 'smile',
    speaker: "ADA (INGÉNIEURE RUNTIME)",
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'script.js',
    title: "Fichier script.js, balise <script defer> & console.log",
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
    starterFiles: getFilesForStep(44),
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
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'script.js',
    title: "Sélection du DOM avec document.querySelector & querySelectorAll",
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
    starterFiles: getFilesForStep(45),
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
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'script.js',
    title: "Gestion des événements avec addEventListener & click",
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
    starterFiles: getFilesForStep(46),
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
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'script.js',
    title: "Bascule de classes CSS avec element.classList.toggle()",
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
    starterFiles: getFilesForStep(47),
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
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'script.js',
    title: "Création d'éléments dans le DOM avec createElement & appendChild",
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
    starterFiles: getFilesForStep(48),
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
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'script.js',
    title: "Persistance des données avec localStorage & JSON.stringify",
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
    starterFiles: getFilesForStep(49),
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
    act: "Acte VI : JavaScript - DOM, Événements & LocalStorage (script.js)",
    targetFile: 'index.html',
    title: "Projet complet : Intégration HTML, CSS & JavaScript",
    proverb: "« Le code n'est plus une simple suite de caractères ; il est la conscience vivante de l'humanité connectée. »",
    mentorSpeech: "Regarde ton œuvre, Grand Architecte ! Les 4 pavillons HTML tiennent debout avec une sémantique irréprochable. La feuille CSS drape chaque mur d'or, d'ombre et de verre dépoli. Et le JavaScript fait pulser l'âme du Sanctuaire chez chaque voyageur de la Terre. NULL lui-même a inspecté le réseau : les protocoles sont parfaits, le serveur peut s'éteindre en paix car le Sanctuaire est devenu immortel !",
    riddle: "Valide ton chef-d'œuvre complet pour sceller ton titre de Grand Architecte du Web !",
    secretTip: "Vérifie que index.html, chroniques.html, galerie.html, contact.html, style.css et script.js sont tous intacts et exempts d'erreurs, puis clique sur 'Vérifier mon code' !",
    instructions: [
      "Vérifie que les 4 fichiers HTML (index.html, chroniques.html, galerie.html, contact.html) possèdent bien leurs liaisons link et script.",
      "Vérifie que style.css contient les règles universelles et que script.js ancre la mémoire.",
      "Clique sur 'Vérifier mon code' pour déclencher l'ultime consécration et débloquer ta fin spirituelle !"
],
    starterFiles: getFilesForStep(50),
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
  },

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

// Compatibilité descendante
export const CONTINUOUS_STEPS = MULTIPAGE_STEPS;
