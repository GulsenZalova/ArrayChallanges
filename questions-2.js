let arr=[1,2,3,4,5,null,"",undefined,0,false,NaN]
let newArr=[]
arr.filter((a,i)=>{
    if(Number(arr[i]) || typeof (arr[i]) == "string" && arr[i].length > 0){
       newArr.push(a)
    }
})
console.log(newArr)