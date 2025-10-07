function reverseDigits(num){
    let str=""
    while(num!==0) {
        let digit=num%10;
        if(digit%2===1)str=str+digit
        num=Math.floor(num/10);
    }
    
    return str
}
let num=123456789;
console.log(reverseDigits(num))

