"use strict";

let rectangle = {
  x: 250,
  y: 250,
  size: 200,
  angle: 0,
  color1: undefined,
  color2: undefined,
  lerp: 0
};


function setup() {
  createCanvas(500, 500);

  rectangle.color1 = color(255, 0, 0);
  rectangle.color2 = color(0, 255, 0);

  background(0);
}

function draw() {

  push();
  noFill();
  rectangle.lerp = map(sin(rectangle.angle), -1, 1, 0, 1)
  let newColor = lerpColor(rectangle.color1, rectangle.color2, rectangle.lerp);

  stroke(newColor);
  // strokeWeight(10);
  rectMode(CENTER);
  translate(rectangle.x, rectangle.y);
  rotate(rectangle.angle);
  rect(0, 0, rectangle.size, rectangle.size);
  pop();

  rectangle.x += random(-5, 5);
  rectangle.y += random(-5, 5);

  rectangle.angle += 0.1;
  // rectangle.shade = map(sin(rectangle.angle), -1, 1, 100, 200);

}