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
export const changePhoto = (refs) => {
  if (event.key === "ArrowRight") {
    
  }
  if (event.key === "ArrowLeft") {
  }
};
