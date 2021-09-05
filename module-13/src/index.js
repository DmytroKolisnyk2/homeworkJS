import './sass/main.scss';
import 'material-design-icons/iconfont/material-icons.css';
import debounce from 'lodash.debounce';
import cardTmpl from './templates/card.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css'
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { apiRequest } from './js/apiService';

const inputRef = document.querySelector('#search-form').elements.query;
const galleryRef = document.querySelector('.gallery');
const observeRef = document.querySelector('#observe');

info({
  text: 'Type your query to find photos',
  delay: 1000
});

const app = {
  page: 1,
  searchPhoto() {
    console.log(this.page);
    apiRequest(inputRef.value, 1)
      .then(({ data }) => {
        if (data.hits.length === 0) error({ text: 'Query not found', delay: 500 });
        galleryRef.innerHTML = cardTmpl(data.hits);
        this.page = 2;
      })
      .catch(() => error({ text: 'Oops something went wrong', delay: 1000 }));
  },
  updatePhotos() {
    console.log(this.page);
    apiRequest(inputRef.value, this.page)
      .then(({ data }) => {
        if (data.hits.length === 0) info({ text: "That's the end", delay: 700 });
        galleryRef.insertAdjacentHTML('beforeend', cardTmpl(data.hits));
      })
      .catch(() => error({ text: 'Oops something went wrong', delay: 1000 }));
    this.page++;
  }
}


const openImg = (event) => {
  if (!event.target.classList.contains('card__photo')) return;
  basicLightbox.create(`
		<img height="${event.target.dataset.height}" width="${event.target.dataset.width}" src="${event.target.dataset.src}" alt="${event.target.alt}">
	`).show()
};

document.querySelector('.update').addEventListener('click', () => app.updatePhotos.apply(app));
galleryRef.addEventListener('click', openImg);
inputRef.addEventListener('input', debounce(() => app.searchPhoto.apply(app), 500));

// const observer = new IntersectionObserver(updatePhoto);
