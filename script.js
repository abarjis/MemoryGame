const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockCard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockCard) return;
  if(this === firstCard) return;
 this.classList.add('flip');

if(!hasFlippedCard) {
// first click
hasFlippedCard = true;
firstCard = this;

  return;
}
// second click
secondCard = this;

checkCards();
}

function checkCards() {
let isMatch = firstCard.dataset.matching === secondCard.dataset.matching;

isMatch ? matchedCards() : unMatchedCards();
}

function matchedCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetCards();
}

function unMatchedCards() {
  lockCard = true;
  setTimeout(function(){
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetCards();
  }, 1500);
  }

function resetCards() {
  [hasFlippedCard, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];

}

(function shuffleCards() {
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * 12)
    card.style.order = randomCard
  });
})();




cards.forEach(card => card.addEventListener('click', flipCard));





































