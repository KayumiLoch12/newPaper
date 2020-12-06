class Basket{

    constructor(x,y,width,height){
    
    var options = {
        isStatic : true
    }    
    
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    World.add(world,this.body);
    
    }
    display(){
    var Pos = this.body.position;
    fill("brown");
    rectMode(CENTER);
    image(this.image, Pos.x,Pos.y, this.width, this.height);
    }
    } 

