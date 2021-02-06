var hr, min, sec;
var hr2, min2, sec2;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255,255,255);
  hr = hour();
  min = minute();
  sec = second();

  hr2 = 11 - hr;
  min2 = 59 - min;
  sec2 = 60 - sec;
  textSize(15);
  text("The current time is " + hr + " : " + min + " : " + sec, 550, 200)

  if(1 === 1){
    textSize(15);
    text("Time left till 12 'o clock is " + hr2 + " : " + min2 + " : " + sec2, 550, 400)
  }

  drawSprites();
}