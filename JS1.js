console.log(20);
console.log(48);
let args = process.argv;
let vowel="abide"
let result=puzzelChecker(vowel)
console.log(result)
function puzzelChecker(vowel){
    const firstChar=vowel.charAt(0).toLowerCase();
    const lastChar=vowel.charAt(vowel.length-1);
    if("aeiou".includes(firstChar) && "aeiou".includes(lastChar))return true;
    else return false;
}