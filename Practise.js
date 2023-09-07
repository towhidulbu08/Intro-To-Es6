
// P-01
const getMultiply = (a, b, c = 4) => a * b * c;
const result = getMultiply(10, 10)
//console.log(result);

// P-02
const threeLinesString = `I am a web developer.
I love to code.
I love to eat biryani.
`
//console.log(threeLinesString);

// P-03
const getAdd=(a,b=3)=> a+b;
//console.log(getAdd(3));

// P-04
const friends=['Abu Bakar','Umor','Usman','Ali','Talha','']

const checkEven= arr =>{
    let Even=[]
     for(const friend of friends){
        if(friend.length%2==1){
            Even.push(friend)
        }
     }
     return Even
}
const Result=checkEven(friends)
//console.log(Result);

// P-05

const numbers=[2,4,10,10,10]

const getAvgOfSquaredElementsOfArr=arr => {
    let sum=0
      for(const num of numbers){
       let square= Math.pow(num,2);
       sum+=square;
       console.log(sum)

      }
       const avg=sum/numbers.length;
       return avg
}

//console.log(getAvgOfSquaredElementsOfArr(numbers));

// P-6

const array1=[401,2,3,4,5,6,7,8,9,100]
const array2=[10,320,30,40,50,200,70,80,90,0]

const getMaxNumOfArr=(arr1,arr2)=>{
    const newArr=[...arr1,...arr2];
    
    const findMax=Math.max(...newArr)
    return findMax;
}
console.log(getMaxNumOfArr(array1,array2));

