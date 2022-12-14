let newArr=new Array
 Array.prototype.array_filled=function(time,num){
    let arr=[]
    for(let i=0;i<time;i++){
        arr.push(num)
    }
    return arr
 }

console.log( newArr.array_filled(6,2))