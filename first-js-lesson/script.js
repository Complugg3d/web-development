/*
 * =======================================
 * WELCOME TO THE COUNTER APP CHALLENGES!
 * =======================================
 *
 * Here are some challenges to test and improve your JavaScript skills.
 * Try to implement them one by one.
 *
 * CHALLENGE 1: Add a maximum limit of 10 to the counter
 * CHALLENGE 2: Add a minimum limit of -10 to the counter
 * CHALLENGE 3: Make the counter change color to purple when it's a multiple of 5
 * CHALLENGE 4: Add a sound effect when the counter is reset (use the Audio object)
 * CHALLENGE 5: Add a new button that adds 5 to the counter
 * BONUS: Add an animation when the counter changes (hint: use CSS animations)
 */

// Get DOM elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const plusfivvvvve = document.getElementById("+5we");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const audio = document.getElementById("audio-test"); // You missed the audio element

// Initialize counter
let count = 0;

// Update the display
function updateDisplay() {
  // in the css now there is available the class animate
  // in the html there is available the id count
  // in the css there is available the animation pop
  // now you just have to add the class animate to the countDisplay
  // to achieve the goal take a look at https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

  countDisplay.textContent = count;

  // Change color based on count
  if (count > 0) {
    countDisplay.style.color = "#4CAF50"; // Green for positive
  } else if (count < 0) {
    countDisplay.style.color = "#f44336"; // Red for negative
  } else {
    countDisplay.style.color = "#d3d3d3"; // Default color for zero
  }
  if (count % 5 == 0 && count !== 0) {
    countDisplay.style.color = "#DC0BF4"; // morado multiplos de 5
  }
}

// Event Listeners
incrementBtn.addEventListener("click", () => {
  count++;

  if (count > 10) count = 10; // limite para arriba

  updateDisplay();
});

decrementBtn.addEventListener("click", () => {
  count--;
  if (count < -10) count = -10; // limite para abajo
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  audio.play();
  updateDisplay();
});

plusfivvvvve.addEventListener("click", () => {
  count += 5;
  updateDisplay();
});

// Keyboard controls
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    count++;
    updateDisplay();
  } else if (event.key === "ArrowDown") {
    count--;
    updateDisplay();
  } else if (event.key === "r" || event.key === "R") {
    count = 0;
    updateDisplay();
  }
});

// Initial display update
updateDisplay();
