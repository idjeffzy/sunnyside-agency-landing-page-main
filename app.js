let open = document.querySelector('.ham-btn');
let close = document.querySelector('.close-btn');
let menu = document.querySelector('.menu');

open.addEventListener('click', () => {
  open.classList.toggle('hide');
  close.classList.toggle('show');
  menu.classList.toggle('show');
})

close.addEventListener('click', () => {
  open.classList.toggle('hide');
  close.classList.toggle('show');
  menu.classList.toggle('show');
})
