// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"

    />
  </a>
</li>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
