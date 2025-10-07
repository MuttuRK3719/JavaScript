function divideTeams(arr){
let teamA=[];
let teamB=[];
let sumA=0;
let sumB=0;
for (const skill of arr) {
    if(sumA<=sumB){
        teamA.push(skill)
        sumA+=skill
    }
    else{
        teamB.push(skill)
        sumB+=skill
    }
}
    console.log(teamA)
    console.log(teamB)

}
let arr=[10, 20, 30, 40] 
divideTeams(arr)