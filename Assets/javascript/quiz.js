// created a 60 second timer that will remain on the page for the duration of the quiz
function timer(){
    window.sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.querySelector(".quiz-questions").style=("display:none");
            document.querySelector(".scores-page").style=("display:block");
        }
    }, 1000);
//this should remove the quiz questions from the page & make the highscores section appear
    setTimeout(function() {
    }, 
    60000);
}

timer();

// Created a variable for the Start Quiz Button 
var generateBtn = document.querySelector("#start-quiz");
var totalScore = 0;
var correctButtons = document.querySelectorAll(".correct")
//Created a for loop that will move on to the next question when a user selects the correct answer
for (let i = 0; i < correctButtons.length; i++) {
    correctButtons[i].addEventListener("click", correct);

    function correct(e) {
        totalScore += 3;
        e.target.parentElement.parentElement.parentElement.style="display:none";
        var next = i+1

        if (i == 5) {
            document.getElementById("final-score").textContent = totalScore;
            document.querySelector(".scores-page").style="display:block";
            document.querySelector(".quiz-questions").style=("display:none");

        }

        else {
            document.getElementById("q"+next).style="display:block";
        }
    };
}
console.log(totalScore);
// The totalScore would be inserted inside of id - #final-score


var incorrectButtons = document.querySelectorAll(".incorrect")
// Created a for loop that will remove 5 seconds from the timer & move on to the next question when a user selects the incorrect answer
// I had to add all the "if" statements because it was skipping questions depending on which incorrect answer the user clicked. 
for (let i = 0; i < incorrectButtons.length; i++) {
    incorrectButtons[i].addEventListener("click", incorrect);
    function incorrect(e) {   
        window.sec-=5;
        e.target.parentElement.parentElement.parentElement.style="display:none";
        // divided it by 3 because there are a total of 18 incorrect answers & prior to doing this, each incorrect answer was moving further down versus going to the next question because it was adding 1 to its index.  
        var next = Math.floor(i/3)+1

        if (i >= 15) {
            document.getElementById("final-score").textContent = totalScore;
            document.querySelector(".scores-page").style="display:block";
            document.querySelector(".quiz-questions").style=("display:none");
        }

        else {
            document.getElementById("q"+next).style="display:block";
        }
    };






