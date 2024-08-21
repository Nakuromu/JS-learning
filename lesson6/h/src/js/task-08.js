const loginFormEl = document.querySelector('.login-form')

const userRegistrInform = {};

loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    if(event.target.elements.email.value === ''){
        alert("Ви не заповнили поле електронної адреси!!!");
	} else if (event.target.elements.password.value === "") {
		alert("Ви не ввели пароль!!!");
    } else{
        userRegistrInform[`${loginFormEl.elements.email.name}`] = loginFormEl.elements.email.value;
		userRegistrInform[`${loginFormEl.elements.password.name}`] = loginFormEl.elements.password.value;

        loginFormEl.reset();

        console.log(userRegistrInform);
    }
})
