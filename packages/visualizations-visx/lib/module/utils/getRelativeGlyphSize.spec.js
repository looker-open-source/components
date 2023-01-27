
import { getRelativeGlyphSize } from './getRelativeGlyphSize';
describe('getRelativeGlyphSize', () => {
  it('returns a value as a percentage of the MAX_POINT_SIZE', () => {
    expect(getRelativeGlyphSize(5, 0, 10)).toMatchInlineSnapshot(`4080`);
    expect(getRelativeGlyphSize(9, 8, 10)).toMatchInlineSnapshot(`4080`);
  });
});
//# sourceMappingURL=getRelativeGlyphSize.spec.js.map