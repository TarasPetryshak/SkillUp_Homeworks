var srt = "lorem ipsum dolor sit amet";
String.prototype.upperCaseLetters = function () {
    return this.charAt(0).toUpperCase() + this.substring(1, this.length - 1) +
        this.charAt(this.length - 1).toLocaleUpperCase();
};
console.log(srt.upperCaseLetters());