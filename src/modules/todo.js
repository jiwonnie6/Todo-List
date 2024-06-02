const projectTasks = {};

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


  // might not have to do this if you create seperate containers and swiwtch them ? 
  if (projectTasks[projectTitle]) {
    projectTasks[projectTitle].forEach(task => {
      const taskElements = createTaskElements(task.task, task.priority, task.dueDate);
      lists.appendChild(taskElements);
    });
  }

}

function addTaskForm() {
  dialog.showModal();
}

deleteTaskForm.addEventListener("click", function(e) {
  dialog.close();
});

submitTaskButton.addEventListener("click", function(e) {
  e.preventDefault();

  // const form = document.getElementById('addTaskForm');
  // if (!form.checkValidity()) {
  //   form.reportValidity();
  //   return;
  // }
  
  const projectTitle = todoHeader.querySelector("header").textContent;

  const task = document.getElementById("taskInput").value;
  const priority = document.getElementById("select-priority").options[document.getElementById("select-priority").selectedIndex].text;
  const dueDate = document.getElementById("dueDateInput").value;

  const taskElements = createTaskElements(task, priority, dueDate);
  lists.append(taskElements);

  if (!projectTasks[projectTitle]) {
    projectTasks[projectTitle] = [];
  }
  projectTasks[projectTitle].push( {task: task, priority: priority, dueDate: dueDate} );

  document.getElementById("taskInput").value = "";
  dialog.close();
});

function createTaskElements(task, priority, dueDate) {
  // get task and put task text 
  const taskInput = document.createElement("div");
  taskInput.classList.add("taskInputs");
  taskInput.textContent = task;

  // get priority and due date inputs and append it to taskInput div
  const priorityAndDuedate = document.createElement("div");
  priorityAndDuedate.classList.add("dueAndPriority");
  priorityAndDuedate.textContent = `${priority} / ${dueDate}`;
  taskInput.appendChild(priorityAndDuedate);

  // create delete button for tasks
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button");
  deleteButton.classList.add("deleteTaskButtons");
  deleteButton.textContent = "x";
  taskInput.appendChild(deleteButton);

  // when deleteButton clicked delete task
  deleteButton.addEventListener("click", function() {
    const projectTitle = todoHeader.querySelector("header").textContent;
    const taskIndex = projectTasks[projectTitle].findIndex(t => t.task === task && t.priority === priority && t.dueDate === dueDate);
    if (taskIndex > -1) {
      projectTasks[projectTitle].splice(taskIndex, 1);
    }
    console.log(projectTasks[projectTitle]);
    taskInput.remove();
  });

  return taskInput;
}
