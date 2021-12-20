var clickStart = document.getElementById("start");
var timerEl = document.getElementById("countdown");
var timeLeft = 60;
var quizDuration;
var questionContainer = document.querySelector("#quiz-container");

var questions = 
[{  q: "Commonly used data types DO NOT include:",
    A: "1. Strings",
    B: "2. Booleans",
    C: "3. Alerts",
    D: "4. Numbers",
    correct: "3. Alerts",},

{   q: "The condition in an if/else statement is enclosed with ____.",
    A: "1. Quotes",
    B: "2. Curly Brackets",
    C: "3. Parentheses",
    D: "4. Square Brackets",
    correct: "3. Parentheses",},

{   q: "Arrays in JavaScript can be used to store _____.",
    A: "1. Numbers and Strings",
    B: "2. Other arrays",
    C: "3. Booleans",
    D: "4. All of the above",
    correct: "4. All of the above",},

{   q: "String values must be enclosed within _______ when being assigned to variables.",
    A: "1. Quotes",
    B: "2. Curly Brackets",
    C: "3. Parentheses",
    D: "4. Square Brackets",
    correct:"1. Quotes",},

{   q: "A very useful too used during development and debugging for printing content to the debugger is:", 
    A: "1. JavaScript",
    B: "2. Terminal/Bash",
    C: "3. for loops",
    D: "4. console.log",
    correct: "4. console.log",},

{   q: "What is the correct syntax for referring to an external script called 'code.js'?",
    a: "1. <script src='code.js'>",
    b: "2. <script href='code.js'>",
    c: "3. <script ref='code.js'>",
    d: "4. <script name='code.js'>",
    correct: "1. <script src='code.js'>",}];

function timer() {timerEl.textContent = "Time Remaining: " + timeLeft + "s";
                  quizDuration = setInterval(function () {
                      if (timeLeft > 0) 
                      {adjustTime(-1);}
                      else {endQuizPage();} }, 1000); }

function adjustTime(amount) {timeLeft += amount;
            if (timeLeft < 0) {timeLeft = 0;} }
            {timerEl.textContent = "Time remaining: " + timeLeft + "s";}

clickStart.onclick = timer;
var renderQuestion = function (question) {questionContainer.innerHTML = "";

var question = document.createElement("h2");
question.textContent = question.q;

var answerA = document.createElement("button");
answerA.textContent = question.A;
answerA.addEventListener("click", answerClick);

var answerB = document.createElement("button");
answerB.textContent = question.B;
answerB.addEventListener("click", answerClick);

var answerC = document.createElement("button");
answerC.textContent = question.C;
answerC.addEventListener("click", answerClick);

var answerD = document.createElement("button");
answerD.textContent = question.D;
answerD.addEventListener("click", answerClick);

questionContainer.appendChild(question);
questionContainer.appendChild(answerA);
questionContainer.appendChild(answerB);
questionContainer.appendChild(answerC);
questionContainer.appendChild(answerD);}

var currentQuestionIndex = o;
var userScore = 0;
var correctAnswer = questions[currentQuestionIndex].correct;
var clickViewScores = document.getElementById("view-score");
var answerClick = function(event) {event.preventDefault();
var userAnswer = event.target.textContent;
correctAnswer = questions[currentQuestionIndex].correct;

//var useranswer still needs to be defined. Determine right and wrong answers.

var answerDetermination = document.querySelector("#answer-determination");
if (userAnswer !== correctAnswer) {adjustTime(-5);
answerDetermination.textContent = "WRONG!";
currentQuestionIndex++;
if (currentQuestionIndex >= questions.length) {endQuizPage();}
else {renderQuestion(questions[currentQuestionIndex])};}}

else if (userAnswer === correctAnswer) {currentQuestionIndex++;
answerDetermination.textContent = "Correct!";
userScore++;
if (currentQuestionIndex >= questions.length) {endQuizPage();}
else {renderQuestion(questions[currentQuestionIndex])};
}

var quiz = function (event) {event.preventDefault();
resetDisplay():
renderQuestion(questions[currentQuestionIndex]);};

function resetDisplay() {questionContainer.innerHTML="";
document.querySelector("#intro-page").getElementsByClassName.display = "none";}

function highScores() {
    let data = localSt(orage.getItem("object");
    let getData - JSON.parse(data);
    let name = getData.name;
    let score = getData.score;
    questionContainer.innerHTML = "";
    questionContainer.innerHTML = name + " " + score;}

clickViewScores.addEventListener("click", () => {highScores();})

var initials;
function endQuizPage() {resetDisplay();
timerEl.textContent = "";
clearInterval(quizDuration);
var endPage = document.createElement("h2");
questionContainer.appendChild(endPage);

let blank = document.querySelector("#answer-determination");
blank.innerHTML = "";

endPage.innerHTML = "Quiz Complete! Your score is ' + userScore + '. Enter Initials to Save";

var initialBox = document.createElement("input");
blank.appendChild(initialBox);

var submitInitialBtn = document.createElement("button");
submitInitialBtn.textContent = "Submit";
blank.appendChild(submitInitialBtn);

submitInitialBtn.addEventListener("click", () => {
    if (initialBox.value.length === 0) return false;

    let storeInitials = (...input) => {let data = JSON.stringify({"name":input[0], "score":input[1]})
    localStorage.setItem("object", data)
}
storeInitials(initialBox.value, userScore);

var playAgain = document.createElement("button");
playAgain.textContent= "Retake Quiz?";
blank.appendChild(playAgain);

playAgain.addEventListener("click", () => {location.reload();
    })
});

document.querySelector("input").value = "";
initialBox.addEventListener("submit", function(event) {event.preventDefault;
})};

clickStart.addEventListener('click', quiz);



