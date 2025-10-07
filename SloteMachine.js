function sloteMachine(num){
let reverseNum= num.toString().split('').reverse().join('');
return num==reverseNum&&reverseNum%3==0 
}
let num=369
console.log(sloteMachine(num))