class Chain {
    constructor(A,B){
        var option =  {
            bodyA : A,
            bodyB : B,
            stiffness: 0.04,
            length : 5
                }
            this.chain = Constraint.create(option)
            World.add(world,this.chain)
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y)
    }
}
