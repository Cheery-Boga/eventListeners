

function changeToggleButton() {

	let toggleButton = document.getElementById("toggleButton");
	
	if(toggleButton.value === "ON") {
		toggleButton.value = "OFF"; 

		} else {
			toggleButton.value = "ON"; 
	}
}

		document.getElementById("toggleButton").addEventListener("click", changeToggleButton);

function makeBoxGreen(){
	
	if(toggleButton.value === "ON"){
		document.getElementById("changeColors").style.backgroundColor = "green";
	}	
}

		document.getElementById("changeColors").addEventListener("mouseover", makeBoxGreen);

function makeBoxRed(){
	
	if(toggleButton.value === "ON"){
		document.getElementById("changeColors").style.backgroundColor = "red";
	}	
}

		document.getElementById("changeColors").addEventListener("mouseleave", makeBoxRed);