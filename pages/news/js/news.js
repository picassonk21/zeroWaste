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
    const difference = position - activeSlide;
    if (position > activeSlide) {
      slideRight(difference);
    } else if (position < activeSlide) {
      slideLeft(difference);
    }
  });
});

sliderControlsLeft.addEventListener('click', () => {
  slideLeft(-1);
});

sliderControlsRight.addEventListener('click', () => {
  slideRight(1);
});

function slideLeft(difference) {
  activeSlide += difference;
  slideDots();
  if (activeSlide === 1) {
    toggleLeftDisabled(true);
    toggleRightDisabled(false);
  } else {
    toggleLeftDisabled(false);
    toggleRightDisabled(false);
  }
  moveSlide(true, difference);
  console.log(activeSlide);
};

function slideRight(difference) {
  activeSlide += difference;
  slideDots();
  if (activeSlide === 4) {
    toggleLeftDisabled(false);
    toggleRightDisabled(true);
  } else {
    toggleRightDisabled(false);
    toggleLeftDisabled(false);
  }
  moveSlide(false, difference);
  console.log(activeSlide);
};

function toggleRightDisabled(isDisabled) {
  sliderControlsRight.classList.toggle('disabled', isDisabled);
  sliderControlsRight.classList.contains('disabled')
    ? sliderControlsRightImage.src = '../../assets/arrow-right.svg'
    : sliderControlsRightImage.src = '../../assets/arrow-right-active.svg';
};

function toggleLeftDisabled(isDisabled) {
  sliderControlsLeft.classList.toggle('disabled', isDisabled);
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

function moveSlide(isLeft = true, difference) {
  sliderItems.forEach((item) => {
    const currentPos = +item.getAttribute('data-pos');
    const newPos = currentPos + difference;
    item.setAttribute('data-pos', newPos)
  });
};