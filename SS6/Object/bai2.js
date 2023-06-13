var calculator = { value: 0 }

function display(calculator) {
    console.log(calculator.value)
}
display(calculator)

function add(calculator, number) {
    calculator.value += number
}

function subtract(calculator, number) {
    calculator.value -= number
}

function divide(calculator, number) {
    calculator.value %= number

}

function multiply(calculator, number) {
    calculator.value *= number

}