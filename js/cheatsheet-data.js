// =============================================================================
// LE GRAND GRIMOIRE DE MAÎTRE BODHI — AIDE-MÉMOIRE SYNTAXE HTML & CSS
// =============================================================================

export const CHEATSHEET = [
  {
    category: "HTML : Les Balises Sémantiques Fondamentales",
    rules: [
      { name: "Squelette HTML5", code: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Titre</title>\n</head>\n<body>...</body>\n</html>", desc: "La structure universelle obligatoire de tout document web moderne." },
      { name: "Titres hiérarchiques", code: "<h1>Titre Majeur</h1>\n<h2>Sous-titre</h2>\n<h3>Section</h3>", desc: "Hiérarchie de 1 à 6. Un seul <h1> par page pour le SEO et l'accessibilité." },
      { name: "Paragraphe de texte", code: "<p>Un paragraphe fluide...</p>", desc: "Bloc de texte standard avec saut de ligne automatique." },
      { name: "Liens hypertextes", code: "<a href=\"#cible\">Lien ancre</a>\n<a href=\"https://...\" target=\"_blank\" rel=\"noopener\">Externe</a>", desc: "Passerelle vers une ancre de la page ou un site externe." },
      { name: "Images accessibles", code: "<figure>\n  <img src=\"image.jpg\" alt=\"Description précise\">\n  <figcaption>Légende de l'œuvre</figcaption>\n</figure>", desc: "L'attribut alt est obligatoire pour les lecteurs d'écran." },
      { name: "Listes à puces", code: "<ul>\n  <li>Premier point</li>\n  <li>Deuxième point</li>\n</ul>", desc: "Liste non-ordonnée. Remplacer par <ol> pour une liste numérotée." },
      { name: "Formulaire complet", code: "<form action=\"#\" method=\"post\">\n  <label for=\"pseudo\">Nom :</label>\n  <input type=\"text\" id=\"pseudo\" required>\n  <button type=\"submit\">Envoyer</button>\n</form>", desc: "Toujours lier label for avec input id pour l'accessibilité." }
    ]
  },
  {
    category: "CSS : Couleurs, Typographie & Cascade",
    rules: [
      { name: "Typographie système", code: "body {\n  font-family: system-ui, -apple-system, sans-serif;\n  line-height: 1.6;\n}", desc: "Police native rapide et confortable sur tous les appareils." },
      { name: "Couleurs et contrastes", code: "background-color: #0f172a;\ncolor: #f8fafc;", desc: "Toujours maintenir un contraste élevé entre fond et texte." },
      { name: "Suppression du soulignement", code: "nav a {\n  text-decoration: none;\n  color: #38bdf8;\n}", desc: "Retire le trait bleu par défaut des liens du navigateur." },
      { name: "Survol interactif (:hover)", code: "a:hover, button:hover {\n  color: #f59e0b;\n  transform: translateY(-2px);\n}", desc: "Pseudo-classe qui réagit lorsque la souris passe sur l'élément." }
    ]
  },
  {
    category: "CSS : Le Modèle de Boîte (Box Model)",
    rules: [
      { name: "Box-Sizing Universel", code: "* {\n  box-sizing: border-box;\n}", desc: "Garantit que le padding et les bordures ne déforment pas la largeur." },
      { name: "Espacement intérieur (Padding)", code: "padding: 24px 32px;", desc: "Le souffle intérieur : haut/bas puis gauche/droite." },
      { name: "Marges et centrage (Margin)", code: "margin: 20px auto;\nmax-width: 800px;", desc: "La valeur 'auto' à gauche et à droite centre horizontalement le bloc." },
      { name: "Bordures et arrondis", code: "border: 1px solid #334155;\nborder-radius: 12px;", desc: "Adoucit les angles des cartes pour un aspect moderne." },
      { name: "Ombres portées (Box-Shadow)", code: "box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);", desc: "Donne du relief et de la profondeur aux cartes et boutons." }
    ]
  },
  {
    category: "CSS : Flexbox (Alignement Unidimensionnel)",
    rules: [
      { name: "Activer Flexbox", code: "display: flex;", desc: "Transforme les enfants directs en éléments flexibles sur une rangée." },
      { name: "Espacement moderne (gap)", code: "gap: 16px;", desc: "Définit l'espace entre chaque élément sans marge superflue." },
      { name: "Alignement axe principal", code: "justify-content: center | space-between | flex-start;", desc: "Répartit les éléments le long de la rangée." },
      { name: "Alignement perpendiculaire", code: "align-items: center | stretch;", desc: "Aligne verticalement les éléments sur leur rangée." }
    ]
  },
  {
    category: "CSS : Grid & Responsive Design",
    rules: [
      { name: "Activer CSS Grid", code: "display: grid;\ngap: 14px;", desc: "Disposition bidimensionnelle puissante pour formulaires et galeries." },
      { name: "Colonnes responsives automatiques", code: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));", desc: "Calcule automatiquement le nombre de colonnes selon l'écran." },
      { name: "Media Query Mobile", code: "@media (max-width: 768px) {\n  nav {\n    flex-direction: column;\n  }\n}", desc: "S'applique uniquement quand la largeur de l'écran est inférieure à 768px." }
    ]
  }
];
