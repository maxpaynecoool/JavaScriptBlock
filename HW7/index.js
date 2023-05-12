const str = 'Ехал Грека через реку'

const vowel = ['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы']

const str2 = str.split('')

const tttt = str2.findIndex(item => item = vowel.includes(item))

console.log(tttt)

const ttt = str2.filter((item, index) => [index] = vowel.includes(item))

console.log(ttt)

const getVowel = str2.filter((item, index) => {
    return (item = vowel.includes(item))
  })


console.log(getVowel)



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
  return arr.reduce(function(acc, item) {
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
  return arr.find(function(item) {
    return !(item % 2)
  })
}

console.log(findFirstEvenNumber(numbersTask5))

console.log('-----Arrow-----')

const findFirstEvenNumberArrow = (arr) => arr.find((item) => !(item % 2))

console.log(findFirstEvenNumberArrow(numbersTask5))



console.log('-----------------------TASK 1*-------------------------')

function Student() {
  this.name = 'Misha',
  this.rate = 5.5,
  this.salary = 2000,
  this.getSum = function() {
    
  }
}

const student = new Student()



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

const isIsogram = (str) => !!str.toLowerCase().split``.filter((h => v => (h[v] = (h[v] || 0) + 1) === 2)({})).length;


console.log(isIsogram('Анастасия'));
console.log(isIsogram('Андрей'));