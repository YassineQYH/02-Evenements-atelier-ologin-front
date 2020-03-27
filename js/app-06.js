// Fonction qui permet de supprimer un evenement.

/* 
    var p = document.querySelector('p')
    p.addEventListener('click', function(e) {
        e.preventDefault()
    }) 
*/


                                                        // 1er parametre : l'evenement qu'on veut supprimer 
                                                        // 2eme parametre : le listener
/* p.removeEventListener('click' function(e) {          le 2eme parametre ne fonctionnera pas car on a mis le listener directement dans une fonction 
                                                                    et il ne fera pas le rapprochenement entre les 2 fonctions qui sont les même
                                                                    Il faut donc sauvegarder la fonction dans une variable.
    e.preventDefault()
} ) */      

var p = document.querySelector('p')
var onClick = function(e) {
    this.classList.add('red')
    console.log('rouge');
    
    e.preventDefault()
    p.removeEventListener('click', onClick) // Si on met ceci en commentaire on remarquera que à chaque clique sur le p l'event est relancé. ( on le voit dans la console log à chaque clique) // Ceci supprimera donc l'écouteur sur le p à la fin de la fonction.
}
p.addEventListener('click', onClick ) 

/* p.removeEventListener('click', onClick) */

