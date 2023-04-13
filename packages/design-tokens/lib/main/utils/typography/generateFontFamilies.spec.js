"use strict";

var _tokens = require("../../tokens");
var _generateFontFamilies = require("./generateFontFamilies");

describe('generateFontFamilies', function () {
  test('basic', function () {
    return expect((0, _generateFontFamilies.generateFontFamilies)(_tokens.defaultFonts, _tokens.defaultFontFallbacks)).toMatchInlineSnapshot({}, "\n      Object {\n        \"body\": \"Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"brand\": \"Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"code\": \"'Roboto Mono', Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace\",\n      }\n    ");
  });
  test('customFonts', function () {
    return expect((0, _generateFontFamilies.generateFontFamilies)(_tokens.defaultFonts, _tokens.defaultFontFallbacks, {
      body: 'Papyrus',
      brand: 'Open Sans',
      code: 'fixed'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"body\": \"Papyrus, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"brand\": \"'Open Sans', 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"code\": \"fixed, Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace\",\n      }\n    ");
  });
});
//# sourceMappingURL=generateFontFamilies.spec.js.map