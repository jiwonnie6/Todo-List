const projectTasks = {};

export function projectTodo() {
  const projectsContainer = document.getElementById("projects");

  projectsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("projectTitles")) {
      const projectTitle = e.target.childNodes[0].nodeValue.trim();
      createTodoList(projectTitle);
    }
  });
}

const lists = document.getElementById("lists");

function createTodoList(projectTitle) {
  lists.innerHTML = '';
  
  const todoListTitle = document.createElement("header");
  todoListTitle.textContent = projectTitle;

  lists.appendChild(todoListTitle);

  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("addTaskButton");
  addTaskButton.textContent = "Add Task";
  lists.appendChild(addTaskButton);

  if (projectTasks[projectTitle]) {
    projectTasks[projectTitle].forEach(task => {
      const taskInput = document.createElement("div");
      taskInput.classList.add("taskInputs");
      taskInput.textContent = task;

      const deleteButton = document.createElement("button");
      deleteButton.setAttribute('type', 'button');
      deleteButton.classList.add("deleteTaskButtons");
      deleteButton.textContent = 'x';
      taskInput.appendChild(deleteButton);

      lists.appendChild(taskInput);
    });
  }

  addTaskButton.addEventListener("click", function() {
    addTask(projectTitle);
  });
}

function addTask() {
  const dialog = document.getElementById("taskDialog");
  dialog.showModal();
}

const submitTaskButton = document.getElementById("submitTaskButton");
const dialog = document.getElementById("taskDialog");

submitTaskButton.addEventListener("click", function(e) {
  e.preventDefault();

  const projectTitle = lists.querySelector("header").textContent;

  const taskInputValue = document.getElementById("taskInput").value;

  const taskInput = document.createElement("div");
  taskInput.classList.add("taskInputs");
  taskInput.textContent = taskInputValue;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute('type', 'button');
  deleteButton.classList.add("deleteTaskButtons");
  deleteButton.textContent = 'x';
  taskInput.appendChild(deleteButton);

  lists.appendChild(taskInput);

  if (!projectTasks[projectTitle]) {
    projectTasks[projectTitle] = [];
  }
  projectTasks[projectTitle].push(taskInputValue);

  document.getElementById("taskInput").value = "";

  dialog.close();
});