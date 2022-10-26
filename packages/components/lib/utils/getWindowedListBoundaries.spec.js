import { getWindowedListBoundaries } from './getWindowedListBoundaries';
describe('getWindowedListBoundaries', () => {
  test('returns entire length if enabled is false', () => {
    const result = getWindowedListBoundaries({
      enabled: false,
      height: 446,
      itemCount: 129,
      itemHeight: 57,
      scrollPosition: 0
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(128);
  });
  test('returns 0 0 if height and scrollPosition are missing', () => {
    const result = getWindowedListBoundaries({
      itemCount: 98,
      itemHeight: 31
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(0);
  });
  test('top of list', () => {
    const result = getWindowedListBoundaries({
      height: 1002,
      itemCount: 873,
      itemHeight: 16,
      scrollPosition: 0
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(68);
  });
  test('middle of list', () => {
    const result = getWindowedListBoundaries({
      height: 775,
      itemCount: 1109,
      itemHeight: 26,
      scrollPosition: 922
    });
    expect(result.start).toEqual(30);
    expect(result.end).toEqual(71);
  });
  test('end of list', () => {
    const result = getWindowedListBoundaries({
      height: 300,
      itemCount: 50,
      itemHeight: 30,
      scrollPosition: 1200
    });
    expect(result.start).toEqual(35);
    expect(result.end).toEqual(49);
  });
  test('top of list (custom buffer)', () => {
    const result = getWindowedListBoundaries({
      buffer: 11,
      height: 1002,
      itemCount: 873,
      itemHeight: 16,
      scrollPosition: 0
    });
    expect(result.start).toEqual(0);
    expect(result.end).toEqual(74);
  });
  test('middle of list (custom buffer)', () => {
    const result = getWindowedListBoundaries({
      buffer: 11,
      height: 775,
      itemCount: 1109,
      itemHeight: 26,
      scrollPosition: 922
    });
    expect(result.start).toEqual(24);
    expect(result.end).toEqual(77);
  });
  test('end of list (custom buffer)', () => {
    const result = getWindowedListBoundaries({
      buffer: 11,
      height: 300,
      itemCount: 50,
      itemHeight: 30,
      scrollPosition: 1200
    });
    expect(result.start).toEqual(29);
    expect(result.end).toEqual(49);
  });
});
//# sourceMappingURL=getWindowedListBoundaries.spec.js.map