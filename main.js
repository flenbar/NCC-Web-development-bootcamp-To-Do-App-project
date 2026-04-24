function addTask(){
let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.className = "complete-btn";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

