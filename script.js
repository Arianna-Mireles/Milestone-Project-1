// Get references to the button and the element to toggle
const toggleButton = document.getElementById("toggleButton");
const balloon = document.getElementById("balloon");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
  // Check the current display style of the element
  const currentDisplayStyle = window.getComputedStyle(balloon).display;

  // Toggle the display style between "none" and "block" (or any other desired value)
  if (currentDisplayStyle === "none") {
    toggleButton.style.display = "block"; // Change it to "block" to make it visible
    // balloon.style.animationPlayState = 'running';
  } else {
    button.style.display = "none"; // Change it back to "none" to hide it
  }
});