"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Code = require("./Code");

describe('Code', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Code.Code, null, "Hello"));
    expect(_react2.screen.getByText('Hello')).toBeInTheDocument();
    expect(_react2.screen.getByText('Hello').tagName).toEqual('CODE');
  });
  test('fontSize', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Code.Code, {
      fontSize: "xxxxlarge"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;');
  });
  test('textAlign', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Code.Code, {
      textAlign: "right"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('text-align: right');
  });
  test('fontWeight', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Code.Code, {
      fontWeight: "bold"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('font-weight: 700;');
  });
});
//# sourceMappingURL=Code.spec.js.map