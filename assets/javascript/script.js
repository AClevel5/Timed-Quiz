//Declare Variables
var timerEl = document.querySelector("timer")
//Score & Time
//Starting Time

//Question/Answer Object

let question = document.createElement("p")

const questions = {
  Question1: "Ask question here",
  Answer1: ["strings", "of", "answers here"]
}

//Hide start button/ Start button start time

//clear page div.welcome cleared - html div welcome and button element

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
// Will end up calling countdown() on start button click
countDown()

// question 

        //if user picks correctly show next question
        //if user picks incorrectly time decreases by 15 seconds

// if all questions are answered else time reaches 0

//end game
    //put in initials for leaderboard
    //go back button or clear highschoors

    //welcome.setAttribute("style", "visibility:visible"
    //view highscores


    //logic for questions