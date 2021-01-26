"'use strict'";
const radius = document.getElementById('radius-peri');
const squareLenght = document.getElementById('sqr-lenght');
const rectangleLenght = document.getElementById('rec-lenght');
const rectangleWidth = document.getElementById('rec-width');
const para = document.getElementById('para');
const paraSquare = document.getElementById('para-square');
const paraRectangle = document.getElementById('para-rec');
const calc = document.querySelector('.calc');
const calcSquare = document.querySelector('.calc-square');
const calcRec = document.querySelector('.calc-rec');

// Perimeter of a Circle

// function circumference(rad, pi = 3.1415926535) {
//   let result = 2 * pi * rad;
//   para.innerHTML = `<h1> ${result}</h1>`;
// }

calc.addEventListener('click', e => {
  e.preventDefault();
  let circle1 = new circle(radius);
  let result = circle1.circumference();
  paraSquare.innerHTML = `<h1>${result}</h1>`;

  

  // circumference(radius.value);
});

// Perimeter of a square

function squarePerimeter(lenght) {
  let result = 4 * lenght;
  paraSquare.innerHTML = `<h1>${result}</h1>`;
}

calcSquare.addEventListener('click', e => {
  e.preventDefault();

  squarePerimeter(squareLenght.value);
});


// Perimeter of a rectangle

function rectanglePerimeter(lenght, width) {
  let result = (Number(lenght) + Number(width)) * 2;
  paraRectangle.innerHTML = `<h1> ${result}</h1>`;
}

calcRec.addEventListener('click', e => {
  e.preventDefault();

  rectanglePerimeter(rectangleLenght.value, rectangleWidth.value);
});

