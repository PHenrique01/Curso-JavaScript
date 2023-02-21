function calc(){
    var num1 = Number(window.prompt('Primeiro valor:'))
    var num2 = Number(window.prompt('Segundo valor:'))
    var op = Number(window.prompt(`Valores informados: ${num1} e ${num2}.\n O que vamos fazer?\n [1]Somar\n [2]Subtrair\n [3]Multiplicar\n [4]Dividir`))
    var res = window.document.getElementById('res')

    res.innerHTML = '<p><strong>Calculando...</strong></p>'

    switch(op){
        case 1:
            res.innerHTML += `<p>${num1} + ${num2} = <strong>${num1 + num2}</strong></p>`
            break
        case 2:
            res.innerHTML += `<p>${num1} - ${num2} = <strong>${num1 - num2}</strong></p>`
            break
        case 3:
            res.innerHTML += `<p>${num1} * ${num2} = <strong>${num1 * num2}</strong></p>`
            break
        case 4:
            res.innerHTML += `<p>${num1} / ${num2} = <strong>${num1 / num2}</strong></p>`
            break
        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>`
    }
}