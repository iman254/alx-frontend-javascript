import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft)
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
        throw new TypeError('floors must me a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  get floors () {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
