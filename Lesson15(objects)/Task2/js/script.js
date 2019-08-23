function Calc(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
}
Calc.prototype.add = function() {
    return this.num1 + this.num2;
};
Calc.prototype.mul = function() {
    return this.num1 * this.num2;
};
var a = +prompt('ent');
var b = +prompt('ent');
var calc = new Calc(a, b);
console.log(calc.add());
console.log(calc.mul());