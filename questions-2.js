let arr=[1,2,3,4,5,null,undefined,0,false,NaN]
let newArr=[]
arr.filter((a)=>{
    if(a!=null && a!=undefined && a!=false && a!=0 && a!=="NaN"){
       newArr.push(a)
    }
})
console.log(newArr)