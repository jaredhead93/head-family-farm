// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("xeAYerbiYQSpVLzyD");

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('service_8vwyjld', 'template_wti7t2w', this)
                .then(function() {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    console.error('Failed to send email:', error);
                    alert('There was an error sending your message. Please try again later.');
                });
        });
    }

    // Example: Toggle visibility of product categories (if applicable)
    const categoryLinks = document.querySelectorAll('.categories a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = event.target.getAttribute('href').substring(1);
            const products = document.querySelectorAll('.product-item');
            products.forEach(product => {
                if (product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
