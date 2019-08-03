// c.f. https://github.com/FezVrasta/popper.js#how-to-use-popperjs-in-jest

/* tslint:disable */
import PopperJs from 'popper.js'

export default class Popper {
  static placements = PopperJs.placements

  constructor() {
    return {
      destroy: () => {},
      scheduleUpdate: () => {},
    }
  }
}
