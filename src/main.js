document.addEventListener('DOMContentLoaded', (event) => {
    const contactBtns = document.getElementsByClassName('contactButton');
    Array.from(contactBtns).forEach((btn) => {
        btn.addEventListener('click', function() {
            window.open('contact.html', '_blank'); // Adjust the URL as needed
        });
    });
});
  