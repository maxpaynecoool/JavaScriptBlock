const input = document.getElementById('input')
const backSpace = document.getElementById('backspace')
const add = document.getElementById('add')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const sub = document.getElementById('sub')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const mult = document.getElementById('mult')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const div = document.getElementById('div')
const zero = document.getElementById('zero')
const result = document.getElementById('result')
const deleteAll = document.getElementById('deleteAll')

const addNumber = (number) => {
  input.value += number.value 
}

const getResult = () => {
  let arr = [] // сюда запишу массив из чисел
  let symbol = [] // тут знак вычисления
  let result = input.value // результат

  symbol = input.value.split('').splice(1,1).join('')

  arr = input.value
    .split('')
    .filter((item, index) => index != 1)
    .map(item => +item)
    
  switch(symbol) {
    case '+':
      result = arr.reduce((acc, item) => acc + item, 0)
      break
    case '-':
      result = arr.reduce((acc, item) => - item - acc, 0)
      break
    case '*':
      result = arr.reduce((acc, item) => acc * item, 1)
      break
    case '/':
      result = arr.reduce((acc, item) => acc / item)
      break
      /* Не понял почему при делении делится не первое число на второе, а наоборот (4 / 2 выдает 0.5, а не 2)
        поэтому сделал реверс массива      
      */
  }
  
  console.log(symbol)
  console.log(arr)
  console.log(result)
  return result
}

one.addEventListener('click', () => {
  addNumber(one)
})

two.addEventListener('click', () => {
  addNumber(two)
})

three.addEventListener('click', () => {
  addNumber(three)
})

four.addEventListener('click', () => {
  addNumber(four)
})

five.addEventListener('click', () => {
  addNumber(five)
})

six.addEventListener('click', () => {
  addNumber(six)
})

seven.addEventListener('click', () => {
  addNumber(seven)
})

eight.addEventListener('click', () => {
  addNumber(eight)
})

nine.addEventListener('click', () => {
  addNumber(nine)
})

zero.addEventListener('click', () => {
  addNumber(zero)
})

backSpace.addEventListener('click', () => {
  input.value = input.value.slice(0, -1)
})

add.addEventListener('click', () => {
  addNumber(add)
})

sub.addEventListener('click', () => {
  addNumber(sub)
})

mult.addEventListener('click', () => {
  addNumber(mult)
})

div.addEventListener('click', () => {
  addNumber(div)
})

result.addEventListener('click', () => {
  input.value = getResult()
})

deleteAll.addEventListener('click', () => {
  input.value = null
})