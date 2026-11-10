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
  else files['index.html'] = INDEX_S44; // 44..50

  // CHRONIQUES.HTML
  if (stepNum === 9) files['chroniques.html'] = CHRONIQUES_S9;
  else if (stepNum === 10) files['chroniques.html'] = CHRONIQUES_S10;
  else if (stepNum === 11) files['chroniques.html'] = CHRONIQUES_S11;
  else if (stepNum >= 12 && stepNum <= 18) files['chroniques.html'] = CHRONIQUES_S12;
  else if (stepNum >= 19 && stepNum <= 33) files['chroniques.html'] = CHRONIQUES_S19;
  else if (stepNum >= 34) files['chroniques.html'] = CHRONIQUES_S34;

  // GALERIE.HTML
  if (stepNum === 13) files['galerie.html'] = GALERIE_S13;
  else if (stepNum >= 14 && stepNum <= 18) files['galerie.html'] = GALERIE_S14;
  else if (stepNum >= 19) files['galerie.html'] = GALERIE_S19;

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

  return files;
}

module.exports = {
  getFilesForStep
};
