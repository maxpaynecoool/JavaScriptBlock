/*let defaultString = 'ТуТ я пиШУ ТЕСтоВУю СТРОКУ'

for (let i = 0; i < defaultString.length; i++) {
  if (defaultString[0]) continue
  console.log(defaultString[i])
}*/

const solution = (text) => {
  let str = '';
  for (let i = 0; i <= text.length - 1; i++) {
    if (text[i - 1] == ' ' || text[i - 1] === undefined) {
      str += text[i].trim().toUpperCase();
    } else str += text[i].toLowerCase();
  }
  return str;
};

console.log(solution('    ТуТ я пиШУ ТЕСтоВУю СТРОКу        '))