var playing = false;
var score;

document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }
    else {
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";
        document.getElementById("startreset").innerHTML = "Reset Game";
    }
}