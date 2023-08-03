var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // get input value
  var newItem = document.getElementById('item').value;

  // create new Li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';
  
  // Create text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create del button element
  var deleteBtn = document.createElement('button');

  // Add class to del btn
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append btn to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

// remove item
function removeItem (e){
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

