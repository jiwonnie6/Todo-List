import './css/style.css';
import { addProject } from './modules/project';
import { projectTodo } from './modules/todo'; 
import { entriesF } from './modules/entries';

const addProjectButton = document.getElementById("projectButton");

addProjectButton.addEventListener("click", function() {
  addProject();
});

projectTodo();
entriesF();
