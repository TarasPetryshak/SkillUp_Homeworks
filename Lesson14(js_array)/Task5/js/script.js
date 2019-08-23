var arr = [];
var userNumber = +prompt("Enter your number");
function randomNumber(number) {
    for (var i=0; i<number; i++) {
    arr.push(Math.floor(Math.random()*101)+1);
    }
    if (arr.indexOf(userNumber)!=-1) 
    return true;
}