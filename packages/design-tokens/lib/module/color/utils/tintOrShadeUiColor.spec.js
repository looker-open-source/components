

import { uiBlends } from '../blendPoints';
import { colors } from '../colors';
import { tintOrShadeUiColor } from './tintOrShadeUiColor';
const {
  background,
  text
} = colors;
describe('tintOrShadeUiColor', () => {
  describe('light (stock theme)', () => {
    test('ui1', () => expect(tintOrShadeUiColor(uiBlends[0], background)).toEqual('#f4f4f4'));
    test('ui5', () => expect(tintOrShadeUiColor(uiBlends[4], background)).toEqual('#262626'));
  });
  describe('dark-mode', () => {
    test('ui1', () => expect(tintOrShadeUiColor(uiBlends[0], text)).toEqual('#33393f'));
    test('ui5', () => expect(tintOrShadeUiColor(uiBlends[4], text)).toEqual('#fff'));
  });
});
//# sourceMappingURL=tintOrShadeUiColor.spec.js.map