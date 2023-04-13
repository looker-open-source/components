

import { convertRemToPx } from './convertRemToPx';
test('convertRemToPx', () => {
  expect(convertRemToPx(1)).toEqual(16);
  expect(convertRemToPx(1.5)).toEqual(24);
  expect(convertRemToPx(0.5)).toEqual(8);
});
//# sourceMappingURL=convertRemToPx.spec.js.map