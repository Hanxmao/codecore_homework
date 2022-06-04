//user input as array
const input = []
let i =2
while (process.argv[i]){
    input.push(process.argv[i])
    i++
} 

//find largest element length of the input array
let larLength=0
for (i=0;i<input.length;i++){
    if(input[i].length>larLength){
        larLength = input[i].length
    }
}

// console.log(input)
// console.log(larLength)  

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

function drawBarsAround(str){
    return '┃'+ str +''.repeat(larLength-str.length) + '┃'
}

function  boxIt(arr){
    drawTopBorder(larLength)+'\n'
    for(i=0;i<arr.length;i==){
        if (arr[i]!==arr[arr.length-1]){
        drawBarsAround(arr[i])+'\n'
        drawMidBorder(larLength)+'\n'
        } else {
            drawBarsAround(arr[i])+'\n'
            drawBotBorder(larLength)
        }
    }
}
