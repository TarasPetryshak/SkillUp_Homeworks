var elem = document.createElement('li');
elem.innerHTML = '1';
list.appendChild(elem);
elem = document.createElement('li');
elem.innerHTML = '2';
list.appendChild(elem);
elem = document.createElement('li');
elem.innerHTML = '3';
list.appendChild(elem);
elem = document.createElement('li');
elem.innerHTML = '4';
list.appendChild(elem);
elem = document.createElement('li');
elem.innerHTML = '5';
list.appendChild(elem);


for (var i = 1; i < 6; i++) {
    var elem = document.createElement('li');
    elem.innerHTML = i;
    list.appendChild(elem);
}
