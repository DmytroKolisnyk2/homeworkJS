export const removeModal = (refs) => {
  refs.lightboxRef.classList.remove("is-open");
  refs.closeButtonRef.removeEventListener("click", refs.bindRemoveModal);
  refs.closeAreaRef.removeEventListener("click", refs.bindRemoveModal);
  window.removeEventListener("keydown", refs.bindRemoveModalEsc);
};
export const removeModalEsc = (refs) => {
  if (event.key === "Escape") {
    refs.lightboxRef.classList.remove("is-open");
    refs.closeButtonRef.removeEventListener("click", refs.bindRemoveModal);
    refs.closeAreaRef.removeEventListener("click", refs.bindRemoveModal);
    window.removeEventListener("keydown", refs.bindRemoveModalEsc);
  }
};
export const changePhoto = (refs, photos) => {
  if (event.key === "ArrowRight") {
    if (refs.photoId === photos.length) {
      refs.photoId = 1;
      refs.originalImageRef.src = document.querySelector(
        `[data-id="${refs.photoId}"]`
      ).dataset.source;
    } else {
      refs.originalImageRef.src = document.querySelector(
        `[data-id="${refs.photoId + 1}"]`
      ).dataset.source;
      refs.photoId++;
    }
    console.log(refs.photoId);
  }
  if (event.key === "ArrowLeft") {
    if (refs.photoId === 1) {
      refs.photoId = photos.length;
      refs.originalImageRef.src = document.querySelector(
        `[data-id="${refs.photoId}"]`
      ).dataset.source;
    } else {
      refs.originalImageRef.src = document.querySelector(
        `[data-id="${refs.photoId - 1}"]`
      ).dataset.source;
      refs.photoId--;
    }
    console.log(refs.photoId);
  }
};
