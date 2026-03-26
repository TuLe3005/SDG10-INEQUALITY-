function mainDraw(opacity = 255, scaleFactor = 1) {  
  const alpha = constrain(opacity, 0, 255) / 255;
  const size = max(scaleFactor, 0);
  drawingContext.save();
  drawingContext.globalAlpha = alpha;

  translate(wind*1.5, 0);

  push();
  scale(size);

  push();
  drawRichBottom();
  pop(); 
  
  push(); 
  drawMiddleBottom(); 
  pop(); 
  
  push();
  drawRichTop1(); 
  drawRichTop2(); 
  pop(); 
  
  push();
  drawLowBottom(); 
  pop(); 
  
  
  push()
  rotate(-25);
  drawMiddle1Top(); 
  pop();
  
  push();
  rotate(25)
  drawMiddle2Top(); 
  pop();
  
  push();
  rotate(25)
  drawLow1Top();
  pop();
  push();
  rotate(-25);
  drawLow2Top(); 
  pop(); 
  
  push();
  radialGradient();
  pop();

  pop();

  drawingContext.restore();

}
// Below is butterfly wings: instead of draw all the wings, i decided to break it dowwn into different layers in order to have more control over the morphin and blending. 
// all the wings are drawn quite the same, the only difference is the height, noise blending, multiplier and the gradient. I will explain the first one in detail, and then the rest should be pretty self-explanatory.
// draw gradient -> begin shape -> loop through theta from 0 to 360 -> calculate noise (n) (static and dynamic: also check the delay.js to see further on this interaction) -> calculate the radius with the noise and the height -> calculate x and y with the radius -> only draw the vertex if it is y < 0 and x<0 
//
function drawRichTop1() {
    let gradientHeight = 0.3*circleWidth100/2;
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0); 

    grad.addColorStop(0, a1);
    grad.addColorStop(1, a2);
    drawingContext.fillStyle = grad;

    beginShape(); // start to draw
    noStroke();

  for (let theta = 0; theta <= 360; theta += 0.5) { // this will loop through 360 degrees, and draw the vertex every 0.5 degree. 

    const nStatic = noise(theta * 0.01, 0);
    const nDynamic = noise(theta * 0.05, morph);
    const n = lerp(nStatic, nDynamic, richTop1Blend);

    let petalIndex = floor(theta/180);
    let heights = [0.75*circleWidth100/2, 0.51*circleWidth100/2];
    let A = heights[petalIndex];
    let r = A * sin(2 * theta) * (0.7 + n * 0.3);
    r *= radiusMultiplier1;
    let x = r * cos(theta) * 1.03 ;
    let y = r * sin(theta) *0.8 ;

    if (y < 0 && x<0) {
      vertex(x, y);
    };

  }

  endShape(CLOSE);
}

function drawRichTop2() {

    let gradientHeight = 0.5*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  
    grad.addColorStop(0, a1);
    grad.addColorStop(1, a2);
    drawingContext.fillStyle = grad; 
  
    noStroke(); 
  
    beginShape();
    // fill(255, 0, 0);
    // stroke(0);

  for (let theta = 0; theta <= 360; theta += 0.5) {

    const nStatic = noise(theta * 0.01, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, richTop2Blend); //ai
    
    let petalIndex = floor(theta/180); 
    let heights = [0.75*circleWidth100/2, 0.51*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.3);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier1;

    let x = r * cos(theta) * 1.03 ;
    let y = r * sin(theta) *0.8 ;

    if (y < 0 && x>0) {
      vertex(x, y);
    };
    
  }

  endShape(CLOSE);
}

function drawMiddle1Top() {
  
  
  let gradientHeight = 0.26*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  
    grad.addColorStop(0, b1);
    grad.addColorStop(1, b2);
    drawingContext.fillStyle = grad; 
  
    beginShape();
    noStroke(); 

  for (let theta = 0; theta <= 360; theta += 0.5) {
    const nStatic = noise(theta * 0.01, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, middle1TopBlend); //ai

    let petalIndex = floor(theta/180); 
    let heights = [ 0.26*circleWidth100/2, 0.26*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.3);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier2;

    let x = r * cos(theta);
    let y = r * sin(theta);
    if (y < 0 && x<0) {
      vertex(x, y);
    };
    
  }
  endShape(CLOSE);
}

function drawMiddle2Top() {
    let gradientHeight = 0.56*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  
    grad.addColorStop(0, b1);
    grad.addColorStop(1, b2);
    drawingContext.fillStyle = grad; 
  noStroke(); 
  
    beginShape();

  for (let theta = 0; theta <= 360; theta += 0.5) {

    const nStatic = noise(theta * 0.01, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, middle2TopBlend); //ai
    
    let petalIndex = floor(theta/180); 
    let heights = [0.56*circleWidth100/2, 0.56*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.3);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier2;

    let x = r * cos(theta);
    let y = r * sin(theta);
    if (y < 0 && x>0) {
      vertex(x, y);
    };
    
  }
  endShape(CLOSE);
}

function drawLow1Top() {
  let gradientHeight = 0.3*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  
    grad.addColorStop(0, c1);
    grad.addColorStop(1, c2);
    drawingContext.fillStyle = grad; 
  noStroke(); 
  
    beginShape();
  for (let theta = 0; theta <= 360; theta += 0.5) {

    const nStatic = noise(theta * 0.01, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, low1TopBlend); //ai
    
    let petalIndex = floor(theta/180); 
    let heights = [0.29*circleWidth100/2, 0.29*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.3);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier3;

    let x = r * cos(theta);
    let y = r * sin(theta);

    if (y < 0 && x>0) {
      vertex(x, y);
    };
    
  }

  endShape(CLOSE);
}

function drawLow2Top() {
   let gradientHeight = 0.1*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, -gradientHeight, 0,0);
  
    grad.addColorStop(0, c1);
    grad.addColorStop(1, c2);
    drawingContext.fillStyle = grad; 
  noStroke(); 
  
    beginShape();

    for (let theta = 0; theta <= 360; theta += 0.5) {
    const nStatic = noise(theta * 0.01, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, low2TopBlend); //ai

    let petalIndex = floor(theta/180); 
    let heights = [0.08*circleWidth100/2, 0.08*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.3);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier3;

    let x = r * cos(theta);
    let y = r * sin(theta);

    if (y < 0 && x<0) {
      vertex(x, y);
    };
  }
  endShape(CLOSE);
}


function drawRichBottom() {
    let gradientHeight = 0.8*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(10, gradientHeight, 0,0);
  
    grad.addColorStop(0, a1);
    grad.addColorStop(1, a2);
    drawingContext.fillStyle = grad; 
    noStroke(); 
  
    beginShape();

    for (let theta = 0; theta <= 360; theta += 0.5) {
    const nStatic = noise(theta * 0.03, 0); //ai
    const nDynamic = noise(theta * 0.03, morph); //ai
    const n = lerp(nStatic, nDynamic, richTop1Blend); //ai
    let petalIndex = floor(theta/180); 
    let heights = [0.886*circleWidth100/2, 0.85*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.4);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier1;

    let x = r * cos(theta);
    let y = r * sin(theta);

    if (y > 0) {
      vertex(x, y);
    };
  }

  endShape(CLOSE);
}

 function drawMiddleBottom() {
    let gradientHeight = 0.6*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(-10, gradientHeight, 0,0); 
  
    grad.addColorStop(0, b1);
    grad.addColorStop(1, b2);
    drawingContext.fillStyle = grad; 
  
    beginShape();
    noStroke(); 

    for (let theta = 0; theta <= 360; theta += 0.5) {
    const nStatic = noise(theta * 0.01, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, middleBottomBlend); //ai
    let petalIndex = floor(theta/180); 
    let heights = [0.77*circleWidth100/2, 0.65*circleWidth100/2];
    let A = heights[petalIndex]; 
    let r = A * sin(2 * theta) * (0.7 + n * 0.2);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier2;

    let x = r * cos(theta);
    let y = r * sin(theta);

    if (y > 0) {
      vertex(x, y);
    };
  }

  endShape(CLOSE);
   
 }

function drawLowBottom() {
  let gradientHeight = 0.4*circleWidth100/2; 
    let grad = drawingContext.createLinearGradient(10, gradientHeight, 0,0);
  
    grad.addColorStop(0,c1);
    grad.addColorStop(1, c2);
    drawingContext.fillStyle = grad; 
  
    beginShape();
    noStroke(); 
for (let theta = 0; theta <= 360; theta += 0.5) {
const nStatic = noise(theta * 0.05, 0); //ai
    const nDynamic = noise(theta * 0.05, morph); //ai
    const n = lerp(nStatic, nDynamic, richTop1Blend); //ai
let petalIndex = floor(theta/180); 
let heights = [0.59*circleWidth100/2, 0.40*circleWidth100/2];
let A = heights[petalIndex]; 
let r = A * sin(2 * theta) * (0.7 + n * 0.2);

    // 2. NOW you can safely modify it.
    r *= radiusMultiplier3;

let x = r * cos(theta);
let y = r * sin(theta);

if (y > 0) {
  vertex(x, y);
};
}

endShape(CLOSE);

}

function radialGradient() {
  let grad = drawingContext.createRadialGradient(
    0, 0, circleWidth50/2*0.09,
    0, 0, circleWidth50/2/4,
  );

  grad.addColorStop(0, d.toString());
  grad.addColorStop(1, b1.toString());

  drawingContext.fillStyle = grad;
  strokeWeight(0.3);
  stroke('white'); 
  ellipse(0, 0, circleWidth50/2*0.08, circleWidth50/3.5); 
}
