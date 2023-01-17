var regularUl      = document.getElementById("regular");
var regularTasks   = regularUl.getElementsByTagName("li");

var todoUl         = document.getElementById("todo");
var todoTasks      = todoUl.getElementsByTagName("li");

function addNewTask(type, task) {
	if(task == null || task == "" || task == " ") {
		return;
	}
	var newelem = document.createElement("li");
	newelem.innerHTML = task + ' <button class="removebutton" onclick="removeTask(this.parentNode)">&#10007;</button>';
	switch(type) {
		case "t":
			todoUl.appendChild(newelem);
			break;
		case "r":
		default:
			regularUl.appendChild(newelem);
	}
}
function removeTask(elem) {
	elem.remove();
}