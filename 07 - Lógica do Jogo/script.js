let charizard = {
  Nome: "Charizard",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90
  }
}

let venusaur = {
  Nome: "Venusaur",
  atributos: {
    ataque: 75,
    defesa: 65,
    magia: 85
  }
}

let blastoise = {
  Nome: "Blastoise",
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

  exibirOpcoes()
  
}

function exibirOpcoes() {
  let opcoes = document.getElementById('opcoes')
  let opcoesTexto = ""
  for (let atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function atributoSelect() {
  let radioAtr = document.getElementsByName('atributo')
  for (let i = 0; i < radioAtr.length; i++){
    if(radioAtr[i].checked){
      return radioAtr[i].value
    }
  }
}

function jogar() {
  let atrSelect = atributoSelect()
  console.log(atrSelect);
  if(cartaJogador.atributos[atrSelect] > cartaBot.atributos[atrSelect]){
    alert('Voce venceu')
  } else if (cartaJogador.atributos[atrSelect] < cartaBot.atributos[atrSelect]) {
    alert('A maquina venceu')
  } else {
    alert('empatou')
  }
}