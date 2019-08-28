$(function() {
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);

        } 
    });

    var canvas = document.getElementById("paint");
    var context = canvas.getContext('2d');
    context.beginPath();
    context.lineWidth = 40;
    context.strokeStyle = '#42e565';
    context.lineCap = "round";
    context.lineJoin = "round";
    context.moveTo(50, 50);
    context.lineTo(200, 200);

    context.lineTo(400, 100);

    context.stroke();
});