
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#projectlink').addEventListener('click', function() {
        window.location.href = 'https://github.com/helloyanis?tab=repositories';
    });
    let url = 'https://api.github.com/search/repositories?q=user:helloyanis+fork:false&sort=stars&per_page=10&type=Repositories';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let projectsSection = document.getElementById('projectlist');
            document.querySelector(".loading").remove();
            data.items.forEach(repo => {
                let projectDiv = document.createElement('div');
                projectDiv.className = 'project';

                let projectTitle = document.createElement('h3');
                projectTitle.textContent = repo.name;
                projectDiv.appendChild(projectTitle);

                let projectDescription = document.createElement('p');
                projectDescription.textContent = repo.description || 'No description provided';
                projectDiv.appendChild(projectDescription);

                projectsSection.appendChild(projectDiv);
                projectDiv.addEventListener('click', function () {
                    window.location.href = `https://github.com/${repo.full_name}`;
                });
            });
        })
        .catch(error => console.error('Error:', error));
});