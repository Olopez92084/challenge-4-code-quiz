var questions = [{  
    q: "Commonly used data types DO NOT include:",
    a: "1. Strings",
    b: "2. Booleans",
    c: "3. Alerts",
    d: "4. Numbers",
    correct: "3. Alerts", },

{   q: "The condition in an if/else statement is enclosed with ____.",
    a: "1. Quotes",
    b: "2. Curly Brackets",
    c: "3. Parentheses",
    d: "4. Square Brackets",
    correct: "3. Parentheses", },

{   q: "Arrays in JavaScript can be used to store _____.",
    a: "1. Numbers and Strings",
    b: "2. Other arrays",
    c: "3. Booleans",
    d: "4. All of the above",
    correct: "4. All of the above", },

{   q: "String values must be enclosed within _______ when being assigned to variables.",
    a: "1. Quotes",
    b: "2. Curly Brackets",
    c: "3. Parentheses",
    d: "4. Square Brackets",
    correct:"1. Quotes", },

{   q: "A very useful too used during development and debugging for printing content to the debugger is:", 
    a: "1. JavaScript",
    b: "2. Terminal/Bash",
    c: "3. for loops",
    d: "4. console.log",
    correct: "4. console.log", },

{   q: "What is the correct syntax for referring to an external script called 'code.js'?",
    a: "1. <script src='code.js'>",
    b: "2. <script href='code.js'>",
    c: "3. <script ref='code.js'>",
    d: "4. <script name='code.js'>",
    correct: "1. <script src='code.js'>" ,}];

    var clickStart = document.getElementById("start");
    var timerEl = document.getElementById("countdown");
    var timeLeft = 60;
    var quizDuration;
    var questionContainer = document.querySelector("#quiz-container");
    

function timer() {
    timerEl.textContent = "Time Remaining: " + timeLeft + "s";
    quizDuration = setInterval(function () {
                      if (timeLeft > 0) 
                      {
                          adjustTime(-1);
                        }
                      else {
                          endQuizPage();
                        } 
                    }, 1000); 
                }

function adjustTime(amount) {
    timeLeft += amount;
            if (timeLeft < 0) {
                timeLeft = 0;
            } 
            timerEl.textContent = "Time Remaining: " + timeLeft + "s";
        }

clickStart.onclick = timer;
var renderQuestion = function (question) {
    questionContainer.innerHTML = "";

var questionHeader = document.createElement("h2");
questionHeader.textContent = question.q;

var answerA = document.createElement("button");
answerA.textContent = questions.a;
answerA.addEventListener("click", answerClick);

var answerB = document.createElement("button");
answerB.textContent = questions.b;
answerB.addEventListener("click", answerClick);

var answerC = document.createElement("button");
answerC.textContent = questions.c;
answerC.addEventListener("click", answerClick);

var answerD = document.createElement("button");
answerD.textContent = questions.d;
answerD.addEventListener("click", answerClick);

questionContainer.appendChild(questionHeader);
questionContainer.appendChild(answerA);
questionContainer.appendChild(answerB);
questionContainer.appendChild(answerC);
questionContainer.appendChild(answerD);
}


var currentQuestionIndex = o;
var userScore = 0;
var correctAnswer = questions[currentQuestionIndex].correct;
var clickViewScores = document.getElementById("view-score");

var answerClick = function(event) {
    event.preventDefault();
var userAnswer = event.target.textContent;
correctAnswer = questions[currentQuestionIndex].correct;


var answerDetermination = document.querySelector("#answer-determination");
if (userAnswer !== correctAnswer) {
    adjustTime(-5);
answerDetermination.textContent = "WRONG!";
currentQuestionIndex++;

if (currentQuestionIndex >= questions.length) {
    endQuizPage();
} else {renderQuestion(questions[currentQuestionIndex])};
}

else if (userAnswer === correctAnswer) {
    currentQuestionIndex++;
answerDetermination.textContent = "Correct!";
userScore++;
if (currentQuestionIndex >= questions.length) {
    endQuizPage();
}
else {renderQuestion(questions[currentQuestionIndex])};
}
};

var quiz = function (event) {
    event.preventDefault();
resetDisplay();
renderQuestion(questions[currentQuestionIndex]);
};

function resetDisplay() {
    questionContainer.innerHTML="";
document.querySelector("#intro-page").style.display = "none";
}

function highScores() {
    let data = localStorage.getItem("object");
    let getData = JSON.parse(data);
    let name = getData.name;
    let score = getData.score;
    questionContainer.innerHTML = "";
    questionContainer.innerHTML = name + " " + score;
}

clickViewScores.addEventListener("click", () => {
    highScores();
})

var initials;
function endQuizPage() {
    resetDisplay();
timerEl.textContent = "";
clearInterval(quizDuration);
var endPage = document.createElement("h2");
questionContainer.appendChild(endPage);

let blank = document.querySelector("#answer-determination");
blank.innerHTML = "";

endPage.innerHTML = "Quiz Complete! Your score is " + userScore + ". Enter Initials to Save";

var initialBox = document.createElement("input");
blank.appendChild(initialBox);

var submitInitialBtn = document.createElement("button");
submitInitialBtn.textContent = "Submit";
blank.appendChild(submitInitialBtn);

submitInitialBtn.addEventListener("click", () => {
    if (initialBox.value.length === 0) return false;

    let storeInitials = (...input) => {
        let data = JSON.stringify({ "name":input[0], "score":input[1]})
    localStorage.setItem("object", data)
}
storeInitials(initialBox.value, userScore);

var playAgain = document.createElement("button");
playAgain.textContent= "Retake Quiz?";
blank.appendChild(playAgain);

playAgain.addEventListener("click", () => {
    location.reload();
    })
});
document.querySelector("input").value = "";

initialBox.addEventListener("submit", endQuizPage);
};

function renderInitials() {
submitInitialBtn.addEventListener('click', function(event) {
    event.preventDefault;
}
)};

clickStart.addEventListener('click', quiz);



