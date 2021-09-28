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

let face = {
  x: 250,
  y: 250,
  terrorThreshold: 200,
}

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

  let d = dist(mouseX, mouseY, face.x, face.y);
  if (d < face.terrorThreshold) {
    image(scaredFace, face.x, face.y);
  } else {
    image(normalFace, face.x, face.y);
  }

  // noFill();
  // stroke(255, 0, 0);
  // ellipse(face.x, face.y, face.terrorThreshold * 2);
}









//