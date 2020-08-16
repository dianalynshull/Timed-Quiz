// const variables
const quiz = document.getElementById("quiz");
const startBtn = document.getElementById("start");
const startCard = document.getElementById("startCard");
const quizCard = document.getElementById("quizCard");
const questionTitle = document.getElementById("questionTitle");
const timeEl = document.getElementById("timer");
// let variables
let displayedQuestion = 0;
let choiceValue = 0;
let secondsLeft = 60;
let timerInterval;
let questionItem = [{
	question: "What is the HTML tag under which one can write the JavaScript code?",
	choice: ["<javascript>", "<scripted>", "<script>", "<js>"],
	answer: 2,
}, {
	question: "Choose the correct JavaScript syntax to change the content of <p id='geek'>GeeksforGeeks</p>",
	choice: ["document.getElement('geek').innerHTML='I am a Geek';", "document.getElementById('geek').innerHTML='I am a Geek';", "document.getId('geek')='I am a Geek';", "document.getElementById('geek').innerHTML=I am a Geek;"],
	answer: 1,
}, {
	question: "Which of the following is the correct syntax to display 'GeeksforGeeks' in an alert box using JavaScript?",
	choice: ["alertbox('GeeksforGeeks');", "msg('GeeksforGeeks');", "msgbox('GeeksforGeeks');", "alert('GeeksforGeeks');"],
	answer: 3,
}, {
	question: "What is the correct syntax for referring to an external script called 'geek.js'?",
	choice: ["<script src='geek.js'>", "<script href='geek.js'>", "<script ref='geek.js'>", "<script name='geek.js'>"],
	answer: 0,
}, {
	question: "The external JavaScript file must contain <script> tag. True or False?",
	choice: ["True", "False"],
	answer: 1,
}];
// event listener for start button
startBtn.addEventListener("click", startQuiz);
// Functions
function startQuiz() {
	quiz.removeChild(startCard);
	createQuestion();
	setTime();
}

function setTime() {
	timerInterval = setInterval(function() {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left";
		if(secondsLeft <= 0) {
			clearInterval(timerInterval);
			endGame();
		}
	}, 1000);
}

function createQuestion() {
	if(displayedQuestion >= 5) {
		youWon();
		return;
	}
	choiceValue = 0;
	// updates h5 tag with the title of the question and updates the class
	questionTitle.textContent = questionItem[displayedQuestion].question;
	quizCard.prepend(questionTitle);
	questionTitle.classList.add("card-header");
	// created ul for the li questions and updates the classes
	let choiceWrapper = document.createElement("ul");
	choiceWrapper.setAttribute("value", [choiceValue]);
	quizCard.appendChild(choiceWrapper);
	choiceWrapper.classList.add("list-group", "list-group-flush");
	choiceWrapper.setAttribute("id", "quizChoice");
	for(let j = 0; j < questionItem[displayedQuestion].choice.length; j++) {
		let questionChoice = document.createElement("li");
		questionChoice.textContent = questionItem[displayedQuestion].choice[j];
		questionChoice.setAttribute("value", [choiceValue]);
		choiceWrapper.appendChild(questionChoice);
		questionChoice.classList.add("list-group-item");
		choiceValue++;
	}
	const quizChoice = document.getElementById("quizChoice");
	quizChoice.addEventListener("click", function() {
		console.log("this is the question Item round 1 ", questionItem[displayedQuestion].answer);
		if(questionItem[displayedQuestion].answer === event.target.value) {
			event.target.style.backgroundColor = "#7FC1A1";
			displayedQuestion++;
			quizCard.removeChild(quizChoice);
			createQuestion();
		} else {
			event.target.style.backgroundColor = "DoomGuyRed";
			secondsLeft = secondsLeft - 10;
			displayedQuestion++;
			quizCard.removeChild(quizChoice);
			createQuestion();
		}
	});
}

function youWon() {
	clearInterval(timerInterval);
	questionTitle.textContent = "You have won the game! Your score is " + secondsLeft + "!";
	let initials = document.createElement("div");
	initials.classList.add("form-group");
	initials.style.padding = "0px 15px";
	quizCard.appendChild(initials);
	let labelFor = document.createElement("label");
	labelFor.setAttribute("for", "Initials");
	initials.appendChild(labelFor);
	let inputType = document.createElement("input");
	inputType.setAttribute("type", "text");
	inputType.setAttribute("class", "form-control");
	inputType.setAttribute("placeholder", "Enter Your Initials");
	initials.appendChild(inputType);
	let submit = document.createElement("a");
	submit.classList.add("btn", "btn-primary");
	submit.setAttribute("id", "submit");
	submit.setAttribute("href", "index.html");
	submit.textContent = "Submit Score";
	submit.style.margin = "20px 40px";
	quizCard.appendChild(submit);
	return;
}

function endGame() {
	questionTitle.textContent = "You lost! Refresh to try again!";
	return;
}