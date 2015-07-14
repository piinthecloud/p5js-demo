
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
  delayCount = 0;

  // set target count to a random integer between 10 and 5
  targetCount = random( 10, 5 ) | 0;
}

function draw() {
  clear();
  var style;
 // increment delay count (shorthand for delayCount = delayCount + 1)
  delayCount++;
    if ( delayCount == targetCount ) {
      style = random(4) | 0;
      targetCount = random(5, 20) | 0;
      delayCount = 0;
    }
    else {
      style = 0;
    }

  // get array of face marker positions [x, y] format
  var eyePositions = ctracker.getCurrentPosition();
  var eyePositions = ctracker.getCurrentPosition();
  var eyeArray = [63, 24, 64, 25, 65, 26, 66, 23, 30, 68, 29, 67, 28, 79, 31, 69]

  for (var x=0; x<eyeArray.length; x++){
    for (var i=0; i<eyePositions.length; i++) {

        if (eyeArray[x] == i){

          fill( random(255), random(255), random(255));
          // rect(eyePositions[i][0], eyePositions[i][1], random( 50 ), random( 10 ));

          switch( style ) {
            case 0:
              var esize = random(1, 20)
              rect( eyePositions[i][0], eyePositions[i][1], esize, esize );
              break;
            case 1:
              // draw a circle with random radius
              var esize = random( 1, 20 );
              ellipse( eyePositions[i][0], eyePositions[i][1], esize, esize );
              break;
            case 2:
              // draw a random sized rectangle
              var qsize = random( 1, 10 );
              quad( eyePositions[i][0] - qsize, eyePositions[i][1], eyePositions[i][0], eyePositions[i][1] - qsize, eyePositions[i][0] + qsize,
                eyePositions[i][1], eyePositions[i][0], eyePositions[i][1] + qsize );
              break;
            case 3:
              // draw a triangle with random size
              var tsize = random( 1, 5 );
              triangle( eyePositions[i][0] - tsize, eyePositions[i][1] + tsize, eyePositions[i][0], eyePositions[i][1] - tsize,
                eyePositions[i][0] + tsize, eyePositions[i][1] + tsize );
              break;
              // end of switch statement
          }
        }
      }
    }
  }
