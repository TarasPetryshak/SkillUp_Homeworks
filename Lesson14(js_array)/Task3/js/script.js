var strLorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis officiis necessitatibus earum modi rem ducimus exercitationem impedit non ullam";
var arr = strLorem.split(" ");
for (var i=0; i<arr.length; i++) {
  if (arr[i].length>5) console.log(arr[i]);
}
