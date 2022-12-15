function uniqueValues(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(newArr.includes(arr[i])==false){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

uniqueValues([1, 2, 2, 3, 4, 4, 5])
uniqueValues([1, 2, 3, 4, 5])
uniqueValues([1, -2, -2, 3, 4, -5, -6, -5])