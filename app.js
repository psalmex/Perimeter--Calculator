
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  circumference() {
    let result = 2 * 3.1415926535 * this.radius;
    return result;
  }
}

let circle1 = new circle(radius);
let result =circle1.circumference();

class Square {
  constructor(lenght) {
    this.lenght = lenght;
  }

  squarePerimeter() {
    let result = 4 * this.lenght;
    return result;
  }
}

class Rectangle {
  constructor(lenght, width) {
    this.lenght = lenght;
    this.width = width;
  }
  rectanglePerimeter() {
    let result = (this.lenght + this.width) * 2;
    return result;
  }
}

class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  cylinderPerimeter() {
    let result = 2 * 3.1415926535 * this.radius * this.height;
    return result;
  }
}


