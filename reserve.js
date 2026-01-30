document.addEventListener("DOMContentLoaded", () => {
  // 1. SELECT ELEMENTS
  const tabs = document.querySelectorAll(".tab-btn");
  const venueInput = document.getElementById("venue-type");
  const resForm = document.getElementById("res-form");
  const whatsappBtn = document.getElementById("whatsapp-btn");

  // 2. TAB SWITCHING LOGIC (Lounge vs Club)
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Update the hidden input value so the form knows which venue is picked
      const target = tab.getAttribute("data-target");
      venueInput.value = target;
    });
  });

  // 3. WHATSAPP BUTTON FUNCTIONALITY
  whatsappBtn.addEventListener("click", () => {
    // Capture data from the input fields
    const name = resForm.querySelector('input[placeholder="John Doe"]').value;
    const phone = resForm.querySelector(
      'input[placeholder="+1 (555) 000-0000"]',
    ).value;
    const date = resForm.querySelector('input[type="date"]').value;
    const guests = resForm.querySelector('input[type="number"]').value;
    const requests = resForm.querySelector("textarea").value || "None";
    const venue = venueInput.value.toUpperCase();

    // Basic validation: Check if core fields are filled
    if (!name || !phone || !date || !guests) {
      alert(
        "Please fill in your Name, Phone, Date, and Guest count before booking via WhatsApp.",
      );
      return;
    }

    // CONSTRUCT THE WHATSAPP MESSAGE
    // %0A is the code for a "New Line" in a URL
    const message =
      `*NEW RESERVATION REQUEST*%0A` +
      `--------------------------%0A` +
      `*Venue:* ${venue}%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Date:* ${date}%0A` +
      `*Guests:* ${guests}%0A` +
      `*Special Requests:* ${requests}`;

    // YOUR WHATSAPP NUMBER
    // Use international format without the "+" or spaces (e.g., 12345678901)
    const myNumber = "+2348086850849";

    // Redirect user to WhatsApp
    const waUrl = `https://wa.me/${myNumber}?text=${message}`;
    window.open(waUrl, "_blank");
  });

  // 4. STANDARD FORM SUBMISSION (Optional: if you want to send to an email service)
  resForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show a success message
    const venue = venueInput.value.toUpperCase();
    alert(
      `Request Sent! We will contact you shortly to confirm your ${venue} reservation.`,
    );

    // Optional: Reset form after submission
    // resForm.reset();
  });
});

// Toggle Mobile Menu
// Get the elements
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// 1. Toggle menu when clicking the hamburger
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the click from immediately reaching the 'window'
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// 2. Close menu when clicking ANYWHERE on the screen
window.addEventListener("click", (e) => {
  // If the menu is open AND the click was NOT on the menu itself
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// 3. Close menu when clicking a link inside the menu
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
