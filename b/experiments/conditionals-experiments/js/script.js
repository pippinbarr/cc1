"use strict";

/**

* Multiple images (happy face/scared face)
* for-loops (discomfort with, why are they instant?)
* delaying code
* pushing and popping

*/

let normalFace = undefined;
let scaredFace = undefined;

function preload() {
  normalFace = loadImage(`assets/images/normal.png`);
  scaredFace = loadImage(`assets/images/scared.png`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  imageMode(CENTER);
  image(scaredFace, width / 2, height / 2);
}









//