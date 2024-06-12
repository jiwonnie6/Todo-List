import { todoList } from "./tasks.js";

export function entriesF() {
  showEntries();
  entries.click();
}

const entries = document.getElementById("entriesIdButton");
const header = document.getElementById("todoHeader");
const lists = document.getElementById("lists");

function showEntries() {
  entries.addEventListener("click", function() {
    header.textContent = "Entries";
    lists.textContent = "";

    todoList.getProjects().forEach(projectName => {
      const project = todoList.getProject(projectName);
      project.getTasks().forEach(task => {
        const taskElements = createTaskElements(projectName, task.checked, task.task, task.priority, task.dueDate);
        lists.appendChild(taskElements);
      });
    })
  });
}

function createTaskElements(projectName, checked, task, priority, dueDate) {
  // get task and put task text 
  const taskInput = document.createElement("div");
  taskInput.classList.add("taskInputs");
  taskInput.setAttribute("data-project", projectName);

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
    const projectName = taskInput.getAttribute("data-project");
    const project = todoList.getProject(projectName);
    if (project) {
      project.removeTask(task);
    }
    taskInput.remove();
  });

  if (checked) {
    taskText.style.textDecoration = "line-through";
  }

  check.addEventListener("change", function() {
    const projectName = taskInput.getAttribute("data-project");
    const project = todoList.getProject(projectName);
    const taskObj = project.getTasks().find(t => t.task === task);
    if (taskObj.checked = this.checked) {
      taskText.style.textDecoration = this.checked ? "line-through" : "none";
    }
  });

  return taskInput;
}
