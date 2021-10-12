import cardsTpl from './tamplates/cards.hbs';
import menu from './js/menu.json';
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.body,
  menu: document.querySelector('.menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const cards = crieateCards(menu);

refs.menu.insertAdjacentHTML('afterbegin', cards);

if (!localStorage.getItem('theme')) {
  refs.body.classList.add(Theme.LIGHT);
} else {
  refs.body.classList.add(localStorage.getItem('theme'));
}

if (localStorage.getItem('checked')) {
  refs.checkbox.setAttribute('checked', true);
}

refs.checkbox.addEventListener('change', switchTheme);

function crieateCards() {
  return cardsTpl(menu);
}

function switchTheme(e) {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('checked', true);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    refs.checkbox.removeAttribute('checked');
    localStorage.removeItem('checked');
  }
}
