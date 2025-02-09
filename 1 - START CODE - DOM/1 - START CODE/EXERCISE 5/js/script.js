const taskInputElement = document.getElementById("description");
const taskPriorityElement = document.getElementById("priority");

// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function addTask() {
  // 1- Create a new task
  let task = { description: "", priority: 0 };

  // 2- Set the description from the text field
  if (!(taskInputElement.value.trim())) {
    console.error("Task description required");
    return -1;
  }
  task.description = taskInputElement.value;

  // 3- Set the priority from select field
  task.priority = taskPriorityElement.value === "High" ? 1 : 0;

  // 4- Add the new object to the array
  taskList.push(task);
  displayTasks(taskList);
}

function displayTasks(tasksArray) {
  taskContainer.innerHTML = "";
  tasksArray.forEach(task => {
    let taskElement = document.createElement("div");
    taskElement.className = "task-box";
    taskElement.textContent = task.description;
    taskElement.style.backgroundColor = task.priority === 1 ? "red" : "grey";
    taskContainer.appendChild(taskElement);
  });
}

function showHighPriority() {
  let highPriorityTasks = taskList.filter(task => task.priority === 1);
  displayTasks(highPriorityTasks);
}

function showLowPriority() {
  let lowPriorityTasks = taskList.filter(task => task.priority === 0);
  displayTasks(lowPriorityTasks);
}

function showAllTasks() {
  displayTasks(taskList);
}

// ----------------------------------------------------------------------------
// MAIN 
// ----------------------------------------------------------------------------
let taskList = [];

const taskContainer = document.createElement("div");
taskContainer.className = "task-container";
document.body.appendChild(taskContainer);

// Add event listeners to buttons
document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("filterHighBtn").addEventListener("click", showHighPriority);
document.getElementById("filterLowBtn").addEventListener("click", showLowPriority);
document.getElementById("showAllTasksBtn").addEventListener("click", showAllTasks);