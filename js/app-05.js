//La propagation

var liens = document.querySelectorAll('a.ssa ')
for (var i = 0 ; i < liens.length ; i++) {
    var lien = liens[i]
    lien.addEventListener('click', function (e) {
        e.stopPropagation() // Ceci à été ajouté pour stoper la propagation de l'evenement au parent.
        console.log("J'ai cliqué sur le lien",e)
        var reponse = window.confirm('Voulez-vous vraiment quitter le site ?')
        if (reponse === false) { // Si il clique sur annuler
            e.preventDefault() // Annule l'evenement s'il est annulable sans stopper sa propagation.
        }
    })
}

document.querySelector('p').addEventListener('click', function(e) {
    console.log("J'ai cliqué sur le paragraphe", e)
})

// Lorsque je clique sur le lien, le log me dit que j'ai cliquez sur le lien et quand j'annule, il me dit aussi que j'ai cliquez sur le paragraphe.
// ça enclenhe de la propagation. L'evenement se propage vers les parents.
// Il y a pour contrer cela, la méthode stopPropagation().