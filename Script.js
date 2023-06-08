let taskList = document.getElementById("task-list");
    let taskInput = document.getElementById("input-task");
    let addBtn = document.getElementById("add-task-button");
  
    addBtn.addEventListener("click", function () {
        let newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type", "checkbox");
        newCheckbox.classList.add("check");
        newCheckbox.setAttribute("onclick", "checkTask(this)");

        let newTask = document.createElement("span");
        newTask.classList.add("task");
        newTask.textContent = taskInput.value;

        let newDel = document.createElement("button");
        newDel.setAttribute("type", "submit");
        newDel.classList.add("delete-btn");
        newDel.setAttribute("onclick", "delTask(this)");
        

        let newItem = document.createElement("li");
        newItem.appendChild(newCheckbox);
        newItem.appendChild(newTask);
        newItem.appendChild(newDel);

        taskList.appendChild(newItem);
        taskInput.value = "";

        updateStoredTask();
    })

    function delTask(e) {
        let listItem = e.parentNode;
        taskList.removeChild(listItem);
        updateStoredTask();
    }
    function checkTask(e) {
        let task = e.parentNode.querySelector("span");
        task.classList.toggle("strike-task");
        updateStoredTask()
    }

    function getStoredTask() {
        return localStorage.getItem("tasks") || [];
    }

    function updateStoredTask() {
        let storedTask = taskList.innerHTML;
        localStorage.setItem("tasks", storedTask);
    }

    window.onload =function () {
        if (getStoredTask()) {
            taskList.innerHTML = getStoredTask();
        }
    }