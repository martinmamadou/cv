const menuBtn = document.querySelector('.nav-container');
const choix = document.querySelector('ul')
const liste = document.getElementsByTagName('li')


menuBtn.addEventListener('click', toggleMenu)
choix.addEventListener('click', toggleMenu)

function toggleMenu(){
  choix.classList.toggle('close')
};