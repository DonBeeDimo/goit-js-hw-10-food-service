import './sass/main.scss';
import menu from './menu.json';
import menuCardsTpl from './templates/menu-cards.hbs';

const menuContainer = document.querySelector('.js-menu');

const menuMarkup = menuCardsTpl(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
