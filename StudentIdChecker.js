function checkId(ids){
 for(let i=0;i<ids.length-1;i++){
   if(sameID(ids[i],ids[i+1])) return "Invalid";
 }
 return "Valid";
}
function sameID(id1,id2){
  let str1=id1.toString();
  let str2=id2.toString();
  let ch=str1.charAt(0);
  if(ch==str2.charAt(0)||ch==str2.charAt(str2.length-1)) return true;
  ch=str1.charAt(str1.charAt(str1.length-1))
  if(ch==str2.charAt(0)||ch==str2.charAt(str2.length-1)) return true;
  return false
}
let marks= [21, 34, 43, 52] 
console.log(checkId(marks))