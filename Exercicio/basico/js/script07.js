function media(){
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var res = window.document.getElementById('res')
    var m = (n1 + n2) / 2

    res.innerHTML = `<p>Calculando a média final do aluno(a) <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será: <mark>${m}</mark>.</p>`
}