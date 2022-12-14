let newArr = new Array
Array.prototype.move = function (arr, currentloacation, nextLocation) {
    let myArr = arr
    myArr[currentloacation]
    myArr[nextLocation]

    myArr.splice(currentloacation, nextLocation, arr[currentloacation])
    return myArr
}

console.log(newArr.move([1, 2, 3, 4, 5], 0, 2))