function addNewTask(type, task) {
	if(task == null || task == "" || task == " ") {
		return;
	}
	var newelem = document.createElement("li");
	newelem.innerHTML = task + ' <button class="removebutton" onclick="this.parentNode.remove();">&#10007;</button>';
	if (type == 'o') {
		document.getElementById("otherul").appendChild(newelem);
	} else if (type == 'r') {
		document.getElementById("routineul").appendChild(newelem);
	} else {
		console.log('Error E0001')
	}
}
function saveTasks() {
	localStorage.setItem("routine", routineUl.getElementsByTagName("li"));
	localStorage.setItem("other", otherUl.getElementsByTagName("li"));
}
function loadTasks() {
	document.getElementById("routineul").innerHTML = localStorage.getItem("routine");
	document.getElementById("otherul").innerHTML = localStorage.getItem("other");
}