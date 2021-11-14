let scrollW = getScrollbarWidth();

function disableScroll() {
  let e = window.scrollY;
  document.body.classList.add("disable-scroll");
  document.body.dataset.position = e;
  document.body.style.top = -e + "px";
  document.body.style.paddingRight = scrollW + 'px';
}

function enableScroll() {
  let e = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto";
  document.body.classList.remove("disable-scroll");
  document.body.style.paddingRight = 0;
  window.scroll({
    top: e,
    left: 0
  });
  document.body.removeAttribute("data-position");
}

function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

function scrollToggle() {
  if (document.body.classList.contains('disable-scroll')) {
    enableScroll();
  } else {
    disableScroll();
  }
}

function toggle(el) {
  el.style.display = (el.style.display == 'none') ? 'block' : 'none'
}