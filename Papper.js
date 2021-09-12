class Paper{
    constructor(x,y,radius){
        var options={
            
            restitution:0.8,
            friction:0.1,
            density:1
        }
        this.body = Bodies.circle (x,y,radius,options);
        this.radius=radius;
    World.add(world,this.body)
        
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
    }
