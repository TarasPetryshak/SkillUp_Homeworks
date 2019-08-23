var strLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, a?";
var arrLorem = strLorem.split(" ");
var arrTmp = [];
var arrLoremWordLength = [];
var longerWord;
var indexLongerWorld;
var maxLength;
arrLorem.forEach(function (item, i, arrLorem) {
    arrTmp.push(arrLorem[i].length);
});
arrTmp.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1
});
maxLength = arrTmp[0];
arrLorem.forEach(function (item, i, arrLorem) {
    arrLoremWordLength.push(arrLorem[i].length);
});
var indexLongerWorld = arrLoremWordLength.indexOf(maxLength);
longerWord = arrLorem[indexLongerWorld];
console.log(longerWord);
