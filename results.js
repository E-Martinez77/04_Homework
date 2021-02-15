let existingScore = localStorage.getItem("userScore");
let scoreList = [];
let storedArray;
const resultNames = document.getElementById("resultNames");
let previousScores = localStorage.getItem("Continuous Array");

function anotherTry() {
  JSON.stringify(existingScore);
  JSON.stringify(previousScores);

  scoreList.push(previousScores);

  let enterName = prompt(
    `Wow! You scored ${existingScore}! Enter your initials`
  );

  scoreList.push(enterName + " " + existingScore);

  JSON.stringify(localStorage.setItem("Continuous Array", scoreList));

  let continuousArray = JSON.stringify(
    localStorage.getItem("Continuous Array")
  );
  let testArray = previousScores.split(",");

  for (let i = 0; i < testArray.length; i++) {
    let pTag = document.createElement("p");
    pTag.textContent = testArray[i];
    resultNames.appendChild(pTag);
  }

  let pTag2 = document.createElement("p");
  resultNames.appendChild(pTag2);
  pTag2.textContent = enterName + " " + existingScore;
}

anotherTry();
