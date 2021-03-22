class Ball {
  constructor(x, y) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};
    this.image = loadImage("S.png");
    this.body = Bodies.circle(x, y, 80, options);
    this.width = 80;
    this.height = 80;
    World.add(world, this.body);
  }
   
  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    //ellipse(0, 0, this.width, this.height);
    imageMode(CENTER);
        image(this.image, 0, 0, this.width + 250, this.height + 100);
    pop();
  }
}
