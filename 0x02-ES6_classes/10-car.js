export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Clone the current instance using the spread operator
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
