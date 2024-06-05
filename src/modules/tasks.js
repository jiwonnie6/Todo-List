export class Task {
  constructor(checked = false, task, priority, dueDate) {
    this.checked = checked;
    this.task = task;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(checked = false, task, priority, dueDate) {
    const newTask = new Task(checked, task, priority, dueDate);
    this.tasks.push(newTask);
  }

  removeTask(taskName) {
    this.tasks = this.tasks.filter(task => task.task !== taskName);
  }

  getTasks() {
    return this.tasks;
  }

  // reviseTasks() {

  // }
}

export class TodoList {
  constructor() {
    this.projects = {};
  }

  addProject(name) {
    if (!this.projects[name]) {
      this.projects[name] = new Project(name);
    }
  }

  removeProject(name) {
    delete this.projects[name];
  }

  getProject(name) {
    return this.projects[name];
  }

  getProjects() {
    return Object.keys(this.projects);
  }
}

// Create an instance of TodoList and add default projects
export const todoList = new TodoList();
todoList.addProject("Default");
todoList.addProject("Errands");
todoList.addProject("HW");

// Add default tasks to the projects
todoList.getProject("Default").addTask(false, "Default", "Low", "1111-11-11");
todoList.getProject("Errands").addTask(false, "Buy groceries", "Medium", "1111-11-11");
todoList.getProject("Errands").addTask(true, "Do laundry", "Low", "1111-11-11");
todoList.getProject("Errands").addTask(true, "Drop off package", "Medium", "1111-11-11");
todoList.getProject("HW").addTask(false, "Science HW", "High", "1111-11-11");
todoList.getProject("HW").addTask(false, "Essay", "Medium", "1111-11-11");