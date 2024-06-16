
function myFunction (){
 var navbar = document.getElementById ('nav');
 navbar.classList.toggle('show');
 const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
link.addEventListener('click', (event) => {
event.preventDefault(); // prevent default link behavior
const section = document.querySelector(event.target.hash); // select the corresponding section
const activeSection = document.querySelector('.active'); // select the previously active section
if (activeSection) {
 activeSection.classList.remove('active'); // remove the active class from previously active section
}
section.classList.add('active'); // add the active class to the corresponding section
});
});

} 

let changeIcon = function(icon){
    icon.classList.toggle('fa-times')
}