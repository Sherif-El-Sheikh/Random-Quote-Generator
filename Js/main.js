var quotes = [
    {
        quote: "“Life isn't about finding yourself. Life is about creating yourself”",
        author: "George Bernard Shaw",
        img: `<img src="Assets/img/george-bernard-shaw.jpg" class="author img-fluid rounded-circle" alt="George Bernard Shaw"/>`,
    },
    {
        quote: "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle”",
        author: "Albert Einstein",
        img: `<img src="Assets/img/albert-einstei.jpg" class="author img-fluid rounded-circle" alt="Albert Einstein"/>`,
    },
    {
        quote: "“Happiness is when what you think, what you say, and what you do are in harmony.”",
        author: "Mahatma Gandhi",
        img: `<img src="Assets/img/Mahatma Gandhi.jpg" class="author img-fluid rounded-circle" alt="Mahatma Gandhi"/>`,
    },
    {
        quote: "“That’s been one of my mantras — focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.”",
        author: "Steve Jobs",
        img: `<img src="Assets/img/Steve Jobs.jpg" class="author img-fluid rounded-circle" alt="Steve Jobs"/>`,
    },
    {
        quote: "“Truth is ever to be found in the simplicity, and not in the multiplicity and confusion of things.”",
        author: "Isaac Newton",
        img: `<img src="Assets/img/Isaac Newton.jpg" class="author img-fluid rounded-circle" alt="Isaac Newton"/>`,
    },
    {
        quote: "“Have courage for the great sorrows of life and patience for the small ones; and when you have laboriously accomplished your daily task, go to sleep in peace. God is awake.”",
        author: "Victor Hugo",
        img: `<img src="Assets/img/Victor Hugo.jpg" class="author img-fluid rounded-circle" alt="Victor Hugo"/>`,
    },
    {
        quote: "“Genius is one percent inspiration, ninety-nine percent perspiration.”",
        author: "Thomas A. Edison",
        img: `<img src="Assets/img/Thomas A. Edison.jpg" class="author img-fluid rounded-circle" alt="Thomas A. Edison"/>`,
    },
    {
        quote: "“The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.”",
        author: "Franklin D. Roosevelt",
        img: `<img src="Assets/img/Franklin D. Roosevelt.jpg" class="author img-fluid rounded-circle" alt="Franklin D. Roosevelt"/>`,
    },
    {
        quote: "“Man cannot discover new oceans unless he has the courage to lose sight of the shore.”",
        author: "Andre Gide",
        img: `<img src="Assets/img/Andre Gide.jpg" class="author img-fluid rounded-circle" alt="Andre Gide"/>`,
    },
    {
        quote: "“I prefer a short life with width to a narrow one with length.”",
        author: "Ibn Sina",
        img: `<img src="Assets/img/Ibn Sina.jpg" class="author img-fluid rounded-circle" alt="Ibn Sina"/>`,
    },
    {
        quote: "“Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.”",
        author: "Richard P. Feynman",
        img: `<img src="Assets/img/Richard P. Feynman.jpg" class="author img-fluid rounded-circle" alt="Richard P. Feynman"/>`,
    },
    {
        quote: "“The knowledge that has not come down to us is larger than the knowledge that has.”",
        author: "Ibn Khaldun",
        img: `<img src="Assets/img/Ibn Khaldun.jpg" class="author img-fluid rounded-circle" alt="Ibn Khaldun"/>`,
    },
    {
        quote: "“The greatest glory in living lies not in never falling, but in rising every time we fall.”",
        author: "Nelson Mandela",
        img: `<img src="Assets/img/Nelson Mandela.jpg" class="author img-fluid rounded-circle" alt="Nelson Mandela"/>`,
    },
    {
        quote: "“There is nothing immpossible to him who will try.”",
        author: "Alexander the Great",
        img: `<img src="Assets/img/Alexander the Great.jpg" class="author img-fluid rounded-circle" alt="Alexander the Great"/>`,
    },
    {
        quote: "“Happiness depends upon ourselves.”",
        author: "Aristotle",
        img: `<img src="Assets/img/Aristotle.jpg" class="author img-fluid rounded-circle" alt="Aristotle"/>`,
    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "Elbert Hubbard",
        img: `<img src="Assets/img/Elbert Hubbard.jpg" class="author img-fluid rounded-circle" alt="Elbert Hubbard"/>`,
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author: "Oscar Wilde",
        img: `<img src="Assets/img/Oscar Wilde.jpg" class="author img-fluid rounded-circle" alt="Oscar Wilde"/>`,
    },
    {
        quote: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        author: "William W. Purkey",
        img: `<img src="Assets/img/William W. Purkey.jpg" class="author img-fluid rounded-circle" alt="William W. Purkey"/>`,
    },
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author: "J.K. Rowling",
        img: `<img src="Assets/img/J.K. Rowling.jpg" class="author img-fluid rounded-circle" alt="J.K. Rowling"/>`,
    },
    {
        quote: "“There is no greater agony than bearing an untold story inside you.”",
        author: "Maya Angelou",
        img: `<img src="Assets/img/Maya Angelou.jpg" class="author img-fluid rounded-circle" alt="Maya Angelou"/>`,
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "Mae West",
        img: `<img src="Assets/img/Mae West.jpg" class="author img-fluid rounded-circle" alt="Mae West"/>`,
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "Robert Frost",
        img: `<img src="Assets/img/Robert Frost.jpg" class="author img-fluid rounded-circle" alt="Robert Frost"/>`,
    },
    {
        quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author: "Ralph Waldo Emerson",
        img: `<img src="Assets/img/Ralph Waldo Emerson.jpg" class="author img-fluid rounded-circle" alt="Ralph Waldo Emerson"/>`,
    },
];
console.log(quotes.length);
var photo = document.getElementById('photo');
var authorQuote = document.getElementById('author');
var singleQuote = document.getElementById('quote');

function generateQuote() {
    console.log(singleQuote.innerHTML);
    // A loop to generate a random number that is not repeated by comparing quotes with each other as string
    for (var randomNumber = Math.trunc(Math.random() * quotes.length); singleQuote.innerHTML === quotes[randomNumber].quote;) {
        randomNumber = Math.trunc(Math.random() * quotes.length);
    }
    console.log(randomNumber);
    photo.innerHTML = quotes[randomNumber].img;
    authorQuote.innerHTML = quotes[randomNumber].author;
    singleQuote.innerHTML = quotes[randomNumber].quote;
}