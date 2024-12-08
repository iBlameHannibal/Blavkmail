// Scroll to Section on Button Click
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Animation on Scroll
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('.service-card');
    let windowHeight = window.innerHeight;
    
    sections.forEach(function(section) {
        let sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Add Fade-in Effect for Service Cards
const style = document.createElement('style');
style.innerHTML = `
    .service-card {
        opacity: 0;
        transition: opacity 1s ease-out;
    }
    
    .service-card.visible {
        opacity: 1;
    }
`;
document.head.appendChild(style);
