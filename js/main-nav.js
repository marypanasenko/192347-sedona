var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggler');

navMain.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--opened')) {
    navMain.classList.remove('main-nav__list--opened');
    navMain.classList.add('main-nav__list--closed');
  } else {
    navMain.classList.add('main-nav__list--opened');
    navMain.classList.remove('main-nav__list--closed');
  }
});

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggler--opened')) {
    navToggle.classList.remove('main-nav__toggler--opened');
    navToggle.classList.add('main-nav__toggler--closed');
  } else {
    navToggle.classList.add('main-nav__toggler--opened');
    navToggle.classList.remove('main-nav__toggler--closed');
  }
});
