const display = document.querySelector('#display');
let expression = '';
let allbtn = document.querySelectorAll('[data-value]');

allbtn.forEach(button => button.addEventListener('click', () => {
    expression += button.dataset.value;
    display.value = expression;
}));
let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    expression = '';
    display.value = '0';
});
let equal = document.querySelector('#equals')
equal.addEventListener('click', () => {
    try {
        expression = String(Function(`return ${expression}`)());
        display.value = expression;
    } catch {
        expression = ''; display.value = 'Error';
    }
});