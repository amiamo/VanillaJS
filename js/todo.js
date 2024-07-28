const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteThisToDo(event) {
    const toDoItem = event.target.parentElement;
    const toDoText = toDoItem.querySelector("label").innerText;
    toDos = toDos.filter(toDo => toDo.text !== toDoText);
    saveToDos();
    toDoList.removeChild(toDoItem);
}

function doneThisToDo(event) {
    const label = event.target.nextSibling;
    const toDoText = label.innerText;
    const toDo = toDos.find(toDo => toDo.text === toDoText);
    if (toDo) {
        toDo.done = event.target.checked;
        saveToDos();
        if (event.target.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
}

function paintToDo(newToDoObj) {
    const addToDo = document.createElement("div");
    const label = document.createElement("label");
    const check = document.createElement("input");
    const deleteToDo = document.createElement("button");

    label.setAttribute("for", newToDoObj.text);
    label.innerText = newToDoObj.text;
    check.setAttribute("id", newToDoObj.text);
    check.setAttribute("type", "checkbox");
    check.checked = newToDoObj.done;
    if (newToDoObj.done) {
        label.style.textDecoration = "line-through";
    }
    deleteToDo.innerText = "❌";
    deleteToDo.addEventListener("click", deleteThisToDo);
    check.addEventListener("change", doneThisToDo);

    addToDo.appendChild(check);
    addToDo.appendChild(label);
    addToDo.appendChild(deleteToDo);
    toDoList.appendChild(addToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoText = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDoText,
        done: false
    };
    toDos.push(newToDoObj);
    saveToDos();
    paintToDo(newToDoObj);
}

function loadToDos() {
    const savedToDos = localStorage.getItem("todos");
    if (savedToDos) {
        toDos = JSON.parse(savedToDos);
        toDos.forEach(paintToDo);
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);
window.addEventListener("load", loadToDos);