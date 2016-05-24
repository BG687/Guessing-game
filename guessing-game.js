/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
$(document).ready(function(){
	alert("js is running");
var playersGuess;
var winningNumber = generateWinningNumber();
var prevGuesses = [];
var guessesLeft = 8

playersGuessSubmission();
checkGuess();
lowerOrHigher();

})
/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	return Math.floor(Math.random()*100);
}

// Fetch the Players Guess

function playersGuessSubmission(){
	$('.button').on('onclick', function(){
	playersGuess = +$(this).val();
	$(this).val().remove();
	});
}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	if (playersGuess > winningNumber){
		return "Your guess was too high.";
	}	
	else if (playersGuess < winningNumber){
		return "Your guess was too low";
	}

function checkGuess(){
	if (playersGuess == winningNumber){
		$("#correct").show();
	}
	else if{
		for(i=0, i<prevGuesses.length, i++){
			if (prevGuesses[i] == playersGuess){
				$('#duplicate').show();
			}
		}
	}	
	else{
		$('#wrong').show();
		guessesLeft--;
		prevGuesses.push(playersGuess);
}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	
}

// Allow the "Player" to Play Again

function playAgain(){
	// add code here
}


/* **** Event Listeners/Handlers ****  */