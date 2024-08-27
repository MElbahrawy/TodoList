let txt = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let tasksList = document.querySelector("#tasks-list");
let Tasks = 1;

// create element function
function createElement(type, txt) {
  let el = document.createElement(type);
  let elTxt = document.createTextNode(txt);
  el.appendChild(elTxt);
  return el;
}

function addTask(title) {
  if (title.length > 0) {
    // li
    let li = document.createElement("li");
    li.id = Tasks;
    li.classList.add("task");
    // div (selected-task)
    let div = document.createElement("div");
    div.classList.add("select-task");
    // input (checkbox)
    let check = document.createElement("input");
    check.type = "checkbox";
    check.id = Tasks;
    check.classList.add("form-check-input");
    check.classList.add("me-2");
    // create the label
    let lbl = createElement("label", title);
    lbl.for = Tasks;
    // append checkbox and label to the div
    div.appendChild(check);
    div.appendChild(lbl);
    // delete btn
    let del = createElement("button", "X");
    del.id = Tasks;
    del.classList.add("btn");
    del.setAttribute("onclick", "deleteTask(this)");
    // add hr
    let hr = document.createElement("hr");
    // append the div and the delete to the li
    li.appendChild(div);
    li.appendChild(del);
    li.appendChild(hr);
    Tasks++;
    return li;
  }
  return 0;
}
// on add task
btn.onclick = () => {
  let task = txt.value;
  let taskItem = addTask(task);
  taskItem != "" ? tasksList.appendChild(taskItem) : null;
  txt.value = "";
};

function deleteTask(taskBtn) {
  // let AllTasks = document.querySelectorAll("#tasks-list .task");
  // console.log(AllTasks);
  // AllTasks.map((task) => {
  //   if (taskBtn.id == task.id) task.innerHTML = "";
  // });
  taskBtn.parentElement.remove();
}
