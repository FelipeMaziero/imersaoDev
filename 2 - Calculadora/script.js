let firstValue = parseInt(prompt('Digite o primeiro valor: '))

let secondValue = parseInt(prompt('Digite o segundo valor: '))

let operator = prompt('Qual operação você quer realizar com esses dois valores?')



if (operator == "+") {
  let valueTotal = firstValue + secondValue
  document.write(`<h2> ${firstValue} + ${secondValue} =  ${valueTotal} </h2>`)

} else if (operator == "-") {
  let valueTotal = firstValue - secondValue
  document.write(`<h2> ${firstValue} - ${secondValue} =  ${valueTotal} </h2>`)

} else if (operator == "*") {
  let valueTotal = firstValue * secondValue
  document.write(`<h2> ${firstValue} * ${secondValue} =  ${valueTotal} </h2>`)

} else if (operator == "/") {
  let valueTotal = firstValue / secondValue
  document.write(`<h2> ${firstValue} / ${secondValue} =  ${valueTotal} </h2>`)

} else {
  alert('Algo deu errado')
  document.write("<h2>" + "Error" + "</h2>")
}