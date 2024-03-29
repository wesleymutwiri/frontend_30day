$(function() {
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);

        } 
    });


    var paint = false;
    var paint_erase = "paint";
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");
    var container = $("#container");
    var mouse = {x:0, y:0};
    localStorage.getItem("x");

    if(localStorage.getItem("imagecanvas") != null) {
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, 0, 0);
        }
        img.src = localStorage.getItem("imagecanvas");
    }

    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    container.mousedown(function(e) {
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop; 

        ctx.moveTo(mouse.x, mouse.y);
    });
    container.mousemove(function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint == true) {
            if(paint_erase == "paint") {
                ctx.strokeStyle = $("#paintcolor").val();
            }else {
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
    container.mouseup(function() {
        paint = false;
    });
    container.mouseleave(function() {
        paint = false;
    });

    $("#reset").click(function() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        paint_erase = "paint";
        $("#erase").removeClass("erasemode");
    });

    $("#save").click(function() {
        if (typeof (localStorage) != null) {
            localStorage.setItem("imagecanvas", canvas.toDataURL());

        } else {
            window.alert("Your browser doesn't support Local storage");
        }
    })


    $("#erase").click(function() {
        if(paint_erase == "paint") {
            paint_erase = "erase";
        }else {
            paint_erase = "paint";
        }
        $(this).toggleClass("erasemode");
    });


    $("#paintcolor").change(function(){
        $("#circle").css("background", 
        $(this).val());
    });

    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function (event, ui) {
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });


});

    // var canvas = document.getElementById("paint");
    // var context = canvas.getContext('2d');
    // context.beginPath();
    // context.lineWidth = 40;
    // context.strokeStyle = '#42e565';
    // context.lineCap = "round";
    // context.lineJoin = "round";
    // context.moveTo(50, 50);
    // context.lineTo(200, 200);

    // context.lineTo(400, 100);

    // context.stroke();