function validateEmail() {
    var email = document.getElementById("email").value;
    // Source: https://regexr.com/2rhq7
    var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    var check = regex.test(email);
    
    if(check == false) {
        document.getElementById("error-message").innerText = 'Please enter a valid email address';
    }
    else {
        document.getElementById("sign-up").innerHTML = '<p class="success">Success! Thank you.</p>';
    }
}

document.addEventListener("scroll", stickyNav);

function stickyNav() {
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    var header = document.getElementById("header");

    if(scrollPos > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

//  Animate elements when they come into view
//  Sources: 
//  https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//  https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/

let observer = new IntersectionObserver(
    (entries, observer) => { 
      entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
        else {
            if (entry.target.classList.contains('in-view')) {
            entry.target.classList.remove('in-view');
            }
        }
      });
    },
    {threshold: "0.3"}
);
window.addEventListener("load", (event) => {
    document.querySelectorAll('.animate').forEach(section => { 
        observer.observe(section) 
    });
});