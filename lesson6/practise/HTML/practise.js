//-----------Exercise-1-----------//

// const headingEl = document.querySelector('.description');

// console.log(headingEl.nextElementSibling.children);

//-----------Exercise-2-----------//

// const imgEl = document.querySelector('.some-img');

// // console.log(imgEl.attributes);

// // console.log(imgEl.hasAttribute('src'));

// // console.log(imgEl.getAttribute('alt'));

// // imgEl.setAttribute('alt', 'sdvfr');

// imgEl.removeAttribute('alt');

// imgEl.src = 'https://picsum.photos/id/238/200/300'

//-----------Exercise-3-----------//

// const titleEl = document.querySelector('.main-title');

// // titleEl.style.backgroundColor = 'red'
// // titleEl.style.color = '#fff'
// // titleEl.style.fontSize = '60px'

// titleEl.style.cssText = 'background-color: red; color: #fff; font-size: 60px;'

//-----------Exercise-4-----------//

// const headingEl = document.querySelector('h1')

// // headingEl.classList.add('dissapear')
// // headingEl.classList.remove('dissapear')
// // headingEl.classList.toggle('dissapear')

// console.log(headingEl.classList.contains('main-title'))
// console.log(headingEl.classList.replace('main-title', 'title'))

//-----------Exercise-5-----------//

// const listEl = document.querySelector('.gallary');

// const listItemEl = document.createElement('li');

// listItemEl.classList.add('.gallary-item');

// const listItemAnchorEl = document.createElement('a');

// listItemAnchorEl.href = '#';

// listItemEl.append(listItemAnchorEl);

// const listImgEl = document.createElement('img');

// listImgEl.src = 'https://picsum.photos/id/238/200/300';

// listImgEl.alt = 'City';

// listItemAnchorEl.append(listImgEl);

// // listEl.append(listItemEl)

// listEl.firstChild.after(listItemEl);

//-----------Exercise-6-----------//

// const listEl = document.querySelector('.gallary');

// listEl.innerHTML += `
//         <li class="galary-item">
//         <h1>Some text</h1>

//         <a href="#">
//             <img src="https://picsum.photos/id/238/200/300" alt="City">
//         </a>
//     </li>
// `

//-----------Exercise-7-----------//

// const pictures = [
//     {
//         width: 200,
//         height: 300,
//         src: "https://picsum.photos/id/238/200/300",
//         alt: 'dfdcvr'
//     },
//     {
//         width: 200,
//         height: 300,
//         src: "https://picsum.photos/id/239/200/300",
//         alt: 'dfdcvr'
//     },
//     {
//         width: 200,
//         height: 300,
//         src: "https://picsum.photos/id/237/200/300",
//         alt: 'dfdcvr'
//     },
//     {
//         width: 200,
//         height: 300,
//         src: "https://picsum.photos/id/236/200/300",
//         alt: 'dfdcvr'
//     },
// ]

// const makeGallaryCard = ({width, height, src, alt}) => 
//     ` <li class="galary-item">

//         <a href="#">
//             <img src="${src}" alt="${alt}" width = ${width} height = ${height}>
//         </a>
//     </li>`
    
// const markup = pictures.map((element) => makeGallaryCard(element)).join('')

// const listEl = document.querySelector('.gallary');

// listEl.insertAdjacentHTML('afterbegin',markup)

//-----------Exercise-8-----------//

// const imgEl = document.querySelector('.js-img')

// const swapImgBtnEl = document.querySelector('.js-swap-btn')

// const removeListenerBtnEl = document.querySelector('.js-remove-listener')

// const handelSwapImg = () => {
//     imgEl.src = 'https://picsum.photos/200/300'
// }

// swapImgBtnEl.addEventListener('click', handelSwapImg);

// removeListenerBtnEl.addEventListener('click', () => {
//    swapImgBtnEl.removeEventListener('click', handelSwapImg);
// })

//-----------Exercise-9-----------//

// const formEl = document.querySelector('.js-contact-form')
// const formInputEl = document.querySelector('.js-username-input')
// const formCheckboxEl = document.querySelector('.js-policy-checkbox')
// const usernameOutputEl = document.querySelector('.js-username-output')
// const formSubmitBtnEl = document.querySelector('.js-contact-form-submit')

// formInputEl.addEventListener('focus', (event) => {
//     event.target.style.outline = '2px solid teal';
// })

// formInputEl.addEventListener('blur', (event) => {
//     event.target.style.outline = 'none';
// })

// formInputEl.addEventListener('input', (event) => {
//     usernameOutputEl.textContent = event.target.value;
// })

// formCheckboxEl.addEventListener('change', (event) => {
//     if(event.target.checked && formInputEl.value !==''){
//         formSubmitBtnEl.disabled = false;
//         return;
//     }

//     formSubmitBtnEl.disabled = true;
// })

// formEl.addEventListener('submit', (event) => {
//     event.preventDefault();
//     event.target.reset()
//     formSubmitBtnEl.disabled = true;
//     usernameOutputEl.textContent = '';
// })

//-----------Exercise-10-----------//

// const outputEl = document.querySelector('.js-output');

// document.addEventListener('keyup', (event) =>{
//     outputEl.insertAdjacentHTML('beforeend', `code: ${event.code} <br> key: ${event.key} <br> <hr>`)
// })

// document.addEventListener('keydown', (event) => {
//     event.preventDefault();

//     if(event.ctrlKey && event.code === 'KeyS'){
//         alert('Ctrl + S combination');
//     }
// })

//-----------Exercise-10-----------//

// const btnEls = document.querySelectorAll('.js-acordion-btn')

// const handelTogglePanel = (event) => {
//     const panelEl = event.target.nextElementSibling;

//     panelEl.classList.toggle('dissapear')
// }

// btnEls.forEach((element) => {
//     element.addEventListener('click', handelTogglePanel);
// })