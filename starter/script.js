'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', () => {
	const guess = Number(document.querySelector('.guess').value);

	// No number
	if (!guess) {
		document.querySelector('.message').textContent = 'No number'
	}
	// Won the game
	else if (guess === secretNumber) {
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.message').textContent = 'Correct number bro!'
		document.querySelector("body").style.backgroundColor = '#228B22'
		document.querySelector('.number').style.width = '35rem'
		document.querySelector('#button').disabled = true;

		if (score > highScore) {
			highScore = score
			document.querySelector('.highscore').textContent = highScore
		}
	}

	else if (guess !== secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low'
			score--
			document.querySelector("p>span.score").textContent = score;
		} else {
			document.querySelector('.message').textContent = 'U lost bro.. '
			Number(document.querySelector("p>span.score").textContent = 0);
		}
	}
})

document.querySelector('.again')
.addEventListener('click', () => {

	score = 20
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = null
	document.querySelector('#button').disabled = false;

	secretNumber = Math.trunc(Math.random() * 20) + 1
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector("body").style.backgroundColor = '#222';
	document.querySelector(".number").style.width = '15rem';
})