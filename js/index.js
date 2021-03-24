const inputField = document.getElementById("myInput");

const addButton = document.getElementById("addBtn");

addButton.addEventListener('click', newElement);

inputField.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        newElement();
    }
}, false);

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = inputField.value;
  // Creates a textnode out of the value of "inputValue"
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Enter item in to-do list!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
    
 span.addEventListener('click', (e) => {
     e.target.parentNode.remove();
 })
}

const lst = document.getElementById("myUL");

deleteBtn.addEventListener("click", removeAll);
//Clearing the list
function removeAll(){
    const result = confirm("Are you sure?");
    if (result) { 
         
	 if(!lst.firstChild){
	    alert("Nothing to delete!!");
         }
         while (lst.firstChild) {
            lst.removeChild(lst.firstChild);
        }
            
    }
}
