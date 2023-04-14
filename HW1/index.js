var v1 = 42;
var v2 = 'Сорок два';
var v3 = true;
var v4 = null;

var v1Type = typeof(v1);
var v2Type = typeof(v2);
var v3Type = typeof(v3);
var v4Type = typeof(v4);

alert('Добро пожаловать!');
alert('У меня есть 4 переменных с разными типами данных');
alert(`Переменная: ${v1}`);
alert(`${v1} - ${v1Type}`);
alert(`Переменная: ${v2}`);
alert(`${v2} - ${v2Type}`);
alert(`Переменная: ${v3}`);
alert(`${v3} - ${v3Type}`);
alert(`Переменная: ${v4}`);
alert(`${v4} - ${v4Type}`);

var enjoy = confirm('Понравился ли вам сайт');

alert(enjoy);

var realyEnjoy = prompt('Точно понравился?');

alert(realyEnjoy);

console.log(enjoy);
console.log(realyEnjoy);