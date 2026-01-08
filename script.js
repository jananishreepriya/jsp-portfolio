// ====================
// Navbar Toggle
// ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ====================
// Smooth Scroll
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

// ====================
// Typewriter Effect
// ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

const typewriter = document.querySelector('.typewriter');
const roles = typewriter.dataset.text.split(',');
let roleIndex = 0;

function cycleRoles() {
    typewriter.textContent = '';
    typeWriter(typewriter, roles[roleIndex]);
    roleIndex = (roleIndex + 1) % roles.length;
}
cycleRoles();
setInterval(cycleRoles, 4000);

// ====================
// Scroll Reveal
// ====================
const reveals = document.querySelectorAll('.reveal');
function reveal() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);

// ====================
// Skill Bars Animation
// ====================
function animateSkills() {
    const progresses = document.querySelectorAll('.skill-progress');
    progresses.forEach(progress => {
        if (!progress.style.width) {
            const width = progress.dataset.width;
            progress.style.width = width + '%';
        }
    });
}
window.addEventListener('scroll', animateSkills);

// ====================
// Project Links
// ====================
document.querySelectorAll('.project-card[data-link]').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.dataset.link;
        if (link) window.open(link, '_blank');
    });
});

// ====================
// Resume function
// ====================
function viewResume() {
    window.open('resume.html', '_blank');
}

// ====================
// Navbar Active on Scroll
// ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= (sectionTop - 200) && scrollY < (sectionTop + sectionHeight - 200)) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
