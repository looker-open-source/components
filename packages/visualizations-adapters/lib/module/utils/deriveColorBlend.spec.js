

import { deriveColorBlend } from './deriveColorBlend';
it('blends white to black, defaulting to 5 steps', () => {
  const palette = deriveColorBlend('#ffffff', '#000000');
  expect(palette).toMatchInlineSnapshot(`
     Array [
       "#ffffff",
       "#bfbfbf",
       "#808080",
       "#404040",
       "#000000",
     ]
   `);
});

it('fades a single color to black in a provided number of steps', () => {
  const palette = deriveColorBlend('#ff0000', '#000000', 10);
  expect(palette).toMatchInlineSnapshot(`
     Array [
       "#ff0000",
       "#e30000",
       "#c60000",
       "#aa0000",
       "#8e0000",
       "#710000",
       "#550000",
       "#390000",
       "#1c0000",
       "#000000",
     ]
   `);
});

it('fades from white to any color in a provided number of steps', () => {
  const palette = deriveColorBlend('#ffffff', '#ff0000', 10);
  expect(palette).toMatchInlineSnapshot(`
    Array [
      "#ffffff",
      "#ffe3e3",
      "#ffc6c6",
      "#ffaaaa",
      "#ff8e8e",
      "#ff7171",
      "#ff5555",
      "#ff3939",
      "#ff1c1c",
      "#ff0000",
    ]
  `);
});
it('blends two colors with different hues with one step in between', () => {
  const palette = deriveColorBlend('#5A2FC2', '#4285F4', 3);
  expect(palette).toMatchInlineSnapshot(`
    Array [
      "#5a2fc2",
      "#383fdb",
      "#4285f4",
    ]
  `);
});
it('returns the unmodified colors when steps argument is set to 2', () => {
  const palette = deriveColorBlend('#5A2FC2', '#4285F4', 3);
  expect(palette).toMatchInlineSnapshot(`
    Array [
      "#5a2fc2",
      "#383fdb",
      "#4285f4",
    ]
  `);
});
it('returns only the base color when color stops is set to 1', () => {
  const palette = deriveColorBlend('#5A2FC2', '#4285F4', 1);
  expect(palette).toMatchInlineSnapshot(`
    Array [
      "#5a2fc2",
    ]
  `);
});
it('returns a blank array when color stops is set to 0', () => {
  const palette = deriveColorBlend('#5A2FC2', '#4285F4', 0);
  expect(palette).toMatchInlineSnapshot(`Array []`);
});
//# sourceMappingURL=deriveColorBlend.spec.js.map