# Test Front-end Evaneos

## Page Itinéraire
Notre site présente une liste d'itinéraires à nos voyageurs. Un itinéraire comporte un nom, une image, une destination, un tag (voyage en groupe ou multi-destination), un prix ainsi qu'une durée de voyage.

Nous avons commencé à implémenter cette page avec des données statiques et nous souhaiterions désormais récupérer les vraies données depuis une API.

## Installation et commandes

Deux options possibles :
- (recommandé) soit en utilisant les commandes `Make` qui s'appuient sur [Docker](https://docs.docker.com/get-docker/)
- soit manuellement avec les scripts `npm`

## Docker + Make

Pour installer les dépendances :

```make install```

Pour lancer le projet :

```make start ```

Pour lancer les tests :

```make test```

## Manuellement

Pour installer les dépendances :

```npm install```

Pour lancer le projet :

```npm start ```

Pour lancer les tests :

```npm test```

## Ce qu'il faut faire
En repartant de cette base, remplacez les données statiques par celles de l'API. Les données se récupèrent en GET sur l'endpoint suivant : `<insérer endpoint>`

Nous souhaitons mettre en avant certains itinéraires. Ils sont représentés par la propriété "highlight" renvoyée par l'API. Le designer nous a également joint une maquette pour l'intégration.
`<insérer image maquette>`

Afin d'améliorer l'expérience utilisateur, nous souhaitons également pouvoir filtrer les itinéraires par leur tag.

## Instructions et conseils
- Nous nous attendons à ce que le code soit testé
- Faites des petits commits
- Le test a été prévu pour ne pas être trop long (~ 1 heure) mais il n'y a pas de limite de temps

