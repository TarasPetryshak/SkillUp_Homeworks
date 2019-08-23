var arr = [
  [2, 2, 2, 2],
  [2, 2, 2, 2]
];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  for (var j of arr[i]) {
    sum += arr[i][j];
  }
}
console.log(sum);
