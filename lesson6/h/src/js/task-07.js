const formEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = `${formEl.value}px`;

formEl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${formEl.value}px`;
})
