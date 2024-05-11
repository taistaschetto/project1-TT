// eventListener for contact us button
document.addEventListener('DOMContentLoaded', (event) => {
    const contactBtns = document.getElementsByClassName('contactButton');
    Array.from(contactBtns).forEach((btn) => {
        btn.addEventListener('click', function() {
            window.open('contact.html', '_blank');
        });
    });
});
 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('Phone').value;
      const message = document.getElementById('message').value;
  
      if (name.toLowerCase() === 'ironhack') {
        alert('You cannot be Ironhack, because I am Ironhack.');
        return false; // Stop the form submission
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
      }
  
      if (!phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) || phone === '') {
        alert('Please enter a valid phone number.');
        return false;
      }
  
      if (!message.trim()) {
        alert('Please enter your message.');
        return false;
      }
  
      form.submit();
    });
  });





/* const rootElement = document.getElementById('root'); 

projects.forEach(project => {
  const projectElement = document.createElement('div');
  projectElement.innerHTML = `
    <h2>${project.name}</h2>
    <p>${project.description}</p>
    <p>${project.content}</p>
    <img src="${project.image}" alt="${project.name}">
    <p>Completed on: ${project.completed_on}</p>
  `;
  rootElement.appendChild(projectElement);
});

const specificProject = data.find(project => project.uuid === "1");
if (specificProject) {
}

 */