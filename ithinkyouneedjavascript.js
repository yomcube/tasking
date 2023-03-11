var routineUl = document.getElementById('routineul');
var otherUl = document.getElementById('otherul');

function addNewTask(type, task) {
	if(task == null || task == "" || task == " ") {
		return;
	}
	var newelem = document.createElement("li");
	newelem.innerHTML = task + ' <button class="removebutton" onclick="removeTask(this.parentNode)">&#10007;</button>';
	switch(type) {
		case "o":
			otherUl.appendChild(newelem);
			break;
		case "r":
		default:
			routineUl.appendChild(newelem);
	}
}
function removeTask(elem) {
	elem.remove();
}
function saveTasks() {
	localStorage.setItem("routine", routineUl.getElementsByTagName("li"));
	localStorage.setItem("other", otherUl.getElementsByTagName("li"));
}
function loadTasks() {
	routineUl.innerHTML = localStorage.getItem("routine");
	otherUl.innerHTML = localStorage.getItem("other");
}