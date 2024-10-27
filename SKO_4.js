//GitHub Copilot assisted in writing this code.
//The image of Sigma Squiward is from Débora González on Behance < https://www.behance.net/gallery/97380727/Handsome-Squidward/modules/562296985 >

var elevator;
var ellipses = [];
let InterstateBCFont;
let Portrait;
let Sigma_VTEC;

function preload(){
  elevator = loadImage("data/Elevator.jpeg");
  InterstateBCFont = loadFont("Interstate_BoldCondensed.ttf");
  Portrait = loadImage("data/Portrait.png");
  Sigma_VTEC = loadImage("data/Sigma_VTEC.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipses = [
    { x: width / 1.1321, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-CW/" },
    { x: width / 1.1321, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-1/" },
    { x: width / 1.1321, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-3/" },
    { x: width / 1.1321, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-5/" },
    { x: width / 1.1321, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-7/" },
    { x: width / 1.1321, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-9/" },
    { x: width / 1.1321, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-11/" },

    { x: width / 1.0925, y: height / 1.475, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-0/" },
    { x: width / 1.0925, y: height / 1.617, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-2/" },
    { x: width / 1.0925, y: height / 1.789, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-4/" },
    { x: width / 1.0925, y: height / 2, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-6/" },
    { x: width / 1.0925, y: height / 2.27, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-8/" },
    { x: width / 1.0925, y: height / 2.625, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-10/" },
    { x: width / 1.0925, y: height / 3.11, w: width / 40, h: height / 22, url: "https://tnhowler.github.io/Elijah-s-SKO-Week-12/" },
  ];
}

function draw() {
  background("white");
  image(elevator, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);

  image(Portrait, width / 1.65, height / 1.3, width / 4, height / 4);

  image(Sigma_VTEC, width / 2.6, height / 1.3, width / 4, height / 4);

  imageMode(CORNER);

  strokeWeight(width / 550);
  noFill();

  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    if (i === 9) {
      stroke(0, 255, 0);
    } else if (i === 1) {
      stroke(255, 0, 0);
    } else {
      stroke(255, 0, 0);
    }
    ellipse(e.x, e.y, e.w, e.h);
  }

  textAlign(CENTER, CENTER);
  textSize(windowWidth / 50);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0);
  text(
    "Codewords Creative Coding and Typography",
    width / 2.5,
    height / 10,
    width / 5, // Specify the width for wrapping the text
    height / 12,  // Specify the height for wrapping the text
  );

  // Display text in the middle of the screen
  textAlign(CENTER, CENTER);
  textSize(windowWidth / 115);
  textFont(InterstateBCFont); 
  noStroke();
  fill(0); 
  text(
    "In week 4 we started looking at the start of project 1. We examined some readings to see if there was any connections that can be made with graphic design. I found three readings, one was from John Wick, one from The Bee Movie and one about VTEC. I decided that the VTEC reading was worth exploring, or maybe it was just my addiction with Honda's and their amazing engines. I spoke with Andy about my reading and it was clear that there wasn't a strong enough connection between graphic design and the reading, so he suggested I look at one of the provided readings on canvas. Over the week I looked into the “Lowtech Manifesto” by James Wallbank. \n\nIn the afternoon class we looked into more p5 using text and images to create a reactive page either from clicking or moving the mouse around. Also frame rate allowed the image and active parts of the code to look animated. \n\n If you would like to see Sigma VTEC in action, click on Squidward (WARNING quick flashing). If you would like to see the code for the portrait, click on it to go the the repository.",
    width / 3,
    height / 10,
    width / 3, // Specify the width for wrapping the text
    height / 2  // Specify the height for wrapping the text
  );
}

function mousePressed() {
  for (let i = 0; i < ellipses.length; i++) {
    let e = ellipses[i];
    let d = dist(mouseX, mouseY, e.x, e.y);
    if (d < e.w / 2) {
      window.location.href = e.url;
    }
  }

  let Sigma_VTECX = width / 2.6;  
  let Sigma_VTECY = height / 1.3;  
  let Sigma_VTECW = width / 4;  
  let Sigma_VTECH = height / 4;  
  if (mouseX > Sigma_VTECX - Sigma_VTECW / 2 && mouseX < Sigma_VTECX + Sigma_VTECW / 2 && mouseY > Sigma_VTECY - Sigma_VTECH / 2 && mouseY < Sigma_VTECY + Sigma_VTECH / 2) {  
   window.location.href = "https://tnhowler.github.io/Week-4-Sigma-VTEC/";
  }  

  let PortraitX = width / 1.65;  
  let PortraitY = height / 1.3;  
  let PortraitW = width / 4;  
  let PortraitH = height / 4;  
  if (mouseX > PortraitX - PortraitW / 2 && mouseX < PortraitX + PortraitW / 2 && mouseY > PortraitY - PortraitH / 2 && mouseY < PortraitY + PortraitH / 2) {  
   window.location.href = "https://github.com/TNHowler/Pixel-Based-Potrait";
  }  
}
