import { getBrandedTint } from './branded_tint';
describe('Branded Tint Application', () => {
  it('selected tint should match given named color', () => {
    const tintRed = getBrandedTint('selected', 'red');
    const hslaRed = 'hsla(0, 100%, 98%, 100%)';
    expect(tintRed).toEqual(hslaRed);
  });
  it('border tint should match given named color', () => {
    const tintRed = getBrandedTint('border', 'red');
    const hslaRed = 'hsla(0, 25%, 90%, 100%)';
    expect(tintRed).toEqual(hslaRed);
  });
  it('hover tint should match given named color', () => {
    const tintRed = getBrandedTint('hover', 'red');
    const hslaRed = 'hsla(0, 25%, 97%, 70%)';
    expect(tintRed).toEqual(hslaRed);
  });
  it('pressed tint should match given named color', () => {
    const tintRed = getBrandedTint('pressed', 'red');
    const hslaRed = 'hsla(0, 50%, 96%, 90%)';
    expect(tintRed).toEqual(hslaRed);
  });
});
//# sourceMappingURL=branded_tint.spec.js.map