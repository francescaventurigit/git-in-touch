document.addEventListener("DOMContentLoaded", () => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((projects) => {
      const projectList = document.getElementById("projects-list");
      projects.forEach((project) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${project.title}: ${project.description}`;
        projectList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error loading projects:", error));
});
