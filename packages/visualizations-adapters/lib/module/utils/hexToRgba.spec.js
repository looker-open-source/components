
import { hexToRgba } from './hexToRgba';
describe('hexToRgba', () => {
  test('converts hex code to rgba equivalent', () => {
    expect(hexToRgba('#ffffff', 1)).toEqual('rgba(255, 255, 255, 1)');
    expect(hexToRgba('#000000', 0.1)).toEqual('rgba(0, 0, 0, 0.1)');
  });
  test('handles 3-digit hex colors without the preceeding # symbol', () => {
    expect(hexToRgba('fff', 0.5)).toEqual('rgba(255, 255, 255, 0.5)');
  });
  test('throws error when invalid arguments are supplied', () => {
    expect(() => {
      hexToRgba('not-a-hex-code', 1);
    }).toThrow();
    expect(() => {
      hexToRgba('FFFFFF', 1000);
    }).toThrow();
  });
});
//# sourceMappingURL=hexToRgba.spec.js.map