var regularUl      = document.getElementById("regular");
var regularTasks   = regularUl.getElementsByTagName("li");

var todoUl         = document.getElementById("todo");
var todoTasks      = todoUl.getElementsByTagName("li");

function addNewTask(type, task) {
	if(task == null || task == "" || task == " ") {
		return;
	}
	var newelem = document.createElement("li");
	newelem.innerHTML = task + ' <button class="removebutton" onclick="removeTask(this.parentNode)">-</button>';
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
function removeTask(elem) {
	elem.remove();
}