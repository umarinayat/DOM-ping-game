
var score, activePlayer, roundScore, gamePlaying = true, diceValue, playerNum;

init();

document.getElementById('btn-submit').addEventListener('click', function(){
	playerNum = document.querySelector('#player-value').value;
})


document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying){
			var dice = Math.floor(Math.random()*6+1);
			var dice2 = Math.floor(Math.random()*6+1);

	document.querySelector('.dice').style.display = 'block';
	document.querySelector('.dice-1').style.display = 'block';
	document.querySelector('.dice').src = 'dice-' +dice + '.png';
	document.querySelector('.dice-1').src = 'dice-' +dice2 + '.png';

		if(dice !== 1 && dice2 !== 1){
			roundScore += dice + dice2;
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
		}
		else{

			nextPlayer();
		}
	}
})	
	
	// if(dice === 6 && diceValue === 6){
	// 	score[activePlayer] = 0;
	// 	document.querySelector('#score-' + activePlayer).textContent = '0';
	// 	nextPlayer();
	// }

	// else if(dice !== 1){
	// 	roundScore += dice;
	// 	document.querySelector('#current-'+activePlayer).textContent = roundScore;
	// }
	// else{

	// 	nextPlayer();
	// }

	// 	diceValue = dice;
	// }




document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying){
			score[activePlayer] += roundScore;

	document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

	if(score[activePlayer] >= 100 || score[activePlayer] >= playerNum){
		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice-1').style.display = 'none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying = false;
	}
	else {
		nextPlayer();
	}
	}
	
})

function nextPlayer(){
	activePlayer === 0? activePlayer = 1 : activePlayer =0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init)

function init() {
score = [0,0];
activePlayer = 0;
roundScore = 0;
gamePlaying = true;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice-1').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}