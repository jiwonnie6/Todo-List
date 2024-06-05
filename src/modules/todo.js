import { todoList } from "./tasks.js";

export function projectTodo() {
  const projects = document.getElementById("projects");

  projects.addEventListener("click", function(e) {
    if (e.target.classList.contains("projectTitles")) {
      const projectTitle = e.target.childNodes[0].nodeValue;
      createTodoList(projectTitle);
    }
  });
}

const todoHeader = document.getElementById("todoHeader");
const dialog = document.getElementById("taskDialog");
const submitTaskButton = document.getElementById("submitTaskButton");
const lists = document.getElementById("lists");
const deleteTaskForm = document.getElementById("deleteTaskFormButton");

let currentTaskElement = null;

function createTodoList(projectTitle) {
  todoHeader.textContent = "";
  lists.textContent = "";

  // create header // project name is header
  const header = document.createElement("header");
  header.textContent = projectTitle;
  todoHeader.appendChild(header);

  // create add task button in todo list header area
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add("addTaskButton");
  addTaskButton.textContent = "Add Task";
  todoHeader.appendChild(addTaskButton);

  // onclick add task button show task dialog form
  addTaskButton.addEventListener("click", function(e) {
    addTaskForm();
  });

  const project = todoList.getProject(projectTitle);
  if (project) {
    project.getTasks().forEach(task => {
      const taskElements = createTaskElements(task.checked, task.task, task.priority, task.dueDate);
      lists.appendChild(taskElements);
    });
  }
}

function addTaskForm() {
  document.getElementById("taskInput").value = "";
  document.getElementById("dueDateInput").value = "";
  document.getElementById("select-priority").value = "";
  dialog.showModal();
}

deleteTaskForm.addEventListener("click", function(e) {
  document.getElementById("taskInput").value = "";
  document.getElementById("dueDateInput").value = "";
  dialog.close();
});

submitTaskButton.addEventListener("click", function(e) {
  e.preventDefault();

  const form = document.getElementById('addTaskForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  const projectTitle = todoHeader.querySelector("header").textContent;

  const task = document.getElementById("taskInput").value;
  const priority = document.getElementById("select-priority").options[document.getElementById("select-priority").selectedIndex].text;
  const dueDate = document.getElementById("dueDateInput").value;

  // const taskElements = createTaskElements(false, task, priority, dueDate);
  // lists.append(taskElements);

  // const project = todoList.getProject(projectTitle);
  // if (project) {
  //   project.addTask(false, task, priority, dueDate);
  // }

  if (currentTaskElement) {
    updateTaskElement(projectTitle, currentTaskElement, task, priority, dueDate);
    currentTaskElement = null;
  } else {
    const taskElements = createTaskElements(false, task, priority, dueDate);
    lists.append(taskElements);

    const project = todoList.getProject(projectTitle);
    if (project) {
      project.addTask(false, task, priority, dueDate);
    }
  }

  document.getElementById("taskInput").value = "";
  document.getElementById("dueDateInput").value = "";
  dialog.close();
});

function createTaskElements(checked, task, priority, dueDate) {
  // get task and put task text 
  const taskInput = document.createElement("div");
  taskInput.classList.add("taskInputs");

  // append done checklist
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.classList.add("checkbox");
  check.checked = checked;
  taskInput.appendChild(check);

  // create task details div
  const taskDetails = document.createElement("div");
  taskDetails.classList.add("taskDetails");

  // get task and put task text 
  const taskText = document.createElement("div");
  taskText.textContent = task;
  taskDetails.appendChild(taskText);

  // add edit task button svg
  const svgDiv = document.createElement("div");
  svgDiv.classList.add("svgDiv");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 30 30");
  svg.classList.add("svgEdit");

  const svgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgPath.setAttribute("d", "M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z");
  
  svg.appendChild(svgPath);
  svgDiv.appendChild(svg);
  taskDetails.appendChild(svgDiv);

  // when clicked on edit svg
  svgDiv.addEventListener("click", function() {
    const taskInputDialog = document.getElementById("taskInput");
    taskInputDialog.value = task;

    const priorityDialog = document.getElementById("select-priority");
    priorityDialog.value = priority;
    dialog.showModal();

    const dueDateDialog = document.getElementById("dueDateInput");
    dueDateDialog.value = dueDate;

    currentTaskElement = this.closest(".taskInputs");
  });

  // get priority and due date inputs and append it to taskInput div
  const priorityAndDuedate = document.createElement("div");
  priorityAndDuedate.classList.add("dueAndPriority");
  priorityAndDuedate.textContent = `${priority} / ${dueDate}`;
  taskDetails.appendChild(priorityAndDuedate);

  taskInput.appendChild(taskDetails);

  // create delete button for tasks
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("deleteTaskButtons");
  deleteButton.textContent = "x";
  taskInput.appendChild(deleteButton);

  deleteButton.addEventListener("click", function() {
    const projectTitle = todoHeader.querySelector("header").textContent;
    const project = todoList.getProject(projectTitle);
    if (project) {
      project.removeTask(task);
    }
    taskInput.remove();
  });

  if (checked) {
    taskText.style.textDecoration = "line-through";
  }

  check.addEventListener("change", function() {
    const projectTitle = todoHeader.querySelector("header").textContent;
    const project = todoList.getProject(projectTitle);
    const taskObj = project.getTasks().find(t => t.task === task);
    if (taskObj.checked = this.checked) {
      taskText.style.textDecoration = this.checked ? "line-through" : "none";
    }
  });

  return taskInput;
}

function updateTaskElement(projectTitle, currentTaskElement, task, priority, dueDate) {
  // Update the project data
  const project = todoList.getProject(projectTitle);
  const taskObj = project.getTasks().find(t => t.task === currentTaskElement.querySelector(".taskDetails div").textContent);
  if (taskObj) {
    taskObj.task = task;
    taskObj.priority = priority;
    taskObj.dueDate = dueDate;
  }

  currentTaskElement.querySelector(".taskDetails div").textContent = task;
  currentTaskElement.querySelector(".dueAndPriority").textContent = `${priority} / ${dueDate}`;
}