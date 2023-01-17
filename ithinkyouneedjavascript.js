var everydayUl = document.getElementById("everyday");
// We don't need this (yet)
//var everydayTasks   = everydayUl.getElementsByTagName("li");

var plainUl = document.getElementById("plain");
// We don't need this (yet)
//var plainTasks      = plainUl.getElementsByTagName("li");

function addNewTask(type, task) {
	if(task == null || task == "" || task == " ") {
		return;
	}
	var newelem = document.createElement("li");
	newelem.innerHTML = task + ' <button class="removebutton" onclick="removeTask(this.parentNode)">&#10007;</button>';
	switch(type) {
		case "p":
			todoUl.appendChild(newelem);
			break;
		case "o":
		default:
			regularUl.appendChild(newelem);
	}
}
function removeTask(elem) {
	elem.remove();
}