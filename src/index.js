import "./styles.css";

const canvas = document.querySelector("#draw-area"); //htmlのid:draw-areaを参照
const context = canvas.getContext("2d"); //キャンパスに2Dの書き込みを許可

canvas.addEventListener("mousemove", event => {
    draw(event.layerX, event.layerY);
});

canvas.addEventListener("touchmove", event => {
    draw(event.layerX, event.layerY);
});

canvas.addEventListener("mousedown", () => {
    context.beginPath();
    isDrag = true;
});

canvas.addEventListener("mouseup", () => {
    context.closePath();
    isDrag = false;
});

canvas.addEventListener("touchstrat", () => {
    context.beginPath();
    isDrag = true;
});

canvas.addEventListener("touched", () => {
    context.closePath();
    isDrag = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;

function draw(x, y) {
    if (!isDrag) {
        return;
    }

    context.lineWidth = 5;
    context.strokeStyle = "#00FF00";
    context.lineTo(x, y);
    context.stroke();
}