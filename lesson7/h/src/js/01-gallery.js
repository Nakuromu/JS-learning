import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const newEl = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

const ListEl = document.querySelector('.gallery');

ListEl.innerHTML = newEl;

ListEl.addEventListener('click', (event) => {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG'){
        return;
    }

    const imgUrl = event.target.dataset.source;

    return showModal(imgUrl);
});

function showModal(imgUrl){
    const instance = basicLightbox.create(`
        <img src="${imgUrl}" width="100" height="853">`, {

            onShow: (instance) => {
                document.addEventListener('keyup', clickEscape);
            },
            onClose: (instance) => {
                document.removeEventListener('keyup', clickEscape);
            }
        })

        instance.show();

        function clickEscape(code){
            if(code = 'Escape'){
                instance.close();
            }
        }
}