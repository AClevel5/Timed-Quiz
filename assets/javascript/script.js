//Declare Variables
//Score & Time
//Starting Time

//Question/Answer Object

let question = document.createElement("p")

const questions = {
    Question1:"Ask question here",
    Answer1:["strings","of","answers here"]
}

//Hide start button/ Start button start time

//clear page div.welcome cleared - html div welcome and button element

// countdownloop cant go below 0

function countdown() {
    var timeLeft = 75;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
     
      if(timeLeft === 0) {
        timeLeft--;
         //timerEl.textContent = timeLeft + " seconds";
         //countDown.appendChild(timer);
      }
      else{
        clearInterval(timeInterval)
      }
      
    }, 1000);
      
  }

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