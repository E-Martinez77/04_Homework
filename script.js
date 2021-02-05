let timer;

let userScore;

let initialTimer = 75; //set interval function later on.

let finishers = [];

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Protractor",
    choiceD: "Numbers",
    correct: "Protractor",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    choiceA: "Quotes",
    choiceB: "Curly brackets",
    choiceC: "Pita",
    choiceD: "Square brackets",
    correct: "Pita",
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    choiceA: "Numbers and strings",
    choiceB: "Other arrays",
    choiceC: "Booleans",
    choiceD: "All of the above",
    correct: "All of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choiceA: "Commas",
    choiceB: "Curly Brackets",
    choiceC: "Quotes",
    choiceD: "Hashbrowns",
    correct: "Hashbrowns",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "Terminal/bash",
    choiceC: "For loops",
    choiceD: "console.log",
    correct: "console.log",
  },
];

let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  alert();
});

// document.addEventListener("click", function () {
//   alert;
// });

//8, 4 & 5, 20-23, 26, 27 & 28, STUDY THESE!!!!

/* References: 
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
*/
