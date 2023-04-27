//fetch random quotes from https://api.quotable.io/quotes/random?tags=love everytime the page is loaded

const quote = document.getElementById('quote');
const author = document.getElementById('author');

fetch('https://api.quotable.io/quotes/random?tags=love')
    .then(response => response.json())
    .then(data => {
        quote.innerHTML = data[0].content;
        author.innerHTML = data[0].author;
        console.log(data[0]);
    }
    )
    .catch(error => console.error('Error:', error));
