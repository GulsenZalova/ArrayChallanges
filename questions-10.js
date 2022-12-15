function shuffle(arr){
    let newArr=[]
    for(let i=0;i<=arr.length;i++){
        let randomIndex=Math.floor(Math.random() * arr.length)
        let randomElement=arr.slice(randomIndex,randomIndex+1)
        if(newArr.includes(randomElement[0])==false){
            newArr.push(randomElement[0])
        }
    }
    console.log(newArr)
}

shuffle([20, 30, 10, 40, 50])

