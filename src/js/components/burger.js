const burger = document.querySelector('.header__burger');

if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('header__burger--active')
  });
}