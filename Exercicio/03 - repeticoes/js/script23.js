function contar(){
    let res = document.querySelector('div#res')

    res.innerHTML += `<h3>Números impares de 1 até 10</h3>`

    let cont = 1
    while(cont <= 10){
        res.innerHTML += `${cont} &#x1F449;`
        cont += 2
    }
    res.innerHTML += `&#x1F3C1;`
}