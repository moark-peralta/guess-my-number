'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // WHEN NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 💔';
    displayMessage('No Number');
    // WHEN PLAYER WINS
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // WHEN GUESS IS DIFFERENT
    // WHEN GUESS IS TOO HIGH
  } else if (guess !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      displayMessage(guess > number ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game :(';
      displayMessage('You lost the game :(');
      document.querySelector('.score').textContent = 0;
    }
  }

  //         else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game :(';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // WHEN GUESS IS TOO LOW
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game :(';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
