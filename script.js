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

//Starts the Game
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

//Displays Object To Page
function displayArray() {
  question.textContent = questions[cycleIndex].question;
  answer1.textContent = questions[cycleIndex].choiceA;
  answer2.textContent = questions[cycleIndex].choiceB;
  answer3.textContent = questions[cycleIndex].choiceC;
  answer4.textContent = questions[cycleIndex].choiceD;
  console.log("DisplayArray Called");
  console.log("Cycle Index: " + cycleIndex);
  scoreDisplay.textContent = userScore;

  if (cycleIndex === 5 || initialTimer === 0) {
    storeScore();
    console.log("End of questions.");
    endGame();
  }
}

//Validates answer, adds + 20 to score, logs score to console
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.textContent === questions[cycleIndex].correct) {
      correctAnswer();
    } else incorrectAnswer();
  });
});

//FIGURE OUT WHY THIS ISN'T WORKING
//If the answer was correct, advances cycleIndex, displays Array with conditional to end game
// function correctAnswer() {
//   console.log("correct Answer Function: " + scoreString);
//   console.log("cycleIndex: " + cycleIndex);
//   console.log("correctAnswer Called");
//   cycleIndex++;
//   console.log("Before If statement");
//   if (cycleIndex === 100) {
//     displayArray();
//     console.log("If statement");
//   } else {
//     // endGame();
//     console.log("Else statement");
//     console.log("Endgame Called: correctAnswer");
//   }
// }

function correctAnswer() {
  cycleIndex++;
  userScore += 20;
  displayArray();
}

function incorrectAnswer() {
  cycleIndex++;
  initialTimer -= 20;
  displayArray();
  console.log("Incorrect Answer");
}

function timerFunction() {
  //decrease time by 1
  initialTimer--;
  timerSpan.textContent = initialTimer;
  if (initialTimer <= 0) {
    //save score to local storage function to save to local storage DRY
    console.log("Timer Function fired");
    storeScore();
    clearInterval(timer);
    //jump results page
  }
}

function endGame() {
  console.log("endGame");
  //call whenever game ends and redirect
  clearInterval(timer);
  console.log("Endgame Called");
  // location.replace("resultpage.html");
}

function storeScore() {
  // let scoreArray = [];
  let scoreText = "User Score: ";
  // scoreArray.push(userScore);
  console.log("Pulled Storage: " + pulledStorage);
  // let testPush = savedScore.push("Userscore", userScore.toString);
  // JSON.stringify

  // JSON.parse - to recall
  // items.push({'id':5});
  localStorage.setItem("userScore", userScore);
}

//Clear Interval
// I am trying to cycle through each index, one at a time
// Once an index has displayed, then
//8, 4 & 5, 20-23, 26, 27 & 28, STUDY THESE!!!!

/* References: 
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
https://stackoverflow.com/questions/18954777/how-to-add-a-new-object-key-value-pair-to-an-array-in-javascript
https://stackoverflow.com/questions/40843773/localstorage-keeps-overwriting-my-data
*/
