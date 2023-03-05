import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');


galleryItems.forEach((item) => {
    const galleryItem = `
        <a class="gallery__item"
        href ="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" /></a>`
    gallery.insertAdjacentHTML('beforeend', galleryItem);
})

let lightbox = new SimpleLightbox('.gallery__item', { 
    captionDelay: 250,
    captionsData: 'alt',
});