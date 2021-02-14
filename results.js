//function to get local storage

//Prompt displaying your score was ${whatever}, Please enter your initials
//If prompt char > 3 alert("Please only enter your initials")
//redisplay prompt.

//after prompt function to log initials and score to page divs

//show button to try again that links back to the index.

let existingScore;
let scoreList = [];
let storedArray;
const resultNames = document.getElementById("resultNames");

function getOnnit() {
  if (localStorage) {
    let enterName = prompt(
      `Wow! You scored ${existingScore}! Enter your initials`
    );
    enterName;
    existingScore = localStorage.getItem("userScore");
    let attempt = JSON.stringify(enterName + " " + existingScore);
    scoreList.push(attempt);
    console.log(enterName + " " + existingScore);
    resultNames.textContent = scoreList;
    localStorage.setItem("Stored Array", scoreList);
  }
}

getOnnit();
