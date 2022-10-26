"use strict";

var _dateFns = require("date-fns");

var _dateConfirmations = require("./dateConfirmations");

describe('Calendar date confirmations', function () {
  test('confirmToday', function () {
    var today = (0, _dateConfirmations.confirmToday)(1);
    var check = (0, _dateFns.getMonth)(new Date()) === 1;
    expect(today).toEqual(check);
  });
  test('isThisMonth', function () {
    var month = (0, _dateConfirmations.isThisMonth)(new Date(2012, 3, 29), 3, new Date(2012, 3, 3));
    expect(month).toEqual(true);
  });
});
//# sourceMappingURL=dateConfirmations.spec.js.map