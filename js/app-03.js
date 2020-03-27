// Je veux cette fois ciblé tout mes paragraphes.
var ps = document.querySelectorAll('p'); // sélectionné tout les paragraphes
for (var i = 0 ; i < ps.length ; i++) {
    var p = ps[i]
    p.addEventListener('mouseover', function () {
        this.classList.add('red')
    })
    p.addEventListener('mouseout', function () {
       this.classList.remove('red')
    }) 
}