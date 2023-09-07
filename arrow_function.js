//function declaration vs function expression
//1.function declaration
function add(first , second){
    const total=first+second;
    return total;
}
const result=add(10,20)
//function expression
const add1=function add1(first,second){
    const total=first+second;
    return total;
}
//function expression with anonymous function
const add2=function (first,second){
    const result=first+second;
    return result;
}
//arrow function
//single line arrow function
const add5= (first,second) => first+second;
//multiline arrow function must have return within curly braces
const add6= (first,second)=> {
    const total=first+second
    const avg=total/2;
    return avg;
}
console.log(add6(2,4));

//console.log(add6(10,20))
const multiply=(a,b)=> a*b;

//single parameter arrow function
const single= a => a*a


//no parameter arrow function
const getPi=() => 3.14;
//


//difference between regular function and arrow function
//difference between function declaration vs function expression