class Rectangle {
  // class
  constructor(width, height, color) {
    //constructor -> runs automatically when object created
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    //methods
    return this.width * this.height;
  }
  paint() {
    console.log("the colour of Rectangle", this.color);
  }
}

const rect = new Rectangle(3, 77, "green"); //obj
console.log(rect.area()); // calling obj method
rect.paint();
console.log(Rectangle.prototype);
console.log(Object.getOwnPropertyNames(rect.__proto__));
