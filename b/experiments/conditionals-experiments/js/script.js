"use strict";

/**

* Multiple images (happy face/scared face)
* for-loops (discomfort with, why are they instant?)
* delaying code
* pushing and popping

*/

let normalFace = undefined;
let scaredFace = undefined;
let lookingFace = undefined;

function preload() {
  normalFace = loadImage(`assets/images/normal.png`);
  scaredFace = loadImage(`assets/images/scared.png`);
  lookingFace = loadImage(`assets/images/look-right.png`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  imageMode(CENTER);

  translate(width / 2, height / 2);
  if (mouseX < width / 2) {
    // Look left
    scale(-1, 1);
    image(lookingFace, 0, 0, 300, 300);
  } else {
    // Look right
    scale(1, 1);
    image(lookingFace, 0, 0, 300, 300);
  }
}









//