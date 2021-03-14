class Example{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.1,
            length:100
        }
        this.body = Matter.Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        var pointA = this.body.bodyA.position
        var pointB = this.body.bodyB.position

        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}