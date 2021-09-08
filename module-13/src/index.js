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
  text: 'Type your query to find photos in Pixabay',
  delay: 1500
});

const app = {
  page: 1,

  searchPhoto() {
    this.page = 1;
    this.blocked = true;
    observeRef.classList.add('observe--hidden');
    apiRequest(inputRef.value, this.page)
      .then(({ data }) => {
        galleryRef.innerHTML = cardTmpl(data.hits);
        if (data.hits.length === 0) {
          error({ text: 'Query not found', delay: 700 });
          return;
        };
        this.restartObserver();
      })
      .catch(() => error({ text: 'Oops something went wrong', delay: 1000 }));
  },
  
  updatePhotos() {
    if (this.page === 1 || this.blocked) return;
    observeRef.classList.add('observe--hidden');
    this.blocked = true;
    this.last = galleryRef.lastElementChild;
    apiRequest(inputRef.value, this.page)
      .then(({ data }) => {
        if (data.hits.length === 0) {
          info({ text: "That's the end", delay: 900 });
          return;
        }
        galleryRef.insertAdjacentHTML('beforeend', cardTmpl(data.hits));
        this.last.nextElementSibling.lastElementChild.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
        this.restartObserver();
      })
      .catch(() => error({ text: 'Oops something went wrong', delay: 1000 }));
  },

  restartObserver() {
    observeRef.classList.remove('observe--hidden');
    setTimeout(() => this.blocked = false, 500);
    this.page++
  }
}


const openImg = (event) => {
  if (!event.target.classList.contains('card__photo')) return;
  basicLightbox.create(`
		<img height="${event.target.dataset.height}" width="${event.target.dataset.width}" src="${event.target.dataset.src}" alt="${event.target.alt}">
	`).show()
};

galleryRef.addEventListener('click', openImg);
inputRef.addEventListener('input', debounce(() => app.searchPhoto.apply(app), 500));

const observer = new IntersectionObserver(app.updatePhotos.bind(app));
observer.observe(observeRef);