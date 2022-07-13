const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.navigation__button');
const navigation = header.querySelector('.navigation');
const headerLogo = header.querySelector('.header__logo');

if (navigation.classList.contains('navigation--noscript')) {
  navigation.classList.remove('navigation--noscript');
}

if (navigation.classList.contains('navigation--menu-open')) {
  navigation.classList.remove('navigation--menu-open');
}

if (!navigation.classList.contains('navigation--menu-close')) {
  navigation.classList.add('navigation--menu-close');
}

const togleMenuHandler = (evt) => {
  evt.preventDefault();
  if (burgerBtn.classList.contains('navigation__button--open')) {
    burgerBtn.classList.remove('navigation__button--open');
    burgerBtn.classList.add('navigation__button--close');
    navigation.classList.remove('navigation--menu-close');
    navigation.classList.add('navigation--menu-open');
    headerLogo.classList.add('header__logo--menu-open');
  } else {
    burgerBtn.classList.add('navigation__button--open');
    burgerBtn.classList.remove('navigation__button--close');
    navigation.classList.remove('navigation--menu-open');
    navigation.classList.add('navigation--menu-close');
    headerLogo.classList.remove('header__logo--menu-open');
  }
};

burgerBtn.addEventListener('click', togleMenuHandler);
