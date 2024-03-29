var playing = false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['apple', 'banana', 'grapes', 'cherries', 'peach', 'orange', 'pear', 'watermelon', 'mango'];

$(function(){
$("#startreset").click(function(){
    if(playing == true){
        location.reload();
    }
    else {
        playing = true;
        score = 0;
        $("#scorevalue").html(score);
        $("#trialsleft").show();
        trialsLeft = 3;
        addHearts();
        $("#gameover").hide();
        $('#startreset').html("Reset Game");
        startAction();
    }

});
$("#fruit1").mouseover(function() {
    score++;
    $("#scorevalue").html(score);
    // document.getElementById("slicesound").play();
    $("#slicesound")[0].play();
    clearInterval(action);
    $("#fruit1").hide("explode", 500);
    setTimeout(startAction, 500);
});


function addHearts(){
    $("#trialsleft").empty();
    for (i = 0; i < trialsLeft; i++) {
        $("#trialsleft").append('<img src="images/heart.png" class="life">');
    }
}

function startAction() {
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top' : -50});
    step = 1+ Math.round(5*Math.random());
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);

        if($("#fruit1").position().top > $("#fruitscontainer").height()){
            if(trialsLeft > 1) {
                $("#fruit1").show();
                chooseFruit();
                $("#fruit1").css({'left': Math.round(550 * Math.random()), 'top': -50 });
                step = 1 + Math.round(5 * Math.random());
                trialsLeft --;
                addHearts();
            }else {
                playing = false;
                $("#startreset").html("Start Game");
                $("#gameover").show();
                $("#gameover").html('<p>Game Over</p> <p> Your score is: ' + score + '</p>');
                $("#trialsleft").hide();
                stopAction();
            }
            } 
    }, 10);
}

function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});