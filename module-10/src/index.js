import './sass/main.scss';
import cardTemplate from './templates/card.hbs';
import menu from './menu.json';
const menuRef = document.querySelector('.js-menu');
menuRef.innerHTML = cardTemplate(menu);
const checkboxRef = document.querySelector('#theme-switch-toggle');
document.body.classList.add(`${localStorage.getItem('user-theme') || 'light-theme'}`);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('user-theme') === Theme.DARK) checkboxRef.checked = true;

checkboxRef.addEventListener('input', (event) => {
  if (event.currentTarget.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('user-theme', Theme.DARK);
  }
  else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('user-theme', Theme.LIGHT);
  }
}
);