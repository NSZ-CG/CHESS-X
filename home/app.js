// Initialize Swup
const swup = new swup();  // This will enable the default behavior

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const logo = document.getElementById("logo");

    button.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Add the class to animate
        document.body.classList.add("is-transitioning");

        // After the animation completes (1s in this case), transition to the next page
        setTimeout(() => {
            // Initialize Swup to handle the page transition
            const swup = new Swup();
            swup.loadPage({ url: button.parentNode.href });
        }, 1000); // Ensure the delay matches the CSS animation time
    });
});