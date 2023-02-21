function somar(){
    var n1 = Number(window.prompt('Digite um número:'))
    var n2 = Number(window.prompt('Digite outro número:'))
    var soma = n1 + n2
    var res = window.document.getElementById('res')

    res.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>`

}