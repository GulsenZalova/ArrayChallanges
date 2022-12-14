let newArr = new Array
Array.prototype.array_range = function (start,length) {
    let arr=[start]
    for(let i=1;i<length;i++){
        start+=1
        arr.push(start)
    }
    return arr
}
console.log(newArr.array_range(1,4))
console.log(newArr.array_range(2,10))
console.log(newArr.array_range(1,10))