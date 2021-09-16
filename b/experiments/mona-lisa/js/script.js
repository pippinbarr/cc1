/**
Behold! The Mona Lisa!
Dr. Pippin Barr

A program that attempts to reproduce the Mona Lisa by Leonardo DaVinci.

Plan:

x Create a reasonable sized canvas
x Fill the background with Leo's background color
• Add detail to the background
• Block out the basic shapes (face, body, hair, moutains, water, )

*/

"use strict";


/**
Description of setup
*/
function setup() {
  createCanvas(240, 350);
}

function draw() {
  // The background!
  background(144, 191, 122);

  // Mona's hair
  fill(10, 20, 10);
  ellipse(110, 87.5, 100, 120);

  // Mona's face
  fill(222, 182, 93);
  noStroke();
  ellipse(120, 87.5, 60, 80);

  // Smile
  stroke(0);
  line(100, 100, 120, 105);
  line(120, 105, 140, 100);
}









/* */