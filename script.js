document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll(".days li");

    days.forEach(day => {
        day.addEventListener("click", function() {
            // Toggle class for flipping effect
            this.classList.toggle("flip");

            // Get event description from data-event attribute
            const eventDescription = this.getAttribute("data-event");

            // Check if the current day has an event description
            if (eventDescription) {
                // Check if the day is flipped
                if (this.classList.contains("flip")) {
                    // Show event description on the back side
                    this.innerHTML = `<span class="event-desc">${eventDescription}</span>`;
                } else {
                    // Show only the day number on the front side
                    this.innerHTML = this.textContent;
                }
            }
        });
    });
});
