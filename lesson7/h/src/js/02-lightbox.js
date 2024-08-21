import { galleryItems } from './gallery-items.js';
// Change code below this line

const ListEl = document.querySelector(".gallery");

const newGalleryEl = galleryItems.map(({preview, original, description}) =>
	`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

ListEl.innerHTML = newGalleryEl;

new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});