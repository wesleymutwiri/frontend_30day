$(function(){
    var mode = false;
    var timeCounter =0;
    var action;
    var lapCounter = 0;
    var lapNumber = 0;

    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;

    hideshowButtons("#startbutton","#lapbutton");

    $("#startbutton").click(function(){
        mode = 1;
        hideshowButtons("#stopbutton", "#lapbutton");
        startAction();
    });

    $("#stopbutton").click(function(){
        hideshowButtons("#resumebutton","#resetbutton");
        clearInterval(action);
    });

    $("#resumebutton").click(function () {
        hideshowButtons("#stopbutton", "#lapbutton");
        startAction();
    });
    $("#resetbutton").click(function () {
        location.reload();
    });
    $("#lapbutton").click(function () {
        if(mode) {
            clearInterval(action);
            lapCounter = 0;
            addLap();
            startAction();
        }
    });
    function hideshowButtons(x,y){
        $(".control").hide();
        $(x).show();
        $(y).show();

    }

    function startAction(){
        action = setInterval(function(){
            timeCounter++;
            if(timeCounter == 100*60*100){
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
            updateTime();
        }, 10);    
}
    function updateTime(){
        timeMinutes = Math.floor(timeCounter/6000);
        timeSeconds = Math.floor((timeCounter%6000)/100);
        timeCentiseconds = ((timeCounter % 6000) / 100)%100; 
        $("#timeminute").text(format(timeMinutes));
        $("#timesecond").text(format(timeSeconds));
        $("#timecentisecond").text(format(timeCentiseconds));

        lapMinutes = Math.floor(timeCounter / 6000);
        lapSeconds = Math.floor((timeCounter % 6000) / 100);
        lapCentiseconds = ((timeCounter % 6000) / 100) % 100; 
        
        $("#lapminute").text(format(lapMinutes));
        $("#lapsecond").text(format(lapSeconds));
        $("#lapcentisecond").text(format(lapCentiseconds));
    }

    function format(number) {
        if(number<10){
            return '0' +number;
        }
        else {
            return number;
        }
    }

    function addLap(){
        lapNumber++;
        var myLapDetails = 
            '<div class="lap">' + '<div class="laptimetitle">' + 'Lap' + lapNumber + '</div>' + '<div class="laptime">' + '<span>' + format(lapMinutes) + '</span>' + ':<span>' + format(lapSeconds) + '</span>' + ':<span>' + format(lapCentiseconds) + '</span>'+'</div>' + '</div>';
        $(myLapDetails).prependTo("#laps");
    }

});