//select elements
let toggleBar = document.querySelector('.toggle-bar');
let navlink = document.querySelector('.navlink');

toggleBar.onclick = function() {
    navlink.classList.toggle("active");
};