//Declare Variables
var timerEl = document.querySelector("timer");
var timeLeft = 75;
var startButton = document.querySelector("#start");
var playAgain = document.querySelector("#playAgain");
var addHighScore = document.querySelector("#addHighScore")
var leaderBoard = document.querySelector("#leaderBoard");
var option0 = document.querySelector("#button0");
var option1 = document.querySelector("#button1");
var option2 = document.querySelector("#button2");
var option3 = document.querySelector("#button3");
var question = document.querySelector(".direction");
var result = document.querySelector(".result");
let currentQuestion = 0;
var timeInterval = 0;
let score = 0;
var newHighScores = document.querySelector("#rankings");
var lb = document.querySelector(".LB");

const { log } = console;;
//Question/Answer Object
const questions = [
  {
    question: "A broken clock is right how many times a day?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two",
  },
  {
    question: "What time of cheese is made backwards?",
    options: ["Cheddar", "Edam", "Gouda", "Provalone?"],
    answer: "Edam",
  },
  {
    question: "What 5 letter word becomes shorter when you add 2 letters?",
    options: ["Trash", "Short", "Elbow", "Bones"],
    answer: "Short",
  },
  {
    question: "What invention allows a person to look right through a wall?",
    options: ["Geothermal Ocular Lenses", "UV Sensative Camera", "Granular Imaging Processor", "A Window"],
    answer: "A Window",
  },
  {
    question: "When buying stocks you should buy low and sell _____?",
    options: ["Low", "At the Same Price", "High", "Immediately"],
    answer: "High",
  }];

//Hide Option Buttons on start page
option0.style.display = "none";
option1.style.display = "none";
option2.style.display = "none";
option3.style.display = "none";

//Start a Countdown Timer 75 seconds. Time can't go below 0. At 0 timer disapears.
function countDown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0 && !isGameEnd()) {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds";
    }
    else {
      clearInterval(timeInterval)
      timerEl.textContent = ""
      endGame();
    }
  }, 1000);
}


// Start button - On click call countDown() for loop to rotate through questions as they are answered.
function startGame() {
  countDown();
  startButton.style.display = 'none';
  option0.style.display = "block";
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  askQuestion();
};

// Question Logic
function isCorrectAnswer(answer) {
  return answer === questions[currentQuestion].answer;
};

// Handles your click to be correct or incorrect. Subtracts 15 seconds if incorrect. Moves to next question. 
function handleAnswer(event) {
  //log("currentQuestion: ", currentQuestion);
  //log("length: ", questions.length);

  // handle event delegation in JavaScript
  const target = event.target;

  if (target.className === "option") {
    if (isGameEnd()) {
      return endGame();
    }
    const chosenAnswer = event.target.innerHTML;
    const isCorrect = isCorrectAnswer(chosenAnswer);
    if (!isCorrect) {
      timeLeft -= 15;
      result.textContent = "Incorrect";
      currentQuestion++;
      askQuestion();
      return;
    }
    currentQuestion++;
    result.textContent = "Correct";
    askQuestion();
  }
};

// Check if Game is over
const isGameEnd = () => timeLeft === 0 || questions.length === currentQuestion;

// Function to run when game is done
function endGame() {
  document.querySelector(".questions").classList.add("hide");
  document.querySelector(".result").classList.remove("hide");
  question.textContent = "Game Complete";
  score = timeLeft;
  result.textContent = "Score: " + score;
  playAgain.classList.remove("hide");
  addHighScore.classList.remove("hide");
  leaderBoard.classList.remove("hide");
};

// Button logic to play again
function refreshScreen() {
  location.reload();

};

//Changes text content of buttons.
function askQuestion() {
  if (isGameEnd()) {
    return endGame();
  }

  question.innerHTML = questions[currentQuestion].question;
  option0.textContent = questions[currentQuestion].options[0];
  option1.textContent = questions[currentQuestion].options[1];
  option2.textContent = questions[currentQuestion].options[2];
  option3.textContent = questions[currentQuestion].options[3];
};

//Add Highscore button function to store results in local storage
function enterHighScore() {
  let initials = prompt("Please enter your initials");
  if (initials !== "") {
    var scoreList = JSON.parse(localStorage.getItem("New Entry")) || [];
    var newEntry = {
      score: score,
      initials: initials.toUpperCase(),
    };
    scoreList.push(newEntry);
    localStorage.setItem("New Entry", JSON.stringify(scoreList));
  } else {
      alert("Please enter your initials");
    };

  };

  function pageHighScore(){
    lb.classList.remove("hide");
    var highScores = JSON.parse(localStorage.getItem("New Entry"));
    console.log(highScores);
    sortedHighScores = highScores.sort((a, b) => b.score - a.score);
    for (let index = 0; index < sortedHighScores.length; index++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Player: " + sortedHighScores[index].initials + "  Score: " + sortedHighScores[index].score;
    //console.log(newHighScores);
    //console.log(listItem);
    newHighScores.appendChild(listItem);
    }
    


  };


//Add Leaderboard to show highscores






// Event Listeners: Start button on click
startButton.addEventListener("click", startGame);
document.addEventListener("click", handleAnswer);
playAgain.addEventListener("click", refreshScreen);
addHighScore.addEventListener("click", enterHighScore);
leaderBoard.addEventListener("click", pageHighScore);