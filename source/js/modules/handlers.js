const body = document.querySelector('.body');
const header = body.querySelector('.header');
const burger = header.querySelector('.navigation__button');
const navigation = header.querySelector('.navigation');
const headerLogo = header.querySelector('.header-logo');

const prevent = (ev) => ev.preventDefault();

const hideMenu = () => {
  body.classList.remove('body--menu-open');
  burger.classList.add('navigation__button--open');
  burger.classList.remove('navigation__button--close');
  navigation.classList.remove('navigation--menu-open');
  navigation.classList.add('navigation--menu-close');
  headerLogo.classList.remove('header-logo--menu-open');
  document.removeEventListener('keydown', keyDownCloseHandler);
  document.removeEventListener('click', clickOuthandler);
  navigation.removeEventListener('click', onClickHideMenuHandler);
};

const onClickHideMenuHandler = (evt) => {
  if (evt.target.classList.contains('navigation__link')) {
    hideMenu();
  }
};

const keyDownCloseHandler = (evt) => {
  if (evt.key === 'Escape') {
    hideMenu();
  }
};

const clickOuthandler = (evt) => {
  evt.stopPropagation();
  if (evt.target === body) {
    hideMenu();
  }
};

export {
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
};
