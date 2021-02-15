let timer;

let userScore = 0;
let initialTimer = 75;

let finishers = [];

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    correct: "Protractor",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Protractor",
    choiceD: "Numbers",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    correct: "Curly brackets",
    choiceA: "Quotes",
    choiceB: "Curly brackets",
    choiceC: "Pita",
    choiceD: "Square brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    correct: "All of the above",
    choiceA: "Numbers and strings",
    choiceB: "Other arrays",
    choiceC: "Booleans",
    choiceD: "All of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    correct: "Quotes",
    choiceA: "Commas",
    choiceB: "Curly Brackets",
    choiceC: "Quotes",
    choiceD: "Hashbrowns",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    correct: "console.log",
    choiceA: "JavaScript",
    choiceB: "Terminal/bash",
    choiceC: "For loops",
    choiceD: "console.log",
  },
  {
    question: "",
    correct: "",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
  },
];

let startButton = document.getElementById("startButton");
let startDisplay = document.getElementById("startDisplay");
let questionDisplay = document.getElementById("questionDisplay");
let scoreDisplay = document.getElementById("scoreDisplay");
let buttons = document.querySelectorAll(".buttons");
let timerSpan = document.getElementById("timerDisplay");
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let cycleIndex = 0;
let pulledStorage = localStorage.getItem("User Score");

startButton.addEventListener("click", function () {
  startButton.setAttribute("class", "hide");
  startDisplay.setAttribute("class", "hide");
  questionDisplay.classList.remove("hide");
  document.getElementById("answers").style.visibility = "visible";

  timer = setInterval(timerFunction, 1000);
  timerSpan.textContent = initialTimer;
  scoreDisplay.textContent = userScore;

  displayArray();
});

function displayArray() {
  question.textContent = questions[cycleIndex].question;
  answer1.textContent = questions[cycleIndex].choiceA;
  answer2.textContent = questions[cycleIndex].choiceB;
  answer3.textContent = questions[cycleIndex].choiceC;
  answer4.textContent = questions[cycleIndex].choiceD;
  scoreDisplay.textContent = userScore;

  if (cycleIndex === 5 || initialTimer === 0) {
    storeScore();
    endGame();
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent === questions[cycleIndex].correct) {
      correctAnswer();
    } else incorrectAnswer();
  });
});

function correctAnswer() {
  cycleIndex++;
  userScore += 20;
  displayArray();
}

function incorrectAnswer() {
  cycleIndex++;
  initialTimer -= 20;
  displayArray();
}

function timerFunction() {
  initialTimer--;
  timerSpan.textContent = initialTimer;
  if (initialTimer <= 0) {
    storeScore();
    clearInterval(timer);
  }
}

function endGame() {
  clearInterval(timer);
  location.replace("resultpage.html");
}

function storeScore() {
  let scoreText = "User Score: ";
  localStorage.setItem("userScore", userScore);
}

/* References: 
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
https://stackoverflow.com/questions/18954777/how-to-add-a-new-object-key-value-pair-to-an-array-in-javascript
https://stackoverflow.com/questions/40843773/localstorage-keeps-overwriting-my-data
https://stackoverflow.com/questions/14997984/print-an-arrayobject-without-comma-seperator/14998030
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/
