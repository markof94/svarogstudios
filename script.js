function femiTrigger(){
	var triggerText = document.getElementById("trigger-text");
	
	triggerText.innerHTML = "STOP TRIGGERING ME!";
}

function femiUntrigger(){
	var triggerText = document.getElementById("trigger-text");
	
	triggerText.innerHTML = "";
}

$(document).ready(function(){
	$("#myCarousel").carousel({interval: 4500});
});