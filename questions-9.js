function difference(arr1,arr2){
  let newArr=[]
  arr1.forEach(element => {
    if(arr2.includes(element)==false){
        newArr.push(element)
    }
  });
  arr2.forEach(element=>{
    if(arr1.includes(element)==false){
        newArr.push(element)
    }
  })

  console.log(newArr.sort((a,b)=>{return a-b}))
}

difference([1, 2, 3], [100, 2, 1, 10])