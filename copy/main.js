const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', menuBtnClicked)
function menuBtnClicked(){
  menu.classList.toggle('menu-open');
}