const body = document.querySelector('.body');
const header = body.querySelector('.header');
const burger = header.querySelector('.navigation__button');
const navigation = header.querySelector('.navigation');
const headerLogo = header.querySelector('.header-logo');


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

const prevent = (ev) => ev.preventDefault();

const resizeHandler = () => {
  if (document.documentElement.clientWidth > MOBILEVIEWPORT) {
    document.removeEventListener('wheel', prevent);
    document.removeEventListener('wheel', prevent, {passive: false});
    document.removeEventListener('touchmove', prevent, {passive: false});
  }
};

const hideMenu = () => {
  body.classList.remove('body--menu-open');
  burger.classList.add('navigation__button--open');
  burger.classList.remove('navigation__button--close');
  navigation.classList.remove('navigation--menu-open');
  navigation.classList.add('navigation--menu-close');
  headerLogo.classList.remove('header-logo--menu-open');
  document.removeEventListener('wheel', prevent);
  document.removeEventListener('touchmove', prevent, {passive: false});
};

const showMenu = () => {
  body.classList.add('body--menu-open');
  burger.classList.remove('navigation__button--open');
  burger.classList.add('navigation__button--close');
  navigation.classList.remove('navigation--menu-close');
  navigation.classList.add('navigation--menu-open');
  headerLogo.classList.add('header-logo--menu-open');
  document.addEventListener('wheel', prevent, {passive: false});
  document.addEventListener('touchmove', prevent, {passive: false});
};

const menuToggler = () => {
  if (burger.classList.contains('navigation__button--open')) {
    showMenu();
  } else {
    hideMenu();
  }
};

const onClickHideMenuHandler = (evt) => {
  if (evt.target.classList.contains('navigation__link') | evt.target === burger) {
    menuToggler();
  }
};
const toggleMenu = () => {
  navigation.addEventListener('click', onClickHideMenuHandler);
};

export {
  toggleMenu,
  resizeHandler
};
