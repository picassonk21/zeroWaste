const aboutMenuItemList = document.querySelectorAll('.about__menu-item');
const aboutImage = document.querySelector('.about__image img');

aboutMenuItemList.forEach((item) => {
  item.addEventListener('click', () => {
    aboutMenuItemList.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    const pos = item.getAttribute('data-pos');
    aboutImage.src = `../../assets/action${pos}.jpg`;
  });
});