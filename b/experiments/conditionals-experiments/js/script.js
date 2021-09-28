"use strict";

/**

* √ Multiple images (happy face/scared face)
* √ for-loops (discomfort with, why are they instant?)
* delaying code
* √ pushing and popping

*/

let numCircles = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  frameRate(10);
}

function draw() {
  background(0);

  push();
  rectMode(CENTER);
  fill(255, 0, 0);
  stroke(0, 255, 0);
  rect(width / 3, height / 2, 100, 100);
  pop();

  push();
  rectMode(CENTER);
  rect(2 * width / 3, height / 2, 100, 100);
  pop();

}









//