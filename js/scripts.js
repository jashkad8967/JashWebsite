// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission using Formspree
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://formspree.io/f/xldjglka', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you! Your message has been sent successfully.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    }).catch(error => {
        alert('Oops! Something went wrong. Please try again.');
    });
});

// Add entrance animation on scroll
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.2
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
