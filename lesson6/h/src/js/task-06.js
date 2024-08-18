const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('change', (event) => {
    if (event.target.value.length >  inputEl.getAttribute('data-length')){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else if(event.target.value.length === 0){
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
    }
     else{
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
})
