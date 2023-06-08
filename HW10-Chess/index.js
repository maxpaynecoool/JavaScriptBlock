const rowInput = document.getElementById('row');
const columnInput = document.getElementById('column');

const btn = document.getElementById('createBtn');

const table = document.getElementById('chest');

const smallList = document.querySelectorAll('small')

let flagColor = false;

btn.onclick = () => {
    table.innerHTML = '';

    const countRow = +rowInput.value;

    if (isNaN(countRow)) {
        for (let small of smallList) {
            if (small.hasAttribute('data-nubmer-first')) {
                small.hidden = false;
            }
        }
    } else {
        for (let small of smallList) {
            if (small.hasAttribute('data-nubmer-first')) {
                small.hidden = true;
            }
        }
    }

    const countColumn = +columnInput.value;

    for (let i = 0; i < countRow; i++) {
        const tr = document.createElement('tr');

        for (let k = 0; k < countColumn; k++) {
            const td = document.createElement('td');

            if (i % 2 === 0 && k % 2 !== Number(flagColor)) {
                td.classList.add('black');
            }

            if (i % 2 !== 0 && k % 2 === Number(flagColor)) {
                td.classList.add('black');
            }

            tr.append(td);
        }

        table.append(tr);
    }
}

table.onclick = (event) => {
    if (event.target.tagName !== 'TD') return;

    const listTd = table.querySelectorAll('td');

    for (let td of listTd) {
        td.classList.toggle('black');
    }

    flagColor = !flagColor;

}





















