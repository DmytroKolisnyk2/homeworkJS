export const removeModal = (refs) => {
  refs.lightboxRef.classList.remove("is-open");
  refs.closeButtonRef.removeEventListener("click", refs.bindRemoveModal);
  refs.closeAreaRef.removeEventListener("click", refs.bindRemoveModal);
  window.removeEventListener("keydown", refs.bindRemoveModalEsc);
  window.removeEventListener("keydown", refs.bindChangePhoto);
  refs.lightboxBtnRef.forEach(() =>
    removeEventListener("click", refs.bindChangePhoto)
  );
};
export const removeModalEsc = (refs) => {
  if (event.key === "Escape") {
    refs.lightboxRef.classList.remove("is-open");
    refs.closeButtonRef.removeEventListener("click", refs.bindRemoveModal);
    refs.closeAreaRef.removeEventListener("click", refs.bindRemoveModal);
    window.removeEventListener("keydown", refs.bindRemoveModalEsc);
    window.removeEventListener("keydown", refs.bindChangePhoto);
    refs.lightboxBtnRef.forEach(() =>
      removeEventListener("click", refs.bindChangePhoto)
    );
  }
};
export const changePhoto = (refs, photos) => {
  if (event.key === "ArrowRight" || event.target.dataset.action === "right") {
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
  if (event.key === "ArrowLeft" || event.target.dataset.action === "left") {
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
export const drawImage = (photo, refs) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");
  item.classList.add("gallery__item");
  link.classList.add("gallery__link");
  image.classList.add("gallery__image");
  image.setAttribute("data-id", photo.id);
  image.setAttribute("data-source", photo.original);
  link.href = photo.original;
  image.src = photo.preview;
  refs.galleryRef.appendChild(item);
  item.appendChild(link);
  link.appendChild(image);
};
