let receiveBtn = document.getElementById('receive'),
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	nameInput = document.querySelector('.contactform_name'),
	text = document.getElementsByName('message') [0];

receiveBtn.addEventListener("click", function() {
	modal.style.display = "block";
});

close.addEventListener("click", function() {
	modal.style.display = "none";
});

nameInput.addEventListener("input", function() {
	text.value = "Меня зовут " + nameInput.value + ". Я хочу спросить:";
	if (nameInput.value == ""){
		text.value = ""
	}
});

