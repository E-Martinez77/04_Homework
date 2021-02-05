let timer;

let userScore;

let initialTimer = 75; //set interval function later on.

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
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

startButton.addEventListener("click", function () {
  alert();
  startButton.setAttribute("class", "hide");
  startDisplay.setAttribute("class", "hide");
  questionDisplay.classList.remove("hide");

  displayArray();
});

function displayArray() {
  for (let i = 0; i < questions.length; i++) {
    question.textContent = questions[i].question;
    answer1.textContent = questions[i].choiceA;
    answer2.textContent = questions[i].choiceB;
    answer3.textContent = questions[i].choiceC;
    answer4.textContent = questions[i].choiceD;

    console.log(questions[i]);
  }
}
//8, 4 & 5, 20-23, 26, 27 & 28, STUDY THESE!!!!

/* References: 
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
*/
