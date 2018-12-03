function Branch(start, end) {
  this.start = start;
  this.end = end;
  this.drawn = false;
  
  this.jitter = function() {
  	this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }
  
  this.show = function() {
  	stroke(255);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  
  this.right = function() {
  	var direction = p5.Vector.sub(this.end, this.start);
    direction.rotate(PI / 6);
    direction.mult(0.67);
    var newEnd = p5.Vector.add(this.end, direction);
    b = new Branch(this.end, newEnd);
    return b;
  }
  
  this.left = function() {
  	var direction = p5.Vector.sub(this.end, this.start);
    direction.rotate(-PI / 4);
    direction.mult(0.67);
    var newEnd = p5.Vector.add(this.end, direction);
    b = new Branch(this.end, newEnd);
    return b;
  }
  
  return this;
}