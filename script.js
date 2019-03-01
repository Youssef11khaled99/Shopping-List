var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll("button");
var check = false;
function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.appendChild(document.createTextNode(input.value));
  a.href = "#";
  ul.appendChild(li);
  li.appendChild(a);
  li.addEventListener("click", markListItem);
  input.value = "";

  // /* Creat Delete Button */
  var btnDel = document.createElement("button");
  // style for the delete button
  btnDel.classList.add("deleteBtn");
  btnDel.appendChild(document.createTextNode("Delete Element"));
  li.appendChild(btnDel);
  btnDel.addEventListener("click", deleteListItem);
}

function markListItem() {
  check = !check;
  if (check) {
    this.children[0].classList.add("done");
  } else {
    this.children[0].classList.remove("done");
  }
}

function deleteListItem() {
  this.parentElement.classList.add("delete");
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", markListItem);
}

for (var i = 0; i < deleteButtons.length - 1; i++) {
  deleteButtons[i].addEventListener("click", deleteListItem);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
