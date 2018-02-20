let toggle = document.querySelector('[name=toggle]');
let navigation = document.querySelector('.navigation');

toggle.addEventListener('click',
  () => {
    navigation.classList.toggle('d-none')
  }
);
