// input field variable (where user types)
let userInput = document.querySelector("#input-box");
// submit button variable
const submitButton = document.querySelector("#submit-button");
// output paragraph (show user content here)
const displayUserInput = document.querySelector("#display-input");
// clear button
const clearButton = document.querySelector("#clear-button");

// this will fire whenever the submit button is clicked
submitButton.addEventListener("click", function () {
  // update display user input
  displayUserInput.textContent = userInput.value;
  // remove content that is in the text box
  userInput.value = "";
});

// whenever the clear button is clicked...
clearButton.addEventListener("click", function () {
  //  clear the displayUserInput box
  displayUserInput.textContent = "";
});

// ----------------------- COUNTER ----------------------- //

// Create counter variable that can be shown on the page and added to or subtracted from

// Create a function that can add to the variable by 1

// Create a function that can subtract from the variable by 1
