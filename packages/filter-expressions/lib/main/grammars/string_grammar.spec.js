"use strict";

var _utils = require("../utils");
var _i18n = require("../utils/i18n");
var _string_grammar_test_expressions = require("./string_grammar_test_expressions");
var _convert_type_to_option = require("../utils/option/convert_type_to_option");
var _string_filter_to_string = require("../utils/string/string_filter_to_string");
var _summary = require("../utils/summary/summary");
var _tree_to_list = require("../utils/tree/tree_to_list");

var filterType = 'string';
var testStringItem = function testStringItem(testItem) {
  test("".concat(testItem.expression), function () {
    var expression = testItem.expression,
      type = testItem.type,
      describe = testItem.describe,
      output = testItem.output;
    var ast = (0, _utils.parseFilterExpression)(filterType, expression);
    var description = (0, _summary.summary)({
      type: filterType,
      expression: expression
    });
    expect(ast).toMatchSnapshot();
    var list = (0, _tree_to_list.treeToList)(ast);
    var item = list[0];
    var itemType = type === 'matchesAdvanced' ? item.type : (0, _convert_type_to_option.convertTypeToOption)(item);
    expect(itemType).toEqual(type);

    expect(description).toBe(describe);

    var stringOutput = type === 'matchesAdvanced' ? expression : (0, _string_filter_to_string.stringFilterToString)(ast);
    expect(stringOutput).toBe(output);
  });
};
describe('String grammar can parse', function () {
  beforeEach(function () {
    return (0, _i18n.i18nInit)();
  });
  _string_grammar_test_expressions.stringGrammarTestItems.forEach(testStringItem);
});
describe('String grammar can parse expanded character sets', function () {
  it('can parse japanese characters', function () {
    var expression = 'りんご,グレープ';
    var ast = (0, _utils.parseFilterExpression)('string', expression);
    var type = ast.type,
      value = ast.value;
    expect(type).toBe('match');
    expect(value).toHaveLength(2);
    expect(value[0]).toBe('りんご');
    expect(value[1]).toBe('グレープ');
    expect(ast).toMatchInlineSnapshot("\n      Object {\n        \"id\": 1,\n        \"is\": true,\n        \"left\": undefined,\n        \"right\": undefined,\n        \"type\": \"match\",\n        \"value\": Array [\n          \"\u308A\u3093\u3054\",\n          \"\u30B0\u30EC\u30FC\u30D7\",\n        ],\n      }\n    ");
  });
});
//# sourceMappingURL=string_grammar.spec.js.map