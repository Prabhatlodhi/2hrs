const btn = document.querySelector('#newQuote');

const quote = document.querySelector('.quote');

const person = document.querySelector('.person');


const quotes = [{
    quote: `"11111111111111111111111111111111111111111111111111111111111111111111"`,
    person: `22Mahatma Gandhi`},

    {
    quote: `"222222222222222222221111111111111111111111111111111111111111111111111111"`,
    person: `211Mahatma Gandhi`},

    {
        quote: `"333333333332222222222221111111111111111111111111111111111111111111"`,
        person: `311Mahatma Gandhi`},

];


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})