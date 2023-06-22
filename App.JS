let cards = [];
let queenCardIndex = -1;
let gameOver = true;

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

function resetGame() {
  shuffleCards();
  queenCardIndex = Math.floor(Math.random() * cards.length);
  gameOver = false;

  cards.forEach((card) => {
    card.classList.remove('flip');
    card.classList.remove('selected');
    card.querySelector('.card-front').style.transform = 'rotateY(0)';
    card.querySelector('.card-back').style.transform = 'rotateY(180deg)';
  });
}

function selectCard(index) {
  if (gameOver) {
    return;
  }

  const card = cards[index];
  const cardFront = card.querySelector('.card-front');
  const cardBack = card.querySelector('.card-back');

  cardFront.style.transform = 'rotateY(180deg)';
  cardBack.style.transform = 'rotateY(0)';

  if (index === queenCardIndex) {
    cardFront.innerHTML = 'You win!';
    gameOver = true;
  } else {
    cardFront.innerHTML = 'Try again';
  }

  card.classList.add('selected');
}

function initializeGame() {
  cards = Array.from(document.querySelectorAll('.card'));

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('selected')) {
        selectCard(index);
      }
    });
  });

  resetGame();
}

window.addEventListener('load', initializeGame);
