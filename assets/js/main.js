/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let prevIndicator = null;
let container = null;

function initContainer() {
  wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'carousel');
  wrapper.setAttribute('class', 'carousel');

  document.querySelector('body').appendChild(wrapper);
}

function initSlides(slidesCount) {
  slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');

  
  for (let i = 0; i < slidesCount; i++) {
    let link = document.createElement('a');
    link.setAttribute('href', '#');

    let slide = document.createElement('li');
    slide.appendChild(link);
    slide.setAttribute('class', 'slides__item');
    
      if (i === 0) slide.classList.add('active');
      slides.appendChild(slide);
    }
  
    container.appendChild(slides);

  };

  function initIdicators(slidesCount) {
    indicators = document.createElement('div');
    indicators.setAttribute('class', 'indicators');
    
    for (let i = 0; i < slidesCount; i++) {
      let indicator = document.createElement('span');
  
      indicator.setAttribute('class', 'indicators__item');
  
      if (i === 0) indicator.classList.add('active');
  
      indicator.dataset.slideTo = `${i}`;
      indicators.appendChild(indicator);
  }
  
  container.appendChild(indicators);

  };

  function initControls() {
    const FA_PREV = '<i class="fas fa-chevron-left"></i>';
    const FA_NEXT = '<i class="fas fa-chevron-right"></i>';
    const FA_PAUSE  = '<i class="fas fa-play"></i>';

    controls = document.createElement('div');
    controls.setAttribute('class', 'controls');
    
    
    const PREV = `<div  class="controls__item controls__prev">${FA_PREV}</div>`;
    const NEXT = `<div  class="controls__item controls__next">${FA_NEXT}</div>`;
    const PAUSE = `<div  class="controls__item controls__pause">${FA_PAUSE}</div>`;
    
    
    controls.innerHTML = PREV + NEXT + PAUSE;
    
    container.appendChild(controls);    
    };

    function initStyle() {
        slideStyle = document.createElement('style');
    
        slideStyle.innerHTML = `
        * {
            box-sizing: border-box;
        },
        
        body {
            margin: 0;
        }
    
        .slides {
          position: relative;
          height: 150px;
          margin-bottom: 20px;
          background-color: brown;
          list-style: none;
      }
    
      .indicators {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
    
        >li {
            margin-right: 5px;
            margin-bottom: 5px;
        }
    }
    
    .controls {
      position: relative;
      display: inline-block;
      justify-content: center;
    }
    
    .indicators__item,
    .controls__item
     {
        margin-right: 15px;
        display: inline-block;
        padding: 10px 20px;
        background-color: gray;
        cursor: pointer;
        user-select: none;
        height: 20px;
        width: 20px;
    }`;
    
    container.appendChild(slideStyle);
    
    };

    function indHandler (e) {
      let target = e.target;
      
      if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';

      if (prevIndicator !== null) prevIndicator.removeAttribute('style');

      prevIndicator = target;
      };
    };
    
    function initIndListeners() {
        let indicatorsContainer = document.querySelector('div.indicators');
      
        indicatorsContainer.addEventListener('click', indHandler);
    };


function createCarousel(slidesCount = 5) {

  container = document.querySelector('#carousel');

  initSlides(slidesCount);
  initIdicators(slidesCount);
  initControls();
  initStyle();
  initIndListeners();
};

  createCarousel(4);
