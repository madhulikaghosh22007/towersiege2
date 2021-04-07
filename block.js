class Block {
  constructor(x, y, width, height) {
    var options = {
       
        restitution :0.5,
        friction :0.1,
        
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
    
    

  if(this.body.speed<3){
    super.display()
  }

else{
  
  World.remove(world, this.body);
  push ()
  this.Visibilty=this.Visibilty-5

tint (255,this.Visibilty)
image (this.image,this.body.position.x,this.body.position.y,50,50)
pop ()
}

}
}

  
