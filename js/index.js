const quoteText = document.getElementById('quote');
const authorSection = document.getElementById('author')


async function getQuote(){
    const response = await fetch('https://stoic.tekloon.net/stoic-quote');
    const script = await response.json();
    return script;
}

async function displayQuote() {
    const {author, quote} = await getQuote();
    quoteText.innerText = quote;
    authorSection.innerText =`- ${author}`;
}

displayQuote()

window.addEventListener('click', ()=> {
    displayQuote()
})