export function addProject() {
  const dialog = document.getElementById("dialog");
  dialog.showModal();
}

const projects = document.getElementById("projects");
const projectForm = document.getElementById("projectForm");
const dialog = document.getElementById("dialog");

const submitProjectButton = document.getElementById("submitProjectButton");
const deleteFormButton = document.getElementById("deleteFormButton");

function deleteProject() {
  document.querySelectorAll(".deleteProjectButtons").forEach(button => {
    button.addEventListener("click", function() {
      this.parentElement.remove();
    });
  });
};

deleteFormButton.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("projectTitleInput").value = "";
  dialog.close();
});

submitProjectButton.addEventListener("click", function(e) {
  e.preventDefault();

  const projectTitleInput = document.getElementById("projectTitleInput").value;

  const newProjectTitle = document.createElement("div");
  newProjectTitle.classList.add("projectTitles");
  newProjectTitle.textContent = projectTitleInput;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute('type', 'button');
  deleteButton.classList.add("deleteProjectButtons");
  deleteButton.textContent = 'x';
  newProjectTitle.appendChild(deleteButton);

  projects.appendChild(newProjectTitle);

  document.getElementById("projectTitleInput").value = "";
  // projectForm.style.visibility = "hidden";

  dialog.close();
  deleteProject();
});

