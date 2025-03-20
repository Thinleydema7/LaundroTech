document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu");

    // Create the menu dynamically if not already in HTML
    let navMenu = document.querySelector(".nav-menu");
    if (!navMenu) {
        navMenu = document.createElement("div");
        navMenu.classList.add("nav-menu");

        navMenu.innerHTML = `
            <ul>
                            <li class="close-btn">&times;</li>

                <li><a href="home.html">Home</a></li>
                <li><a href="services.html">Services & Pricing</a></li>
                <li><a href="info.html">Contact Info</a></li>
            </ul>
        `;

        document.body.appendChild(navMenu);
    }

    // Toggle menu on click
    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu on "X" click
    document.querySelector(".close-btn").addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

    const bookButton = document.querySelector(".bookbutton");  // Target the button by class name

    if (bookButton) {
        bookButton.addEventListener("click", function () {
            // Check the current text of the button and change accordingly
            if (bookButton.textContent === "BOOK NOW!") {
                bookButton.textContent = "BOOKED!";  // Change text to BOOKED
            } else if (bookButton.textContent === "BOOKED!") {
                window.location.href = "home.html";  // Redirect to home page
            }
        });
    }
});
