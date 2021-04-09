import photos from "./gallery-items.js";
import { removeModal } from "./functions.js";
import { removeModalEsc } from "./functions.js";
import { changePhoto } from "./functions.js";
import { drawImage } from "./functions.js";
const refs = {
  lightboxRef: document.querySelector(".js-lightbox"),
  originalImageRef: document.querySelector(".lightbox__image"),
  closeButtonRef: document.querySelector(".lightbox__button"),
  closeAreaRef: document.querySelector(".lightbox__overlay"),
  galleryRef: document.querySelector(".js-gallery"),
};
photos.forEach((photos) => drawImage(photos, refs));
refs.photosRef = [...refs.galleryRef.querySelectorAll(".gallery__image")];
refs.galleryRef.addEventListener("click", (event) => {
  refs.originalImageRef.src = event.target.dataset.source;
  refs.photoId = +event.target.dataset.id;
  event.preventDefault();
  refs.lightboxRef.classList.add("is-open");
  refs.bindRemoveModal = removeModal.bind(event, refs);
  refs.bindRemoveModalEsc = removeModalEsc.bind(refs, refs);
  refs.bindChangePhoto = _.throttle(changePhoto.bind(refs, refs, photos), 300);
  refs.closeButtonRef.addEventListener("click", refs.bindRemoveModal);
  window.addEventListener("keydown", refs.bindRemoveModalEsc);
  window.addEventListener("keydown", refs.bindChangePhoto);
  refs.closeAreaRef.addEventListener("click", refs.bindRemoveModal);
});
