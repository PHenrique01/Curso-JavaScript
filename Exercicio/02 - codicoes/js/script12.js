function teste(){
    var num = Number(window.prompt('Digite um número:'))
    var res = window.document.getElementById('res')

    if (num % 2 == 0){
        msg = '<strong>PAR!</strong>'
    }else{
        msg = '<strong>ÍMPAR!</strong>'
    }

    res.innerHTML = `<p>O número ${num} que foi digitado é ${msg}</p>`
}