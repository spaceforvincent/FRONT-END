//object 객체 : key-value로 이루어진 자료구조

const capitals ={
  korea: 'seoul',
  france: 'paris',
  USA: 'washington',
}

for (const capital in capitals){
  console.log(capitals[capital])
}
  