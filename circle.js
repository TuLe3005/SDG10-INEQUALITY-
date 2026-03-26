function drawCircle() { 
  const elapsed = millis() - lastTime;

  push();
  rotate(45);
  for (let i = 0; i < 3; i++) {
    stroke(a1);
    rotate(90);
    line(0, -circleWidth50, 0, circleWidth50); 
  }
  pop();
  
  push();
  noFill();
  strokeWeight(.5);

  if (mouseIsPressed) {
    if (elapsed > 1000) {
      stroke('white');
      circle(0, 0, circleWidth100 * 1.5);
    }
    if (elapsed > 500) {
      stroke(150, 150, 150);
      circle(0, 0, circleWidth100);
    }
    if (elapsed > 100) {
      stroke(100, 100, 100);
      circle(0, 0, circleWidth50);
    }
  } 
  if (!mouseIsPressed) {
    if (elapsed > 1000) {
      stroke('white');
      circle(0, 0, circleWidth100 * 1.5);
    }
    if (elapsed > 500) {
      stroke(150, 150, 150);
      circle(0, 0, circleWidth100);
    }
    if (elapsed > 100) {
      stroke(100, 100, 100);
      circle(0, 0, circleWidth50);
    }
  }
  pop(); 
}
