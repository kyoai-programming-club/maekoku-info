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
}