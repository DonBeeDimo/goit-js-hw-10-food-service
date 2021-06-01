import './sass/main.scss';
import menu from './menu.json';
import menuCardsTpl from './templates/menu-cards.hbs';

const menuContainer = document.querySelector('.js-menu');

const menuMarkup = menuCardsTpl(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);


const bodyEl = document.querySelector('body');
const switchEl = document.querySelector('#theme-switch-toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  bodyEl.addEventListener('change', onСlassList);
  switchEl.addEventListener('change', onLocalStorage);

  function onСlassList(evt) {
    const checkStatus = switchEl.checked;
    
    if (checkStatus) {
      bodyEl.classList.add(Theme.DARK);
      bodyEl.classList.remove(Theme.LIGHT)
    } else {
      bodyEl.classList.add(Theme.LIGHT);
      bodyEl.classList.remove(Theme.DARK);
    }
  }

  function onLocalStorage(evt) {
    const checkStatus = switchEl.checked;

    if (checkStatus) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }

const themeInLocalSt = localStorage.getItem('theme');

  if (themeInLocalSt === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    switchEl.checked = true;
  } else {
  bodyEl.classList.add(Theme.LIGHT);
  }