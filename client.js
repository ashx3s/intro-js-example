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
let count = 0;
const displayCount = document.querySelector("#count");
const increaseButton = document.querySelector("#increase-count");
const decreaseButton = document.querySelector("#decrease-count");
// Create a function that can add to the variable by 1
function increaseCount() {
  // if the number is less than 10
  if (count < 10) {
    // change the count variable
    count++;
    // update the DOM
    displayCount.innerHTML = count;
  }
}

// Create a function that can subtract from the variable by 1
function decreaseCount() {
  // if the number is above 0
  if (count > 0) {
    count--;
    displayCount.innerHTML = count;
  }
}

increaseButton.addEventListener("click", function () {
  increaseCount();
});

decreaseButton.addEventListener("click", function () {
  decreaseCount();
});
