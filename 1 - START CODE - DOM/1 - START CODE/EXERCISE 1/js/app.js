let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
let item3 = container1.children[2]; 
container2.appendChild(item3); 
//  2- Remove item 4
// YOUR CODE !!
let item4 = container2.children[0]; 
container2.removeChild(item4); 
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
let newItem = document.createElement("div"); 
newItem.classList.add("item"); 
newItem.textContent = "10"; 
container3.appendChild(newItem);
//  4- Set all items located in a blue container to red
// YOUR CODE !!
let blueContainers = document.querySelectorAll(".containerBlue .item");
blueContainers.forEach(item => {
  item.style.color = "red"; 
});
