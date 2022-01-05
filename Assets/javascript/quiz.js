// created a 60 second timer that will remain on the page for the duration of the quiz
function timer(){
    window.sec = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
//this will take the user to the score page once the timer is up
    setTimeout(function() {
        window.location.href="./scores.html"
    }, 60000);
}

timer();

// Created a variable for the Start Quiz Button 
var generateBtn = document.querySelector("#start-quiz");

var correctButtons = document.querySelectorAll(".correct")
//Created a for loop that will move on to the next question when a user selects the correct answer
for (let i = 0; i < correctButtons.length; i++) {
    correctButtons[i].addEventListener("click", correct);

    function correct(e) {
        e.target.parentElement.parentElement.parentElement.style="display:none";
        var next = i+1
        document.getElementById("q"+next).style="display:block";
    };
}

var incorrectButtons = document.querySelectorAll(".incorrect")
// Created a for loop that will remove 5 seconds from the timer & move on to the next question when a user selects the incorrect answer
// I had to add all the "if" statements because it was skipping questions depending on which incorrect answer the user clicked. 
for (let i = 0; i < incorrectButtons.length; i++) {
    incorrectButtons[i].addEventListener("click", incorrect);
    function incorrect(e) {   
        window.sec-=5;
        e.target.parentElement.parentElement.parentElement.style="display:none";
        var next = Math.floor(i/3)+1
        document.getElementById("q"+next).style="display:block"
    };
}
// need each correct question to add 3 points