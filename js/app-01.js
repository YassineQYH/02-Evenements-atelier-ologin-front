// Objectif : rendre le 1er paragraphe rouge.

// Sélectionné notre élément
var p = document.querySelector('p')

var rougit = function () {
    p.classList.add('red') // Attention, ici le red est une classe que j'ai nommé dans le fichier CSS
}             //toggle : à la place de : add : pour agir quand je clique une fois et remet la couleur de base au second clique

// Dire quand je clique : avec la méthode addEventListener, elle prend 2 parametre 
                    //    1er parametre = le nom de l'evenement que l'ont veut écouter. ( on veut écouter un clique)
                    //    2eme parametre = la fonction que l'on souhaite éxecuter lorsque l'évenement va se dérouler. ici : function rougit créer séparemment.
                    
p.addEventListener('click', rougit)



