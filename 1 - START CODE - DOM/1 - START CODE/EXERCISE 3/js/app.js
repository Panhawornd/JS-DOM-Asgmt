const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
let cardCount = 0;
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
 
  // 1 - Random color for card
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = randomColor();
   
  // 2 - Set card text
  const cardText = document.createElement("p");
  cardText.textContent = cardCount === 0 ? "Description" : "Hello";
  // 3 - Set card footer
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");


  //  4 - Manage footer button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    card.remove(); // Remove the card when the button is clicked
  });

  // 5 - Add card to containers
  cardFooter.appendChild(removeButton);
  card.appendChild(cardText);
  card.appendChild(cardFooter);

  document.querySelector(".container").appendChild(card); 
  cardCount++
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);