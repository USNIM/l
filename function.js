function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Endpoint 1
    ctx.lineTo(x2, y2); // Endpoint 2
    ctx.stroke();
}

// Draw a stroke or fill rectangle with a top-left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

// Draw a stroke or fill circle with center (x,y) and radius of r
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

// Draw a Platform with top-left corner (x, y)
// and with the given color
function drawPlat(x, y, w, h, color1, color2) {
    fill(color1);
    ctx.fillRect(x, y, w, h);
    fill(color2);
    ctx.fillRect(x, y, w, 5);
}

// Draw a Star with top-left corner (x, y)
// and with the given color
function drawStar(x, y, color) {
    stroke(color);
    line(x + 13, y, x + 24, y + 28);
    line(x + 24, y + 28, x, y + 11);
    line(x, y + 11, x + 28, y + 11);
    line(x + 28, y + 11, x + 4, y + 28);
    line(x + 4, y + 28, x + 13, y);
}

// Draw a Stickman with top-left corner (x, y)
// and with the given color
function drawStickman(x, y, color) {
    fill(color);
    stroke(color);
    circle(x + 20, y + 20, 20, "fill"); // Head
    line(x + 20, y + 40, x + 20, y + 80); // Body
    line(x, y + 70, x + 20, y + 50); // Left Arm
    line(x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(x, y + 110, x + 20, y + 80); // Left Leg
    line(x + 40, y + 110, x + 20, y + 80); // Right Leg
}
