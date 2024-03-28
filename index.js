const btn = document.getElementById('btn');
const quote = document.getElementById('quote');


btn.addEventListener('click', getQuote);

function getQuote() { 
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let randomQuote = data[Math.floor(Math.random() * data.length)];
            quote.textContent = randomQuote.text;
            quote.style.backgroundColor = quote.classList.add("quote-background");
        });
 }





