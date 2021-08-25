class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5

        }
        this.r=r;
        this.body=bodies.circle(x,y,this.r,options)
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,this.r,this.r)
        pop()
    }
}