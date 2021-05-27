const aboutMenuItemList = document.querySelectorAll('.about__menu-item');
const aboutImage = document.querySelector('.about__image img');

aboutMenuItemList.forEach((item) => {
  item.addEventListener('click', (e) => {
    aboutMenuItemList.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    const pos = item.getAttribute('data-pos');
    aboutImage.src = `./assets/about${pos}.jpg`;
  });
});

const sliderList = document.querySelectorAll('.intro__slider-item');
const sliderContentList = document.querySelectorAll('.intro__slider-item__content');
sliderList.forEach((item) => {
  item.addEventListener('click', () => {
    hideSliderContent([...sliderList].indexOf(item));  
  });
});

function hideSliderContent(activePos) {
  sliderContentList.forEach((item) => {
    const pos = [...sliderContentList].indexOf(item);
    item.classList.toggle('hidden', pos !== activePos);
    if (activePos === 0) {
      sliderList.forEach((item) => {
        item.style.transform = 'translateX(0)';
      });
    } else if (activePos === 1) {
      sliderList[1].style.transform = 'translateX(-280px)';
      sliderList[2].style.transform = 'translateX(0)';
    } else if (activePos === 2) {
      sliderList[1].style.transform = 'translateX(-280px)';
      sliderList[2].style.transform = 'translateX(-280px)';
    }
  });
};