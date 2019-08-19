var playing = False;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'grapes', 'cherries', 'peach', 'orange', 'pear', 'watermelon'];

$(function(){
    $("#startreset").click(function(){
        if(playing){
            location.reload();
        }
        else {
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            $("#trialsleft").show();
            trialsLeft = 3;
            addHearts();
            $('#startreset').html("Reset Game");
            startAction();
        }

    });
});

function addHearts(){
    for (i = 0; i < trialsLeft; i++) {
        $("#trialsleft").append('<img src="images/heart.png" class="life">');
    }
}

function startAction() {
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({'left:':Math.round(550*Math.random()), 'top': -50});
}

function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}