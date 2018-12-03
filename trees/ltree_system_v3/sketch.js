// https://www.youtube.com/watch?v=E1B4UoSQMFw

// variables: A, B
// axiom: A
// rules: A -> AB, B -> A

var angle;
var axiom = "F";
var sentence = axiom;
var rules = [];
var len = 100;

rules.push({
  input: "F",
  output: "FF+[+F-F-F]-[-F+F+F]",
});

var buttonCreate;

function generate() {
  var nextSentence = "";
	len *= 0.5;
  
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var matched = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].input) {
        nextSentence += rules[j].output;
        matched = true;
        break;
      }
    }
    if (!matched) {
      nextSentence += current;
    }
  }

  sentence = nextSentence;
  turtle();
  // createP(sentence);
}

function turtle() {
  resetMatrix();
  translate(width / 2, height);
  background(51);
  stroke(255, 100);

  for (var i = 0; i < sentence.length; i++) {
    var c = sentence.charAt(i);
    if (c === "F") {
      line(0, 0, 0, -len);
      translate(0, -len);

    } else if (c === "+") {
      rotate(angle);


    } else if (c === "-") {
      rotate(-angle);

    } else if (c === "[") {
      push();

    } else if (c === "]") {
      pop();

    } else {

    }
  }
}

function setup() {
  angle = 0.436332; //PI / 8;
  createCanvas(400, 400);
  background(51);
  // createP(axiom);
  buttonCreate = createButton("Generate");
  buttonCreate.mousePressed(generate);
  turtle();
}

function draw() {
  turtle();
}