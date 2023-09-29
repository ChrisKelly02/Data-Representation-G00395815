let MyTasks = [];

let addTask = (task)=>{
    let length = MyTasks.push(task);
    MyTasks.push(task) // Push returns new lemgth of the array
    console.log("Task: "+task+" added to Tasks.")
    return length;
}

let listAllTasks = ()=>{
    MyTasks.forEach((item)=>{
        console.log(item);
    })

}



let deleteTask = (task)=>{ //types are worked out in runtime is JS
    let index = MyTasks.indexOf(task); //workout its position using .indexOf
    if(index > -1){
        MyTasks.splice(index, 1); //delete it using.splice what index, how many (1)
        console.log("Task: "+task+ "removed from Tasks");
    } else {
        console.log("Task: "+ task + "not in Tasks!");
    }
    
}

addTask("Learn JS!");
addTask("Learn React!");
listAllTasks();
deleteTask("Learn JS! "); //testing if it works
deleteTask("abcdef");

//const - for values that don't change  (constant)
//let - for values that are going to change
//A call back functionis  passed as an arguement to another function

