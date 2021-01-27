"'use strict'";
const radius = document.getElementById('radius-peri');
const squareLenght = document.getElementById('sqr-lenght');
const rectangleLenght = document.getElementById('rec-lenght');
const rectangleWidth = document.getElementById('rec-width');
const cylinderRadius = document.getElementById('cyl-radius');
const cylinderHeight = document.getElementById('cyl-height');
const para = document.getElementById('para');
const paraSquare = document.getElementById('para-square');
const paraRectangle = document.getElementById('para-rec');
const paraCylinder = document.getElementById('para-cyl');
const calc = document.querySelector('.calc');
const calcSquare = document.querySelector('.calc-square');
const calcRec = document.querySelector('.calc-rec');
const calcCylinder = document.querySelector('.calc-cylinder');

// Perimeter of a Circle

function circumference(radius) {
  let result = 2 * 3.1415926535 * radius;
  para.innerHTML = `<h1>${result}</h1>`;
}

calc.addEventListener('click', e => {
  e.preventDefault();

   circumference(radius.value);
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


//Perimeter of a Cylinder
function cylinderPerimeter(rad, height, pi = 3.1415926535) {
  let result = 2 * pi * rad * height;
  paraCylinder.innerHTML = `<h1> ${result}</h1>`;
}

calcCylinder.addEventListener('click', e => {
  e.preventDefault();

// console.log(paraCylinder)
  cylinderPerimeter(cylinderRadius.value, cylinderHeight.value);
});
