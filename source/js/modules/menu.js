const header = document.querySelector('.header');
const burger = header.querySelector('.navigation__button');
const navigation = header.querySelector('.navigation');
const headerLogo = header.querySelector('.header-logo');
const body = document.querySelector('.body');

if (navigation.classList.contains('navigation--noscript')) {
  navigation.classList.remove('navigation--noscript');
}

if (navigation.classList.contains('navigation--menu-open')) {
  navigation.classList.remove('navigation--menu-open');
}

if (!navigation.classList.contains('navigation--menu-close')) {
  navigation.classList.add('navigation--menu-close');
}

const hideMenu = () => {
  body.classList.remove('body--menu-open');
  burger.classList.add('navigation__button--open');
  burger.classList.remove('navigation__button--close');
  navigation.classList.remove('navigation--menu-open');
  navigation.classList.add('navigation--menu-close');
  headerLogo.classList.remove('header-logo--menu-open');
};

const showMenu = () => {
  body.classList.add('body--menu-open');
  burger.classList.remove('navigation__button--open');
  burger.classList.add('navigation__button--close');
  navigation.classList.remove('navigation--menu-close');
  navigation.classList.add('navigation--menu-open');
  headerLogo.classList.add('header-logo--menu-open');
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
  toggleMenu
};
