import { theme } from '../../theme';
import { googleFontParam, googleFontUrl } from './googleFontUrl';
describe('GoogleFontsLoader', () => {
  describe('googleFontParam', () => {
    test('basic', () => expect(googleFontParam({
      family: 'Roboto',
      italic: false,
      weights: [100]
    })).toEqual('Roboto:wght@0,100'));
    test('explicit italic', () => expect(googleFontParam({
      family: 'Roboto',
      italic: true,
      weights: [100]
    })).toEqual('Roboto:ital,wght@0,100;1,100'));
    test('kitchen sink (italic inferred)', () => expect(googleFontParam({
      family: 'Roboto',
      weights: [200, 300]
    })).toEqual('Roboto:ital,wght@0,200;0,300;1,200;1,300'));
  });
  test('googleFontUrl', () => expect(googleFontUrl(theme)).toEqual('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap'));
});
//# sourceMappingURL=googleFontUrl.spec.js.map