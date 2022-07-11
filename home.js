
function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Your form has been successfully submitted ')
}


let form = document.querySelector('#contact'); 

form.addEventListener('submit', handleSubmit);

// Add mouseover function and queryselector 
let image = document.querySelector('img')
image.addEventListener('mouseover',(event) =>{
	alert("You are purr-fect!")
});