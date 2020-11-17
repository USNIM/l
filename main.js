let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Draw a Background 
fill("#1E3269");
rect(0, 0, cnv.width, cnv.height, "fill");

// Draw a Platform
drawPlat(70, 500, 300, 15, "brown", "green");
drawPlat(500, 300, 175, 13, "brown", "green");
drawPlat(350, 200, 100, 10, "brown", "green");

// Draw a Star
drawStar(30, 50, "yellow");
drawStar(200, 35, "yellow");
drawStar(150, 250, "yellow");
drawStar(400, 100, "yellow");
drawStar(330, 330, "yellow");
drawStar(600, 80, "yellow");
drawStar(650, 400, "yellow");

// Draw a Stickman
drawStickman(100, 390, "white");