"use strict";

/**

* √ Multiple images (happy face/scared face)
* for-loops (discomfort with, why are they instant?)
* delaying code
* pushing and popping

*/

let numCircles = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  frameRate(10);
}

function draw() {

  let x = 20;
  let y = height / 2;
  let size = 40;
  // Count from 0 up to numCircles
  for (let i = 0; i < numCircles; i++) {
    noFill();
    stroke(255);
    ellipse(x + i * size / 1.25, y, size);
  }

  numCircles = constrain(numCircles + 1, 0, 10);
}









//