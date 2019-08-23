function Calculator(x, y) {
    this.x = x;
    this.y = y;
    this.sum = function() {
         return this.x + this.y;
    };
    this.mul = function() {
         return this.x * this.y;
    }
}
var calculator = new Calculator(2, 3);

alert("Сума="+calculator.sum());
alert("Добуток="+calculator.mul());