function helloWorld() {
	alert("Hello, world!");
}

function bigger() {
	document.getElementById("Text").style.fontSize = "24px";
}

function moo() {
	var text = document.getElementById("Text");
	var words = text.value.split(".");
	text.value = words.join("-Moo. ");
	text.value = text.value.toUpperCase();
}

function radioFancy() {
	var text = document.getElementById("Text");
	text.style.fontWeight = "bold";
	text.style.color = "blue";
	text.style.textDecoration = "underline";
}

function radioBoring() {
	document.getElementById("Text").style = "";
}
