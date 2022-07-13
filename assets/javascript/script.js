//Declare Variables
var timerEl = document.querySelector("timer")
var timeLeft = 75;
var startButton = document.querySelector("#start")
var option0 = document.querySelector("#0");
var option1 = document.querySelector("#1");
var option2 = document.querySelector("#2");
var option3 = document.querySelector("#3");

//Question/Answer Object

let question = document.createElement("p")

const question0 = {
  question0: "A broken clock is right how many times a day?",
  options0: ["One", "Two", "Three", "Four"],
  answer0: "Two",
}
const question1 = {
  question1: "What time of cheese is made backwards?",
  options1: ["Cheddar", "Edam", "Gouda", "Provalone?"],
  answer1: "Edam?",
}
const question2 = {
  question2: "What 5 letter word becomes shorter when you add 2 letters?",
  options2: ["Trash", "Short", "Elbow", "Bones"],
  answer2: "Short",
}
const question3 = {
  question3: "What invention allows a person to look right through a wall?",
  options3: ["Geothermal Ocular Lenses", "UV Sensative Camera", "Granular Imaging Processor", "A Window"],
  answer3: "A Window",
}
const question4 = {
  question4: "When buying stocks you should buy low and sell _____?",
  options4: ["Low", "At the Same Price", "High", "Immediately"],
  answer4: "High",
}

//Start a Countdown Timer 75 seconds. Time can't go below 0. At 0 timer disapears.

function countDown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds";
    }
    else {
      clearInterval(timeInterval)
      timerEl.textContent = ""
    }
  }, 1000);
}


// Start button - On click call countDown() for loop to rotate through questions as they are answered.

function startGame() {
  countDown();
  startButton.style.display = 'none';

};

// Logic for Questions

        //if user picks correctly show next question
        //if user picks incorrectly time decreases by 15 seconds and show next question
        //push score to memory

// if all questions are answered else time reaches 0

//end game
    //prompt in initials for leaderboard
    //go back button or clear highscores
    //view highscores
// Event Listeners: Start button on click
startButton.addEventListener("click", startGame);

