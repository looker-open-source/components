"use strict";

var _theme = require("../theme");

var _generateTheme = require("./generateTheme");

describe('generateTheme', function () {
  test('custom text color', function () {
    var generated = (0, _generateTheme.generateTheme)(_theme.theme, {
      colors: {
        text: 'black'
      }
    });
    expect(generated.colors).toMatchInlineSnapshot("\n      Object {\n        \"background\": \"#FFFFFF\",\n        \"body\": \"black\",\n        \"calculation\": \"#319220\",\n        \"calculationAccent\": \"#deeddb\",\n        \"calculationBorder\": \"#319220\",\n        \"calculationFocus\": \"#83bd79\",\n        \"calculationInteractive\": \"#37a324\",\n        \"calculationPressed\": \"#27751a\",\n        \"calculationSubtle\": \"#eaf4e8\",\n        \"calculationText\": \"#FFFFFF\",\n        \"critical\": \"#CC1F36\",\n        \"criticalAccent\": \"#f6dbde\",\n        \"criticalBorder\": \"#CC1F36\",\n        \"criticalFocus\": \"#e07886\",\n        \"criticalInteractive\": \"#dd223b\",\n        \"criticalPressed\": \"#ad1a2e\",\n        \"criticalSubtle\": \"#f9e8ea\",\n        \"criticalText\": \"#FFFFFF\",\n        \"dimension\": \"#31689E\",\n        \"dimensionAccent\": \"#dee6ef\",\n        \"dimensionBorder\": \"#31689E\",\n        \"dimensionFocus\": \"#83a4c4\",\n        \"dimensionInteractive\": \"#3672ae\",\n        \"dimensionPressed\": \"#295683\",\n        \"dimensionSubtle\": \"#eaeff5\",\n        \"dimensionText\": \"#FFFFFF\",\n        \"field\": \"#FFFFFF\",\n        \"inform\": \"#0087e1\",\n        \"informAccent\": \"#d6ebfa\",\n        \"inverse\": \"black\",\n        \"inverseOn\": \"#FFFFFF\",\n        \"key\": \"#6C43E0\",\n        \"keyAccent\": \"#e7e0fa\",\n        \"keyBorder\": \"#6C43E0\",\n        \"keyFocus\": \"#a68eec\",\n        \"keyInteractive\": \"#7a55e3\",\n        \"keyPressed\": \"#5424db\",\n        \"keySubtle\": \"#f0ecfb\",\n        \"keyText\": \"#FFFFFF\",\n        \"link\": \"#0059b2\",\n        \"linkInteractive\": \"#0063c6\",\n        \"measure\": \"#C2772E\",\n        \"measureAccent\": \"#f5e9dd\",\n        \"measureBorder\": \"#C2772E\",\n        \"measureFocus\": \"#daad81\",\n        \"measureInteractive\": \"#cf8135\",\n        \"measurePressed\": \"#a56527\",\n        \"measureSubtle\": \"#f8f1ea\",\n        \"measureText\": \"#FFFFFF\",\n        \"neutral\": \"#595959\",\n        \"neutralAccent\": \"#e4e4e4\",\n        \"neutralBorder\": \"#595959\",\n        \"neutralFocus\": \"#9b9b9b\",\n        \"neutralInteractive\": \"#636363\",\n        \"neutralPressed\": \"#474747\",\n        \"neutralSubtle\": \"#eee\",\n        \"neutralText\": \"#FFFFFF\",\n        \"pageBackground\": \"#FFFFFF\",\n        \"positive\": \"#24b25f\",\n        \"positiveAccent\": \"#dbf2e5\",\n        \"text\": \"black\",\n        \"text1\": \"#8c8c8c\",\n        \"text2\": \"#595959\",\n        \"text3\": \"#383838\",\n        \"text4\": \"#1e1e1e\",\n        \"text5\": \"black\",\n        \"title\": \"black\",\n        \"ui1\": \"#f4f4f4\",\n        \"ui2\": \"#e0e0e0\",\n        \"ui3\": \"#c4c4c4\",\n        \"ui4\": \"#a8a8a8\",\n        \"ui5\": \"#262626\",\n        \"warn\": \"#FFA800\",\n        \"warnAccent\": \"#fff1d6\",\n      }\n    ");
  });
  test('inverted theme', function () {
    var generated = (0, _generateTheme.generateTheme)(_theme.theme, {
      colors: {
        background: 'black',
        key: 'purple',
        text: 'white'
      }
    });
    expect(generated.colors).toMatchInlineSnapshot("\n      Object {\n        \"background\": \"black\",\n        \"body\": \"white\",\n        \"calculation\": \"#319220\",\n        \"calculationAccent\": \"#0d2708\",\n        \"calculationBorder\": \"#319220\",\n        \"calculationFocus\": \"#319420\",\n        \"calculationInteractive\": \"#37a324\",\n        \"calculationPressed\": \"#27751a\",\n        \"calculationSubtle\": \"#081805\",\n        \"calculationText\": \"black\",\n        \"critical\": \"#CC1F36\",\n        \"criticalAccent\": \"#37080e\",\n        \"criticalBorder\": \"#CC1F36\",\n        \"criticalFocus\": \"#d01f37\",\n        \"criticalInteractive\": \"#dd223b\",\n        \"criticalPressed\": \"#ad1a2e\",\n        \"criticalSubtle\": \"#220509\",\n        \"criticalText\": \"black\",\n        \"dimension\": \"#31689E\",\n        \"dimensionAccent\": \"#0d1c2a\",\n        \"dimensionBorder\": \"#31689E\",\n        \"dimensionFocus\": \"#316aa1\",\n        \"dimensionInteractive\": \"#3672ae\",\n        \"dimensionPressed\": \"#295683\",\n        \"dimensionSubtle\": \"#08111a\",\n        \"dimensionText\": \"black\",\n        \"field\": \"black\",\n        \"inform\": \"#0087e1\",\n        \"informAccent\": \"#00243d\",\n        \"inverse\": \"white\",\n        \"inverseOn\": \"black\",\n        \"key\": \"purple\",\n        \"keyAccent\": \"#202\",\n        \"keyBorder\": \"purple\",\n        \"keyFocus\": \"#820082\",\n        \"keyInteractive\": \"#940094\",\n        \"keyPressed\": \"#5c005c\",\n        \"keySubtle\": \"#150015\",\n        \"keyText\": \"black\",\n        \"link\": \"#0059b2\",\n        \"linkInteractive\": \"#0063c6\",\n        \"measure\": \"#C2772E\",\n        \"measureAccent\": \"#34200c\",\n        \"measureBorder\": \"#C2772E\",\n        \"measureFocus\": \"#c5792e\",\n        \"measureInteractive\": \"#cf8135\",\n        \"measurePressed\": \"#a56527\",\n        \"measureSubtle\": \"#201407\",\n        \"measureText\": \"black\",\n        \"neutral\": \"#a5a5a5\",\n        \"neutralAccent\": \"#2c2c2c\",\n        \"neutralBorder\": \"#a5a5a5\",\n        \"neutralFocus\": \"#a8a8a8\",\n        \"neutralInteractive\": \"#afafaf\",\n        \"neutralPressed\": \"#939393\",\n        \"neutralSubtle\": \"#1c1c1c\",\n        \"neutralText\": \"black\",\n        \"pageBackground\": \"#FFFFFF\",\n        \"positive\": \"#24b25f\",\n        \"positiveAccent\": \"#093019\",\n        \"text\": \"white\",\n        \"text1\": \"#727272\",\n        \"text2\": \"#a5a5a5\",\n        \"text3\": \"#c6c6c6\",\n        \"text4\": \"#e0e0e0\",\n        \"text5\": \"white\",\n        \"title\": \"white\",\n        \"ui1\": \"#0f0f0f\",\n        \"ui2\": \"#2d2d2d\",\n        \"ui3\": \"#575757\",\n        \"ui4\": \"#828282\",\n        \"ui5\": \"#fff\",\n        \"warn\": \"#FFA800\",\n        \"warnAccent\": \"#452d00\",\n      }\n    ");
  });
  test('title and body colors', function () {
    var generated = (0, _generateTheme.generateTheme)(_theme.theme, {
      colors: {
        body: 'aqua',
        title: 'red'
      }
    });
    expect(generated.colors.body).toEqual('aqua');
    expect(generated.colors.title).toEqual('red');
  });
  test('fontFamilies', function () {
    var generated = (0, _generateTheme.generateTheme)(_theme.theme, {
      fontFamilies: {
        body: "'Times new roman'",
        brand: 'verdana',
        code: 'fixed'
      }
    });
    expect(generated.fonts).toMatchInlineSnapshot("\n      Object {\n        \"body\": \"'Times new roman', 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"brand\": \"verdana, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"code\": \"fixed, Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace\",\n      }\n    ");
  });
  test('fontFamilies - unquoted faces', function () {
    var generated = (0, _generateTheme.generateTheme)(_theme.theme, {
      fontFamilies: {
        body: 'Open Sans, Noto Sans'
      }
    });
    expect(generated.fonts.body).toMatchInlineSnapshot("\"'Open Sans', 'Noto Sans', 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\"");
  });
  test('stock', function () {
    expect((0, _generateTheme.generateTheme)(_theme.theme).fonts).toMatchInlineSnapshot("\n      Object {\n        \"body\": \"Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"brand\": \"Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif\",\n        \"code\": \"'Roboto Mono', Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace\",\n      }\n    ");
    expect((0, _generateTheme.generateTheme)(_theme.theme).colors).toMatchInlineSnapshot("\n      Object {\n        \"background\": \"#FFFFFF\",\n        \"body\": \"#262D33\",\n        \"calculation\": \"#319220\",\n        \"calculationAccent\": \"#deeddb\",\n        \"calculationBorder\": \"#319220\",\n        \"calculationFocus\": \"#83bd79\",\n        \"calculationInteractive\": \"#37a324\",\n        \"calculationPressed\": \"#27751a\",\n        \"calculationSubtle\": \"#eaf4e8\",\n        \"calculationText\": \"#FFFFFF\",\n        \"critical\": \"#CC1F36\",\n        \"criticalAccent\": \"#FFE5E9\",\n        \"criticalBorder\": \"#ED3B53\",\n        \"criticalFocus\": \"#FF667A\",\n        \"criticalInteractive\": \"#dd223b\",\n        \"criticalPressed\": \"#ad1a2e\",\n        \"criticalSubtle\": \"#FFF2F4\",\n        \"criticalText\": \"#FFFFFF\",\n        \"dimension\": \"#31689E\",\n        \"dimensionAccent\": \"#dee6ef\",\n        \"dimensionBorder\": \"#31689E\",\n        \"dimensionFocus\": \"#83a4c4\",\n        \"dimensionInteractive\": \"#3672ae\",\n        \"dimensionPressed\": \"#295683\",\n        \"dimensionSubtle\": \"#eaeff5\",\n        \"dimensionText\": \"#FFFFFF\",\n        \"field\": \"#FFFFFF\",\n        \"inform\": \"#0087e1\",\n        \"informAccent\": \"#d6ebfa\",\n        \"inverse\": \"#262D33\",\n        \"inverseOn\": \"#FFFFFF\",\n        \"key\": \"#6C43E0\",\n        \"keyAccent\": \"#E8E5FF\",\n        \"keyBorder\": \"#6C43E0\",\n        \"keyFocus\": \"#9785F2\",\n        \"keyInteractive\": \"#7a55e3\",\n        \"keyPressed\": \"#5424db\",\n        \"keySubtle\": \"#F3F2FF\",\n        \"keyText\": \"#FFFFFF\",\n        \"link\": \"#0059b2\",\n        \"linkInteractive\": \"#0063c6\",\n        \"measure\": \"#C2772E\",\n        \"measureAccent\": \"#f5e9dd\",\n        \"measureBorder\": \"#C2772E\",\n        \"measureFocus\": \"#daad81\",\n        \"measureInteractive\": \"#cf8135\",\n        \"measurePressed\": \"#a56527\",\n        \"measureSubtle\": \"#f8f1ea\",\n        \"measureText\": \"#FFFFFF\",\n        \"neutral\": \"#71767a\",\n        \"neutralAccent\": \"#F5F6F7\",\n        \"neutralBorder\": \"#939BA5\",\n        \"neutralFocus\": \"#C1C6CC\",\n        \"neutralInteractive\": \"#7a818b\",\n        \"neutralPressed\": \"#5f656e\",\n        \"neutralSubtle\": \"#FBFBFC\",\n        \"neutralText\": \"#FFFFFF\",\n        \"pageBackground\": \"#FFFFFF\",\n        \"positive\": \"#24b25f\",\n        \"positiveAccent\": \"#dbf2e5\",\n        \"text\": \"#262D33\",\n        \"text1\": \"#939BA5\",\n        \"text2\": \"#707781\",\n        \"text3\": \"#4C535B\",\n        \"text4\": \"#343C42\",\n        \"text5\": \"#262D33\",\n        \"title\": \"#262D33\",\n        \"ui1\": \"#F5F6F7\",\n        \"ui2\": \"#DEE1E5\",\n        \"ui3\": \"#C1C6CC\",\n        \"ui4\": \"#939BA5\",\n        \"ui5\": \"#262D33\",\n        \"warn\": \"#FFA800\",\n        \"warnAccent\": \"#fff1d6\",\n      }\n    ");
  });
  describe('fontSources', function () {
    var generated = (0, _generateTheme.generateTheme)(_theme.theme, {
      fontSources: [{
        url: 'http://not-really-a.font.com'
      }, {
        face: 'Faux Font',
        url: 'http://faux-font.com'
      }]
    });
    expect(generated.fontSources).toMatchInlineSnapshot("\n      Array [\n        Object {\n          \"url\": \"http://not-really-a.font.com\",\n        },\n        Object {\n          \"face\": \"Faux Font\",\n          \"url\": \"http://faux-font.com\",\n        },\n      ]\n    ");
  });
});
//# sourceMappingURL=generateTheme.spec.js.map