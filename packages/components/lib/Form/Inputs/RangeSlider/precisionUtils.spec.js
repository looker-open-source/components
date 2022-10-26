import { getPrecision, precisionRound } from './precisionUtils';
describe('getPrecision', () => {
  test('Calculate precision', () => {
    expect(getPrecision(0.1)).toEqual(1);
    expect(getPrecision(0.001)).toEqual(3);
    expect(getPrecision(1)).toEqual(0);
    expect(getPrecision(100.1)).toEqual(1);
    expect(getPrecision(NaN)).toEqual(0);
    expect(getPrecision(Infinity)).toEqual(0);
  });
});
describe('precisionRound', () => {
  test('Round to a specified precision', () => {
    expect(precisionRound(0.1 + 0.2, 2)).toEqual(0.3);
    expect(precisionRound(1.123456, 2)).toEqual(1.12);
    expect(precisionRound(0.1 + 0.2, 0)).toEqual(0);
  });
});
//# sourceMappingURL=precisionUtils.spec.js.map