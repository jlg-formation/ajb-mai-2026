# Gestion de stock

Application de démonstration pour gérer un petit stock d'articles.

Le projet est composé de deux applications distinctes :

- `front/` : interface web en React, Vite et TypeScript
- `back/` : API HTTP en Express et TypeScript

Fonctionnalités disponibles :

- afficher la liste des articles
- ajouter un article
- supprimer un ou plusieurs articles
- rafraîchir la liste

## Prérequis

Avant de lancer le projet, installez les outils suivants :

- Node.js
- Bun

Versions recommandées dans le projet :

- Node.js `26.2.0`
- Bun `1.3.13`

Ces versions sont indiquées dans `back/mise.toml`. Si vous utilisez un autre gestionnaire de versions, prenez des versions équivalentes ou plus récentes si elles restent compatibles.

## Structure du projet

```text
gestion-stock/
|- back/   API Express exposée sur http://localhost:3000
|- front/  Application web Vite exposée en local par le serveur de dev
```

## Installation

Ouvrez un terminal à la racine du projet, puis installez les dépendances de chaque partie.

### Backend

```powershell
cd back
bun install
```

### Frontend

```powershell
cd front
bun install
```

## Lancement en développement

Le projet se lance avec deux terminaux ouverts en parallèle.

### 1. Démarrer l'API

Depuis le dossier `back/` :

```powershell
cd back
bun run start
```

L'API démarre sur :

- `http://localhost:3000`

Routes principales :

- `GET /api/articles`
- `POST /api/articles`
- `DELETE /api/articles`

### 2. Démarrer l'interface web

Depuis le dossier `front/` :

```powershell
cd front
bun run dev
```

Vite affiche ensuite dans le terminal l'URL locale de l'application, en général :

- `http://localhost:5173`

Le frontend appelle automatiquement l'API via le proxy Vite sur `/api`, à condition que le backend tourne bien sur le port `3000`.

## Utilisation

Une fois les deux serveurs démarrés :

1. ouvrez l'application dans le navigateur
2. cliquez sur `Voir le stock`
3. ajoutez un article avec le bouton `+`
4. sélectionnez une ou plusieurs lignes pour les supprimer
5. utilisez le bouton de rafraîchissement si nécessaire

## Commandes utiles

### Backend

```powershell
cd back
bun run start
bun run check
```

### Frontend

```powershell
cd front
bun run dev
bun run build
bun run lint
bun run preview
```

## Points importants à connaître

- Les données du stock sont stockées en mémoire dans le backend.
- Il n'y a pas de base de données.
- Si vous arrêtez le serveur backend, les articles ajoutés sont perdus.
- L'API est fournie avec quelques articles de démonstration au démarrage.
- La page `Mentions légales` contient encore du texte de remplissage.

## Dépannage

### Le frontend ne charge pas les articles

Vérifiez que le backend est bien lancé sur `http://localhost:3000`.

### Le lancement du backend échoue avec une erreur sur `bun`

Installez Bun puis relancez la commande :

```powershell
bun --version
```

### Un port est déjà utilisé

Fermez le processus qui occupe le port, ou relancez l'application concernée sur un autre port en adaptant la configuration.

## Build de production

Le frontend peut être compilé avec :

```powershell
cd front
bun run build
```

Le backend ne contient pas encore de procédure de déploiement de production complète ni de persistance de données. Dans l'état actuel, le projet est surtout prévu pour un usage local, de démonstration ou d'apprentissage.
