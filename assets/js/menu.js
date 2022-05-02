const icon = document.querySelector('.nav_menu');
const menu = document.querySelector('.nav_links');
const lang = document.querySelector('.nav_lang');

icon.addEventListener('click', () => {
  menu.classList.toggle('open');
  lang.classList.toggle('open');
  icon.classList.toggle('open');
});
