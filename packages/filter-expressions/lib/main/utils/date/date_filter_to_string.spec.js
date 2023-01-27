"use strict";

var _ = require("..");
var _grammars = require("../../grammars");
var _parse_filter_expression = require("../parse_filter_expression");
var _date_filter_to_string = require("./date_filter_to_string");

describe('Date To String', function () {
  _grammars.dateExpressionTestItems.forEach(function (testItem) {
    var expression = testItem.expression,
      output = testItem.output;
    it('date filter output matches expected value for expression ' + expression, function () {
      var ast = (0, _parse_filter_expression.parseFilterExpression)('date', expression);
      var list = (0, _.treeToList)(ast);
      var item = list[0];
      var dateComponentType = (0, _.convertTypeToMatchesAdvancedOption)(item);
      var stringOutput = dateComponentType === 'matchesAdvanced' ? expression : (0, _date_filter_to_string.dateFilterToString)(ast, 'date');
      expect(stringOutput).toBe(output);
    });
  });
});
//# sourceMappingURL=date_filter_to_string.spec.js.map