const ages = [25, 31, 42, 77];
let partd = ages.map((item)=>{ //Using the .map function
    if(item < 70){
        return item*2;
    } else {
        return item;
    }
    
});
console.log(partd);