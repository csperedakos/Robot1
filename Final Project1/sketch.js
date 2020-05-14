var button 
var shoecolor
var button2
var headcolor
var neckcolor
var eyecolor 

function setup() {
  createCanvas(400,400);
  background(220);
  shoecolor= color(random(0,255),random(0,255),random(0,255))
  button = createButton("change shoe color");
	button.mousePressed(shoeColor);
    headcolor= color(random(0,255),random(0,255),random(0,255)) 
  button2 = createButton("change head color");
	button2.mousePressed(headColor);
  neckcolor= color(random(0,255),random(0,255),random(0,255))
  button = createButton ("change neck color")
  button.mousePressed(neckColor) 
  eyecolor = color(random(0,255),random(0,255),random(0,255))
  button = createButton ("change eye color") 
  button.mousePressed(eyeColor); 
}

function draw() { 
  let outereyecolor = color(214,211,245);
  let innereyecolor= eyecolor; 
  
  let insideofbot= color(108, 111, 109);
  //assign insideofbot to color
  
  fill(insideofbot);
  fill(neckcolor) 
  rect(170,160,60,10);
  //neck 
  
    fill(insideofbot);
  rect(180,220,10,20);
  //left leg 
  rect(210,220,10,20);
  //right leg
  fill(shoecolor)
  arc(180,240,25,25,PI,0,CHORD); 
  //left foot
  arc(220,240,25,25,PI,0,CHORD);
  //right foot 
    fill(insideofbot);
  rect(114,192,8,17)
  //first block after elbow left 
  rect(279,170,8,17)
  //first block after elbow right 
  ellipse(120,189,16,12)
  //left elbow 
  ellipse(280,189,16,12)
  //right elbow 
  rect(124,183,18,13)
  //second block left arm 
  rect(258,183,18,13)
  //second block right arm 
  rect(134,181,18,18)
  //first block of left arm 
  rect(248,181,18,18)
  //first block of right arm
  arc(160,190,25,25,HALF_PI,300,CHORD);
  //left arm socket 
  arc(240,190,25,25,-HALF_PI,20.45,CHORD);
  //right arm socket 

  line(106,221,110,221)
  //left hand left connector line
  line(130,221,126,221)
  //left hand right connector line 
  line(271,158,275,158)
  //right hand left connector line 
  line(291,158,295,158)
  //right hand right connector line 
  arc(118,221,25,25,PI,0); 
  //outside left hand 
  arc(283,158,25,25,0,PI); 
  //outside right hand 
  let blendhands = color(220);
  //assign blendhands to color 220 (offwhite/backround color) 
  fill(blendhands) 
  //make inner left and right hands blend in with backdrop) 
  arc(118,221,15,15,PI,0); 
  //inside left hand
  arc(283,158,15,15,0,PI); 
  //inside right hand 
   fill(insideofbot)
  //make sure the rest of the robot also doesnt match backdrop because of the hand blend command 
  rect(160, 170, 80, 50, 5);
  //body 
  rect(170, 180, 60, 30, 5);
  //inner body 
  
  
  let greenbutton = color(55, 212, 62);
  let yellowbutton = color(251, 224, 75);
  let redbutton = color(255, 50, 50);
  fill(greenbutton) 
  //makes green button green 
  ellipse(165,186,5,5);
  //green button
  fill(yellowbutton)
  //makes yellow button yellow 
  ellipse(165,196,5,5);
  //yellow button 
  fill(redbutton)
  //makes red button red 
  ellipse(165,206,5,5);
  //red button
  fill(insideofbot) 
  //makes sure entire but doesn't become red 

  
stroke(17, 231, 108) 
  //colors lifeline green 
  line(172,191,182,191)
  //top lifeline first segment 
  line(182,191,184,197);
  //top lifeline second segment 
  line(184,197,186,191,);
  //top lifeline third segment 
  line(186,191,194,191)
  //top lifeline fourth segment 
  line(194,191,199,203)
  //top lifeline fifth segment 
  line(199,203,205,185)
  //top lifeline sixth segment 
  line(205,185,208,191)
  //top lifeline seventh segment 
  line(208,191,228,191)
  //top lifeline eigth segment
  
  line(172,194,180,194)
  //top lifeline first segment 
  line(180,194,184,202);
  //top lifeline second segment 
  line(184,202,188,194,);
  //top lifeline third segment 
  line(188,194,192,194)
  //top lifeline fourth segment 
  line(192,194,199,208);
  //top lifeline fifth segment 
  line(199,210,205.4,190.8)
  //top lifeline sixth segment 
  line(205.4,190.8,207,194)
  //top lifeline seventh segment 
  line(207,194,228,194)
  //top lifeline eigth segment
  stroke(0,0,0)
  //makes sure the rest of the bot stays black, not green
  line(198,210,201,210) 
  //just to cover up the little green blip at the bottom of the heart rate point :) 
    fill(headcolor) 
  rect(145, 80, 110, 80, 10);
  //head 
  rect(197,48,5,20);
  //rectangle head piece 
  arc(200,80,25,25,PI,0,CHORD);
  //half circle head piece 
  ellipse(200, 49, 20, 5);
  //top part of head piece 
  
  fill(outereyecolor)
  ellipse(225,115,25,25);
  //right eye outer
  strokeWeight(3);
  //make inner eye darker
  ellipse(175,115,25,25);
  //left eye outer 
  fill(insideofbot) 
  strokeWeight (1) 
  //make rest of bot normal stroke weight


  fill(innereyecolor)
  ellipse(175,115,15,15);
  //left eye inner
  strokeWeight(3);
  //make inner eye darker
  ellipse(225,115,15,15);
  //right eye inner
  fill(insideofbot)
  strokeWeight(1);
  //make rest of bot normal stroke weight 
  
  fill(headcolor) 
  rect(160, 135, 80, 20, 5);
  //outer mouth
  fill(insideofbot)
  strokeWeight(6);
  //make inner mouth darker 
  arc(200,152,50,10,PI,0,CHORD);
  //inside mouth
  strokeWeight(1);
  //make rest of bot normal stroke weight
  }
function shoeColor(){
  shoecolor=color(random(0,255),random(0,255),random(0,255))
} 
function headColor(){
  headcolor= color(random(0,255),random(0,255),random(0,255)) 
} 
function neckColor(){
  neckcolor = color(random(0,255),random(0,255),random(0,255))
} 
function eyeColor(){
  eyecolor = color(random(0,255),random(0,255),random(0,255))
} 