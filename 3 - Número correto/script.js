let valueSecret = parseInt(Math.random() * 10)

let tentativas = 3


while (tentativas > 0) {

  var teste = parseInt(prompt('Digite um valor de 0 e 10'))

  if (teste == valueSecret) {
    alert('voce acertou')
    break
  } else if (teste > valueSecret) {
    alert('errou, o valor é menor, tente de novo')
    tentativas -= 1

  } else if (teste < valueSecret) {
    alert('errou, o valor é maior, tente de novo');
    tentativas -= 1
  }
}

if (teste != valueSecret) {
  alert('Acabou as tentativas. O numero secreto era: ' + valueSecret)
}