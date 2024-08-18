let counterValue = 0;

const counterEl = document.querySelector("#value");
const counterDecreaseEl = document.querySelector('button[data-action="decrement"]');
const counterIncreaseEl = document.querySelector('button[data-action="increment"]');

const handelClick = (value) => {
    counterValue += value;
    counterEl.textContent = counterValue;
}

counterDecreaseEl.addEventListener('click', () => handelClick(-1));
counterIncreaseEl.addEventListener('click', () => handelClick(1));
