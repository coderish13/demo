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

// var item = document.querySelector('list-group-item');
// // items[1].style.backgroundColor = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

// Traversing the dom //

var itemList = document.querySelector('#items');

// ParentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// ChildNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);

// FirstChild
console.log(itemList.firstChild);
// FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello-1';

//  lastChild
console.log(itemList.lastChild);
// FirstElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello-4';

// nextSibling
console.log(itemList.nextSibling);
// nextElementSiblings
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
// nextElementSiblings
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// createElement

// Create div
var newDiv = document.createElement('div');

// Add Class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv, h1);
