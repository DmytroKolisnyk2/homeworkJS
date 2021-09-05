import './sass/main.scss';
import cardTemplate from './templates/card.hbs';
import searchTemplate from './templates/search.hbs';
const debounce = require('lodash.debounce');
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import axios from 'axios';

const containerRef = document.querySelector('.container');
const inputRef = document.querySelector('.input');
const URL = 'https://restcountries.eu/rest/v2';
const searchCountry = (event) => {
  if (!event.target.value) return;
  axios.get(`${URL}/name/${event.target.value}?fields=name;capital;flag;languages;population`)
    // .then((data) => data.json())
    // .then((data) => console.log(data)) 
    .then(
      ({data}) => {
        if (data.length >= 10) {
          error({
            text: 'Too many matches found. Please enter a more specific query!',
            delay: 1000
          })
          containerRef.innerHTML = '';
        };
        if (1 < data.length && data.length <= 10) {
          containerRef.innerHTML = searchTemplate(data);
          containerRef.addEventListener('click', (ev) => {
            if (!ev.target.classList.contains('search__item')) return;
            inputRef.value = ev.target.textContent;
            containerRef.innerHTML = cardTemplate(data.find(country => country.name === ev.target.textContent));
          });
        };
        if (data.length === 1) containerRef.innerHTML = cardTemplate(...data);
      })
    .catch(() => error({
      text: 'Query not found',
      delay: 500
    }))
};
inputRef.addEventListener('input', debounce(searchCountry, 500));