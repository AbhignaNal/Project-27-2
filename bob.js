class Bob{
    constructor(x, y, radius){
        var options = {
            restitution: 0.8,
            friction: 0,
            frictionAir: 0.00,
            slop: 1,
            inertia: Infinity
        }
        //this.image = loadImage("sprites/paper.png");
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        fill(255, 0, 255);
        //image(this.image, 0, 0, this.radius, this.radius);
        //tint(255, 255, 255);
        ellipse(0, 0, 100);
        pop();
    }
}