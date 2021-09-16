/**
Mona Lisa
Pippin Barr

A program to reproduce the majesty of the Mona Lisa and her enigmatic smile.
Chiaroscuro!

Plan:
* Draw the "chest area"
* Neck
* Head
* Hair

*/

"use strict";

/**
Description of setup
*/
function setup() {
  createCanvas(400, 600);

  background(144, 209, 152);

  push();
  // Draw Mona's hair
  noStroke();
  fill(50, 10, 10);
  ellipse(210, 180, 180, 240);

  // Draw Mona's face
  fill(219, 195, 114);
  ellipse(200, 150, 110, 160);
  pop();

  // Draw Mona's mouth
  noFill();
  stroke(100, 120, 120);
  strokeWeight(10);
  arc(200, 50, 300, 300, 5.5 * PI / 4 + TWO_PI + PI, 6.5 * PI / 4 + PI, OPEN);

  // Eyes
  ellipse(180, 150, 10, 10);
  ellipse(220, 150, 10, 10);
}


/**
Description of draw()
*/
function draw() {

}