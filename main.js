mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 5;
radius = 20;

canvas.addEventListener("mousedown", mousedown);

function mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave(e) {
    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mouseup", mouseup);

function mouseup(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", mousemove);

function mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI)
        ctx.stroke();
    }
}

function clear() {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
}