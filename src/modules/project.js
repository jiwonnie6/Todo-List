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

// delete project title
function deleteProject() {
  document.querySelectorAll(".deleteProjectButtons").forEach(button => {
    button.addEventListener("click", function() {
      this.parentElement.remove();
    });
  });
};

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

  const newProjectTitle = document.createElement("div");
  newProjectTitle.classList.add("projectTitles");
  newProjectTitle.textContent = projectTitleInput;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute('type', 'button');
  deleteButton.classList.add("deleteProjectButtons");
  newProjectTitle.setAttribute("tabindex", "0");
  deleteButton.textContent = 'x';
  newProjectTitle.appendChild(deleteButton);

  projects.appendChild(newProjectTitle);

  document.getElementById("projectTitleInput").value = "";

  dialog.close();
  deleteProject();
});