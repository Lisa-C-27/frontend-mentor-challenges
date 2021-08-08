var trigger = document.getElementsByClassName('accordion');
var i;
var x;

for (i = 0; i < trigger.length; i++) {
    trigger[i].addEventListener('click', function(e) {
        e.preventDefault();
        var current = document.getElementsByClassName('active');
        
        // If this is not the element that is already active - then remove the class active
        if(!this.classList.contains('active')) {
            if(current.length != 0) {
                current[0].classList.remove('active');
            }
        }
        this.classList.toggle('active')
    });
}