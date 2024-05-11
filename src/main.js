document.addEventListener('DOMContentLoaded', (event) => {
    const contactBtn = document.getElementsByClassName('contactButton');
    if (contactBtn) {
      contactBtn.addEventListener('click', function() {
        window.location.href = 'contact.html'; // Adjust the URL as needed
      });
    }
  });
 
  