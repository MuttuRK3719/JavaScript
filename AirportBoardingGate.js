function checkOrder(arr){
    let count=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1])count++;
    }
    return count;
}

let arr=[101, 103, 102, 104]
console.log(checkOrder(arr))