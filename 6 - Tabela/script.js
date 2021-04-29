let felipe = {
  nome: "Felipe",
  vitorias: 3,
  empates: 2,
  derrotas: 1,
  pontos: 0

}

let luis = {
  nome: "Luis",
  vitorias: 2,
  empates: 4,
  derrotas: 1,
  pontos: 0

}

felipe.pontos = calculaPontos(felipe) // o .pontos é o valor de pontos que retorna dentro da função calculaPontos
luis.pontos = calculaPontos(luis)

function calculaPontos(jogador) {
  let pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

let jogadores = [felipe, luis]

exibirJogador(jogadores)

function exibirJogador(jogadores) {
  let html = ""
  for (let i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  let tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
  let jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogador(jogadores)
}

function adicionarEmpate(i) {
  let jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogador(jogadores)
}

function adicionarDerrota(i) {
  let jogador = jogadores[i]
  jogador.derrotas++
  exibirJogador(jogadores)
}