let timer;

let userScore = 0; //display to page
let initialTimer = 75; //set interval function later on. Display

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
];

let startButton = document.getElementById("startButton");
let startDisplay = document.getElementById("startDisplay");
let questionDisplay = document.getElementById("questionDisplay");
let buttons = document.querySelectorAll(".buttons");
let timerSpan = document.getElementById("timerDisplay");
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let cycleIndex = 0;

startButton.addEventListener("click", function () {
  // alert();
  startButton.setAttribute("class", "hide");
  startDisplay.setAttribute("class", "hide");
  questionDisplay.classList.remove("hide");
  timer = setInterval(timerFunction, 1000);
  timerSpan.textContent = initialTimer;

  displayArray();
});

function displayArray() {
  //probably need a for loop
  question.textContent = questions[cycleIndex].question;
  answer1.textContent = questions[cycleIndex].choiceA;
  answer2.textContent = questions[cycleIndex].choiceB;
  answer3.textContent = questions[cycleIndex].choiceC;
  answer4.textContent = questions[cycleIndex].choiceD;

  //There needs to be something here to validate if a correct answer was clicked
}

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent === questions[cycleIndex].correct) {
      correctAnswer();
      userScore++;
      console.log("User Score: " + userScore);
    } else incorrectAnswer();
  });
});

function correctAnswer() {
  console.log("Correct");
  cycleIndex++;
  if (cycleIndex <= questions.length) {
    displayArray();
  } else {
    //Set score to local storage to pull on results page
    endGame();
  }
}

function incorrectAnswer() {
  cycleIndex++;
  initialTimer -= 10;
  displayArray();
}

function timerFunction() {
  //decrease time by 1
  initialTimer--;
  timerSpan.textContent = initialTimer;
  if (initialTimer <= 0) {
    //save score to local storage function to save to local storage DRY
    //jump results page
    endGame();
  }
}

function endGame() {
  //call whenever game ends and redirect
  clearInterval(timer);
}

//Clear Interval
// I am trying to cycle through each index, one at a time
// Once an index has displayed, then
//8, 4 & 5, 20-23, 26, 27 & 28, STUDY THESE!!!!

/* References: 
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
*/
