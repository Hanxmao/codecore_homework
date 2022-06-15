class Turtle{
    constructor(x,y){
        this.x= x
        this.y = y
        this.allPoint= [[this.x,this.y]]
        
    }

    forward(a){
        //how to change the code with direction
        //if ?   direction then the +or-
        this.allPoint.push([this.x+a,this.y])
        return this
    }


}

console.log(new Turtle(0,0).forward(3))


