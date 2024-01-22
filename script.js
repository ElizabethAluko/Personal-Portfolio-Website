function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menu-icon');
    menu.classList.toggle('active');
    menuIcon.innerHTML = menu.classList.contains('active') ? '&#10006;' : '&#9776;';
}
