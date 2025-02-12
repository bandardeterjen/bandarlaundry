// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// FAQ Dropdown
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Replace '1234567890' with your WhatsApp number (including country code)
    const phoneNumber = '+6285773009666'; // Example: +1234567890

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab or window
    window.open(whatsappUrl, '_blank');
});
