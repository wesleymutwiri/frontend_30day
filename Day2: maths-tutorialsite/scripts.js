var playing = false;
var score;
var action;
var timeremaining;

document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }
    else {
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset Game";
        startCountdown();

    }
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0){
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over</p> <p>Your score is: " + score + "</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML ="Start Game";
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display = "none";
}
function show(id){
    document.getElementById(id).style.display = "block";
}

function generateQA(){

}