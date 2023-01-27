

import { deriveColorPalette } from './deriveColorPalette';
describe('deriveColorPalette', () => {
  test('it creates an color alternates from a base set', () => {
    const colorPalette = deriveColorPalette(['#fa8072']);
    expect(colorPalette).toMatchInlineSnapshot(`
      Array [
        "#fa8072",
        "#fae87f",
        "#a8fa72",
        "#fa72ec",
        "#c472fa",
        "#72ecfa",
        "#ff604e",
        "#ba4639",
        "#ba8983",
        "#83b5ba",
      ]
    `);
  });
});
//# sourceMappingURL=deriveColorPalette.spec.js.map