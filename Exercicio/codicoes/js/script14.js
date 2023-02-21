function info(){
    var agora = new Date
    var res = window.document.getElementById('res')

    res.innerHTML = `O que eu recebi do sistema foi <mark>${agora}</mark>.`
}