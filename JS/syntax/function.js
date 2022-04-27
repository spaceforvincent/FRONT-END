// 함수 선언식
function add(num1, num2){
  return num1 + num2
}
add(1, 2)

// 함수 표현식
const add1 = function (num1, num2){
  return num1 + num2
}
add1(1, 2)

// 기본인자
const greeting = function (name='Anonymous'){
  return `Hi ${name}`
}
greeting()
greeting('kim')

// 매개변수와 인자의 개수 불일치
// 매개변수보다 인자의 개수가 많을 경우
const noArgs = function () {
  return 0
}
noArgs(1, 2, 3)

const twoArgs = function (arg1, arg2) {
  return [arg1, arg2]
}
twoArgs(1, 2, 3)

// 매개변수보다 인자의 개수가 적을 경우
const threeArgs = function(arg1, arg2, arg3){
  return [arg1, arg2, arg3]
}
threeArgs()
threeArgs(1)
threeArgs(1, 2)

// rest operator
const restOpr = function (arg1, arg2, ...restArgs){
  return [arg1, arg2, restArgs]
}
restOpr(1, 2, 3, 4, 5)
restOpr(1, 2)

// spread operator
const spreadOpr = function(arg1, arg2, arg3){
  return arg1 + arg2 + arg3
}
const nums = [1, 2, 3]
spreadOpr(...nums)

// 호이스팅(함수선언식)
add2(2, 7)
function add2(num1, num2){
  return num1 + num2;
}

// 호이스팅(함수표현식) : 권장
sub(7, 2)
const sub = function(num1, num2){
  return num1 - num2
}

// arrow function
const arrow1 = function(name){
  return `hello, ${name}`
}
// 1. function 키워드 삭제
const arrow2 = (name) => {
  return `hello, ${name}`
}
// 2. 매개변수가 1개일 경우에만 () 생략가능
const arrow3 = name => {
  return `hello, ${name}`
}
// 3. 함수 바디가 return을 포함한 표현식 1개일 경우 {} & return 삭제 가능
const arrow4 = name =>`hello, ${name}`
arrow4('kim')