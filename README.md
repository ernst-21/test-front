# Test Front-end Evaneos

## Page Itinéraire
Notre site présente une liste d'itinéraires à nos voyageurs. Un itinéraire comporte un nom, une image, une destination, un tag (voyage en groupe ou multi-destination), un prix ainsi qu'une durée de voyage.

Nous avons commencé à implémenter cette page avec des données statiques et nous souhaiterions désormais récupérer les vraies données depuis une API.

## Installation et commandes (no CORS)

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

## * En cas de CORS

En cas de CORS après le request sur l'endpoint donné vous pouvez essayer avec JSON-server.

```npm i json-server```

Une fois json-server a été installé le commande vous servira pour connecter avec le server et connecter avec la base de donnés;

``json-server --watch db.json --port 3001``

Si jamais vous voulez simuler un delay vous pouvez essayer et émuler le loading state de votre application.

``json-server --watch db.json --port 3001 --delay 1000``

Nous souhaitons mettre en avant certains itinéraires. Ils sont représentés par la propriété "highlight" renvoyée par l'API. Le designer nous a également joint une maquette pour l'intégration.
`<insérer image maquette>`

Afin d'améliorer l'expérience utilisateur, nous souhaitons également pouvoir filtrer les itinéraires par leur tag.

## Instructions et conseils
- Nous nous attendons à ce que le code soit testé
- Faites des petits commits
- Le test a été prévu pour ne pas être trop long (~ 1 heure) mais il n'y a pas de limite de temps

