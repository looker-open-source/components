import range from 'lodash/range';
import { isValidColor } from './isValidColor';
describe('isValidColor', () => {
  const testColor = pred => color => {
    test(`${color}`, () => {
      expect(isValidColor(color)).toBe(pred);
    });
  };

  const rand = num => Math.floor(Math.random() * num);

  const randChar = str => str[rand(str.length)];

  const randString = (chars, size) => '#'.concat(range(size).map(() => randChar(chars)).join(''));

  describe('Valid CSS word colors', () => {
    ;
    ['red', 'green', 'papayawhip', 'white', 'aqua', 'ivory', 'cadetblue', 'thistle', 'yellow', 'olive', 'snow'].forEach(testColor(true));
  });
  describe('Invalid CSS word colors', () => {
    ;
    ['Lipstickred', 'applegreen', 'papayawhipsmoothie', 'offwhite', 'aquaman', 'ivorytower', 'armygreen', 'thistleandweeds', 'yellowbanana', 'oliveoil', 'snowwhite'].forEach(testColor(false));
  });
  describe('Valid 3 string RGB colors', () => {
    range(20).map(() => randString('0123456789ABCDEF', 3)).map(testColor(true));
  });
  describe('Invalid 3 string RGB colors', () => {
    range(20).map(() => randString('GHIJKLMNOPpo_+!&^%$', 3)).map(testColor(false));
  });
  describe('Valid 6 string RGB colors', () => {
    range(20).map(() => randString('0123456789ABCDEF', 6)).map(testColor(true));
  });
  describe('Invalid 6 string RGB colors', () => {
    range(20).map(() => randString('GHIJKLMNOPpo_+!&^%$', 6)).map(testColor(false));
  });
});
//# sourceMappingURL=isValidColor.spec.js.map