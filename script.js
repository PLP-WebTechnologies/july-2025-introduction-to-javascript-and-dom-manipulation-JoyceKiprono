// ======================
// Part 1: Variables + Conditionals
// ======================
let secretNumber = Math.floor(Math.random() * 20) + 1; // random number 1-20
let attempts = 0;
let maxAttempts = 5; // limit attempts

// ======================
// Part 2: Functions
// ======================
// Function 1: Check guess
function checkGuess(userGuess) {
  attempts++;

  if (userGuess === secretNumber) {
    document.getElementById("feedback").innerText = "🎉 Correct! You guessed it!";
  } else if (userGuess > secretNumber) {
    document.getElementById("feedback").innerText = "📉 Too high! Try again.";
  } else {
    document.getElementById("feedback").innerText = "📈 Too low! Try again.";
  }

  updateAttempts();
  checkGameOver();
}

// Function 2: Reset game
function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  attempts = 0;
  document.getElementById("feedback").innerText = "Game reset! Guess again!";
  document.getElementById("attempts").innerText = "";
  document.getElementById("guessInput").value = "";
}

// ======================
// Part 3: Loops
// ======================
// Example 1: For loop to display stars for attempts used
function updateAttempts() {
  let stars = "";
  for (let i = 0; i < attempts; i++) {
    stars += "⭐";
  }
  document.getElementById("attempts").innerText = `Attempts: ${attempts} ${stars}`;
}

// Example 2: While loop to ensure valid guess
function checkGameOver() {
  while (attempts >= maxAttempts) {
    document.getElementById("feedback").innerText = "❌ Game Over! No more attempts.";
    break;
  }
}

// ======================
// Part 4: DOM Interactions
// ======================
// 1. Handle guess button click
document.getElementById("guessBtn").addEventListener("click", function () {
  let guess = parseInt(document.getElementById("guessInput").value);
  if (!isNaN(guess) && guess >= 1 && guess <= 20) {
    checkGuess(guess);
  } else {
    document.getElementById("feedback").innerText = "⚠️ Please enter a number between 1 and 20.";
  }
});

// 2. Reset game button
document.getElementById("resetBtn").addEventListener("click", resetGame);

// 3. Display welcome message when page loads
document.getElementById("feedback").innerText = "Welcome! Start guessing...";
