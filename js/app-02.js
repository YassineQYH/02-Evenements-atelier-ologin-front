// Je veux cette fois ciblé tout mes paragraphes.
var ps = document.querySelectorAll('p'); // sélectionné tout les paragraphes
for (var i = 0 ; i < ps.length ; i++) {
    var p = ps[i]
    var rougit = function () {
        this.classList.toggle('red') // this vaut le contexte global - dans le cas d'un listener, this aura comme valeur l'élement sur lequel à été greffé l'evenement.
    }
    p.addEventListener('click', rougit) // Lorsque l'on crée une fonction qui est utilisé comme listener, THIS fera référence à l'élement sur lequel à été appliqué l'écouteur.
}