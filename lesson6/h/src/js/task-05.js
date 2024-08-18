const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.target.value;
})

inputEl.addEventListener('blur', (event) => {
    if(outputEl.textContent === ''){
        outputEl.textContent = 'Anonymous';
    }
})