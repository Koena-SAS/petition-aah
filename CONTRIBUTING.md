# Contribution

Toutes les contributions sont les bienvenues, que ce soit des reportings de bugs, des demandes d'amélioration, ou des contributions de code.

## Contributions de code

### Installation locale

#### Prérequis

Pour installer le projet, il faut disposer d'une version installée de [Node.js](https://nodejs.org/fr/) et de [Yarn](https://yarnpkg.com/).

Sous ubuntu on peut installer Node.js 14 par exemple avec les commandes suivantes :

(cf. [la documentation d'ubuntu](https://doc.ubuntu-fr.org/nodejs#depuis_un_personal_package_archives_ppa_depots_officiels_nodesource))

```bash
wget -qO- https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs
```

Et on peut installer yarn avec npm :

```bash
sudo npm install -g yarn
```

#### Installation du projet

Par la suite l'installation du projet et le serveur de développement se font avec les commandes suivantes :

```bash
yarn
yarn dev
```

La page est alors disponible avec le navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

### Organisation des fichiers

- Les fichiers statiques (images, fonts etc.) sont placés dans `public/`
- Les fichiers définissant un composant de page avec une URL spécifiques sont placés dans `pages/`. Tous les fichiers qui y sont, sauf ceux commençant paar `_`, seront utilisées par le router de Next.js pour créer une route.
- Les autres composants javascript qui ne définissent pas une page vont dans `components/`
- Les fichiers SASS sont placés dans `styles/`, on utilise les modules pour profiter du découpage des fichiers CSS, et ne charger au départ que ceux qui sont nécessaires à l'affichage de la première page.
- Les fichiers de tests sont placés dans `tests/` et nommés en fonction du fichier des composants testés : `nom_du_composant.test.js`.

### Outils qualité de code

Avant de soumettre votre contribution, veillez à ce que le code reste de bonne qualité en utilisant les outils inclus.

Ce projet utilise [eslint](https://eslint.org/) pour la qualité du code javascript. Pour vérifier que les règles de lint sont respectées vous pouvez utiliser la commande :

```bash
yarn lint
```

Le code javascript est mis en forme avec [prettier](https://prettier.io/). Vous pouvez vérifier que votre code respecte les règles, puis appliquer le formattage respectivement avec les commandes suivantes :

```bash
yarn format:check
yarn format
```

### Outils de test

Lorsque vous ajoutez des fonctionnalités, veillez à ce que celles-ci soient testées avec des tests unitaires. Ce projet utilise [jest](https://jestjs.io/) et [react testing library](https://testing-library.com/docs/react-testing-library/intro/).

Les tests peuvent être lancés avec :

```bash
yarn test
```

### Documentation

Si vous introduisez une nouvelle foncitonnalité, ou si vous modifiez une fonctionnalité existante, veillez à ce que la documentation reste à jour, notamment à travers les docstrings.

### Commits

Dans la mesure du possible veillez à utiliser les [commits conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/).

### Pull request

Vous pouvez créer une pull request à partir de votre branche de développement à n'importe quel moment, ce qui permettra de lancer les tests et le lint du code sur Github Actions à chaque changement sur la branche.

N'hésitez pas à demander une review une fois que votre modification vous semble suffisamment avancée. Mieux vaut avoir du feedback rapidement qu'attendre d'avoir quelque chose de parfait à remodifier.
