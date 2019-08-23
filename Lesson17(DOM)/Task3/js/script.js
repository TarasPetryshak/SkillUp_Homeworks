document.getElementsByTagName('input')[0].setAttribute('checked', 'checked');
console.log(document.getElementById('check').hasAttribute('name'));
console.log(document.getElementById('check').hasAttribute('checked'));
console.log(document.getElementById('check').getAttribute('name'));

for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
    if (!document.getElementsByTagName('p')[i].classList.contains('text')) {
        document.getElementsByTagName('p')[i].classList.remove('text');
    } else {
        document.getElementsByTagName('p')[i].classList.add('text');
    }
    console.log(document.getElementsByTagName('p')[i].classList);
}

for (var i = 0; i < document.getElementsByClassName('paragraph').length; i++) {
    document.getElementsByClassName('paragraph')[i].classList.toggle('text');
    console.log(document.getElementsByTagName('p')[i].classList);
}
