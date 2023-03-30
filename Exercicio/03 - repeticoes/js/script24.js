function contar(){
    let res = document.querySelector('div#res')

    res.innerHTML += `<h3>Contagem Regressiva de 10 a 1</h3>`

    let cont = 10
    while(cont >= 1){
        res.innerHTML += `${cont} &#x1F449;`
        cont --
    }
    res.innerHTML += `&#x1F3C1;`
}