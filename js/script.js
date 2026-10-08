// Contact form validation and preview
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        formFeedback.textContent = "Please enter your name.";
        return;
    }

    if (message === "") {
        formFeedback.textContent = "Please enter a message.";
        return;
    }

    if (!contactForm.checkValidity()) {
        formFeedback.textContent = "Please enter a valid email address.";
        return;
    }

    formFeedback.textContent =
        "Your data was validated successfully. " +
        "Name: " + name +
        " | Email: " + email +
        " | Message: " + message;
});
// Theme switch
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});
// Project and skills search
const projectSearch = document.getElementById("projectSearch");
const projects = document.querySelectorAll(".project");

projectSearch.addEventListener("input", function() {
    const searchText = projectSearch.value.toLowerCase();

    projects.forEach(function(project) {
        const projectText = project.textContent.toLowerCase();

        if (projectText.includes(searchText)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
});
// Mobile navigation
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", function() {
    mainNav.classList.toggle("show-menu");

    if (mainNav.classList.contains("show-menu")) {
        menuButton.textContent = "✕ Close Menu";
    } else {
        menuButton.textContent = "☰ Menu";
    }
});