const button = document.querySelector('#toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    button.textContent = document.body.classList.contains('dark') ? 'Use light theme' : 'Use dark theme';
});