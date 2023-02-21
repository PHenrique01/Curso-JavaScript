var contador = 0
var res = window.document.getElementById('res')

function contar(){
    contador ++
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar(){
    contador = 0
    res.innerHTML = null
}