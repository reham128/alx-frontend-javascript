export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static get evictionWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
