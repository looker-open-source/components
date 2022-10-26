import { defaultFontFallbacks, defaultFonts } from '../../tokens';
import { generateFontFamilies } from './generateFontFamilies';
describe('generateFontFamilies', () => {
  test('basic', () => expect(generateFontFamilies(defaultFonts, defaultFontFallbacks)).toMatchInlineSnapshot({}, `
      Object {
        "body": "Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "brand": "Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "code": "'Roboto Mono', Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace",
      }
    `));
  test('customFonts', () => expect(generateFontFamilies(defaultFonts, defaultFontFallbacks, {
    body: 'Papyrus',
    brand: 'Open Sans',
    code: 'fixed'
  })).toMatchInlineSnapshot({}, `
      Object {
        "body": "Papyrus, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "brand": "'Open Sans', 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "code": "fixed, Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace",
      }
    `));
});
//# sourceMappingURL=generateFontFamilies.spec.js.map