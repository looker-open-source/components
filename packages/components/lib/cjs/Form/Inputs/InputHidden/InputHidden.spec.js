"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _InputHidden = require("./InputHidden");

describe('InputHidden', function () {
  test('name and id', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputHidden.InputHidden, {
      name: "Bob",
      id: "Bobby",
      defaultValue: "bob"
    }));

    var input = _react2.screen.getByDisplayValue('bob');

    expect(input).toHaveAttribute('name', 'Bob');
    expect(input).toHaveAttribute('id', 'Bobby');
  });
  test('with a value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_InputHidden.InputHidden, {
      defaultValue: "Some value"
    }));
    expect(_react2.screen.getByDisplayValue('Some value')).toHaveValue('Some value');
  });
});
//# sourceMappingURL=InputHidden.spec.js.map