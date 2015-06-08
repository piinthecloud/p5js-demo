



var tracker;

function setup(){


  var videoInput = createCapture();
  videoInput.size(500,500);
  videoInput.position(0,0);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(videoInput.elt)


  var canvas = createCanvas(500,500);
  canvas.position(0,0);

}


function draw(){
  clear();

  var facePos = tracker.getCurrentPosition();

  // var N = 70;
  // var eyePos =Array.apply(null, {length: N}).map(Number.call, Number)

  var eyePos = [63, 24, 64, 25, 65, 26, 66, 23, 30, 68, 29, 67, 28, 79, 31, 69]

  for (var x=0; x<eyePos.length; x++){
    for (var i=0; i<facePos.length; i++) {

      if (eyePos[x] == i){
        esize = random(3, 10);
        fill(random(255), random(255), random(255));
        var circle = ellipse(facePos[i][0], facePos[i][1], esize, esize)
        circle
      }
      else{
        esize = random(3, 10);
        fill(0, 0, 0, 0);
        var circle = ellipse(facePos[i][0], facePos[i][1], esize, esize)
        circle

      }

    }

  }

}
