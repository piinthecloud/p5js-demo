
var capture;

var ctracker;

function setup() {

  // setup camera capture
  var videoInput = createCapture();
  videoInput.size(600, 500);
  videoInput.position(0, 0);

  // setup canvas
  var cnv = createCanvas(600, 500);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  noStroke();
}

function draw() {
  // clear();

  // get array of face marker positions [x, y] format
  var eyePositions = ctracker.getCurrentPosition();
  push();
  translate(eyePositions[27][0], eyePositions[27][1]);
  rotate(frameCount / 50.0);
  star(0, 0, 20, 8, 5);
  pop();

  push();
  translate(eyePositions[32][0], eyePositions[32][1]);
  rotate(frameCount / 50.0);
  star(0, 0, 20, 8, 5);

  pop();


}


function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  fill(255,0,0);
  stroke(5);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
