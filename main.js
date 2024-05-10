hamburger = document.querySelector(".hamburger")
hamburger.onclick = function() {
    navbar = document.querySelector(".nav-bar")
    navbar.classList.toggle("active")
}

let not_available = document.getElementById('not-available')

not_available.addEventListener('click', () => {
    alert('Would be available in 6 hours time!');
})

let Name = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let message = document.getElementById('message')
let button = document.getElementById('btn')
