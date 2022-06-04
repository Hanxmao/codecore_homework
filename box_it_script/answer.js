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
    return '│'+ str +' '.repeat(larLength-str.length) + '│'
}

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