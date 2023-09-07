
//Multiline strings with template literals
const person='Adam Sand';
const person2="Ben White";
const person3=`Donald Trump`;
const MultiLine=`First line of text
Second line of Text
Third line of text`
console.log(MultiLine)

//String interpolation-->Dynamic  string: with template literals
const a=20;
const b=30;
const summary='sum of: '+a+" and "+b+" is: "+(a+b);
//console.log(summary)
const newSummary=`sum of ${a} and is ${b} is: ${a+b}`;
console.log(newSummary)
