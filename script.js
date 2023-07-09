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

function generateQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Separate the quote and the person's name
  const quoteParts = quotes[randomIndex].split(" - ");
  const quote = quoteParts[0];
  const person = quoteParts[1];

  // Display the random quote with the person's name centered on the next line
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = `${quote}<br><span style="text-align: center;">- ${person}</span>`;
}
