function calcidade(){
    var nasc = Number(window.prompt('Em que ano você nasceu?'))
    var agora = new Date()
    var ano = agora.getFullYear()
    var res = window.document.getElementById('res')
    var idade = ano - nasc

    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}