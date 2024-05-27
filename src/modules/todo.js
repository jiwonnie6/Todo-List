const projectTasks = {};

export function projectTodo() {
  const projectsContainer = document.getElementById("projects");

  projectsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("projectTitles")) {
      const projectTitle = e.target.childNodes[0].nodeValue.trim();
      createTodoList(projectTitle);
      deleteTask(projectTitle);
    }
  });
}

const lists = document.getElementById("lists");
const todoHeader = document.getElementById("todoHeader");
const submitTaskButton = document.getElementById("submitTaskButton");
const dialog = document.getElementById("taskDialog");
const closeTaskForm = document.getElementById("deleteTaskFormButton");

function createTodoList(projectTitle) {
  todoHeader.innerHTML = '';
  lists.innerHTML = '';
  
  const todoListTitle = document.createElement("header");
  todoListTitle.textContent = projectTitle;

  todoHeader.appendChild(todoListTitle);

  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("addTaskButton");
  addTaskButton.textContent = "Add Task";
  todoHeader.appendChild(addTaskButton);

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
    addTask();
  });

  deleteTask(projectTitle);
}

function addTask() {
  const dialog = document.getElementById("taskDialog");
  dialog.showModal();
}

function deleteTask(projectTitle) {
  document.querySelectorAll(".deleteTaskButtons").forEach(button => {
    button.addEventListener("click", function(e) {
      const taskElement = this.parentElement;
      const taskText = taskElement.childNodes[0].nodeValue.trim();

      // Remove the task from the projectTasks object
      const taskIndex = projectTasks[projectTitle].indexOf(taskText);
      if (taskIndex > -1) {
        projectTasks[projectTitle].splice(taskIndex, 1);
      }

      taskElement.remove();
    });
  });
}

submitTaskButton.addEventListener("click", function(e) {
  e.preventDefault();

  const projectTitle = todoHeader.querySelector("header").textContent;

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
  deleteTask(projectTitle);
});

closeTaskForm.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("taskInput").value = "";
  dialog.close();
});