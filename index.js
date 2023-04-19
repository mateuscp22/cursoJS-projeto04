let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxguesses = 10;

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log(computerNumber);
}
function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + userNumber);
  document.getElementById("guesses").innerHTML = userNumbers;
  if (userNumber <= 100) {
    if (attempts < maxguesses) {
      if (userNumber > computerNumber) {
        document.getElementById("textOutput").innerHTML =
          "Your number is too high";
        document.getElementById("inputBox").value = "";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
      } else if (userNumber < computerNumber) {
        document.getElementById("textOutput").innerHTML =
          "Your number is too low";
        document.getElementById("inputBox").value = "";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
      } else {
        document.getElementById("textOutput").innerHTML = "Congratulations";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
        document.getElementById("inputBox").disabled = true;
      }
    } else {
      document.getElementById("textOutput").innerHTML =
        "You Lose! The computer number was " + computerNumber;
      document.getElementById("inputBox").disabled = true;
    }
  } else {
    document.getElementById("textOutput").innerHTML =
      "The number entered is greater than the limit. \n Start a New Game to play more";
    document.getElementById("inputBox").disabled = true;
  }
}

function newGame() {
  window.location.reload();
  init();
  /*   document.getElementById("inputBox").value = "";
  document.getElementById("guesses").innerHTML = "";
  userNumbers = [];
  document.getElementById("attempts").innerHTML = "";
  document.getElementById("textOutput").innerHTML = "";
  attempts = 0;
  document.getElementById("inputBox").disabled = false; */
  //console.log(userNumbers);
}
