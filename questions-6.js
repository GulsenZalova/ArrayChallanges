function primeNumber (arr){
    let newArr=[]
    if(arr.includes(2)){
        newArr.push(2)
    }

    arr.forEach(element => {
        if(element%2==1){
            newArr.push(element)

        }
    });
    if(newArr.length==arr.length){
        return true
    }else{
        return false
    }
}


console.log(primeNumber([1,2,3,5,7,8]))
console.log(primeNumber([2,3,5,7]))
console.log(primeNumber([2,3,5,7,8]))
