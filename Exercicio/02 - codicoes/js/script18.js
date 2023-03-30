let computador = 0
let jogador = 0
let res = document.getElementById('res')

function sortear(){
    // window.alert('[ERRO]!! ainda não conclui esse exercicio.')

    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio) 
}

function jogar(){
    jogador = Number(window.prompt('Qual é o seu palpite?'))

    if(jogador < computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>Maior</strong>!</p>`
    }else if(jogador > computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>Menor</strong>!</p>`
    }else if(jogador == computador){
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('btn').style.visibility = 'hidden'
    }
}