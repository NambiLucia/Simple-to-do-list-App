let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector("ul");

//retrieve data from local storage

let tasks = JSON.parse(localStorage.getItem("tasks"));

let taskElements = tasks.map(function (element) {
  let taskObj = JSON.parse(element);
  return createTask(taskObj.name);
});

container.append(...taskElements);

function createTask(inputValue) {
  //   if (input.value === "") {
  //     alert("Please fill in task");
  //   } else {
  //let task = input.value;
  let list = document.createElement("li");
  list.innerText = inputValue;
  //Adding task to local storage
  // addingToLocalStorage(task);
  //container.appendChild(list);

  let span = document.createElement("span");
  list.appendChild(span);

  let completeIcon = document.createElement("input");
  completeIcon.setAttribute("type", "checkbox");
  span.appendChild(completeIcon);

  let editIcon = document.createElement("i");
  editIcon.classList.add("bx", "bxs-edit-alt");
  span.appendChild(editIcon);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bx", "bxs-trash");
  span.appendChild(deleteIcon);

  input.value = "";

  // add event listeners to the icons

  deleteIcon.addEventListener("click", (e) => {
    list.style.padding = "5px 10px";
    list.remove();
  });

  completeIcon.addEventListener("click", (e) => {
    if (e.target.checked === true) {
      list.style.textDecoration = "line-through";
      list.style.padding = "5px 10px";
    } else {
      list.style.textDecoration = "none";
    }
  });
  editIcon.addEventListener("click", (e) => {
    list.contentEditable = true;
    list.style.padding = "5px 10px";
    list.focus();
  });

  return list;
}
//}

//Adding Task

function addTask() {
  let task = input.value;
  addingToLocalStorage(task);
  let list = createTask(task);
  console.log(list);
  container.appendChild(list);
}

function addingToLocalStorage(task) {
  let taskObject = {
    name: task,
    complete: false,
  };

  let stringObject = JSON.stringify(taskObject);

  let savedTasks = localStorage.getItem("tasks");

  if (savedTasks === null) {
    let tasks = [];
    tasks.push(stringObject);

    let stringTask = JSON.stringify(tasks);

    localStorage.setItem("tasks", stringTask);
  } else {
    let oldTasks = JSON.parse(savedTasks);

    oldTasks.push(stringObject);

    let newTasks = JSON.stringify(oldTasks);

    localStorage.setItem("tasks", newTasks);
  }
}

//addevent listeners
