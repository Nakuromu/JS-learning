const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.querySelector('#ingredients')

const newItem = ingredients.map((element) =>{
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
})

itemsList.append(...newItem)