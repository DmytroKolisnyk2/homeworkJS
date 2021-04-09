import photos from "./gallery-items.js";
import { removeModal } from "./functions.js";
import {removeModalEsc} from "./functions.js";
const refs = {
  lightboxRef: document.querySelector(".js-lightbox"),
  originalImageRef: document.querySelector(".lightbox__image"),
  closeButtonRef: document.querySelector(".lightbox__button"),
  closeAreaRef: document.querySelector(".lightbox__overlay"),
  galleryRef: document.querySelector(".js-gallery"),
};
photos.forEach((photo) =>
  refs.galleryRef.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
     <a
    class="gallery__link"
    href="${photo.original}"
  >
    <img
      class="gallery__image"
      src="${photo.preview}"
      data-id='${photo.id}'
      data-source="${photo.original}"
      alt="${photo.description}"
    />
  </a>
</li>`
  )
);
// const removeModal = () => {
//   refs.lightboxRef.classList.remove("is-open");
//   refs.closeAreaRef.removeEventListener("click", removeModal);
//   refs.closeButtonRef.removeEventListener("click", removeModal);
//   window.removeEventListener("keydown", removeModalEsc);
// };
// const removeModalEsc = (event) => {
//   console.log(event.key);
//   if (event.key === "Escape") {
//     refs.lightboxRef.classList.remove("is-open");
//     refs.closeAreaRef.removeEventListener("click", removeModal);
//     refs.closeButtonRef.removeEventListener("click", removeModal);
//     window.removeEventListener("keydown", removeModalEsc);
//   }
// };
refs.photosRef = [...refs.galleryRef.querySelectorAll(".gallery__image")];
refs.galleryRef.addEventListener("click", (event) => {
  refs.originalImageRef.src = event.target.dataset.source;
  event.preventDefault();
  refs.lightboxRef.classList.add("is-open");
  refs.bindRemoveModal = removeModal.bind(event, refs);
  refs.bindRemoveModalEsc = removeModalEsc.bind(refs, refs);
  refs.closeButtonRef.addEventListener("click", refs.bindRemoveModal);
  window.addEventListener("keydown", refs.bindRemoveModalEsc);
  refs.closeAreaRef.addEventListener("click", refs.bindRemoveModal);
});
