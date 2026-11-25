# 🎨 Color Scheme Generator

Un générateur de palettes de couleurs simple et élégant. Choisis une couleur de base et un mode d'harmonie : l'application génère une palette de 5 couleurs grâce à [The Color API](https://www.thecolorapi.com/). Un clic sur une couleur copie son code hexadécimal dans le presse-papiers.

<!-- Ajoute une capture d'écran ici -->
<!-- ![Aperçu de l'application](./screenshot.png) -->

<!-- 🔗 **Démo en ligne :** [https://ton-lien-de-demo.com](https://ton-lien-de-demo.com) -->

---

## ✨ Fonctionnalités

- **Sélecteur de couleur** natif pour choisir la couleur de base
- **7 modes d'harmonie** :
  - Triad
  - Monochrome
  - Monochrome-dark
  - Monochrome-light
  - Analogic
  - Analogic-complement
  - Complement
- **Palette de 5 couleurs** générée à chaque requête
- **Copie en un clic** : clique sur une couleur ou sur son code hex pour le copier
- **Retour visuel** : le texte affiche « Copied! » pendant 3 secondes après la copie
- **Palette par défaut** affichée dès le chargement de la page
- **Menu déroulant personnalisé** grâce à `appearance: base-select` (CSS moderne)
- **Effet de survol** animé sur chaque couleur

---

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| **HTML5** | Structure de la page et formulaire |
| **CSS3** | Mise en page Flexbox, variables CSS, `select` personnalisable, animations |
| **JavaScript (ES6+)** | Modules ES, `async/await`, Fetch API, FormData, Clipboard API |
| **[The Color API](https://www.thecolorapi.com/)** | Génération des palettes de couleurs |
| **Google Fonts** | Police *Inter* |

---

## 📁 Structure du projet

```
color-generator/
├── index.html    # Structure de la page
├── styles.css    # Styles et thème sombre
├── index.js      # Logique : appel API, rendu, copie
└── README.md
```

---

## 🚀 Installation et lancement

1. **Clone le dépôt**

   ```bash
   git clone https://github.com/<ton-utilisateur>/color-generator.git
   cd color-generator
   ```

2. **Lance un serveur local**

   Le script est chargé en tant que module (`type="module"`) et la copie utilise la Clipboard API : ouvrir `index.html` directement depuis le disque (`file://`) peut donc ne pas fonctionner. Utilise plutôt un serveur local :

   - Avec l'extension **Live Server** de VS Code : clic droit sur `index.html` → *Open with Live Server*
   - Ou avec Node.js :

     ```bash
     npx serve .
     ```

   - Ou avec Python :

     ```bash
     python -m http.server 8000
     ```

3. **Ouvre ton navigateur** sur l'adresse indiquée (par exemple `http://localhost:8000`).

---

## 🧑‍💻 Utilisation

1. Choisis une couleur de base avec le sélecteur de couleur.
2. Sélectionne un mode d'harmonie dans le menu déroulant.
3. Clique sur **Get color scheme**.
4. Clique sur une couleur (ou sur son code) pour copier son code hex.

---

## ⚙️ Fonctionnement

Lors de l'envoi du formulaire, l'application interroge l'endpoint `/scheme` de The Color API :

```
https://www.thecolorapi.com/scheme?hex=12D10E&mode=triad&count=5
```

| Paramètre | Description |
|---|---|
| `hex` | Couleur de base, sans le `#` |
| `mode` | Mode d'harmonie choisi |
| `count` | Nombre de couleurs à générer (5) |

La réponse JSON contient un tableau `colors` ; le code hex de chaque couleur (`color.hex.value`) est récupéré puis affiché dans la page.

La copie fonctionne grâce à un seul écouteur `click` sur le `document` (délégation d'événements) : tout élément possédant un attribut `data-color` déclenche la copie via `navigator.clipboard.writeText()`.

---

## 🌐 Compatibilité navigateurs

- L'application fonctionne sur tous les navigateurs modernes.
- Le **style personnalisé du menu déroulant** (`appearance: base-select`, `::picker(select)`, `::picker-icon`) n'est pris en charge que par les navigateurs récents basés sur Chromium. Sur les autres navigateurs, le `select` garde son apparence native, sans perte de fonctionnalité.
- La **Clipboard API** nécessite un contexte sécurisé (`https://` ou `localhost`).

---

## 🔮 Améliorations possibles

- Gérer les erreurs réseau ou API (message à l'utilisateur)
- Ajouter un indicateur de chargement pendant la requête
- Permettre de choisir le nombre de couleurs
- Afficher d'autres formats (RGB, HSL) et le nom de chaque couleur
- Sauvegarder les palettes favorites (localStorage)
- Exporter une palette (CSS, JSON, image)

---

## 👤 Auteur

**Christian Mbolanantenaina**

<!-- - GitHub : [@ton-utilisateur](https://github.com/ton-utilisateur) -->
<!-- - LinkedIn : [ton profil](https://www.linkedin.com/in/ton-profil) -->

---

## 🙏 Remerciements

- [The Color API](https://www.thecolorapi.com/) pour la génération des palettes
- [Google Fonts](https://fonts.google.com/) pour la police Inter