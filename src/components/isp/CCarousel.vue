<template>
  <div>
    <div class="carousel">
      <ul class="slides">
        <input type="radio" name="radio-buttons" id="img-1" checked />
        <li class="slide-container">
          <div class="slide-image">
            <img src="@/assets/mcu1.jpg">
          </div>
          <div class="carousel-controls">
            <label for="img-3" class="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label for="img-2" class="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-2" />
        <li class="slide-container">
          <div class="slide-image">
            <img src="@/assets/mcu2.png">
          </div>
          <div class="carousel-controls">
            <label for="img-1" class="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label for="img-3" class="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-3" />
        <li class="slide-container">
          <div class="slide-image">
            <img src="@/assets/mcu3.png">
          </div>
          <div class="carousel-controls">
            <label for="img-2" class="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label for="img-1" class="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <div class="carousel-dots">
          <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
          <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
          <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
        </div>
      </ul>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'CCarousel',
    data() {
      return {
      }
    }
  }
  </script>
  
  <style scoped>
  ul.slides {
      display: block;
      position: relative;
      height: 400px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      list-style: none;
      border-radius: 20px;
  }
  
  .slides * {
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
  }
  
  ul.slides input {
      display: none; 
  }
  
  .slide-container { 
      display: block; 
  }
  
  .slide-image {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      opacity: 0;
      transition: all .7s ease-in-out;
  }   
  
  .slide-image img {
      width: 100%;
      height: auto;
  }
  
  .carousel-controls {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      z-index: 999;
      font-size: 2rem;
      line-height: 1;
      color: #fff;
      transform: translateY(-50%);
  }
  
  .carousel-controls label {
      display: none;
      position: absolute;
      padding: 0 20px;
      opacity: 0;
      transition: opacity .5s;
      cursor: pointer;
  }
  
  .slide-image:hover + .carousel-controls label{
      opacity: 0.5;
  }
  
  .carousel-controls label:hover {
      opacity: 1;
  }
  
  .carousel-controls .prev-slide {
      width: 49%;
      text-align: left;
      left: 0;
  }
  
  .carousel-controls .next-slide {
      width: 49%;
      text-align: right;
      right: 0;
  }
  
  .carousel-dots {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5px;
      z-index: 999;
      text-align: center;
  }
  
  .carousel-dots .carousel-dot {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.5;
      margin: 10px;
  }
  
  input:checked + .slide-container .slide-image {
      opacity: 1;
      transform: scale(1);
      transition: opacity 1s ease-in-out;
  }
  
  input:checked + .slide-container .carousel-controls label {
       display: block; 
  }
  
  input#img-1:checked ~ .carousel-dots label#img-dot-1,
  input#img-2:checked ~ .carousel-dots label#img-dot-2,
  input#img-3:checked ~ .carousel-dots label#img-dot-3 {
      opacity: 1;
  }
  
  input:checked + .slide-container .nav label { display: block; }
  
  /* Media Queries for Responsive Design */
  @media (max-width: 768px) {
      .carousel-controls {
          font-size: 1.5rem;
      }
  
      .carousel-controls .prev-slide,
      .carousel-controls .next-slide {
          top: 50%;
          transform: translateY(-50%);
      }
  
      .carousel-dots .carousel-dot {
          width: 15px;
          height: 15px;
      }
  }
  
  @media (max-width: 480px) {
      .carousel-controls {
          font-size: 1rem;
      }
  
      .carousel-dots .carousel-dot {
          width: 10px;
          height: 10px;
      }
  }
  </style>