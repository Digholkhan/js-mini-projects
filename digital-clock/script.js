const clock = document.querySelector('#clock');
const date = document.querySelector('#date');
function update() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
    date.textContent = now.toLocaleDateString(undefined, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
}
update();
setInterval(update, 1000);