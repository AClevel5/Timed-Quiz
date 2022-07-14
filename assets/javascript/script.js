//Declare Variables
var timerEl = document.querySelector("timer");
var timeLeft = 75;
var startButton = document.querySelector("#start");
var option0 = document.querySelector("#button0");
var option1 = document.querySelector("#button1");
var option2 = document.querySelector("#button2");
var option3 = document.querySelector("#button3");
var question = document.querySelector(".direction");
var result = document.querySelector("result");
let currentQuestion = 0;
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
  option0.style.display = "block";
  option1.style.display = "block";
  option2.style.display = "block";
  option3.style.display = "block";
  askQuestion();
};

// Question Logic
function isCorrectAnswer(answer){
  return answer === questions[currentQuestion].answer;
  };

 // Handles your click to be correct or incorrect. Subtracts 15 seconds if incorrect. Moves to next question. 
function handleAnswer(event){
  const chosenAnswer = event.target.innerHTML;
  const isCorrect = isCorrectAnswer(chosenAnswer);
  if (!isCorrect){
    timeLeft -= 15;
    //result.textContent = "Incorrect";
  }
  currentQuestion++;
  //result.textContent = "Correct";
  askQuestion();
  

};

//Changes text content of buttons.
function askQuestion(){
  
  question.innerHTML = questions[currentQuestion].question;
  option0.textContent = questions[currentQuestion].options[0];
  option1.textContent = questions[currentQuestion].options[1];
  option2.textContent = questions[currentQuestion].options[2];
  option3.textContent = questions[currentQuestion].options[3];
};







// if all questions are answered else time reaches 0
//end game & push score to memory
//prompt in initials for leaderboard
//go back button or clear highscores
//view highscores

// Event Listeners: Start button on click
startButton.addEventListener("click", startGame);
option0.addEventListener("click", handleAnswer);
option1.addEventListener("click", handleAnswer);
option2.addEventListener("click", handleAnswer);
option3.addEventListener("click", handleAnswer);

