let buttonDeleteCounter = 0;

const formField = document.querySelector("#create-task-form")
formField.addEventListener('submit', function(event) {
  
  // your code here
  let descInput = document.querySelector("#new-task-description").value;
  event.preventDefault();
  let li = document.createElement("li");
  let ul = document.querySelector("#tasks")
  li.textContent = descInput;
  ul.append(li);

  //reset the input box description
  
  event.target.reset();
  
  //creating delete button 
  let deleteButton = document.createElement("button");
  buttonDeleteCounter++;
  deleteButton.id = `button-delete-${buttonDeleteCounter}`;
  // let myBtn = docuement.getElementByTagName("button");
  deleteButton.textContent = "X"
  li.append(deleteButton);
  document.getElementById(`button-delete-${buttonDeleteCounter}`).addEventListener("click", function () {

    li.remove();
  })




});



