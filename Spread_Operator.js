const numbers=[12,85,999,78]
const max=Math.max(...numbers)
console.log(max,...numbers)
const numbers2=[...numbers]
numbers.push(55)
numbers2.push(777)
console.log(numbers)
console.log(numbers2)