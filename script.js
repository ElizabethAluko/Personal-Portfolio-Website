document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
    this.innerHTML = menu.classList.contains('active') ? '&#10006;' : '&#9776;';
});
