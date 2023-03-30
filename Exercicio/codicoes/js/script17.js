function gerar(){
    // window.alert('[ERRO]!! ainda não conclui esse exercicio.')

    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('div#res')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar(){ 
    // window.alert('[ERRo]!! ainda não conclui esse exercicio.')

    let res = document.querySelector('div#res')
    res.innerHTML = null
}