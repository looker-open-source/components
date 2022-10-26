"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _arSA = _interopRequireDefault(require("date-fns/locale/ar-SA"));

var _DateTimeFormat = require("./DateTimeFormat");

var date = new Date('January 25, 1988 11:58:03');
describe('DateTimeFormat', function () {
  test('renders', function () {
    var _render = (0, _react.render)(_react2["default"].createElement(_DateTimeFormat.DateTimeFormat, null, date)),
        container = _render.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        Jan 25, 1988, 11:58:03 AM\n      </div>\n    ");
  });
  test('specific locale', function () {
    var _render2 = (0, _react.render)(_react2["default"].createElement(_DateTimeFormat.DateTimeFormat, {
      locale: _arSA["default"]
    }, date)),
        container = _render2.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        \u064A\u0646\u0627 25, 1988, 11:58:03 \u0635\n      </div>\n    ");
  });
  test('displays timeZone prop if one is passed', function () {
    var _render3 = (0, _react.render)(_react2["default"].createElement(_DateTimeFormat.DateTimeFormat, {
      timeZone: "Asia/Kolkata"
    }, date)),
        container = _render3.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        Jan 26, 1988, 1:28:03 AM GMT+5:30\n      </div>\n    ");
  });
  test('format prop short if one is passed', function () {
    var _render4 = (0, _react.render)(_react2["default"].createElement(_DateTimeFormat.DateTimeFormat, {
      format: "short"
    }, date)),
        container = _render4.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        01/25/1988, 11:58 AM\n      </div>\n    ");
  });
  test('format prop long if one is passed', function () {
    var _render5 = (0, _react.render)(_react2["default"].createElement(_DateTimeFormat.DateTimeFormat, {
      format: "long"
    }, date)),
        container = _render5.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        January 25th, 1988 at 11:58:03 AM GMT-8\n      </div>\n    ");
  });
  test('format prop full if one is passed', function () {
    var _render6 = (0, _react.render)(_react2["default"].createElement(_DateTimeFormat.DateTimeFormat, {
      format: "full"
    }, date)),
        container = _render6.container;

    expect(container).toMatchInlineSnapshot("\n      <div>\n        Monday, January 25th, 1988 at 11:58:03 AM GMT-08:00\n      </div>\n    ");
  });
});
//# sourceMappingURL=DateTimeFormat.spec.js.map