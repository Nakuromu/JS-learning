function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elBoxes = document.querySelector("#boxes");
const inputField = document.querySelector(`input[type="number"]`);
const btnCreate = document.querySelector(`button[data-create]`);
const btnDestroy = document.querySelector(`button[data-destroy]`);

btnCreate.addEventListener('click', () => {
  createBoxes(inputField.value);
})

btnDestroy.addEventListener('click', () => {
  elBoxes.innerHTML = '';
  inputField.value = '';
})

const createBoxes = (amount) => {
  let newBoxesArray = [];

  for(let i = 0; i< amount; i++){
    const item = document.createElement('div');
    const length = (10 * (i+3));
    item.style.width = `${length}px`;
    item.style.height = `${length}px`;
    item.style.backgroundColor = getRandomHexColor();
    newBoxesArray.push(item)
  }

  elBoxes.append(...newBoxesArray);
}
