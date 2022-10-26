"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _designTokens = require("@looker/design-tokens");

var _material = require("@styled-icons/material");

var _react2 = require("@testing-library/react");

var _Icon = require("./Icon");

describe('Icon', function () {
  test('Default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Add, null)
    }));
  });
  test('Styled system size', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      "data-testid": "icon-wrapper",
      icon: _react["default"].createElement(_material.Add, null),
      size: "large"
    }));
    expect(_react2.screen.getByTestId('icon-wrapper')).toHaveStyle("height: ".concat(_designTokens.theme.sizes.large));
    expect(_react2.screen.getByTestId('icon-wrapper')).toHaveStyle("width: ".concat(_designTokens.theme.sizes.large));
  });
  test('Explicit size - integer as pixels', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      "data-testid": "icon-wrapper",
      icon: _react["default"].createElement(_material.Add, null),
      size: 12
    }));
    expect(_react2.screen.getByTestId('icon-wrapper')).toHaveStyle('width: 12px');
  });
  test('Explicit size - string', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      "data-testid": "icon-wrapper",
      icon: _react["default"].createElement(_material.Add, null),
      size: "1rem"
    }));
    expect(_react2.screen.getByTestId('icon-wrapper')).toHaveStyle('width: 1rem');
  });
  test('DOM attribute support', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Add, null),
      "aria-label": "Add"
    }));
    expect(_react2.screen.getByLabelText('Add')).toBeInTheDocument();
  });
  test("No title by default", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Delete, null)
    }));
    expect(_react2.screen.queryByLabelText("Oscar's House")).not.toBeInTheDocument();
  });
  test("Title is assigned properly to SVG art", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.Delete, null),
      title: "Oscar's House"
    }));
    expect(_react2.screen.getByTitle("Oscar's House")).toBeInTheDocument();
  });
});
//# sourceMappingURL=Icon.spec.js.map