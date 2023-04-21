var number = Number(prompt('Введите число!'));
var iteration = Number(prompt('Количество итераций?'));

for (i = 0; i < iteration; i++) {
  if (i === 0) {
    continue;
  }
  number = number*i;
  console.log(number);
}

if (number % 2 === 0) {
  alert(`Ваше новое число "${number}" и оно четное`);
} else {
  alert(`Ваше новое число "${number}" и оно нечетное`);
}
