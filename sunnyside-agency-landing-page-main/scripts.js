var element = document.getElementById('main-nav');
var trigger = document.getElementById('toggle-nav');

trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('menu-active');
    trigger.classList.toggle('active')
});