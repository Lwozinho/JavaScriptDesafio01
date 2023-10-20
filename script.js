let firstNumber = prompt(`Insira o primeiro número`)
let secondNumber = prompt(`Insira o Segundo número`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`A soma é ${sum}`)
alert(`A subtração é ${sub}`)
alert(`A multiplicação é ${multi}`)
alert(`A divisão é ${div}`)
alert(`O resto da divisão é ${restDiv}`)

if (firstNumber === secondNumber) {
  alert(`Os números inseridos são iguais!`)
} else {
  alert(`Os números inseridos são diferentes!`)
}

if (sum % 2 == 0) {
  alert(`O número é par!`)
} else {
  alert(`O número é impar`)
}