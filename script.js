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

document.addEventListener('DOMContentLoaded', () => {
    const newBlogBtn = document.getElementById('new-blog-btn');
    const modal = document.getElementById('blog-editor-modal');
    const closeModal = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancel-btn');
    const blogForm = document.getElementById('blog-form');
    const blogPostsContainer = document.getElementById('blog-posts');

    newBlogBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel?')) {
            modal.style.display = 'none';
            blogForm.reset();
        }
    });

    blogForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (confirm('Are you sure you want to submit this blog post?')) {
            const title = document.getElementById('blog-title').value;
            const date = document.getElementById('blog-date').value;
            const image = document.getElementById('blog-image').files;
            const content = document.getElementById('blog-content').value;

            const reader = new FileReader();
            reader.onload = function(e) {
                const blogPost = document.createElement('div');
                blogPost.classList.add('blog-post');
                blogPost.innerHTML = `
                    <img src="${e.target.result}" alt="${title}">
                    <h3>${title}</h3>
                    <p>Posted on ${date}</p>
                    <p>${content}</p>
                `;
                blogPostsContainer.appendChild(blogPost);
                modal.style.display = 'none';
                blogForm.reset();
            };
            reader.readAsDataURL(image);
        }
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});