// created a 70 second timer that will remain on the page for the duration of the quiz
function timer(){
    window.sec = 70;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
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
        document.getElementById("q"+next).style="display:block"
    };
}

var incorrectButtons = document.querySelectorAll(".incorrect")
// Created a for loop that will move on to the next question when a user selects the incorrect answer
// I had to add all the "if" statements because it was skipping questions depending on which incorrect answer the user clicked. 
for (let i = 0; i < incorrectButtons.length; i++) {
    incorrectButtons[i].addEventListener("click", incorrect);
    function incorrect(e) {   
        window.sec-=5;
        e.target.parentElement.parentElement.parentElement.style="display:none";
        if (i==1) {
            i-=1
        }
        if (i == 2) {
            i-=2
        }

        if (i == 3) {
            i-=2
        }

        if (i == 4) {
            i-=3
        }
        if (i == 5) {
            i-=4
        }

        if (i == 6) {
            i-=4
        }

        if (i == 7) {
            i-=5
        }

        if (i == 8) {
            i-=6
        }

        if (i == 9) {
            i-=6
        }

        if (i == 10) {
            i-=7
        }

        if (i == 11) {
            i-=8
        }

        if (i == 12) {
            i-=8
        }

        if (i == 13) {
            i-=9
        }

        if (i == 14) {
            i-=10
        }

        if (i == 15) {
            i-=10
        }

        if (i == 16) {
            i-=11
        }

        if (i == 17) {
            i-=12
        }

        var next = i+1
        document.getElementById("q"+next).style="display:block"
    };
}




