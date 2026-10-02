const input = document.querySelector('#number');
const table = document.querySelector('#table');
function makeTable() {
    const number = Number(input.value); table.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement('p'); row.textContent = `${number} × ${i} = ${number * i}`;
        table.appendChild(row);
    }
}
input.addEventListener('input', makeTable);
makeTable();