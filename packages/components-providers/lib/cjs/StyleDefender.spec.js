"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _StyleDefender = require("./StyleDefender");

var _ThemeProvider = require("./ThemeProvider");

describe('StyleDefender', function () {
  test('Direct styles', function () {
    (0, _react2.render)(_react["default"].createElement(_ThemeProvider.ThemeProvider, null, _react["default"].createElement(_StyleDefender.StyleDefender, null, "Find me")));

    var test = _react2.screen.getByText('Find me');

    expect(test).toHaveStyle("font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif");
  });
  test('Computed', function () {
    (0, _react2.render)(_react["default"].createElement(_ThemeProvider.ThemeProvider, null, _react["default"].createElement(_StyleDefender.StyleDefender, null, _react["default"].createElement("p", null, "Find me"))));
    var computedStyle = getComputedStyle(_react2.screen.getByText('Find me'));
    expect(computedStyle.boxSizing).toEqual('border-box');
  });
  test('Computed negative', function () {
    (0, _react2.render)(_react["default"].createElement(_ThemeProvider.ThemeProvider, null, _react["default"].createElement("p", null, "Find me")));
    var computedStyle = getComputedStyle(_react2.screen.getByText('Find me'));
    expect(computedStyle.boxSizing).not.toEqual('border-box');
  });
});
//# sourceMappingURL=StyleDefender.spec.js.map