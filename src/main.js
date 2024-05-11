document.addEventListener('DOMContentLoaded', (event) => {
    const contactBtns = document.getElementsByClassName('contactButton');
    Array.from(contactBtns).forEach((btn) => {
        btn.addEventListener('click', function() {
            window.location.href = 'contact.html'; // Adjust the URL as needed
        });
    });
});
  