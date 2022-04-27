// forEach
const fruits = ['딸기', '수박', '사과']

fruits.forEach((fruit, index)=>{
  console.log(fruit, index)
})


// map
const numbers = [1, 2, 3, 4, 5]
const doubleNums = numbers.map((num)=>{
  return num * 2
})
console.log(doubleNums)

// filter
const numbers = [1, 2, 3, 4, 5]
const oddNums = numbers.filter((num, index)=>{
  return num % 2
})
console.log(oddNums)


// reduce
const numbers = [1, 2, 3]
const result = numbers.reduce((acc, num)=>{
  return acc + num
}, 0)
console.log(result)

// find
const avengers = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Rogers', age: 32},
  { name: 'Thor', age: 40},
]
const result = avengers.find((avenger)=>{
  return avenger.name === 'Thor'
})
console.log(result)

// some
const numbers = [1, 3, 5, 7, 9]
const hasEvenNumber = numbers.some((num)=>{
  return num % 2 === 0
})
console.log(hasEvenNumber)

const hasOddNumber = numbers.some((num)=>{
  return num % 2 === 1
})
console.log(hasOddNumber)

//every
const numbers = [2, 4, 6, 8, 10]
const isEvenNumber = numbers.every((num)=>{
  return num % 2 === 0
})
console.log(isEvenNumber)

const isOddNumber = numbers.every((num)=>{
  return num % 2 === 1
})
console.log(isOddNumber)