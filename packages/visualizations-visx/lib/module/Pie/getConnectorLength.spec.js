

import { getConnectorLength } from './getConnectorLength';
describe('getConnectorLength', () => {
  test('defines a long connector at the top or bottom of the chart', () => {
    const lengthBottom = getConnectorLength(Math.PI, 500);
    const lengthTop = getConnectorLength(Math.PI * 2, 500);
    expect(lengthBottom).toMatchInlineSnapshot(`68.21083018079717`);
    expect(lengthBottom).toEqual(lengthTop);
  });
  test('defines a short connector at the (vertical) middle of the chart', () => {
    const lengthRight = getConnectorLength(Math.PI / 2, 500);
    const lengthLeft = getConnectorLength(Math.PI * 1.5, 500);
    expect(lengthLeft).toMatchInlineSnapshot(`11.15`);
    expect(lengthLeft).toEqual(lengthRight);
  });
});
//# sourceMappingURL=getConnectorLength.spec.js.map