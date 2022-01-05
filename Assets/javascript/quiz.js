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
//this should remove the quiz questions from the page & make the highscores section appear
    setTimeout(function() {
        document.querySelector(".quiz-questions").style=("display:none");
        document.querySelector(".scores-page").style=("display:block");
    }, 60000);
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
            document.querySelector(".scores-page").style="display:block";
        }

        else {
            document.getElementById("q"+next).style="display:block";
        }
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
        // divided it by 3 because there are a total of 18 incorrect answers & prior to doing this, each incorrect answer was moving further down versus going to the next question because it was adding 1 to its index.  
        var next = Math.floor(i/3)+1

        if (i >= 15) {
            document.querySelector(".scores-page").style="display:block";
        }

        else {
            document.getElementById("q"+next).style="display:block";
        }

};
}
// add event handler for next question.
// if (i > correctButtons.length || i > incorrectButtons.length) {
//     document.querySelector(".scores-page").style="display:block";
// }

// once for loop ends, display highscores table
// var showTable= document.querySelector(".send-score");
// showTable.addEventListener("click", incorrect);

// function showScores() {
//     document.querySelector(".scores-page").style="display:block";
//     console.log("hello");

// for (let i=0; i<showTable.length; i++) {
//     showTable[i].addEventListener("click", showScores);

// };





// The totalScore would be inserted inside of id - #final-score

// the user would then enter their initials
// when the user hits submit, the final score and initials will be saved to a variable and will be inserted in the td element ..
// need to figure out how to get it to maybe create a new element within javascript and add it to that .. using sibling.etc. 
