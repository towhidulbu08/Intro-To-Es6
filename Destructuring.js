const fish={
    name:'king Hilsa',
    address:'chandpur',
    color:'silver',
    phone:"01640121658",
    price:4000
}
const {phone,aDdress}=fish
//console.log(phone,aDdress)
//array destructuring
const [first,another]=[44,99,18,39,23]
const array=[12,43,{name:'tamim',born:1933}]
const [last,third,fourth]=array
//console.log(last,third,fourth)
function getNames(){
    return ["alim",'Halim'];
}
const [baba,chacha]=getNames()
console.log(baba,chacha)

