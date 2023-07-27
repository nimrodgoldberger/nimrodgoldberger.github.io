// Define an array of objects representing each project
const projects = [
    {
        name: "Project 1",
        description: "This is the first project",
        imageSrc: "path/to/image1.jpg",
        githubLink: "https://github.com/user/repo1"
    },
    {
        name: "Project 2",
        description: "This is the second project",
        imageSrc: "path/to/image2.jpg",
        githubLink: "https://github.com/user/repo2"
    },
    {
        name: "Project 3",
        description: "This is the third project",
        imageSrc: "path/to/image3.jpg",
        githubLink: "https://github.com/user/repo3"
    }
];

// Get the container element where we will append the project elements
const container = document.getElementById("projects-container");

// Loop through the projects array and create HTML elements for each project
projects.forEach(project => {
    // Create a div element to hold the project information
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    // Create an h2 element for the project name
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = project.name;
    projectDiv.appendChild(nameHeading);

    // Create a p element for the project description
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = project.description;
    projectDiv.appendChild(descriptionParagraph);

    // Create an img element for the project image
    const image = document.createElement("img");
    image.src = project.imageSrc;
    projectDiv.appendChild(image);

    // Create a link element for the GitHub repository
    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.textContent = "GitHub Repository";
    projectDiv.appendChild(githubLink);

    // Append the project div to the container element
    container.appendChild(projectDiv);
});
