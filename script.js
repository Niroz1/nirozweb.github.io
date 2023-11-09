// Your JavaScript code for the random quote generator goes here

// Array of quotes
const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa"
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex];
    document.getElementById("quote-text").textContent = `"${quoteText}"`;
}

// Event listener for the "New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", generateRandomQuote);

// Initial quote generation
generateRandomQuote();
