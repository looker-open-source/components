"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _get_number_from_string = require("./get_number_from_string");

test('it returns a regular number', function () {
  var num = (0, _get_number_from_string.getNumberFromString)('1234567890');
  expect((0, _typeof2["default"])(num)).toBe('number');
});
test('it returns a bigint for 16 characters or more', function () {
  var bigNum = (0, _get_number_from_string.getNumberFromString)('12345678901234567890');
  expect((0, _typeof2["default"])(bigNum)).toBe('bigint');
});
test('it returns a regular number if decimal is found', function () {
  var num = (0, _get_number_from_string.getNumberFromString)('1234567890.1234567890');
  expect((0, _typeof2["default"])(num)).toBe('number');
});
//# sourceMappingURL=get_number_from_string.spec.js.map