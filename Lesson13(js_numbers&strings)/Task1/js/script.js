var arrLorem =  ['lorem', 'ipsum', 'is', 'simply',  'dummy'];
var str="";
for (var i=0; i<arrLorem.length; i++) {
    str+=arrLorem[i].charAt(0).toUpperCase() + arrLorem[i].slice(1);
}
alert(str);