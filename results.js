//function to get local storage

//Prompt displaying your score was ${whatever}, Please enter your initials
//If prompt char > 3 alert("Please only enter your initials")
//redisplay prompt.

//after prompt function to log initials and score to page divs

//show button to try again that links back to the index.

let existingScore = localStorage.getItem("userScore");
let scoreList = [];
let storedArray;
const resultNames = document.getElementById("resultNames");
let previousScores = localStorage.getItem("Stored Array");

// function getOnnit() {
//   if (localStorage) {
//     scoreList = previousScores; //Pull from local storage previous scores into Array, possibly
//     console.log(scoreList);
//     let enterName = prompt(
//       `Wow! You scored ${existingScore}! Enter your initials`
//     ); //Log initials into variable
//     enterName; //Calling prompt

//     let attempt = JSON.stringify(enterName + " " + existingScore); //Creating a JSON w/ prompt and score

//     scoreList.push(attempt); //pushing ^ that code into array

//     console.log("Test Log: " + enterName + " " + existingScore); //console logging for unknown reason

//     resultNames.textContent = scoreList; // putting text to page from scoreList

//     localStorage.setItem("Stored Array", scoreList); //Setting the scorelist array to local storage with Key "Stored Array"
//   }
// }

// getPrevious push new info into it
//pull existing array, push new information into it. set to local storage

getOnnit();

// set variable, parse it in variable
