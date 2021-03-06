import {disableButton} from './modules/form';
import {checkingSize, resizeHandler} from './modules/menu.js';

const noScriptMap = document.querySelector('noscript');
const interactiveMap = document.querySelector('iframe.contacts__map');
const bannerNoscript = document.querySelector('.banner--noscript');

bannerNoscript.classList.remove('banner--noscript');
noScriptMap.classList.add('contacts__map--noscript');
interactiveMap.classList.remove('contacts__map--noscript');
window.addEventListener('resize', resizeHandler);

checkingSize();

disableButton();
