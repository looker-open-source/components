import { stringToSimpleHsv } from './stringToSimpleHsv';
describe('stringToSimpleHsv', () => {
  describe('red', () => {
    test('converts hex to hsv', () => {
      const {
        h,
        s,
        v
      } = stringToSimpleHsv('#FF0000');
      expect(h).toBe(0);
      expect(s).toBe(1);
      expect(v).toBe(1);
    });
    test('converts color name to hsv', () => {
      const {
        h,
        s,
        v
      } = stringToSimpleHsv('red');
      expect(h).toBe(0);
      expect(s).toBe(1);
      expect(v).toBe(1);
    });
  });
  describe('hueless and saturationless colors', () => {
    test('returns object with h = 0 and s = 0 when using "black"', () => {
      const {
        h,
        s,
        v
      } = stringToSimpleHsv('black');
      expect(h).toBe(0);
      expect(s).toBe(0);
      expect(v).toBe(0);
    });
    test('returns object with h = 0 when using "white"', () => {
      const {
        h,
        s,
        v
      } = stringToSimpleHsv('white');
      expect(h).toBe(0);
      expect(s).toBe(0);
      expect(v).toBe(1);
    });
    test('returns object with h = 0 when using "grey"', () => {
      const {
        h,
        s,
        v
      } = stringToSimpleHsv('grey');
      expect(h).toBe(0);
      expect(s).toBe(0);
      expect(v).toBe(0.5019607843137255);
    });
  });
});
//# sourceMappingURL=stringToSimpleHsv.spec.js.map