var num = +prompt("Enter number", "");
var result;
if (num>0) {
    result = 1;
} else if(num<0) {
    result = -1;
} else result = 0;
console.log(result);