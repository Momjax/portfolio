# Portfolio BTS SIO SLAM

Un portfolio moderne et responsive pour étudiant en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers).

## Structure des fichiers

```
portfolio-bts-sio/
├── index.html                 # Page d'accueil principale
├── veille-technologique.html  # Page de veille technologique
├── css/
│   ├── wii.css               # Styles pour la page d'accueil
│   └── style2.css            # Styles pour la page veille tech
├── js/
│   ├── main.js               # JavaScript principal
│   └── menu.js               # Gestion du menu burger
└── README.md                 # Ce fichier
```

## Fonctionnalités

### Page d'accueil (index.html)
- **Header animé** : Grande section d'en-tête qui se réduit au clic
- **Profil étudiant** : Présentation avec avatar et informations
- **Sections détaillées** :
  - À propos de moi
  - Compétences techniques (Frontend, Backend, Outils)
  - Présentation du BTS SIO SLAM
  - Formulaire de contact
- **Animations fluides** : Transitions CSS et JavaScript

### Page de veille technologique (veille-technologique.html)
- **Technologies présentées** :
  - React.js
  - Vue.js
  - Angular
  - Intelligence Artificielle
- **Cartes interactives** avec effets de survol
- **Navigation spécialisée** pour la veille tech
- **Formulaire de contact** adapté aux technologies

### Fonctionnalités communes
- **Menu burger responsive** pour mobile
- **Thème sombre moderne** avec variables CSS
- **Navigation fluide** avec scroll smooth
- **Design Bootstrap 5** avec customisation
- **Compatible mobile** et desktop

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Animations et responsive design
- **JavaScript** : Interactions et animations
- **Bootstrap 5** : Framework CSS responsive
- **Font Awesome** : Icônes
- **Google Fonts** : Typographie (Poppins)

## Installation et utilisation

1. **Téléchargez** tous les fichiers
2. **Conservez** la structure des dossiers
3. **Ouvrez** `index.html` dans votre navigateur
4. **Naviguez** entre les pages via le menu

## Personnalisation

### Modifier les couleurs
Dans `css/wii.css` et `css/style2.css`, modifiez les variables CSS :
```css
:root {
    --primary-bg: #121212;
    --secondary-bg: #1e1e1e;
    --accent-blue: #007bff;
    /* ... autres couleurs */
}
```

### Ajouter du contenu
- **Textes** : Modifiez directement dans les fichiers HTML
- **Images** : Ajoutez vos images et mettez à jour les liens
- **CV** : Remplacez le lien `#` par votre fichier PDF

### Formulaires de contact
Remplacez `YOUR_FORM_ID` par votre ID Formspree :
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Compatibilité

- **Navigateurs modernes** (Chrome, Firefox, Safari, Edge)
- **Responsive** : Mobile, tablette, desktop
- **Performance optimisée** avec CSS et JS minifiés
- **Accessibilité** respectée

## Support

Ce portfolio est conçu pour être simple à utiliser et à personnaliser. Tous les fichiers sont commentés pour faciliter les modifications.