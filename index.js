
var todoList = JSON.parse(localStorage.getItem("todoList")) || [];


document.querySelector("#button").addEventListener("click", function () {
    let taskInput = document.querySelector("#input-element").value.trim();
    let dueTime = document.querySelector("#input-time").value;
    let dueDate = document.querySelector("#input-date").value;

    let btn = this;
   btn.classList.add("button-animate");
    setTimeout(function() {
     btn.classList.remove("button-animate");
    }, 100);

    if (taskInput === "" || dueDate === "" || dueTime === "") {
        alert("Please enter a task and select a due date and time");
        return;
    }

    
    todoList.push({ task: taskInput, date: dueDate, time: dueTime });

    localStorage.setItem("todoList", JSON.stringify(todoList));
    document.querySelector("#input-element").value = "";
    document.querySelector("#input-time").value = "";

    document.querySelector("#input-date").value = "";
    renderTodoList();
});

function renderTodoList() {
    let resultContainer = document.querySelector("#show-result");
    resultContainer.innerHTML = ""; 

    todoList.forEach((item, index) => {
        let taskItem = document.createElement("div");
        taskItem.innerHTML = `${item.task},  ${item.time},   ${item.date} 
        <button id="remove-button" onclick="removeTask(${index})">Delete</button>`;
        resultContainer.appendChild(taskItem);
    });
}

function removeTask(index) {
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderTodoList();
}

renderTodoList();
