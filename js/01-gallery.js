
import { galleryItems } from './gallery-items.js';
// Change code below this line


// Create gallery
const listGallery = document.querySelector('.gallery');

function createGallleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    }).join('');
};

// Add gallery to HTML
listGallery.insertAdjacentHTML('beforeend', createGallleryMarkup(galleryItems));

listGallery.addEventListener('click', onImgGalleryClick);

const instance = basicLightbox.create(`<img src="">`, {
    onShow: instance => {
        window.addEventListener('keydown', onEscapePress);
    },
    onClose: instance => {
        window.removeEventListener('keydown', onEscapePress);
    },
});

function onImgGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
}

function onEscapePress(event) {
    if (event.key === 'Escape') {
        instance.close();
        return;
    }
};