/* Revelar o Scroll */

let reveals = document.querySelectorAll('.reveal')

function reveal() {
    reveals.forEach(reveal => {
        let windowHeight = window.innerHeight
        let elementTop = reveal.getBoundingClientRect().top;
        let elementVisible = 150;

        if(elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active')
        }else{
            reveal.classList.remove('active')

        }
    })
}


window.addEventListener('scroll',reveal)
