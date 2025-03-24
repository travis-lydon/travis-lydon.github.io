document.addEventListener("DOMContentLoaded", function () {
    fetch("assets/js/projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById("projects-container");
            projects.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("project");

                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <p><strong>Categories:</strong> ${project.categories.join(", ")}</p>
                    <p><strong>Tags:</strong> ${project.tags.join(", ")}</p>
                    <div class="gallery">
                        ${project.gallery.map(image => `<img src="${image}" alt="${project.title} image">`).join("")}
                    </div>
                `;

                container.appendChild(projectElement);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
});
