"use strict";

var _utils = require("../utils");
var _i18n = require("../utils/i18n");
var _tier_filter_to_string = require("../utils/tier/tier_filter_to_string");
var _tier_grammar_test_expressions = require("./tier_grammar_test_expressions");

var filterType = 'tier';
var testStringItem = function testStringItem(testItem) {
  test("".concat(testItem.expression), function () {
    var expression = testItem.expression,
      type = testItem.type,
      describe = testItem.describe,
      output = testItem.output,
      field = testItem.field;
    var ast = (0, _utils.parseFilterExpression)(filterType, expression);
    var description = (0, _utils.summary)({
      type: filterType,
      expression: expression,
      field: field
    });
    expect(ast).toMatchSnapshot();
    var list = (0, _utils.treeToList)(ast);
    var item = list[0];
    var itemType = type === 'matchesAdvanced' ? item.type : (0, _utils.convertTypeToOption)(item);
    expect(itemType).toEqual(type);

    expect(description).toBe(describe);

    var stringOutput = type === 'matchesAdvanced' ? expression : (0, _tier_filter_to_string.tierFilterToString)(ast, filterType, field);
    expect(stringOutput).toBe(output);
  });
};
describe('Tier grammar can parse', function () {
  beforeEach(function () {
    return (0, _i18n.i18nInit)();
  });
  _tier_grammar_test_expressions.tierGrammarTestItems.forEach(testStringItem);
});
//# sourceMappingURL=tier_grammar.spec.js.map