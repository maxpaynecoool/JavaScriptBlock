console.log('-------------TASK 1----------------');

const colors = ['red', 'green', 'blue'];

console.log(colors.length);


////////////////////////////////////////////////////
console.log('-------------TASK 2----------------');

const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length - 1]);


////////////////////////////////////////////////////
console.log('-------------TASK 3----------------');

const numbers = [5, 43, 63, 23, 90];

// Первый способ
while (numbers.length !== 0) {
  var deletedNumber = numbers.pop();
  console.log(deletedNumber);
  console.log(numbers);
}


// Второй способ
var arrayLength = numbers.length;

for (var i = 0; i < arrayLength; i++) {
  console.log(numbers.pop());
  console.log(numbers);
}


////////////////////////////////////////////////////
console.log('-------------TASK 4----------------');

const students = ['Polina', 'Dasha', 'Masha'];

for (var i of students) {
  console.log(i)
}

students.pop();
students.push('Botya');

console.log(students);

students.shift();
students.unshift('Andrey');

console.log(students);


////////////////////////////////////////////////////
console.log('-------------TASK 5----------------');

const cats = ['Gachito', 'Tom', 'Batman'];

for (var i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (var cat of cats) {
  console.log(cat);
}


////////////////////////////////////////////////////
console.log('-------------TASK 6----------------');

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

var joinArrays = function (evenNumbers, oddNumbers) {
  for (var i = 0; i < oddNumbers.length; i++) {
    evenNumbers.push(oddNumbers[i]);
  }
  return evenNumbers;
}

console.log(joinArrays(evenNumbers, oddNumbers));

for (var i = 0; i < evenNumbers.length; i++) {
  if (evenNumbers[i] === 8) {
    console.log(i);
  }
}


////////////////////////////////////////////////////
console.log('-------------TASK 7----------------');

const binary = [0, 0, 0, 0];

for (var i = 0; i < binary.length; i++) {
  zero = binary[i];

  var arr = [];
  for (var i = 0; i < binary.length + 4; i++) {
    if (i % 2 === zero) {
      arr.push(0);
    } else {
      arr.push(1);
    }
    console.log(arr);
  }
}

console.log(arr.join(''))


////////////////////////////////////////////////////
console.log('-------------TASK 1*----------------');

var word = '';

var palindrom = function() {
  var word = String(prompt('Ваше слово'));
  var wordArray = word.split(''); // не знаю как без этого метода еще можно превратить строку в массив ( точнее лень было искать :) )
  var lastLetter = wordArray.length - 1
  for (i = 0; i < wordArray.length / 2; i++) {
    if (wordArray[i] !== wordArray[lastLetter - i]) {
      alert(`"${word}" не является палиндромом`);
      return false;
    }
  }
  alert(`"${word}" является палиндромом! Ура!!!`);
  return true;
}

//console.log(palindrom());


////////////////////////////////////////////////////
console.log('-------------TASK 2*----------------');

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]

var matrix2 = matrix.flat()

console.log(matrix2)


var average = function(matrix2) {
  var sum = 0
  for (var i = 0; i < matrix2.length; i++) {
    sum += matrix2[i]
  }
  return sum / matrix2.length 
}

console.log(average(matrix2))



////////////////////////////////////////////////////
console.log('-------------TASK 3*----------------');
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]


var positive = []
var negative = []

for (var i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] >= 0) {
    positive.push(mixedNumbers[i])
  } else {
    negative.push(mixedNumbers[i])
  }
}

console.log(positive)

console.log(negative)



////////////////////////////////////////////////////
console.log('-------------TASK 4*----------------');

const randomNumbers = [
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
  Math.floor(Math.random()*10),
]

console.log(randomNumbers)

var cubedRandomNumbers = []

for (var i = 0; i < randomNumbers.length; i++) {
  cubedRandomNumbers.push(Math.pow(randomNumbers[i], 3));
}

console.log(cubedRandomNumbers);
