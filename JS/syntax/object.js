const me = {
  name: 'jack',
  phoneNumber: '010-1234-1234',
  'samsung products': {
    buds: 'Galaxy Buds pro',
    galaxy: 'Galaxy s22',
  }
}

console.log(me.name)
console.log(me['name'])
console.log(me.phoneNumber)
console.log(me['samsung products'])
console.log(me['samsung products'].buds)

// 객체와 메서드
const me = {
  firstName : 'John',
  lastName : 'Doe',
  fullName: this.firstName + this.lastName,

  getFullName: function(){
    return this.firstName + this.lastName
  }
}
me.fullName
me.getFullName()

// 속성명 축약
const books = ['Learning JS', 'Learning Python']
const magazines = ['Vogue', 'Science']

const bookShop = {
  books,
  magazines,
}
console.log(bookShop)

// 메소드 축약
const obj = {
  greeting() {
    console.log('Hi!')
  }
}
obj.greeting()

// 계산된 속성
const key = 'regions'
const value = ['구미', '서울', '대전']
const ssafy = {
  [key]: value,
}
console.log(ssafy)
console.log(ssafy.regions)

// 구조분해할당
const userInformation = {
  name: 'ssafy kim',
  userId: 'ssafyStudent1234',
  phoneNumber: '010-124-1234',
  email: 'ssafy@ssafy.com',
}

const {name} = userInformation
const {userId} = userInformation
const {phoneNumber} = userInformation
const {email} = userInformation

const { name, userID, phoneNumber, email} = userInformation

// JSON
const jsonData = JSON.stringify({
  coffee: 'Americano',
  iceCream: 'Cookie & cream',
})
console.log(jsonData)
console.log(typeof jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)
console.log(typeof parseData)

// this
function getFullName() {
  return this.firstName + this.lastName
}
const me = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: getFullName,
}
const you = {
  firstName: 'Jack',
  lastName: 'Lee',
  getFullName: getFullName,
}
me.getFullName()
you.getFullName()
getFullName()

const obj = {
  PI: 3.14,
  radiuses: [1, 2, 3, 4, 5],
  printArea: function() {
    this.radiuses.forEach((r) => {
      console.log(this.PI * r * r)
    })
  }
}