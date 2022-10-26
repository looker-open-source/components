"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Section = require("./Section");

describe('Section', function () {
  test('render', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Section.Section, null, "Section content"));
    expect(_react2.screen.getByText('Section content')).toBeInTheDocument();
  });
  test('renders as main if pass as a prop.', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Section.Section, {
      main: true
    }, "Section content"));
    expect(_react2.screen.getByRole('main')).toBeInTheDocument();
  });
  test('does not have a box shadow if content does not overflow', function () {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 0
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 500
    });
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Section.Section, null, "Section content"));
    expect(getComputedStyle(_react2.screen.getByText('Section content')).getPropertyValue('box-shadow')).toEqual('');
  });
  test('has a box shadow when content overflows', function () {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 500
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 0
    });
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Section.Section, null, "Section content"));
    expect(getComputedStyle(_react2.screen.getByText('Section content')).getPropertyValue('box-shadow')).toEqual('inset 0 -4px 4px -4px #DEE1E5');
  });
});
//# sourceMappingURL=Section.spec.js.map