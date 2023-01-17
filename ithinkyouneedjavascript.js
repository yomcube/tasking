var routineUl = document.getElementById("rotine");
var otherUl = document.getElementById("other");

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