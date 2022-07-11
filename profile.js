//Build functions
function favColor(evt) {
	alert('My favorite color is orange')
}

function favPlace(evt) {
	alert('My favorite place is MoMA')
}

function favRitual(evt) {
	alert('My favorite ritual is my skin care routine')
}

// Color event listener
let color = document.querySelector('#color');
color.addEventListener('click', favColor);

// Place event listener
let place = document.querySelector('#place');
place.addEventListener('click', favPlace);

// Ritual event listener
let ritual = document.querySelector('#ritual');
ritual.addEventListener('click', favRitual);