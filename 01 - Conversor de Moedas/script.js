let valueDolar = prompt('Digite o valor em dolar que gostaria de converter para real')
let vDolar = parseFloat(valueDolar)


if (valueDolar.length == 0) {
  alert('Por favor preencha um valor')
} else {
  alert(`Voce digitou o valor de ${valueDolar}, quando clicar em ok iremos converter para real`)
  let valueReal = 5.57
  let convert = (vDolar * valueReal)
  alert(`O valor convertido para real é de ${convert.toFixed(2)}`)
}