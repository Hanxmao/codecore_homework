class Turtle{
    constructor(x,y){
        this.x= x
        this.y = y
        this.result= [[this.x,this.y]]
        this.direction='e'
    }

// change the value of x,y and push them to result array
    forward(a){
        if (this.direction=='n'){
            for (let i=0; i<a; i++){
                this.y= this.y-1
                this.allPoint();
            }
        }else if(this.direction=='e'){
            for (let i=0; i<a; i++){
                this.x= this.x+1
                this.allPoint();
            }    
        }else if(this.direction=='w'){
            for (let i=0; i<a; i++){
                this.x= this.x-1
                this.allPoint();
            }
        }else if (this.direction=='s'){
            for (let i=0; i<a; i++){
                this.y= this.y+1
                this.allPoint();
            }
        } else {
            console.log('Something went wrong in forward function')
        }
        return this
    }
//set direction value n,e,w,s to control derection
    right(){
        if (this.direction=='n'){
            this.direction = 'e'
        }else if(this.direction=='e'){
            this.direction = 's'
        }else if(this.direction=='w'){
            this.direction = 'n'
        }else if (this.direction=='s'){
            this.direction = 'w'
        } else {
            console.log('Something went wrong in rigth function')
        }
        return this 
    }

    left(){
        if (this.direction=='n'){
            this.direction = 'w'
        }else if(this.direction=='e'){
            this.direction = 'n'
        }else if(this.direction=='w'){
            this.direction = 's'
        }else if (this.direction=='s'){
            this.direction = 'e'
        } else {
            console.log('Something went wrong in left function')
        }
        return this 
    }

    allPoint(){
        this.result.push([this.x,this.y])
    }// record all the point simply by .push

    print(){
        let backGround= []
        let maxX= 0
        let maxY= 0
        for(let i=0; i<this.result.length;i++){
            if (this.result[i][0]>=maxX){
                maxX=this.result[i][0]
            }
            if (this.result[i][1]>=maxY){
                maxY=this.result[i][1]
            }
        }// we get the max width and height here
       
        for (let i=0;i<=maxY;i++){
            backGround.push([])
            for (let j=0;j<=maxX;j++){
                backGround[i][j] = "□"
            }
        }//get the background array according to the width and height we got above
        
        for(let i=0;i<this.result.length;i++){
            backGround[this.result[i][1]][this.result[i][0]]= '■'
        }//repalce all the point with the target character
        
        let resultArr=''
        for (let outter of backGround){
            for (let inner of outter){
                resultArr+=inner
            }
            resultArr+='\n' 
        
        }// join the array into the result pattern

        console.log(resultArr)  
    }        
         
    }
console.log("Homework_2 result:")
new Turtle(0, 0).forward(3).right().forward(4).print()
new Turtle(0, 4).forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3).print()


let argu= process.argv[2]

if (argu){
    console.log("Homework_2 stretch#1 result:")
    const arr= argu.split('-')

    let draw = undefined
    if (arr[0].includes('t')){
        draw= new Turtle(parseInt(arr[0][1]),parseInt(arr[0][3]))
        arr.splice(0,1)
    } else{
        draw= new Turtle(0,0)
    }
    // arr.map(ele=>{ele=parseInt(ele)})
    for (let ele of arr){
        if (ele.includes('f')){
            let num=ele.slice(1)
            draw.forward(num)
        } else if (ele.includes('r')){
            draw.right()
        } else if (ele.includes('l')){
            draw.left()
        } else {
            console.log('Something went wrong in stretch 1 for loop')
        }
    }
    draw.print()
}

