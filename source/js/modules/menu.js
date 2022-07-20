import {
  body,
  header,
  burger,
  navigation,
  headerLogo,
  hideMenu,
  prevent,
  keyDownCloseHandler,
  clickOuthandler,
  onClickHideMenuHandler
} from './handlers.js';
const MOBILEVIEWPORT = 768;


if (navigation.classList.contains('navigation--noscript')) {
  navigation.classList.remove('navigation--noscript');
}

if (header.classList.contains('header--noscript')) {
  header.classList.remove('header--noscript');
}

if (navigation.classList.contains('navigation--menu-open')) {
  navigation.classList.remove('navigation--menu-open');
}

if (!navigation.classList.contains('navigation--menu-close')) {
  navigation.classList.add('navigation--menu-close');
}

const showMenu = () => {
  body.classList.add('body--menu-open');
  burger.classList.remove('navigation__button--open');
  burger.classList.add('navigation__button--close');
  navigation.classList.remove('navigation--menu-close');
  navigation.classList.add('navigation--menu-open');
  headerLogo.classList.add('header-logo--menu-open');
  document.addEventListener('wheel', prevent, {passive: false});
  document.addEventListener('touchmove', prevent, {passive: false});
  document.addEventListener('keydown', keyDownCloseHandler);
  document.addEventListener('click', clickOuthandler);
  navigation.addEventListener('click', onClickHideMenuHandler);
};

const toggleMenuHandler = () => {
  if (burger.classList.contains('navigation__button--open')) {
    showMenu();
  } else {
    hideMenu();
  }
};

const clickOnBurger = () => {
  burger.addEventListener('click', toggleMenuHandler);
};


const resizeHandler = () => {
  if (document.documentElement.clientWidth >= MOBILEVIEWPORT) {
    hideMenu();
    burger.removeEventListener('click', toggleMenuHandler);
  } else {
    clickOnBurger();
  }
};


const checkingSize = () => {
  if (document.documentElement.clientWidth < MOBILEVIEWPORT) {
    clickOnBurger();
  }
};

export {
  checkingSize,
  resizeHandler
};
