// const taskbox = document.querySelector(".tasks");


// document.getElementById('myForm').addEventListener('submit', function(event) {
//     // Prevent the default form validation
//     event.preventDefault();

//     // Get the value of the input field
//     var inputValue = document.getElementById('myInput').value;
//     var newTaskDiv = document.createElement("div");

//     var p = document.createElement("p");
//     var buttonsdiv = document.createElement("div");
//     var button1 = document.createElement("button");
//     var button2 = document.createElement("button");

//     newTaskDiv.classList.add("newtask");
//     buttonsdiv.classList.add("buttons");
//     button1.classList.add("edit");
//     button2.classList.add("delete");

//     button1.innerHTML = "edit";
//     button2.innerHTML = "delete";
//     p.innerHTML = inputValue;
//     newTaskDiv.appendChild(p);
//     newTaskDiv.appendChild(buttonsdiv);
//     buttonsdiv.appendChild(button1);
//     buttonsdiv.appendChild(button2);
//     taskbox.appendChild(newTaskDiv);
//     this.submit();

// });


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var inputValue = document.getElementById('myInput').value;
    if (inputValue) { // Check if the input value is not empty
        createTask(inputValue); // Create the task div
        saveTasks(); // Save tasks to localStorage
        this.submit();
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        var taskContent = event.target.parentNode.previousElementSibling.textContent;
        deleteTask(taskContent);
    }
});



// Function to create a new task div
function createTask(taskContent) {
    var taskbox = document.querySelector(".tasks");
    var newTaskDiv = document.createElement("div");
    var p = document.createElement("p");
    var buttonsdiv = document.createElement("div");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");

    newTaskDiv.classList.add("newtask");
    buttonsdiv.classList.add("buttons");
    button1.classList.add("edit");
    button2.classList.add("delete");

    button1.innerHTML = "edit";
    button2.innerHTML = "delete";
    p.innerHTML = taskContent;

    newTaskDiv.appendChild(p);
    newTaskDiv.appendChild(buttonsdiv);
    buttonsdiv.appendChild(button1);
    buttonsdiv.appendChild(button2);
    taskbox.appendChild(newTaskDiv);
}

// Function to delete a task from the DOM and localStorage
function deleteTask(taskContent) {
    // Remove the task from the DOM
    var tasks = document.querySelectorAll(".tasks .newtask p");
    tasks.forEach(function(task) {
        if (task.textContent === taskContent) {
            task.parentNode.parentNode.remove();
        }
    });

    // Remove the task from localStorage
    var tasksArray = JSON.parse(localStorage.getItem('tasks'));
    var taskIndex = tasksArray.indexOf(taskContent);
    if (taskIndex !== -1) {
        tasksArray.splice(taskIndex, 1); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(tasksArray)); // Update localStorage
    }
}


// Function to load tasks from localStorage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(createTask);
    }
}

// Load tasks when the page loads
document.addEventListener('DOMContentLoaded', loadTasks);

