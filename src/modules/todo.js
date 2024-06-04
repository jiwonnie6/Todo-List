import { todoList } from "./tasks.js";

export function projectTodo() {
  const projects = document.getElementById("projects");

  projects.addEventListener("click", function(e) {
    if (e.target.classList.contains("projectTitles")) {
      const projectTitle = e.target.childNodes[0].nodeValue;
      console.log(projectTitle);
      createTodoList(projectTitle);
    }
  });
}

const todoHeader = document.getElementById("todoHeader");
const dialog = document.getElementById("taskDialog");
const submitTaskButton = document.getElementById("submitTaskButton");
const lists = document.getElementById("lists");
const deleteTaskForm = document.getElementById("deleteTaskFormButton");

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

  const taskElements = createTaskElements(false, task, priority, dueDate);
  lists.append(taskElements);

  const project = todoList.getProject(projectTitle);
  if (project) {
    project.addTask(false, task, priority, dueDate);
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
