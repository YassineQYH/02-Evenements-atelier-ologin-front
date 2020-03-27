// Annuler la redirection si on refuse le message de confirmation

var liens = document.querySelectorAll(' #nav a  ')
for (var i = 0 ; i < liens.length ; i++) {
    var lien = liens[i]
    lien.addEventListener('click', function (event) {
        var reponse = confirm('Voulez-vous vraiment quitter le site ?')
        if (reponse === false) { // Si il clique sur annuler
            event.preventDefault() // Annule l'evenement s'il est annulable sans stopper sa propagation.
        }
    })
}