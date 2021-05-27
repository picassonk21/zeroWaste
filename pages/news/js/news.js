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
    const step = position - activeSlide;
    if (position > activeSlide) {
      slideRight(step);
    } else if (position < activeSlide) {
      slideLeft(step);
    }
  });
});

sliderControlsLeft.addEventListener('click', () => {
  slideLeft(-1);
});

sliderControlsRight.addEventListener('click', () => {
  slideRight(1);
});

function slideLeft(step) {
  activeSlide += step;
  slideDots();
  if (activeSlide === 1) {
    toggleLeftDisabled(true);
    toggleRightDisabled(false);
  } else {
    toggleLeftDisabled(false);
    toggleRightDisabled(false);
  }
  moveSlide(step);
};

function slideRight(step) {
  activeSlide += step;
  slideDots();
  if (activeSlide === 4) {
    toggleLeftDisabled(false);
    toggleRightDisabled(true);
  } else {
    toggleRightDisabled(false);
    toggleLeftDisabled(false);
  }
  moveSlide(step);
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

function moveSlide(step) {
  sliderItems.forEach((item) => {
    const currentPos = +item.getAttribute('data-pos');
    const newPos = currentPos + step;
    item.setAttribute('data-pos', newPos)
  });
};

let currentPage = 1;
const newsSliderList = document.querySelectorAll('.news__slider-item');
const newsSliderPages = document.querySelectorAll('.news__slider-controls__item');
const newsSliderControlsLeft = document.querySelector('.news__slider-controls-left');
const newsSliderControlsLeftImage = document.querySelector('.news__slider-controls-left img');
const newsSliderControlsRight = document.querySelector('.news__slider-controls-right');
const newsSliderControlsRightImage = document.querySelector('.news__slider-controls-right img');

newsSliderPages.forEach((item) => {
  item.addEventListener('click', () => {
    const position = [...newsSliderPages].indexOf(item) + 1;
    const step = position - currentPage;
    if (position > currentPage) {
      newsSlideRight(step);
    } else if (position < currentPage) {
      newsSlideLeft(step);
    }
  });
});

newsSliderControlsLeft.addEventListener('click', () => {
  newsSlideLeft(-1);
});

newsSliderControlsRight.addEventListener('click', () => {
  newsSlideRight(1);
});

function toggleNewsControlsLeftDisabled(isDisabled) {
  newsSliderControlsLeft.classList.toggle('disabled', isDisabled);
  newsSliderControlsLeft.classList.contains('disabled')
    ? newsSliderControlsLeftImage.src = '../../assets/arrow-left.svg'
    : newsSliderControlsLeftImage.src = '../../assets/arrow-left-active.svg';
};

function toggleNewsControlsRightDisabled(isDisabled) {
  
  newsSliderControlsRight.classList.toggle('disabled', isDisabled);
  newsSliderControlsRight.classList.contains('disabled')
    ? newsSliderControlsRightImage.src = '../../assets/arrow-right.svg'
    : newsSliderControlsRightImage.src = '../../assets/arrow-right-active.svg';
};

function newsSlideLeft(step) {
  currentPage += step;
  changeCurrentPage();
  if (currentPage === 1) {
    toggleNewsControlsLeftDisabled(true);
    toggleNewsControlsRightDisabled(false);
  } else {
    toggleNewsControlsLeftDisabled(false);
    toggleNewsControlsRightDisabled(false);
  }
  moveNews(step * 2);
};

function newsSlideRight(step) {
  currentPage += step;
  changeCurrentPage();
  if (currentPage === 4) {
    toggleNewsControlsLeftDisabled(false);
    toggleNewsControlsRightDisabled(true);
  } else {
    toggleNewsControlsRightDisabled(false);
    toggleNewsControlsLeftDisabled(false);
  }
  moveNews(step * 2);
};

function changeCurrentPage() {
  newsSliderPages.forEach((item) => {
    item.classList.remove('active');
  });
  newsSliderPages[currentPage - 1].classList.add('active');
};

function moveNews(step) {
  newsSliderList.forEach((item) => {
    const currentPos = +item.getAttribute('data-pos');
    const newPos = currentPos + step;
    item.setAttribute('data-pos', newPos)
  });
};