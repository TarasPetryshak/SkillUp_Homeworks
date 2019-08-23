var calculator = {
    number1: 2,
    number2: 3
}
function sum() {
    return this.number1 + this.number2;
}
function mul() {
    return this.number1 * this.number2;
}
calculator.sum = sum;
calculator.mul = mul;
alert(calculator.sum());
alert(calculator.mul());