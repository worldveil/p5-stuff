// https://github.com/CodingTrain/website/tree/54fc9979a77120bc8ac4a23cd6a38df4798d5751/CodingChallenges/CC_015_FractalTreeArray/P5
var len;
var tree = [];
var leaves = [];
var mouseCount = 0;

function setup() {
  // create our canvas to be 400x400
  createCanvas(400, 400);

  len = 100;
  var start = createVector(width / 2, height);
  var end = createVector(width / 2, height - len);
  var root = Branch(start, end);
  tree.push(root);
}

function mousePressed() {  
  print(tree.length);
  for (var i = tree.length - 1; i >= 0; i--) {
  	if (!tree[i].drawn) {
      tree.push(tree[i].right());
    	tree.push(tree[i].left());
    }
    tree[i].drawn = true;
  }
  mouseCount++;
  
  if (mouseCount === 5) {
  	for (var i = 0; i < tree.length; i++) {
      if (!tree[i].drawn) {
      	var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  // draw grey background
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }
  
  for (var i = 0; i < leaves.length; i++) {
  	fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    // leaves[i].y += random(0, 5);  // to make leaves fall!
  }
}
