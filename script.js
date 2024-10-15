// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add more JavaScript functionality as needed
    // Example: Toggle visibility of product categories
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
