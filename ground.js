class Ground 
{
  constructor(x , y, width, height){
  var options = {
    isStatic : true,
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  }

  show(){
    var position = this.body.position;
    Matter.Body.rotate(this.body, angle);
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    translate(position.x, position.y);
    rotate(angle);
    rect(0, 0 ,this.width, this.height);
    pop();
    angle += 0.1;
    

  }

}
