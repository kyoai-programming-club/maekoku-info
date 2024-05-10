'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mask = document.querySelector('.header-mask');

  open.addEventListener('click', () => {
    mask.classList.add('mask-open');
  });

  close.addEventListener('click', () => {
    mask.classList.remove('mask-open');
  });

  // エンジョイカルーセル
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.enjoy-cal ul');
  const slides = ul.children;
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('enjoy-hidden');
    next.classList.remove('enjoy-hidden');

    if (currentIndex === 0) {
      prev.classList.add('enjoy-hidden')
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('enjoy-hidden')
    }
  }

  updateButtons();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    const sliderWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * sliderWidth * currentIndex}px)`;
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    const sliderWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * sliderWidth * currentIndex}px)`;
  });

  window.addEventListener('resize', () => {
    sliderWidth = slides[0].getBoundingClientRect().width;
  });
}