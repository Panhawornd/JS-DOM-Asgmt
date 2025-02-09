 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color
const button = document.querySelector("button");
button.style.border = "2px solid black";
const resultColor = document.getElementById("result-color");
button.addEventListener("click", function () {
    let randomColor = getRandomHexColor(); 
    document.body.style.backgroundColor = randomColor; 
    resultColor.textContent = randomColor; 
});

