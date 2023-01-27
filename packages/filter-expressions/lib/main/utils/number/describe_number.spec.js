"use strict";

var _grammars = require("../../grammars");
var _summary = require("../summary/summary");
var _i18n = require("../i18n");
var _describe_number = require("./describe_number");

describe('Summary', function () {
  beforeEach(function () {
    return (0, _i18n.i18nInit)();
  });
  _grammars.numberExpressionTestItems.forEach(function (testItem) {
    var expression = testItem.expression,
      describe = testItem.describe;
    it('works for number expression ' + expression, function () {
      var description = (0, _summary.summary)({
        type: 'number',
        expression: expression
      });
      expect(description).toBe(describe);
    });
  });
  it('is empty for an undefined value', function () {
    var item = {
      id: '0',
      is: true,
      type: 'other'
    };
    var description = (0, _describe_number.describeNumber)(item);
    expect(description).toBe('');
  });
});
//# sourceMappingURL=describe_number.spec.js.map