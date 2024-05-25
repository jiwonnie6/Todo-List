export function addProject() {
  const projectForm = document.getElementById("projectForm");

  projectForm.style.visibility = "visible";
}

const projects = document.getElementById("projects");
const projectForm = document.getElementById("projectForm");
const submitProjectButton = document.getElementById("submitProjectButton");

submitProjectButton.addEventListener("click", function(e) {
  e.preventDefault();

  const projectTitleInput = document.getElementById("projectTitleInput").value;

  const newProjectTitle = document.createElement("div");
  newProjectTitle.classList.add("projectTitles");
  newProjectTitle.textContent = projectTitleInput;
  projects.appendChild(newProjectTitle);

  document.getElementById("projectTitleInput").value = "";
  projectForm.style.visibility = "hidden";
});
