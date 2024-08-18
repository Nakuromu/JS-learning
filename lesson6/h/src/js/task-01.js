const itemEls = document.querySelectorAll('.item')

console.log(`Number of categories: ${itemEls.length}`)

itemEls.forEach(element => {
   console.log(`Category: ${element.firstElementChild.textContent}`);
   console.log(`Elements: ${element.lastElementChild.children.length}`);
});