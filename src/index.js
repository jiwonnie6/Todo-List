import './css/style.css';
import { addProject, deleteProject } from './modules/project';

const addProjectButton = document.getElementById("projectButton");
const deleteButton = document.getElementsByClassName("deleteButton");

addProjectButton.addEventListener("click", function() {
  addProject();
});

