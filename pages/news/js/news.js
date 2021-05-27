const yearsList = document.querySelectorAll('.calendar__years-item');
yearsList.forEach((item) => {
  item.addEventListener('click', () => {
    yearsList.forEach((item) => {
      item.classList.remove('selected');
    });
    item.classList.add('selected');
  });
});

let activeSlide = 1;
const sliderControlsLeft = document.querySelector('.slider__controls-left');
const sliderControlsLeftImage = document.querySelector('.slider__controls-left img');
const sliderControlsRight = document.querySelector('.slider__controls-right');
const sliderControlsRightImage = document.querySelector('.slider__controls-right img');
const sliderDots = document.querySelectorAll('.slider__dots-item');
const sliderItems = document.querySelectorAll('.slider__item');

sliderDots.forEach((item) => {
  item.addEventListener('click', () => {
    const position = [...sliderDots].indexOf(item) + 1;
    if (position > activeSlide) {
      slideRight();
    } else if (position < activeSlide) {
      slideLeft();
    }
  });
});

sliderControlsLeft.addEventListener('click', () => {
  slideLeft();
  console.log(activeSlide);
});

sliderControlsRight.addEventListener('click', () => {
  slideRight();
  console.log(activeSlide);
});

function slideLeft() {
  activeSlide -= 1;
  slideDots();
  if (activeSlide === 1) {
    toggleLeftDisabled();
  } else if (activeSlide === 3) {
    toggleRightDisabled();
  }
  moveSlide();
};

function slideRight() {
  activeSlide += 1;
  slideDots();
  if (activeSlide === 2) {
    toggleLeftDisabled();
  } else if (activeSlide === 4) {
    toggleRightDisabled();
  }
  moveSlide(false);
};

function toggleRightDisabled() {
  sliderControlsRight.classList.toggle('disabled');
  sliderControlsRight.classList.contains('disabled')
    ? sliderControlsRightImage.src = '../../assets/arrow-right.svg'
    : sliderControlsRightImage.src = '../../assets/arrow-right-active.svg';
};

function toggleLeftDisabled() {
  sliderControlsLeft.classList.toggle('disabled');
  sliderControlsLeft.classList.contains('disabled')
    ? sliderControlsLeftImage.src = '../../assets/arrow-left.svg'
    : sliderControlsLeftImage.src = '../../assets/arrow-left-active.svg';
};

function slideDots() {
  sliderDots.forEach((item) => {
    item.classList.remove('active');
  });
  sliderDots[activeSlide - 1].classList.add('active');
};

function moveSlide(isLeft = true) {
  const difference = isLeft ? -1 : 1;
  sliderItems.forEach((item) => {
    const currentPos = +item.getAttribute('data-pos');
    const newPos = currentPos + difference;
    item.setAttribute('data-pos', newPos)
  });
};