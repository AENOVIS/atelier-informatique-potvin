# Atelier Informatique Potvin

Site vitrine moderne pour atelier informatique avec React/Node. Intégration Crisp et structure frontend prête à l'emploi.

## 📋 Description

Ce dépôt contient le code source d'un site vitrine moderne conçu pour présenter les services d'un atelier informatique. Le projet est structuré avec une architecture frontend moderne utilisant React.

## 🏗️ Structure du Projet

```
atelier-informatique-potvin/
├── frontend/                  # Application React
│   ├── public/               # Fichiers statiques
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── images/           # Images et assets
│   │       └── profile/      # Photo de profil utilisateur
│   ├── src/
│   │   ├── components/       # Composants React réutilisables
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── utils/            # Fonctions utilitaires
│   │   │   └── crisp.js      # Configuration Crisp
│   │   ├── styles/           # Fichiers CSS/SCSS
│   │   │   ├── main.css
│   │   │   └── variables.css
│   │   ├── App.jsx           # Composant principal
│   │   ├── main.jsx          # Point d'entrée
│   │   └── config.js         # Configuration générale
│   ├── package.json
│   └── vite.config.js        # Configuration Vite
├── .gitignore
└── README.md
```

## 🚀 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le dépôt
git clone https://github.com/AENOVIS/atelier-informatique-potvin.git
cd atelier-informatique-potvin

# Installer les dépendances frontend
cd frontend
npm install

# Lancer le serveur de développement
npm run dev
```

## 💬 Intégration Crisp Chat

### Configuration

1. **Créer un compte Crisp** sur [crisp.chat](https://crisp.chat)
2. **Obtenir votre ID de site web** depuis le tableau de bord Crisp
3. **Configurer l'ID dans le projet** :

```javascript
// frontend/src/utils/crisp.js
export const initCrisp = () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "VOTRE_ID_CRISP_ICI";
  
  const script = document.createElement("script");
  script.src = "https://client.crisp.chat/l.js";
  script.async = true;
  document.getElementsByTagName("head")[0].appendChild(script);
};
```

4. **Appeler la fonction** dans votre composant principal (App.jsx) :

```javascript
import { useEffect } from 'react';
import { initCrisp } from './utils/crisp';

function App() {
  useEffect(() => {
    initCrisp();
  }, []);
  
  return (
    // Votre application
  );
}
```

### Personnalisation Crisp

- **Couleur du widget** : Configurable depuis le tableau de bord Crisp
- **Messages automatiques** : Définir des réponses automatiques
- **Disponibilité** : Gérer les horaires de disponibilité

## 📸 Photo de Profil Utilisateur

### Intégration de la photo

1. **Ajouter votre photo** dans le dossier : `frontend/public/images/profile/`
   - Format recommandé : JPG ou PNG
   - Nom suggéré : `profile.jpg` ou `user-photo.jpg`
   - Dimensions optimales : 500x500px (format carré)
   - Taille maximale : 500 Ko

2. **Utiliser la photo dans les composants** :

```jsx
// Exemple dans About.jsx ou Hero.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <img 
        src="/images/profile/profile.jpg" 
        alt="Atelier Informatique Potvin"
        className="profile-image"
      />
      <h2>À propos de nous</h2>
      <p>Votre contenu ici...</p>
    </div>
  );
};

export default About;
```

3. **Optimisation de l'image** :
   - Compresser l'image avec des outils comme [TinyPNG](https://tinypng.com)
   - Utiliser le format WebP pour de meilleures performances
   - Prévoir des versions responsive (différentes tailles)

## 🎨 Technologies Utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool moderne et rapide
- **Crisp Chat** - Solution de chat en direct
- **CSS3** - Styling moderne et responsive

## 📦 Commandes NPM

```bash
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Crée une version optimisée pour la production
npm run preview      # Prévisualise la version de production

# Linting
npm run lint         # Vérifie le code avec ESLint
```

## 🌐 Déploiement

### Options de déploiement recommandées

1. **Vercel** (Recommandé pour React)
   ```bash
   npm install -g vercel
   cd frontend
   vercel
   ```

2. **Netlify**
   - Connecter le dépôt GitHub
   - Build command : `npm run build`
   - Publish directory : `frontend/dist`

3. **GitHub Pages**
   ```bash
   npm run build
   # Déployer le contenu du dossier dist
   ```

## 📝 Configuration Personnalisée

### Variables d'environnement

Créer un fichier `.env` dans le dossier `frontend/` :

```env
VITE_CRISP_WEBSITE_ID=votre_id_crisp
VITE_SITE_NAME="Atelier Informatique Potvin"
VITE_CONTACT_EMAIL=contact@exemple.com
VITE_CONTACT_PHONE="+33 X XX XX XX XX"
```

### Personnalisation des couleurs

Modifier le fichier `frontend/src/styles/variables.css` :

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #28a745;
  --text-color: #333333;
  --background-color: #ffffff;
}
```

## 🔧 Maintenance et Mises à Jour

```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit
npm audit fix
```

## 📞 Support et Contact

Pour toute question ou problème technique :
- Ouvrir une issue sur GitHub
- Contacter via le chat Crisp intégré au site

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🎯 Prochaines Étapes

1. ✅ Initialiser le dépôt avec README et .gitignore
2. ⏳ Créer la structure frontend
3. ⏳ Configurer Vite et React
4. ⏳ Ajouter les composants de base
5. ⏳ Intégrer Crisp Chat
6. ⏳ Ajouter la photo de profil
7. ⏳ Déployer en production

---

**Développé avec ❤️ pour Atelier Informatique Potvin**
