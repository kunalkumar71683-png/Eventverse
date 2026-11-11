
// =================================
// EVENTVERSE - CLUB FILTER SYSTEM
// =================================

// Select all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Select all club cards
const clubCards = document.querySelectorAll(".club-card");

// Select message area
const clubMessage = document.querySelector("#club-message");


// Add click event to every filter button

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected category
        const selectedFilter = button.dataset.filter;

        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Highlight selected button
        button.classList.add("active");


        // Check every club card
        clubCards.forEach(function (card) {

            const clubCategory = card.dataset.category;

            // Show all clubs
            if (
                selectedFilter === "all" ||
                selectedFilter === clubCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });


        // Update message
        clubMessage.textContent =
            selectedFilter === "all"
                ? "Discover your passion. Join your community."
                : "Explore our " + selectedFilter + " clubs!";

    });

});


// =================================
// JOIN CLUB BUTTON SYSTEM
// =================================

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const clubName = button.dataset.club;

        alert(
            "Welcome to " + clubName +
            "! Club registration will be available soon."
        );

    });

});



// ======================================
// EVENTVERSE - EVENT REGISTRATION SYSTEM
// ======================================

// Select the registration form
const eventForm = document.querySelector("#event-form");

// Select success message
const successMessage = document.querySelector("#success-message");


// Listen for form submission

eventForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get student information

    const studentName =
        document.querySelector("#student-name").value.trim();

    const studentEmail =
        document.querySelector("#student-email").value.trim();

    const studentId =
        document.querySelector("#student-id").value.trim();

    const selectedEvent =
        document.querySelector("#event-choice").value;

    const studentYear =
        document.querySelector("#student-year").value;

    const termsAccepted =
        document.querySelector("#terms").checked;


    // BASIC VALIDATION

    if (studentName.length < 3) {

        alert("Please enter a valid full name.");
        return;

    }


    if (studentId.length < 3) {

        alert("Please enter a valid registration number.");
        return;

    }


    if (!selectedEvent) {

        alert("Please select an event.");
        return;

    }


    if (!studentYear) {

        alert("Please select your year of study.");
        return;

    }


    if (!termsAccepted) {

        alert("Please accept the terms and conditions.");
        return;

    }


    // REGISTRATION SUCCESS

    successMessage.textContent =
        "🎉 Registration Successful!\n\n" +
        "Welcome, " + studentName + "!\n" +
        "Event: " + selectedEvent + "\n" +
        "Year: " + studentYear + "\n\n" +
        "Your demo registration has been received.";

    successMessage.classList.add("show");

    // Reset the form
    eventForm.reset();

});

// EVENT COUNTDOWN TIMER

// Set the event date
const eventDate = new Date("December 20, 2026 18:00:00").getTime();

// Update countdown every second
const countdown = setInterval(function () {

    // Get current time
    const now = new Date().getTime();

    // Calculate remaining time
    const difference = eventDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    // Display countdown
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Stop when countdown finishes
    if (difference < 0) {
        clearInterval(countdown);

        document.querySelector(".countdown-box").innerHTML =
            "<h2>The Event Has Started!</h2>";
    }

}, 1000);


