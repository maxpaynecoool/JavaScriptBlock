const str = 'Ехал Грека через реку'

const vowel = ['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы']

const str2 = str.split('')

const tttt = str2.findIndex(item => item = vowel.includes(item))

console.log(tttt)

const getVowel = str2.filter((item, index) => {
  return (item = vowel.includes(item))
})


console.log(getVowel)

// не додумал :(


console.log('-----------------------TASK 1-------------------------')

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

console.log('-----Function Declaration-----')

fibonacci.forEach(function (item) {
  console.log(item)
})

console.log('-----Arrow-----')

fibonacci.forEach(item => console.log(item))



console.log('-----------------------TASK 2-------------------------')

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

const members = users.map((item, index) => {
  return 'member ' + (index + 1) + ': ' + item
})

console.log(members)




console.log('-----------------------TASK 3-------------------------')

const numbers = [7, -4, 32, -90, 54, 32, -21]

console.log('-----Function Declaration-----')

function getPositive(arr) {
  return arr.filter(function (item) {
    return item > 0
  })
}

console.log(getPositive(numbers))

console.log('-----Arrow-----')

const getPositiveArrow = arr => arr.filter(item => item > 0)

console.log(getPositiveArrow(numbers))



console.log('-----------------------TASK 4-------------------------')

const fibonacciTask4 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

console.log('-----Function Declaration-----')

function getSumOfFibonacciTask4(arr) {
  return arr.reduce(function (acc, item) {
    return acc += item
  }, 0)
}

console.log(getSumOfFibonacciTask4(fibonacciTask4))

console.log('-----Arrow-----')

const getSumOfFibonacciTask4Arrow = (arr) => arr.reduce((acc, item) => acc += item, 0)

console.log(getSumOfFibonacciTask4Arrow(fibonacciTask4))



console.log('-----------------------TASK 5-------------------------')

const numbersTask5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

console.log('-----Function Declaration-----')

function findFirstEvenNumber(arr) {
  return arr.find(function (item) {
    return !(item % 2)
  })
}

console.log(findFirstEvenNumber(numbersTask5))

console.log('-----Arrow-----')

const findFirstEvenNumberArrow = (arr) => arr.find((item) => !(item % 2))

console.log(findFirstEvenNumberArrow(numbersTask5))



console.log('-----------------------TASK 1*-------------------------')

function Student(name, rate, salary) {
  this.name = name,
    this.rate = rate,
    this.salary = salary,
    this.getSumOfCredit = function () {
      switch (this.rate) {
        case 'A':
          return this.salary * 12
        case 'B':
          return this.salary * 9
        case 'C':
          return this.salary * 6
        default:
          return 0
      }
    }
}

let misha = new Student('Misha', 'A', 2000)
let sanya = new Student('Sanya', 'B', 2500)
let danya = new Student('Danya', 'C', 3000)
let anya = new Student('Anya', 'D', 3500)
let sveta = new Student('Sveta', 'A', 4000)

const listStudents = [misha, sanya, danya, anya, sveta]

function getCommonSalary(list) {
  let commonSalary = 0

  list.forEach(student => {
   commonSalary += student.getSumOfCredit()
  })

  return commonSalary
}

console.log(getCommonSalary(listStudents))
console.log()


console.log('-----------------------TASK 2*-------------------------')

const removeVowels = trollStr => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return trollStr
    .split('')
    .filter(item => !vowels.includes(item))
    .join('')
}

console.log(removeVowels('This website is for losers LOL!'))



console.log('-----------------------TASK 3*-------------------------')

const accum = str => {
  return str
    .split('')
    .map((item, index) => item = item.toLowerCase().repeat(index + 1))
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('-')
}

console.log(accum('aBCd'))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))
console.log(accum("eroggkjnoijpqr"))




console.log('-----------------------TASK 4*-------------------------')

const highAndLow = (str) => {
  const strArray = str.split(' ')
  let maxNumb = 0
  let minNumb = numbers[0]
  for (let item of strArray) {
    if (item > maxNumb) {
      maxNumb = item
    }
    if (item < minNumb) {
      minNumb = item
    }
  }
  return maxNumb + ' ' + minNumb
}

console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("1 9 3 4 -5"))

console.log('-----------------------TASK 5*-------------------------')

let str1 = 'abcd'

let str22 = 'паладин'

function isogram(str) {
  let arrayStr = str.toLowerCase().split('')

  let isIsogram = false

  arrayStr.forEach((elemStr, index) => {

    if (arrayStr.includes(elemStr, index + 1)) {
      isIsogram = true
    }
  })
}

console.log(isogram(str1))
console.log(isogram(str22))
