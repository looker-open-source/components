

import { uiBlends } from '../blendPoints';
import { colors } from '../colors';
import { mixScaledColors } from './mixScaledColors';
const {
  background,
  text
} = colors;
describe('mixScaledColors', () => {
  test('default', () => {
    expect(mixScaledColors(uiBlends[3], text, background)).toEqual('#b5b7b9');
  });
  test('dark mode', () => {
    expect(mixScaledColors(uiBlends[3], background, text)).toEqual('#a3a6a8');
  });
  test('low but not super low luminance', () => {
    expect(mixScaledColors(uiBlends[0], '#fff', '#555')).toEqual('#5d5d5d');
  });
});
//# sourceMappingURL=mixScaledColors.spec.js.map