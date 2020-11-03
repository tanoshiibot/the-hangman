# the-hangman
Exercice BeCode : réalisation d'un pendu en js.
*Olivia Fantinel* 

## Comment jouer ?

Vous pouvez jouer à la version HTML du jeu [ici](https://tanoshiibot.github.io/the-hangman/). Cependant, cette version ne servait que de débug avant de me lancer sur la version pour bot Discord. Pour le lancer, intégrez le code à votre bot (vous aurez besoin de discord.js).

**index.html**/**script.js**/**style.css** et le dossier **img** concernent la version HTML.
**main.js**/**hangman.js** concernent la version pour bot Discord.

### Jouer au pendu sur Discord :

* Pour démarrer le pendu, écrivez `>pendu start`. Le bot va générer un pendu. Utilisez également cette commande pour redémarrer une partie. 
![Screenshot: >pendu start](/screenshots/start.png)

* Écrivez ensuite `>pendu [votre proposition de lettre]` pour proposer une lettre. Le dessin du pendu va se continuer si le mot ne contient pas la lettre, et placera la lettre dans les cases correspondantes si elle s'y trouve.
![Screenshot: >pendu [proposition de lettre]](./screenshots/pendu.png)
*(Si vous écrivez un nombre, une suite de lettre ou un caractère spécial, vous gâchez une vie. Les mots sont normalisés et ne contiennent pas d'accent ou d'espace.)*

* La partie se termine si le dessin du pendu se complète (perdu) ou si vous avez trouvé toutes les lettres (gagné). Vous devez refaire `>pendu start` pour relancer une partie.
![Screenshot: gagné](/screenshots/perdu.png)
![Screenshot: perdu](/screenshots/won.png)


## Difficultés rencontrées

J'ai pu utiliser ce projet pour apprendre les Regex. Il s'agit d'un outil très puissant, et je me rends compte qu'il résoud beaucoup de problèmes que j'ai déjà rencontré auparavant. 

J'ai essayé de mettre la liste de mots sur mon serveur et de la récupérer depuis mon serveur, mais je n'ai pas réussi à temps... 

## Améliorations possibles

Le pendu est "prêt" à recevoir et trier une liste de mots bien plus complète que la lsite actuelle. Cependant, il faut que j'apprenne à accder à cette liste de mot autrement qu'en local ou sur la RAM, car cette liste est gigantesque. 

J'aurais également aimé qu'on puisse choisir l'émoji pendu, mais ce n'était pas ma priorité. Je le rajouterai peut-être car c'est assez simple à rajouter.