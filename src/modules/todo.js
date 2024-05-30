const projectTasks = {};

export function projectTodo() {
  const projectsContainer = document.getElementById("projects");

  projectsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("projectTitles")) {
      const projectTitle = e.target.childNodes[0].nodeValue;
      createTodoList(projectTitle);
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
      const taskElement = createTaskElement(task.task, task.dueDate, task.priority);
      lists.appendChild(taskElement);
    });
  }

  addTaskButton.addEventListener("click", function() {
    addTask();
  });

  // deleteTask(projectTitle);
}

function createTaskElement(taskText, dueDate, priority) {
  const taskInput = document.createElement("div");
  taskInput.classList.add("taskInputs");
  taskInput.textContent = taskText;

  const dueDateInputAndPriorityInput = document.createElement("div");
  dueDateInputAndPriorityInput.classList.add("dueAndPriority");
  dueDateInputAndPriorityInput.textContent = `${priority} / ${dueDate}`;
  taskInput.appendChild(dueDateInputAndPriorityInput);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute('type', 'button');
  deleteButton.classList.add("deleteTaskButtons");
  deleteButton.textContent = 'x';
  taskInput.appendChild(deleteButton);

  deleteButton.addEventListener("click", function() {
    const projectTitle = todoHeader.querySelector("header").textContent.trim();
    const taskIndex = projectTasks[projectTitle].findIndex(task => task.task === taskText && task.dueDate === dueDate && task.priority === priority);
    if (taskIndex > -1) {
      projectTasks[projectTitle].splice(taskIndex, 1);
    }
    taskInput.remove();
  });

  return taskInput;
}

function addTask() {
  const dialog = document.getElementById("taskDialog");
  dialog.showModal();
}

document.getElementById("taskInput").addEventListener('keypress', function(e) {
  if (this.value.length === 0 && e.key === ' ') {
    e.preventDefault();
  }
});

submitTaskButton.addEventListener("click", function(e) {
  e.preventDefault();

  const form = document.getElementById('addTaskForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const projectTitle = todoHeader.querySelector("header").textContent;
  const taskInputValue = document.getElementById("taskInput").value;
  const dueDate = document.getElementById("dueDateInput").value;
  const prioritySelect = document.getElementById("select-priority");
  const priority = prioritySelect.options[prioritySelect.selectedIndex].text;

  const taskElement = createTaskElement(taskInputValue, dueDate, priority);
  lists.appendChild(taskElement);

  if (!projectTasks[projectTitle]) {
    projectTasks[projectTitle] = [];
  }
  projectTasks[projectTitle].push({ task: taskInputValue, dueDate: dueDate, priority: priority });

  document.getElementById("taskInput").value = "";
  dialog.close();
});

closeTaskForm.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("taskInput").value = "";
  dialog.close();
});