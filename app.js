var number=function(array){
    let newArr = [];
    let myNum = 0;
    for(var i = 1; i <= array.length; i++){
        newArr.push(i + ": " +  array[myNum])
        myNum = myNum + 1;
    }
    return newArr;
}

console.log(number([])); // []
console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"]