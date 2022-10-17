let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 5000);

let cards = document.querySelectorAll('.card');
let i_cards = 0;

function card_next(){
    cards[i_cards].classList.remove('active');
    i_cards = (i_cards + 1) % cards.length;
    cards[i_cards].classList.add('active');
}

function card_prev(){
    cards[i_cards].classList.remove('active');
    i_cards = (i_cards - 1 + cards.length) % cards.length;
    cards[i_cards].classList.add('active');
}

setInterval(next, 5000);
