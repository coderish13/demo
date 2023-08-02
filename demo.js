// console.dir(document);
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
// console.log(items[1]);
items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';

for(var i=0; i<items.length; i++) {
    items[i].style.fontWeight = 'bold';
}

var item = document.querySelector('list-group-item');
// items[1].style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}

