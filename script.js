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
let questionItem = [
    {
       question: "What is the HTML tag under which one can write the JavaScript code?",
       choice: ["<javascript>", "<scripted>", "<script>", "<js>"],
       answer: 2,
        
    },
    {
       question: "Choose the correct JavaScript syntax to change the content of <p id='geek'>GeeksforGeeks</p>",
       choice: ["document.getElement('geek').innerHTML='I am a Geek';", "document.getElementById('geek').innerHTML='I am a Geek';", "document.getId('geek')='I am a Geek';", "document.getElementById('geek').innerHTML=I am a Geek;"], 
       answer: 1,
        
    },
    {
       question: "Which of the following is the correct syntax to display 'GeeksforGeeks' in an alert box using JavaScript?",
       choice: ["alertbox('GeeksforGeeks');", "msg('GeeksforGeeks');", "msgbox('GeeksforGeeks');", "alert('GeeksforGeeks');"],
       answer: 3,
        
    },
    {
       question: "What is the correct syntax for referring to an external script called 'geek.js'?",
       choice: ["<script src='geek.js'>", "<script href='geek.js'>", "<script ref='geek.js'>", "<script name='geek.js'>"],
       answer: 0,
        
    },
    {
       question: "The external JavaScript file must contain <script> tag. True or False?",
       choice: ["True", "False"],
       answer: 1,
        
    }
];
// event listener for start button
startBtn.addEventListener("click", startQuiz);
// Functions
function startQuiz() {
    console.log("You clicked start");
    quiz.removeChild(startCard);
    createQuestion();
    setTime();
};
function setTime() {
    console.log("why");
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
    if (displayedQuestion >= 5) {
        youWon()
    };
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
    choiceWrapper.setAttribute("id", "quizChoice")

    for (let j = 0; j < questionItem[displayedQuestion].choice.length; j++) {
        let questionChoice = document.createElement("li");
        questionChoice.textContent = questionItem[displayedQuestion].choice[j];
        questionChoice.setAttribute("value", [choiceValue]);
        choiceWrapper.appendChild(questionChoice);
        questionChoice.classList.add("list-group-item");
        choiceValue++;
    };
    const quizChoice = document.getElementById("quizChoice");

    quizChoice.addEventListener("click", function(e) {
        console.log("this is the question Item round 1 ", questionItem[displayedQuestion].answer);
        if (questionItem[displayedQuestion].answer === event.target.value) {
            event.target.style.backgroundColor = "#7FC1A1";    
            displayedQuestion++;
            quizCard.removeChild(quizChoice);
            createQuestion();
        }

        else {
            event.target.style.backgroundColor = "DoomGuyRed";    
            secondsLeft = secondsLeft - 10;
            displayedQuestion++;
            quizCard.removeChild(quizChoice);
            createQuestion();
        }
    });
};

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
    inputType.setAttribute("placeholder", "Enter Your Initials")
    initials.appendChild(inputType);
    let submit = document.createElement("a");
    submit.setAttribute("href", "index.html")
    submit.classList.add("btn", "btn-primary");
    submit.textContent = "Submit Score";
    submit.style.margin = "20px 40px";
    quizCard.appendChild(submit);

    return;
};

function endGame() {
    quizCard.removeChild(quizChoice);
    questionTitle.textContent = "You lost! Refresh to try again!";
    return;
}






    // create a title for the question
    // display the choices below it
    // allow the user to click on one of the choices
    // display if the answer is incorrect or correct
    // create and display next title and choices for the question
        

    // for (let j = 0; j < questionItem[i].choices.length; j++) {
    //     

    //     k++;
    //     console.log(k);
    //     console.log(questionItem[i].choices[j]);

    //     if (k > questionItem[i].choices[j]) {
    //         console.log("it is bigger");
    //     }
    // }

    // when the player answers the question add i++




// add click listening to all buttons to go to the next question. Wrong answers also change background color to red and correct answer to green. Can use li:active and the style of background color


// If I answer the question correctly (by clicking on the answer):
    // I am notified that I got the question correct
    // The next question is displayed
// If I answer the question incorrectly (by clickin on the answer):
    // 10 seconds is removed from the timer
    // I am notified the question was wrong
    //  Next question is displayed



// When all 5 questions are answered:
    // I am shown a page with my score (based off of how many seconds were left on the timer) 
    // I am given an option to enter my initials for the high score board

// When I enter my initials and hit the submit button:
    // I am shown a page with all of the high scores of the users that have taken the quiz
    // There is an option to clear the highscore bored
    // There is an option to play again