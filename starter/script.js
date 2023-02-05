'use strict';

/*
 let msg = document.querySelector('.message');

 console.log(msg.textContent);
 document.querySelector('.message').textContent = 'Correct number bro!'

 document.querySelector('.message').textContent = 'Correct number bro!'
 console.log(document.querySelector('.message').textContent)

 let num = document.querySelector("div.number").textContent = 22;
 let score = document.querySelector("p>span.score").textContent = 33;
 let inputData = document.querySelector('.guess').value = 20;
 console.log(inputData)
 console.log(num)
 console.log(score)
 */

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

		if (score > highScore) {
			highScore = score
			document.querySelector('.highscore').textContent = highScore
		}
	}
	// Too high / u lost
	else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too high!'
			score--
			document.querySelector("p>span.score").textContent = score;
		}
		else {
			document.querySelector('.message').textContent = 'U lost bro.. '
			Number(document.querySelector("p>span.score").textContent = 0);
		}

	}
	// Too Low / u lost
	else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too low!'
			score--
			document.querySelector("p>span.score").textContent = score;
		}
		else {
			document.querySelector('.message').textContent = 'U lost bro.. '
			Number(document.querySelector("p>span.score").textContent = 0);
		}
	}

	if (score === 0) {
		return
	}
})

document.querySelector('.again')
.addEventListener('click', () => {

	score = 20
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = null

	secretNumber = Math.trunc(Math.random() * 20) + 1
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector("body").style.backgroundColor = '#222';
	document.querySelector(".number").style.width = '15rem';
})