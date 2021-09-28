"use strict";

/**

* Multiple images (happy face/scared face)
* for-loops (discomfort with, why are they instant?)
* delaying code
* pushing and popping

*/

let normalFace = undefined;
let scaredFace = undefined;
let lookingRightFace = undefined;
let lookingLeftFace = undefined;

let face = {
  x: 250,
  y: 250,
  terrorThreshold: 200,
  image: undefined
}

function preload() {
  normalFace = loadImage(`assets/images/normal.png`);
  scaredFace = loadImage(`assets/images/scared.png`);
  lookingRightFace = loadImage(`assets/images/look-right.png`);
  lookingLeftFace = loadImage(`assets/images/look-left.png`);
}

function setup() {
  createCanvas(500, 500);

  face.image = lookingRightFace;
}

function draw() {
  background(0);

  imageMode(CENTER);

  // Calculate the distance between the mouse and the face
  let d = dist(mouseX, mouseY, face.x, face.y);
  // Check if the mouse is TOO CLOSE!!!
  if (d < face.terrorThreshold) {
    // Scared face
    face.image = scaredFace;
  } else {
    // Not scared face
    if (mouseX < face.x) {
      // Mouse is to the left, so look left
      face.image = lookingLeftFace;
    } else {
      // Mouse is to the right, so look right
      face.image = lookingRightFace;
    }
  }
  // Display the chosen image
  image(face.image, face.x, face.y);

  // noFill();
  // stroke(255, 0, 0);
  // ellipse(face.x, face.y, face.terrorThreshold * 2);
}









//