# Signez pour notre autonomie

Il s'agit du code source d'une page ayant pour but de diffuser la [pétition pour la _Désolidarisation des revenus du conjoint pour le paiement de l'Allocation aux Adultes Handicapés (AAH)_ sur le site du sénat](https://petitions.senat.fr/initiatives/i-416).

Le projet est fait avec [Next.js](https://nextjs.org/). La page générée est entièrement statique et peut donc être hébergée sur n'improrte quel serveur web.

## Contribuer

Les instructions pour contribuer sont dans le fichier [CONTRIBUTING.md](CONTRIBUTING.md).

Si vous voulez modifier le texte visible sur la page ce sera probablement dans [pages/index.js](pages/index.js). Le HTML est en fait du [JSX](https://fr.reactjs.org/docs/introducing-jsx.html).

## Lancer le projet en local

Une fois re dépôt cloné, il vous faudra avoir [Node.js](https://nodejs.org/fr/) (de préférence au moins la version 14) et [Yarn](https://yarnpkg.com/).

Vous pouvez alors lancer le serveur de développement avec :

```bash
yarn dev
```

La page sera alors disponible à l'adresse [http://localhost:3000](http://localhost:3000) avec votre navigateur.

### Déploiement

Le déploiement des fichiers statiques se fait via la commande :

```bash
yarn build
```

Les fichiers statiques sont alors générés dans le dossier `out/`.

## Licence

Ce projet est sous licence AGPL. Le texte de la licence est dans le fichier [LICENCE](LICENCE)
