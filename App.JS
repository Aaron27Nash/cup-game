let cards = ['Ace', 'King', 'Queen'];
let selectedCardIndex;
let gameOver = false;
// Array to store the card elements
let cards = [];

// Index of the queen card
let queenCardIndex = -1;

// Variable to track if the game is over
let gameOver = true;

// Function to shuffle the cards array
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

// Function to reset the game
function resetGame() {
  // Shuffle the cards
  shuffleCards();
  
  // Reset game state
  queenCardIndex = Math.floor(Math.random() * cards.length);
  gameOver = false;
  
  // Reset card styles
  cards.forEach((card) => {
    card.classList.remove('flip-animation');
    card.classList.remove('selected');
    card.querySelector('.card-front').style.transform = 'rotateY(180deg)';
    card.querySelector('.card-back').style.transform = 'rotateY(0)';
  });
}

// Function to handle card selection
function selectCard(index) {
  if (gameOver) {
    return;
  }
  
  const card = cards[index];
  const cardFront = card.querySelector('.card-front');
  const cardBack = card.querySelector('.card-back');
  
  if (index === queenCardIndex) {
    card.classList.add('flip-animation');
    cardFront.style.transform = 'rotateY(0)';
    cardBack.style.transform = 'rotateY(180deg)';
    cardFront.innerHTML = 'You win!';
    gameOver = true;
  } else {
    cardFront.style.transform = 'rotateY(180deg)';
    cardBack.style.transform = 'rotateY(0)';
    cardFront.innerHTML = 'Try again';
  }
  
  card.classList.add('selected');
}

// Function to initialize the game
function initializeGame() {
  // Get all the card elements
  cards = Array.from(document.querySelectorAll('.card'));
  
  // Add event listeners to each card
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('selected')) {
        selectCard(index);
      }
    });
  });
  
  // Reset the game
  resetGame();
}

// Initialize the game when the page is loaded
window.addEventListener('load', initializeGame);
