function toggleNav() {
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");

const navToggle = document.getElementById("nav-toggle");
navToggle .onclick = toggleNav;

}