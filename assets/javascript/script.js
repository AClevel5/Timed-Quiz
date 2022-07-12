//Declare Variables
var timerEl = document.querySelector("timer")


//Question/Answer Object

let question = document.createElement("p")

const questions = {
  Question0: "Ask question here",
  Options0: ["strings", "of", "answers here"]
}

//Start a Countdown Timer 75 seconds. Time can't go below 0. At 0 timer disapears.

function countDown() {
  var timeLeft = 75;
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

// Logic for Questions

        //if user picks correctly show next question
        //if user picks incorrectly time decreases by 15 seconds and show next question
        //push score to memory

// if all questions are answered else time reaches 0

//end game
    //prompt in initials for leaderboard
    //go back button or clear highscores
    //view highscores


