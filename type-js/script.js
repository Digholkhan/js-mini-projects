const sentences = ['JavaScript makes websites interactive.', 'Small projects are great for learning.', 'Practice a little code every day.'];
const quote = document.querySelector('#quote');
const input = document.querySelector('#input');
const result = document.querySelector('#result'); let start;
function newSentence() {
    quote.textContent = sentences[Math.floor(Math.random() * sentences.length)];
    input.value = ''; result.textContent = ''; start = null; input.focus();
}
input.addEventListener('input', () => {
    if (!start) start = Date.now();
    const done = input.value === quote.textContent;
    if (done) {
        const seconds = (Date.now() - start) / 1000; const words = quote.textContent.split(' ').length;
        result.textContent = `Finished in ${seconds.toFixed(1)} seconds (${Math.round(words / seconds * 60)} WPM)`;
    }
});
document.querySelector('#new').addEventListener('click', newSentence); newSentence();