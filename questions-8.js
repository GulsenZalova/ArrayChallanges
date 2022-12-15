function difference(arr1,arr2){
    for(let i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    let newArr=[]
    for(let i=0;i<arr1.length;i++){
        if(newArr.includes(arr1[i])==false){
            newArr.push(arr1[i])
        }
    }
    console.log(newArr.sort((a,b)=>{return a-b}))
}

difference([1, 2, 3], [100, 2, 1, 10])