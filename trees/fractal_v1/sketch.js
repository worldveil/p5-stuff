var angle;
var slider;
var startStrokeWeight;
var recursionStopLength;
var branchLengthMuliplier;

function setup() {
  // create our canvas to be 400x400
  createCanvas(400, 400);
  
  // setup variables
  angle = PI / 4;
  startStrokeWeight = 8;
  recursionStopLength = 2;
  branchLengthMuliplier = 0.72;
  
  // create a slider:
  // 0 -> PI, init=PI/6, stepsize=10000 of them
  slider = createSlider(0, PI, PI/6, PI / 10000);
}

function draw() {
  // draw grey background
  background(51);
  
  // set our angle to be the slider value
  angle = slider.value();
	 
  // use white color to draw lines
  stroke(255);
  strokeWeight(startStrokeWeight);
  
  // move our origin
  translate(width / 2, height);
  
  // write branch
  branch(100, 1);
}

function branch(len, depth) {
	// line(x1, y1, x2, y2);
  line(0, 0, 0, -len);
  translate(0, -len);
  strokeWeight(max(startStrokeWeight - 2 * depth, 1));
  
  // we need to have our recusive definition stop somewhere
  if (len > recursionStopLength) {
    // push() saves the translation / rotation state
    push();
    rotate(angle);
  	branch(len * branchLengthMuliplier, depth + 1);
    pop(); // and pop() retrieves and reinstates it
    
    // repeat, but this time with the left angle turn
    push(); 
    rotate(-angle);
    branch(len * branchLengthMuliplier, depth + 1);
    pop();
  }
}