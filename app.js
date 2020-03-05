var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = (Math.floor (Math.random() * 3));
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}

function showScores(userChoice, computerChoice){
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

}

function animateGlow(userChoice, classToAnimate){
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add(classToAnimate);
	setTimeout(function(){ userChoice_div.classList.remove(classToAnimate) }, 300);

}

function showResult(userChoice, computerChoice, action, message){
	result_p.innerHTML = `${convertToWord(userChoice)} ${action} ${convertToWord(computerChoice)}. ${message}`; 
}

function win(userChoice, computerChoice){
	userScore++;
	showScores(userChoice, computerChoice);
	showResult(userChoice, computerChoice, 'beats', 'You Win!');
	animateGlow(userChoice, 'green-glow');
}

function lose(userChoice, computerChoice){
	computerScore++;
	showScores(userChoice, computerChoice);
	showResult(userChoice, computerChoice, 'loses to', 'You Lost');
	animateGlow(userChoice, 'red-glow');
}

function draw(userChoice, computerChoice){
	showScores(userChoice, computerChoice);
	showResult(userChoice, computerChoice, 'equals', 'It\'s a Draw!');
	animateGlow(userChoice, 'gray-glow');
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
		win(userChoice, computerChoice);
		break;

		case "rp":
		case "ps":
		case "sr":
		lose(userChoice, computerChoice);
		break;

		case "rr":
		case "pp":
		case "ss":
		draw(userChoice, computerChoice);
		break;
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissor_div.addEventListener('click', function(){
		game("s");
	})

}

main();
