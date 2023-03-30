function inicio(){
    var nome = window.prompt('Qual é o seu nome?')
    var res = window.document.getElementById('resultado')

    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1f596;</p>`
}