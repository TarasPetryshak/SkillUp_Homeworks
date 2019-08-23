var calculator = {
    number1: 2,
    number2: 3  
};
function sum(x, y) {
    return this.number1 + this.number2;
}
function mul(x, y) {
    return this.number1 * this.number2;
}
console.log(sum.call(calculator, 'number1', 'number2'));
console.log(mul.call(calculator));