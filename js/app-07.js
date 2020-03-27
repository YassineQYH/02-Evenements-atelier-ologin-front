// Champs et formulaires

/* ------------------------------------------------------------------------------------------- */
/* Je mets une confition sur mon champ à remplir :: Ici je n'accepte que la lettre A */
document.querySelector('#field-username').addEventListener('keydown', function (e){ // Change :: ne veut pas dire dés qu'on change mais dés qu'on quitte le champ une fois qu'il a été changé. // keyup :: lance l'evenement directement lorsqu'on appuie sur une touche. nous donne le :: keycode pour savoir qu'elle touche à été appuyer.
    console.log(e)
    /* console.log(string.fromCharCode(e.keyCode)) */ // Je l'ai mis en commentaire car je me rend compte car sans ceci la console nous affiche quand même la touche du keycode ( surement du à une nouvelle maj qui permet de l'afficher sans ceci ?)
    var lettre = String.fromCharCode(e.keyCode)
    if (lettre !="A"){          // Permet de ne pas pouvoir accepter le cliquer sur une autre touche que a !
        e.preventDefault()
    }
}) 


/* ------------------------------------------------------------------------------------------- */
/* Je veux mettre une condition sur mon champ à remplir :: Ici le champ pour le code postal*/
document.querySelector('#login-form').addEventListener('submit', function(e) { // Lorsque je soumet mon formulaire login-form
    var cp = document.querySelector('#cp')
    if(cp.value.length != 5) // Si le code postal ne fait pas 5 caracteres.
        alert("Le code postal n'est pas bon")
        e.preventDefault() // Pour empecher la soumission du formulaire.
})
// dans la console récupérer l'élement qui à l'id cp :: document.querySelector('#cp')
// var cp = document.querySelector('#cp') :: voir ce que vaut cp

/* ------------------------------------------------------------------------------------------- */
/* Je veux refuser l'envoi du formulaire si on ne coche pas la :: case :: accepter les mentions légales. */
/* Pour vérifier si un champ est coché, Les champs ont une propriété qui est :: checked */       // document.querySelector('#mentions').checked VAUT FALSE 
// & 
//document.querySelector('#mentions').checked VAUT TRUE

document.querySelector('#login-form').addEventListener('submit', function(e) { // Lorsque je soumet mon formulaire login-form
    var mentions = document.querySelector('#mentions')
    if(mentions.checked === false) // Si la case n'est pas coché donc checked vaut false // on peut juste écrire :: if(!mentions.checked)
        alert("Vous n'avez pas accepté les mentions légale.")
        e.preventDefault() // Pour empecher la soumission du formulaire.
})

/* ------------------------------------------------------------------------------------------- */
/* Les Options */
// var age = document.querySelector('#age') :: récupérer l'élement qui à l'id age
// age.options :: dans la console pour voir toute les options proposé 
// age.selectedIndex :: Nous montre l'index qui est sélectionné
// age.selectedOptions :: Montre tout les index qui ont été séléctionné si il y en a plusieurs. avec un champ :: Multiple :: en html
document.querySelector('#login-form').addEventListener('submit', function(e) {
    var age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10) // [0] On demande la 1ere option systématiquement. // On met en second parametre :: 10 :: car on veut ça en base 10. // Le :: .value :: Pour demander je ne veux pas l'option, je veux la valeur de l'option.
    if(age<18){
        alert('Vous ne pouvez pas rentrer')
        e.preventDefault()
    }
})
/* ------------------------------------------------------------------------------------------- */
/* FOCUS */
var demo = document.querySelector("#demo")
demo.focus() // automatiquement ça va focus ce champ la
demo.blur() // Permet d'enlever le focus sur un champ
// Ils sont aussi des évènements.

/* ------------------------------------------------------------------------------------------- */
/* L'evenement pour détecter quand la page est chargé. */
var demo = document.querySelector("#demo")
console.log(demo.value) // ça ne fonctionnera pas si le script js(app.js) se trouve au dessus de l'élément html car le code est executer directement au chargement.
// Il faut donc demander d'attendre que le document soit chargé. 
// Pour cela, il faut greffé un évènement sur le document en faisant : 
//document.addEventListener('DOMContentLoaded', function())
document.addEventListener('DOMContentLoaded', function() {
    var demo = document.querySelector("#demo")
    console.log(demo.value) // Je n'ai plus d'erreur !
})