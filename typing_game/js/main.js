var gameSpeed = 1000;
var lettersFound = 0;
var gameOver = false;

function changeScore(change) {
	score_ele = $('.score');
	current_score = parseInt(score_ele.text());

	score_ele.text(current_score + change);
}

function randomLetter() {
	var possible = 'abcdefghijklmnopqrstuvwxyz';

	return possible.charAt(Math.floor(Math.random() * possible.length));
}

function moveLetters() {
	eachLetter(function(letter_div, index) {
		var letter = $(letter_div);
		var new_postition = parseInt(letter.css('left')) + 10;

		letter.css('left', new_postition);
	});
}

function eachLetter(func) {
	[].forEach.call($('.letter'), func);
}

function increaseSpeed() {
	if (lettersFound % 20 == 0)
		gameSpeed = gameSpeed * .9;
}

function checkLoss() {
	if (parseInt($('.letter').css('left')) >= 1000)
		endGame();
}

function endGame() {
	clearInterval(movingLetters);
	gameOver = true;
	alert('Your score was ' + parseInt($('.score').text()) + '. Not good enough.');
}

$(window).keydown(function(e) {
	if (e.keyCode >= 65 && e.keyCode <= 90) {
		var typed_letter = String.fromCharCode(e.keyCode).toLowerCase();
		var found_letter = false;

	  eachLetter(function(letter_div, index) {
			var letter = $(letter_div);

	  	if (letter.text() == typed_letter && !found_letter) {
	  		letter_div.remove();
	  		changeScore(1);
	  		found_letter = true;
	  	}
	  });

	  if (!found_letter)
	  	changeScore(-1);
	}
	else if (e.keyCode == 27)
		endGame();
});


function addingLetters() {
	$('.game-window').append('<div class="letter" style="left: 10px">' + randomLetter() + '</div>');
	lettersFound++;
	increaseSpeed();
	if (!gameOver)
		setTimeout(addingLetters, gameSpeed)
}

function movingLetters() {
	moveLetters();
	checkLoss();
	if (!gameOver)
		setTimeout(movingLetters, 100)
}

movingLetters();
addingLetters(); // Kickoff game
