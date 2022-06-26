const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    prompt : "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit"+'\n'+">"
});

let tasks= [];


const result=()=> {
    console.log("Welcome to Todo CLI!"+'\n'+"--------------------");
    rl.prompt();

    rl.on('line',(input)=>{
        if(input==="v"){
            view();
            rl.prompt();
        }
        if(input==="n"){
            add();
        }
        if(input[0]==="c" ){
            complete(input);
            rl.prompt();
        } 
        if(input[0]==="d"){
            deleted(input);
            rl.prompt();
        }
        if(input==='q'){
            console.log('See you soon! 😄');
            rl.close();
        }
        // if(input==="s"){
        //     save();
        // }
    })
}


const view = ()=>{
    if (tasks.length == 0){
        console.log('List is empty...')
    } else {
        let list= '';
        for (let i =0; i<tasks.length;i++){
            if(tasks[i].completed==true){
                list =list+`${i}` +'[✓]'+ tasks[i].title + '\n';
            }else if (tasks[i].completed==false){
                list =list+`${i}` +'[ ]'+ tasks[i].title + '\n';
            }
             
        }
        console.log(list)
    }
}


const add = ()=>{
    rl.question("What?"+'\n'+">", (input)=>{
        let task={}
        task.completed = false
        task.title = input
        tasks.push(task)
        rl.prompt();   
    });
}

const complete = (input)=>{
    let num=input.slice(1)
    //use .slice() so that we could get rid of the '[]' and change it to '[✓]'
    if(tasks[num]!== undefined){
        tasks[num].completed = true
        let temp=tasks[num].title
        console.log('Completed: '+temp);
    } else {
        console.log('Invalid command!')
    }
}

const deleted = (input)=>{
    let num=''
    for (i=1;i<=input.length;i++){
        if (input[i] !== undefined){
            num=num+input[i]
        }
    };
    if(tasks[num]!== undefined){
        console.log('Deleted: '+tasks[num].title);
        tasks.splice(num,1);
    } else {
        console.log('Invalid command!')
    }
}

// not finished the stretch2, cuz try to pass the tasks array to the json file, but it will save something else except the target array
// also it will cause stretch1 error

// const save = ()=>{
//     rl.question("Where?"+'\n'+">", (input)=>{
//         let path = `${input}`||`${target}`
//         fs.writeFile(path, `${tasks}`, err => {
//             console.log(`List saved to "path"`);
//         });
//         rl.prompt();   
//     });
// }



const fs = require('fs')

let target = process.argv[2]
if(target){
    fs.readFile(target,{encoding: 'utf8'},(err,data)=>{
        if(err){
            console.log("Error: ",err);
        }else {
            tasks=JSON.parse(data)
        }
    })
    result() 
}else{
    result()
}