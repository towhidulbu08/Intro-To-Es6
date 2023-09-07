const glass = {
    name: 'glass',
    color: 'golden',
    price: 23,
    isCleaned: true
}
// 1. remove key-value pair from current object
//delete glass.isCleaned;

const {isCleaned, ...shortGlass}=glass
//console.log(shortGlass);
console.log(glass);
// i)freeze
  //Object.freeze(glass);
  glass.brand='nasir group';
  //console.log(glass);
// ii) seal
   Object.seal(glass)
   console.log(glass);


//2. add new key-vale pair in current object
glass.source='Bangladesh';
//console.log(glass);

// a. Return  an array of all property name of an object
const Keys=Object.keys(glass)
// [ 'name', 'color', 'price', 'isCleaned' ]

// b. Return  an array of all Values of an object
const Values=Object.values(glass)
// [ 'glass', 'golden', 23, true ]

// c. Return  a two dimensional array of [key,value] pair of an object , here every element is also an array
const entries=Object.entries(glass)
/**
   ..Array of Array or Two dimensional Array
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 23 ],
  [ 'isCleaned', true ]
]
 */
