const numbers=[2,4,3,3,5,6]

// for(const num of numbers){
//     console.log(num);
// }

// const nobab='sirul uddouyla nobab';
// for(const char of nobab){
//     //console.log(char);
// }

const glass = {
    name: 'glass',
    color: 'golden',
    price: 23,
    isCleaned: true
}
 for(const key in glass){
    const value=glass[key]
    console.log(key, value);
 }