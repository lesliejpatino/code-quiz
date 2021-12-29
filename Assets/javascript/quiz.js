

function timer(){
    var sec = 70;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

timer();

document.getElementById("correct").addEventListener("click", correct);

function correct() {
    document.getElementById("correct").innerHTML = "YES!";
    document.getElementById("correct").style.color = "white";
    document.getElementById("correct").style.backgroundColor = "green";
    document.getElementById("correct").style.fontSize = "28px";    
};

document.querySelector(".incorrect").addEventListener("click", incorrect);

function incorrect() {
    document.querySelector(".incorrect").innerHTML = "WRONG";
    document.querySelector(".incorrect").style.color = "white";
    document.querySelector(".incorrect").style.backgroundColor = "red";
    document.querySelector(".incorrect").style.fontSize = "28px";
};