window.alert('Seja bem-vindo(a) ao meu site!')

function calcular(){
    var n = Number(window.prompt('Digite um número'))
    var res = window.document.getElementById('resultado')
    var dobro = n * 2
    var metade = n / 2

    res.innerHTML = (`<p>O dobro de ${n} é ${dobro} e a metade é ${metade}!</p>`)
}