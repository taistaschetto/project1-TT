window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectUuid = urlParams.get('uuid');

    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
        .then(response => response.json())
        .then(data => {
            const project = data.find(p => p.uuid === projectUuid);
            if (project) {
                displayProjectDetails(project);
            } else {
                alert("Project not found.");
            }
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
};

function displayProjectDetails(project) {
}

function displayProjectDetails(project) {
    const projectDetailsElement = document.getElementById('projectDetails');

    projectDetailsElement.innerHTML = `
        <h1>${project.name}</h1>
        <p>${project.description}</p>
        <div>${project.content}</div>
        <img src="${project.image}" alt="${project.name}" />
        <p>Completed on: ${project.completed_on}</p>
    `;
}