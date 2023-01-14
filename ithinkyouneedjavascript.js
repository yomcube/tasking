var regularUl      = document.getElementById("regular");
var regularTasks   = regularUl.getElementsByTagName("li");

var todoUl         = document.getElementById("todo");
var todoTasks      = todoUl.getElementsByTagName("li");

function addNewTask(type, task) {
	if(task == "" || task == " ") {
		return;
	}
	var newelem = document.createElement("li");
	newelem.innerHTML = task;
	switch(type) {
		case "t":
			newelem.id = `todo${todoTasks.length}`;
			todoUl.appendChild(newelem);
			break;
		case "r":
		default:
			newelem.id = `regular${regularTasks.length}`;
			regularUl.appendChild(newelem);
	}
}
function addNewRegularTask() {
	task = prompt("Enter the task below", "");
	addNewTask("r", task);
}
function addNewTodoTask() {
	task = prompt("Enter the task below", "");
	addNewTask("t", task);
}
function removeTask(elem) {
	elem.remove();
}