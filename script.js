// variables
const quiz = document.getElementById("quiz");
console.log(quiz);
const startQuiz = document.getElementById("start");
console.log(startQuiz);
const startCard = document.getElementById("startCard");
console.log(startCard);
const quizCard = document.getElementById("quizCard");
console.log(quizCard);
// Create a variable that will create li items to then insert question data into




let questions = [
    {
       question: "What is the HTML tag under which one can write the JavaScript code?",
       choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
       answer: 2,
        
    },
    {
       question: "Choose the correct JavaScript syntax to change the content of <p id='geek'>GeeksforGeeks</p>",
       choices: ["document.getElement('geek').innerHTML='I am a Geek';", "document.getElementById('geek').innerHTML='I am a Geek';", "document.getId('geek')='I am a Geek';", "document.getElementById('geek').innerHTML=I am a Geek;"], 
       answer: 1,
        
    },
    {
       question: "Which of the following is the correct syntax to display 'GeeksforGeeks' in an alert box using JavaScript?",
       choices: ["alertbox('GeeksforGeeks');", "msg('GeeksforGeeks');", "msgbox('GeeksforGeeks');", "alert('GeeksforGeeks');"],
       answer: 3,
        
    },
    {
       question: "What is the correct syntax for referring to an external script called 'geek.js'?",
       choices: ["<script src='geek.js'>", "<script href='geek.js'>", "<script ref='geek.js'>", "<script name='geek.js'>"],
       answer: 0,
        
    },
    {
       question: "The external JavaScript file must contain <script> tag. True or False?",
       choices: ["True", "False"],
       answer: 0,
        
    },
]

console.log(questions);

// When I click on "Start quiz" I will see the first question and the timer will begin

startQuiz.addEventListener("click", function() {
    console.log("You clicked start");
    quiz.removeChild(startCard);
    // show question one
    // start timer
});

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