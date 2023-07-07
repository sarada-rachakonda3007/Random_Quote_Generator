// Define an array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

// Function to generate a random quote
function generateQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Display the random quote
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

// Initial quote generation
generateQuote();
