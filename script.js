//Array of quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "The best way to predict the future is to invent it.",
    "Your time is limited, so don't waste it living someone else's life."
]

//function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quotes');
    quoteElement.innerText = quotes[randomIndex];
}

// Add event listener to th button
const button = document.getElementById('generateQuote');
button.addEventListener('click', generateRandomQuote);