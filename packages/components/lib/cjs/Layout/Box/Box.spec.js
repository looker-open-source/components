"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Box = require("./Box");

describe('Box', function () {
  describe('as=', function () {
    test('render as any HTML tag', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box, {
        as: "button"
      }, "Press Me"));
      expect(_react2.screen.getByRole('button')).toBeInTheDocument();
    });
    test('any prop can be passed to Box', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box, {
        as: "input",
        type: "checkbox"
      }));
      expect(_react2.screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });
  describe('core HTML attributes', function () {
    test('allows autoFocus', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box, {
        as: "input",
        type: "text",
        defaultValue: "Autofocus",
        autoFocus: true
      }));
      expect(_react2.screen.getByDisplayValue('Autofocus')).toHaveFocus();
    });
    test('allows for HTML events', function () {
      var handleClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box, {
        onClick: handleClick
      }, "Click me"));

      _react2.fireEvent.click(_react2.screen.getByText('Click me'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test('allows for ARIA attributes', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box, {
        "aria-label": "for screen readers only"
      }, "aria-label"));
      expect(_react2.screen.getByLabelText('for screen readers only')).toBeInTheDocument();
    });
  });
  describe('user select', function () {
    test('cannot be selected', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Box.Box, {
        userSelect: "none"
      }, "Can't touch this"));
      expect(_react2.screen.getByText("Can't touch this")).toHaveStyleRule('user-select', 'none');
    });
  });
});
//# sourceMappingURL=Box.spec.js.map