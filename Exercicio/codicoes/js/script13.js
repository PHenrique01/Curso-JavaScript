function maior(){
    var n1 = Number(window.prompt('Digite um número:'))
    var n2 = Number(window.prompt('Digite outro número:'))
    var res = window.document.getElementById('res')

    if (n1 > n2){
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>`
    }else if (n2 > n1){
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong>` 
    }else{
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong>`
    }
}