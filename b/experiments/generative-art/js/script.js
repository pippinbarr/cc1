"use strict";

const STARTING_BUBBLES = 10;
let bubbles = [];

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < STARTING_BUBBLES; i++) {
    let bubble = {
      x: random(0, width),
      y: random(0, height),
      size: 10
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(0);

  // Move and Draw the bubbles
  for (let i = 0; i < bubbles.length; i++) {
    let bubble = bubbles[i];

    bubble.x += random(-2, 2);
    bubble.y += random(-2, 2);

    noFill();
    stroke(255);
    ellipse(bubble.x, bubble.y, bubble.size);
  }
}








//