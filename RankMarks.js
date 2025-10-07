function rankMarks(marks){
    marks.sort((a,b)=>b-a).reverse();
    return marks;
}
let marks=[50, 80, 60];
 marks=rankMarks(marks)
 console.log(marks)
