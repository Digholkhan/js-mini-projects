const count = document.querySelector('#count');
let number = 0;
function showCount() { count.textContent = number; }
document.querySelector('#increase').addEventListener('click', () => { number += 1; showCount(); });
document.querySelector('#decrease').addEventListener('click', () => { number -= 1; showCount(); });
document.querySelector('#reset').addEventListener('click', () => { number = 0; showCount(); });