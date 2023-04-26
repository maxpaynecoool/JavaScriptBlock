//-------------TASK 1----------------
console.log('-------------TASK 1----------------');

var man = {
  name: 'Lexa',
  age: 20,
  sex: 'male',
  isMarried: false,
  address : {
    country: 'Belarus',
    city: 'Minsk',
    street: 'Kalinovskogo'
  }
};

console.log(man);

for (var key in man) {
  delete man[key];
}

console.log(man);


//-------------TASK 2----------------
console.log('-------------TASK 2----------------');

var woman = {
  name: 'NeLexa',
  age: 19,
  sex: 'female',
  isMarried: true,
  address : {
    country: 'Belarus',
    city: 'Minsk',
    street: 'NeKalinovskogo'
  }
};

'addres' in woman ? console.log(true) : console.log(false);


//-------------TASK 3----------------
console.log('-------------TASK 3----------------');

var student = {
  name: 'John',
  age: 19,
  isHappy: true
}

for (var key in student) {
  console.log(key);
}

for (var key in student) {
  console.log(student[key]);
}


//-------------TASK 4----------------
console.log('-------------TASK 4----------------');

var colors = {
  'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
  },
};

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);


//-------------TASK 5----------------
console.log('-------------TASK 5----------------');

var salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  alex: 664,
  alexandra: 199
};

var commonSalary = 0;
for (var key in salaries) {
  commonSalary += salaries[key];
}

console.log(commonSalary);


//-------------TASK 6----------------
console.log('-------------TASK 6----------------');

var user = {
	name: 'Petya',
	age: 20,
	isMarried: true,
	family: null,
	address: undefined,
	friend: {
		name: 'Misha'
	}
};

var cloneUserObject = {};

for (var key in user) {
  cloneUserObject[key] = user[key];
}

user.name = 'Lexa'
user.age = 30

console.log(user);

console.log(cloneUserObject)