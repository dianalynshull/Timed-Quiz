// CREATE AN ARRAY WITH QUESTIONS TO ENTER IN DATA FROM JAVASCRIPT TO HTML DYNAMICALLY





// variables
let startQuiz = document.getElementById("start");
console.log(startQuiz);

let timer = document.getElementById("timer");
console.log(timer);

let startCard = document.getElementById("startCard");
console.log(startCard);
let quiz = document.getElementById("quiz");
console.log(quiz);

// When I click on "Start quiz" I will see the first question and the timer will begin

startQuiz.addEventListener("click", function() {
    quiz.removeChild(startCard);
    // show question one
});

// If I answer the question correctly (by clicking on the answer):
    // I am notified that I got the question correct
    // The next question is displayed
// If I answer the question incorrectly (by clickin on the answer):
    // 10 seconds is removed from the timer
    // I am notified the question was wrong
    //  Next question is displayed

// Question 1
    // 1. What is the HTML tag under which one can write the JavaScript code?
    // A) <javascript>
    // B) <scripted>
    // C) <script>
    // D) <js>
    // Ans: Option C
    // Explanation: If we want to write a JavaScript code under HTML tag, you will have to use the “script” tagfrt.
// add click listening to all buttons to go to the next question. Wrong answers also change background color to red and correct answer to green

// Question 2
    // 2. Choose the correct JavaScript syntax to change the content of the following HTML code.

    // <p id="geek">GeeksforGeeks</p> 
    // A) document.getElement(“geek”).innerHTML=”I am a Geek”;
    // B) document.getElementById(“geek”).innerHTML=”I am a Geek”;
    // C) document.getId(“geek”)=”I am a Geek”;
    // D) document.getElementById(“geek”).innerHTML=I am a Geek;
    // Ans: B
    // Explanation: The correct syntax to access the element is document.getElementById(“geek”). Here we want to access the content written under that id, so we used .innerHTML to specify that and finally we replaced the content with whatever is written inside the quotes.
// add click listening to all buttons to go to the next question. Wrong answers also change background color to red and correct answer to green

// Question 3
    // 3. Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?
    // A. alertbox(“GeeksforGeeks”);
    // B. msg(“GeeksforGeeks”);
    // C. msgbox(“GeeksforGeeks”);
    // D. alert(“GeeksforGeeks”);

    // Ans: D
    // Explanation: To display any text in the alert box, you need to write it as alert(“GeeksforGeeks”);.
// add click listening to all buttons to go to the next question. Wrong answers also change background color to red and correct answer to green

// Question 4
    // 4. What is the correct syntax for referring to an external script called “geek.js”?
    // A. <script src=”geek.js”>
    // B. <script href=”geek.js”>
    // C. <script ref=”geek.js”>
    // D. <script name=”geek.js”>
    // Ans: A
    // Explanation: The “src” term is used to refer to any JavaScript file.
// add click listening to all buttons to go to the next question. Wrong answers also change background color to red and correct answer to green

// Question 5
    // 5. The external JavaScript file must contain <script> tag. True or False?
    // A. True
    // B. False
    // Ans: B
    // Explanation: It is not necessary for any external javascript file to have <script> tag.
// add click listening to all buttons to go to the next question. Wrong answers also change background color to red and correct answer to green

// When all 5 questions are answered:
    // I am shown a page with my score (based off of how many seconds were left on the timer) 
    // I am given an option to enter my initials for the high score board

// When I enter my initials and hit the submit button:
    // I am shown a page with all of the high scores of the users that have taken the quiz
    // There is an option to clear the highscore bored
    // There is an option to play again