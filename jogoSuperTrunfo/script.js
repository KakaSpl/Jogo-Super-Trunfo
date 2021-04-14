
let cartaGoku = {
    imagem:"https://wpobservatoriodeseries.elav.tmp.br/wp-content/uploads/2020/05/Novo-Projeto-65.jpg",
    nome:"Goku",
    atributos:{
        ataque:90,
        defesa:70,
        magia:65   
    }
    
}

let cartaVegeta = {
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrg_TEs7MzolPkHBC3B3pJHCDV1wKYwNV9g&usqp=CAU",
    nome:"Vegeta",
    atributos:{
        ataque:80,
        defesa:65,
        magia:52
    }

}

let cartaMadimbu = {
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gpxgUG_RCSd9K_m4-mFyrmwRtuCqLXRsJzwDW8jDZJTqZxjcvdUzX8i5o3i-fZRumlY&usqp=CAU",
    nome:"Madimbu",
    atributos:{
        ataque:92,
        defesa:88,
        magia:85   
    }
}

let cartaKuririn = {
    imagem:"http://1.bp.blogspot.com/-jeCydmnUvjE/Trb7zdmaBCI/AAAAAAAAACU/9GWiFkSV2Is/s1600/as+fugitivas+25.jpg",
    nome:"Kuririn",
    atributos:{
        ataque:72,
        defesa:67,
        magia:53   
    }

}

let cartaAndroidDezoito = {
    imagem:"https://i.pinimg.com/originals/fb/b9/0d/fbb90d4abfa814aaea963416c794061c.jpg",
    nome:"Android 18",
    atributos:{
        ataque:81,
        defesa:85,
        magia:68   
    }

}

let cartaTrunks = {
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH_GXglU-UY1YJNJPkqUyQipc0SzpxkIy4A&usqp=CAU",
    nome:"Trunks",
    atributos:{
        ataque:86,
        defesa:81,
        magia:77   
    }

}

let cartas = [cartaGoku, cartaMadimbu, cartaVegeta, cartaKuririn, cartaAndroidDezoito, cartaTrunks]
let cartaMaquina
let cartaJogador
let pontosJogador = 0
let pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
    let divQuantidadeCartas = document.querySelector("#quantidade-cartas")
    let html = `Quantidade de cartas no jogo: ${cartas.length}`

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
    let divPlacar = document.querySelector("#placar")
    let html = ` ${pontosJogador} PLAYER 💥🤛🤜💥 CPU ${pontosMaquina} `

    divPlacar.innerHTML = html
}

function sortearCarta(){
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    let numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas [numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.querySelector("#btnSortear").disabled = true
    document.querySelector("#btnJogar").disabled = false
   
    exibeCartaJogador()
    
}

function exibeCartaJogador(){
    let divCartaJogador = document.querySelector("#carta-jogador")
    let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    let opcoesTexto=""

    for (let atributo in cartaJogador.atributos){
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> ${atributo} ${cartaJogador.atributos[atributo]} 
         <br>`
      }

      let html = "<div id='opcoes' class='carta-status'>"
    
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
}

function obterAtributosSelecionado(){
    let radioAtributo = document.getElementsByName('atributo')
    for(let i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    let divResultado = document.querySelector("#resultado")
    let atributoSelecionado = obterAtributosSelecionado()

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResutado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResutado = '<p class="resultado-final">Perdeu, Plaboy!</p>'
        pontosMaquina++
    }else{
        htmlResutado = '<p class="resultado-final">Empatou</p>'
    }

    if(cartas.length == 0){
        alert("Fim de jogo")
        if(pontosJogador > pontosMaquina){
            htmlResutado = `<p class="resultado-final">🍾🍾YOU WIN!!!🍾🍾</p>`
        }else if(pontosMaquina > pontosJogador){
            htmlResutado = `<p class="resultado-final">😵LOSER!!😵</p>`
        }else{
            htmlResutado = `<p class="resultado-final">🤷‍Empatou🤷‍</p>`
        }
    }else {
        document.querySelector('#btnProximaRodada').disabled = false
    } 

    divResultado.innerHTML = htmlResutado
    document.querySelector('#btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina(){
    let divCartaMaquina = document.querySelector("#carta-maquina")
    let moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    let opcoesTexto=""

    for (let atributo in cartaMaquina.atributos){
        opcoesTexto += `<p type='text' name='atributo' value='${atributo}'> ${atributo} ${cartaMaquina.atributos[atributo]}</p>`
      }

      let html = "<div id='opcoes' class='carta-status'>"
    
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>"

}

function proximaRodada(){
    let divCartas = document.querySelector("#cartas")

    divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div> <div id='carta-maquina' class='carta'></div>`
    document.querySelector("#btnSortear").disabled = false
    document.querySelector("#btnJogar").disabled = true
    document.querySelector("#btnProximaRodada").disabled = true
    
    let divResultado = document.querySelector("#resultado")
    divResultado.innerHTML = ""
}