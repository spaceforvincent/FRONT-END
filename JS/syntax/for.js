let sum = 0
let even = 0
let odd = 0
for(let i=0; i <= 10; i++){
  sum += i
  if (i % 2 === 0){
    even += i
  }
  else {
    odd += i
  }
}
console.log(sum)
console.log(even)
console.log(odd)