// SECRET CODE
const SECRET_CODE = "2359"; 

// DOM ELEMENTS
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", resetGame);

const passwordInput = document.getElementById("passwordInput");
const instructionLabel = document.getElementById("instructionLabel");

let chancesRemaining = 3;

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

// Show the Lost View
function showLost() {
  hide(passwordView);
  hide(wonView);
  show(lostView);
  

  localStorage.setItem("chancesRemaining", chancesRemaining);
}

// Show the Win View
function showWin() {
  hide(passwordView);
  hide(lostView);
  show(wonView);
  
 
  localStorage.setItem("gameStatus", "won");
}


function handleCheck() {
  const passwordEntered = passwordInput.value;

  
  if (passwordEntered === SECRET_CODE) {
    showWin();
  } else {
    chancesRemaining -= 1;

    if (chancesRemaining > 0) {
      instructionLabel.textContent = `Incorrect! You have ${chancesRemaining} chances left.`;
    } else {
      instructionLabel.textContent = "No chances left!";
      checkButton.disabled = true; 
      showLost();
    }
  }
}


function resetGame() {
  
  chancesRemaining = 3;
  checkButton.disabled = false; 
  instructionLabel.textContent = "Enter your code (You can try 3 times only !)";
  passwordInput.value = ""; 

  
  localStorage.removeItem("gameStatus");
  localStorage.removeItem("chancesRemaining");

  show(passwordView);
  hide(lostView);
  hide(wonView);
}

function initGame() {
  // Check if the player has previously lost and has stored data
  const storedGameStatus = localStorage.getItem("gameStatus");
  const storedChancesRemaining = localStorage.getItem("chancesRemaining");

  // If game status is "lost" or no chances are left, hide the game view and show the Lost View
  if (storedGameStatus === "won") {
    showWin(); 
  } else if (storedChancesRemaining !== null && storedChancesRemaining <= 0) {
    showLost(); 
  } else {
    chancesRemaining = storedChancesRemaining ? parseInt(storedChancesRemaining) : 3;
    instructionLabel.textContent = `Enter your code (You can try ${chancesRemaining} times only !)`;
  }
}
initGame();