import {disabledButton} from './modules/form';
import {toggleMenu} from './modules/menu.js';

const nosscriptMap = document.querySelector('noscript');
const interactiveMap = document.querySelector('iframe.contacts__map');

nosscriptMap.classList.add('contacts__map--noscript');
interactiveMap.classList.remove('contacts__map--noscript');


toggleMenu();
disabledButton();
