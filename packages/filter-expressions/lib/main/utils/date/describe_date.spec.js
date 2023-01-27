"use strict";

var _grammars = require("../../grammars");
var _i18n = require("../i18n");
var _summary = require("../summary/summary");
var _describe_date = require("./describe_date");

describe('Summary', function () {
  beforeEach(function () {
    return (0, _i18n.i18nInit)()["catch"](function (e) {
      throw new Error(e);
    });
  });
  _grammars.dateExpressionTestItems.forEach(function (testItem) {
    var expression = testItem.expression,
      describe = testItem.describe;
    it('works for date expression ' + expression, function () {
      var description = (0, _summary.summary)({
        type: 'date',
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
    var description = (0, _describe_date.describeDate)(item);
    expect(description).toBe('');
  });
  it('should not add time into description for "on date" filter without time', function () {
    var date = {
      day: 4,
      month: 11,
      year: 2017
    };
    var item = {
      date: date,
      id: '0',
      is: true,
      type: 'on'
    };
    var description = (0, _describe_date.describeDate)(item, 'date_time');
    expect(description).toBe('is on 2017/11/04');
  });
});
//# sourceMappingURL=describe_date.spec.js.map