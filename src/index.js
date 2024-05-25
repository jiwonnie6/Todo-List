import './css/style.css';
import { addProject } from './modules/project';

const addProjectButton = document.getElementById("projectButton");

addProjectButton.addEventListener("click", function() {
  addProject();
});

