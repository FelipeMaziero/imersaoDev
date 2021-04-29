let charizard = {
  nome: "Charizard",
  imagem: "https://static.wikia.nocookie.net/anicrossbr/images/e/e5/006Charizard_AG_anime.png/revision/latest?cb=20160302233731&path-prefix=pt-br",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90
  }
}

let venusaur = {
  nome: "Venusaur",
  imagem: "https://img.pokemondb.net/artwork/large/venusaur.jpg",
  atributos: {
    ataque: 75,
    defesa: 65,
    magia: 85
  }
}

let blastoise = {
  nome: "Blastoise",
  imagem: "https://i.pinimg.com/originals/a8/69/91/a869915fdb507d7de8f23739aa989535.jpg",
  atributos: {
    ataque: 85,
    defesa: 80,
    magia: 80
  }
}

let cartas = [charizard, venusaur, blastoise]

function sortearCarta() {
  let numCartaBot = parseInt(Math.random() * 3)
  cartaBot = cartas[numCartaBot]

  let numCartaJogador = parseInt(Math.random() * 3)
  while (numCartaJogador == numCartaBot) {
    numCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numCartaJogador]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibirCartaJogador()

}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById('carta-jogador')

  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  

  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  let opcoesTexto = ""

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }

  let html = "<div id='opcoes' class='carta-status'>"

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}


function atributoSelect() {
  let radioAtr = document.getElementsByName('atributo')
  for (let i = 0; i < radioAtr.length; i++) {
    if (radioAtr[i].checked) {
      return radioAtr[i].value
    }
  }

}

function jogar() {
  let divResultado = document.getElementById('resultado')
  let atrSelect = atributoSelect()

  if (cartaJogador.atributos[atrSelect] > cartaBot.atributos[atrSelect]) {
    htmlResultado = '<p class="resultado-final">Venceu</p>'
  } else if (cartaJogador.atributos[atrSelect] < cartaBot.atributos[atrSelect]) {
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
  } else {
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }
  divResultado.innerHTML = htmlResultado
  exibirCartaBot()
}

function exibirCartaBot(){
  let divCartaBot = document.getElementById('carta-bot')

  let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

  divCartaBot.style.backgroundImage = `url(${cartaBot.imagem})`

  let nome = `<p class="carta-subtitle">${cartaBot.nome}</p>`
  let opcoesTexto = ""

  for (let atributo in cartaBot.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaBot.atributos[atributo] + "<br>"
  }

  let html = "<div id='opcoes' class='carta-status'>"

  divCartaBot.innerHTML = moldura + nome + html + opcoesTexto + '</div>'

}
