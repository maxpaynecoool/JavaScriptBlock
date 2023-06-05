const main = document.getElementById('main');

const listColors = ['#ff0000', '#01ff06', '#01eeff'];

listColors.forEach((color, index) => {
    const div = document.createElement('div');

    div.textContent = index + 1;
    div.style.backgroundColor = color;

    main.append(div);
});

const splitColor = (color) => {
    const colorWithoutHash = color.slice(1);

    const newColorValue = [];

    let start = 0;
    let end = 2;

    for (let i = 0; i < 3; i++) {
        newColorValue.push(colorWithoutHash.slice(start, end));

        start += 2;
        end += 2;
    }

    return newColorValue.map(colorValue => +('0x' + colorValue));
}

main.onclick = (event) => {
    if (event.target.id) return;

    const colorValueTarget = splitColor(listColors[+event.target.textContent - 1]);

    const listBlocks = main.querySelectorAll('div');

    for (let block of listBlocks) {
        if (block.textContent !== event.target.textContent) {
            const colorValue = splitColor(listColors[+block.textContent - 1]);

            let hash = '#';

            for (let i = 0; i < colorValueTarget.length; i++) {
                const value = colorValueTarget[i] + colorValue[i];

                let valueIn16 = (+(value / 2).toFixed()).toString(16)

                if (valueIn16.length === 1) {
                    hash += '0' + valueIn16;
                } else {
                    hash += valueIn16;
                }
            }

            block.style.backgroundColor = hash;
        } else {
            block.style.backgroundColor = listColors[+event.target.textContent - 1];
        }
    }
}


///
if (localStorage.getItem('theme')) {
    document.body.style.backgroundColor = localStorage.getItem('theme');
}

const p = document.querySelector('p');
const select = document.getElementById('lang');

const lang = {
    ru: 'Привет',
    en: 'Hello',
    ge: 'Handehoh',
}

if (localStorage.getItem('lang')) {
    p.textContent = lang[localStorage.getItem('lang')];
    select.value = localStorage.getItem('lang');
} else {
    p.textContent = lang['ru'];
}


const themes = document.getElementById('themes');


const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');

themes.onclick = (event) => {
    if (event.target.id === 'theme') return;

    document.body.style.backgroundColor = event.target.style.backgroundColor;
    localStorage.setItem('theme', event.target.style.backgroundColor)
}

const btn = document.getElementById('button-set-lang');

btn.onclick = () => {
    p.textContent = lang[select.value];
    localStorage.setItem('lang', select.value);
    console.log(select.value);
}

/*
red.onclick = () => {
    document.body.style.backgroundColor = 'red';
    localStorage.setItem('theme', 'red');
}

blue.onclick = () => {
    document.body.style.backgroundColor = 'blue';
    localStorage.setItem('theme', 'blue');
}

green.onclick = () => {
    document.body.style.backgroundColor = 'green';
    localStorage.setItem('theme', 'green');
}
*/