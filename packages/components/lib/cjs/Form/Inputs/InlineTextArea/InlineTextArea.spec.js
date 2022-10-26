"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _InlineTextArea = require("./InlineTextArea");

describe('InlineTextArea', function () {
  test('renders and displays placeholder', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineTextArea.InlineTextArea, {
      placeholder: "this is the placeholder"
    }));

    var placeholder = _react.screen.getByTestId('inline-text-area');

    expect(placeholder).toHaveTextContent('this is the placeholder');
  });
  test('renders and displays value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_InlineTextArea.InlineTextArea, {
      value: "this is the value"
    }));

    var value = _react.screen.getByDisplayValue('this is the value');

    expect(value).toHaveTextContent('this is the value');
  });
});
//# sourceMappingURL=InlineTextArea.spec.js.map