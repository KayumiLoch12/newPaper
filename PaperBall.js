class PaperBall{
    
    constructor(x,y,r){

        
var options = {
    isStatic: false,
    restitution:0.3,
    friction: 0.5,
    density:1.2 }

    this.body = Bodies.circle(x,y,r, options);
    this.x = x; 
    this.y = y;
    this.r = r;
    this.image = loadImage("paper.png");
    World.add(world, this.body) 
    
}
display()
{
   

push()
translate(this.body.position.x , this.body.position.y);
rectMode(CENTER) 
strokeWeight(3);
fill("pink")
image(this.image,0,0,2*this.r, 2* this.r);
pop() 
} 
}
