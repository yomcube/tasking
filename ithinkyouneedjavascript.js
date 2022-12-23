var regularUl      = document.getElementById("regular");
var regularTasks   = regularUl.getElementsByTagName("li");

var todoUl         = document.getElementById("todo");
var todoTasks      = todoUl.getElementsByTagName("li");

var immediateUl    = document.getElementById("immediate");
var immediateTasks = immediateUl.getElementsByTagName("li");

function addNewTask(type, task) {
	var newelem = document.createElement("li");
	newelem.innerHTML = task;
	switch(type) {
		case "i":
			immediateUl.appendChild(newelem);
			break;
		case "t":
			todoUl.appendChild(newelem);
			break;
		case "r":
		default:
			regularUl.appendChild(newelem);
	}
}
addNewTask("i", "Eat Bugle")
