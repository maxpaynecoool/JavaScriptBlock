const everyWordToUpperCase = (text) => {
  let str = '';
  for (let i = 0; i <= text.length - 1; i++) {
    if (text[i - 1] == ' ' || text[i - 1] === undefined) {
      str += text[i].trim().toUpperCase();
    } else str += text[i].toLowerCase();
  }
  return str;
};

console.log(everyWordToUpperCase('    ТуТ я пиШУ ТЕСтоВУю СТРОКу        '))