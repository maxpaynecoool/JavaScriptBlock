var v1 = 42;
var v2 = 'Сорок два';
var v3 = true;
var v4 = null;

alert('Добро пожаловать!');
alert('У меня есть 4 переменных с разными типами данных');
alert(`Переменная: ${v1}`);
alert(`${v1} - переменная типа number`);
alert(`Переменная: ${v2}`);
alert(`${v2} - переменная типа string`);
alert(`Переменная: ${v3}`);
alert(`${v3} - переменная типа boolean`);
alert(`Переменная: ${v4}`);
alert(`${v4} - переменная типа null (неожиданно)`);

var enjoy = confirm('Понравился ли вам сайт');

alert(enjoy);

var realyEnjoy = prompt('Точно понравился?')

alert(realyEnjoy);

console.log(enjoy);
console.log(realyEnjoy);