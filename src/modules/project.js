import { todoList } from "./tasks.js";

export function addProject() {
  const dialog = document.getElementById("dialog");
  dialog.showModal();
}

const projects = document.getElementById("projects");
const dialog = document.getElementById("dialog");

const submitProjectButton = document.getElementById("submitProjectButton");
const deleteFormButton = document.getElementById("deleteFormButton");

// close project form
deleteFormButton.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("projectTitleInput").value = "";
  dialog.close();
});

document.getElementById("projectTitleInput").addEventListener('keypress', function(e) {
  if (this.value.length === 0 && e.key === ' ') {
    e.preventDefault(); // Prevent the default action (inserting a space)
  }
});

submitProjectButton.addEventListener("click", function(e) {
  e.preventDefault();

  const form = document.getElementById('projectForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const projectTitleInput = document.getElementById("projectTitleInput").value;

  todoList.addProject(projectTitleInput);

  renderProjects();

  document.getElementById("projectTitleInput").value = "";
  dialog.close();
});

function renderProjects() {
  projects.innerHTML = '';

  todoList.getProjects().forEach(projectTitle => {
    const newProjectTitle = document.createElement("div");
    newProjectTitle.classList.add("projectTitles");
    newProjectTitle.textContent = projectTitle;

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute('type', 'button');
    deleteButton.classList.add("deleteProjectButtons");
    newProjectTitle.setAttribute("tabindex", "0");
    deleteButton.textContent = 'x';
    newProjectTitle.appendChild(deleteButton);

    projects.appendChild(newProjectTitle);

    deleteButton.addEventListener("click", function() {
      const projectTitle = this.parentElement.childNodes[0].textContent;
      todoList.removeProject(projectTitle);
      this.parentElement.remove();
    });
  });
}

renderProjects();