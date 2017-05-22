'use strict'


// Start Boid class  +++++++++++++++++++++++++++++++++++++++++++++++++++++
class Boid {
  //  Boid constructor
  constructor(m, location) {
    // declare instance variables for Boid
    this.main = m;
    this.loc = location;
    this.speedX = 10;//Math.random(-1.0, 1.0);
    this.speedY = -6;//Math.random(-1.0, 1.0);
    this.vel = vector2d(Math.random(-2.0, 2.0), Math.random(-2.0, 2.0));
    this.context = this.main.context;
    //create all initial items
    this.init();
  }

  init(){

  }

  run() { // update this
    //console.log("Inside boid run");
    this.update();
    this.render();
  }
  update() { // render or draw this to canvas
    this.checkEdges();
    this.loc.x+=this.speedX;
    this.loc.y+=this.speedY;
  }
  render() { // render or draw this to canvas
    //console.log("loc.x = " + this.loc.x);
    this.context.fillStyle = 'blue';
    this.context.fill();
    this.context.beginPath();
    this.context.arc(this.loc.x, this.loc.y, 11, 0, 2 * Math.PI, false);
    this.context.stroke();
  }

  checkEdges(){
    console.log("loc.x = " + this.loc.x);
    if(this.loc.x > 1000 ||this.loc.x < 10) this.speedX *= -1;
    if(this.loc.y > 750 ||this.loc.y < 10) this.speedY *= -1;

  }
}
