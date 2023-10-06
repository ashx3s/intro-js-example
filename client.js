const userInput = prompt("Enter your name");

console.log(userInput);
document.querySelector("h1").innerHTML = `Hello ${userInput}`;
