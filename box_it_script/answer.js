//user input as array
const input = []
let i =2
while (process.argv[i]){
    input.push(process.argv[i])
    i++
} 

//find largest length of elements
let larLength=0
for (i=0;i<input.length;i++){
    if(input[i].length>larLength){
        larLength = input[i].length
    }
}

// functions to draw surrond border lines
function drawLine(num){
    return '━'.repeat(num)
}

function drawTopBorder(num){
    return '┍'+'━'.repeat(num)+'┑'
}

function drawMidBorder(num){
    return '┝'+'━'.repeat(num)+'┥'
}

function drawBotBorder(num){
    return '┕'+'━'.repeat(num)+'┙'
}

//draw lines with string
function drawBarsAround(str){
    return '│'+ str +' '.repeat(larLength-str.length) + '│'
}

//get result from different situations: non-input, input
//draw top first and then repeat the drawBarsAround and drawMidBorder functions, followed by drawing bot
//get result directly for non-input
function  boxIt(arr){
    let result = ''
    result = drawTopBorder(larLength)+'\n'
    if (larLength !== 0){
        for(i=0;i<arr.length;i++){
            if (i!==(arr.length-1)){
            result+=drawBarsAround(arr[i])+'\n'
            result+=drawMidBorder(larLength)+'\n'
            } else  {
                result+=drawBarsAround(arr[i])+'\n'
                result+=drawBotBorder(larLength)
            } 
        }
    } else{
        result+=drawBotBorder(0)
    }
    return result 
}

console.log(boxIt(input))