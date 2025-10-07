function password(str){
    let result=""
    str=str.toUpperCase()
    for (const ch of str) {
        if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
        result=result+'@'
        else if(ch>='0' && ch<='9'){
            let ch1=ch-'0'
            if(ch1%2==0)
            result=result+'*'
            else result=result+ch
        }
        else result=result+ch
    }
    return result
}
console.log(password("java1234"))