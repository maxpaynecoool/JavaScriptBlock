var number = Number(prompt('Введите число!'));
var iteration = Number(prompt('Количество итераций?'));

for (i = 0; i < iteration; i++) {
  result = i*number;
  console.log(result)
}

if (result % 2 === 0) {
  alert(`Ваше новое число "${result}" и оно четное`);
} else {
  alert(`Ваше новое число "${result}" и оно нечетное`);
}
