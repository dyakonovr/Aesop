const header = document.querySelector('.header');
const menuBlock = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const noticeBlocks = document.querySelectorAll('.notice');

if (burger && menuBlock && nav) {
  burger.addEventListener('click', function () {
    for (let i = 0; i < noticeBlocks.length; i++) {
      let notice = noticeBlocks[i];
      toggle(notice);
    }
    scrollToggle();
    this.classList.toggle('header__burger--active');
    header.classList.toggle('header--active');
    menuBlock.classList.toggle('header__menu--active');
    nav.classList.toggle('header__nav--active');
  });
}