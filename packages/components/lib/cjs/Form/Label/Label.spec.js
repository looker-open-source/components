"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Label = require("./Label");

describe('Label', function () {
  test('Basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Label.Label, null, "Some text"));
    expect(_react2.screen.getByText('Some text')).toBeInTheDocument();
  });
  test('Supports typography', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Label.Label, {
      fontWeight: "normal"
    }, "Some text"));
    expect(_react2.screen.getByText('Some text')).toHaveStyleRule('font-weight', '400');
  });
  test('Associates with input', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Label.Label, {
      htmlFor: "test"
    }, "Some text"), _react["default"].createElement("input", {
      id: "test"
    })));
    expect(_react2.screen.getByLabelText('Some text')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Label.spec.js.map