let newArr = new Array
Array.prototype.move = function (arr, currentloacation, nextLocation) {
    let element=arr[currentloacation]
    arr.splice(currentloacation,1)
    arr.splice(nextLocation,0,element)
    return arr
}

console.log(newArr.move([1, 2, 3, 4, 5], 0, 2))