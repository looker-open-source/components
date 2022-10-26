"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Aside = require("./Aside");

describe('Aside', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, null, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toBeInTheDocument();
  });
  test('Can use specific string to size its width.', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      width: "rail"
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyleRule('width: 3.5rem;');
  });
  test('Collapse prop will not render the component.', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      collapse: true
    }, "Aside content"));
    expect(_react2.screen.queryByText('Aside content')).not.toBeInTheDocument();
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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, null, "Aside content"));
    expect(getComputedStyle(_react2.screen.getByText('Aside content')).getPropertyValue('box-shadow')).toEqual('');
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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, null, "Aside content"));
    expect(getComputedStyle(_react2.screen.getByText('Aside content')).getPropertyValue('box-shadow')).toEqual('inset 0 -4px 4px -4px #DEE1E5');
  });
  test('render border properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      border: true
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyle('border: 1px solid #DEE1E5;');
  });
  test('render borderBottom properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      borderBottom: true
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyle('border-bottom: 1px solid #DEE1E5;');
  });
  test('render borderLeft properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      borderLeft: true
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyle('border-left: 1px solid #DEE1E5;');
  });
  test('render borderRight properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      borderRight: true
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyle('border-right: 1px solid #DEE1E5;');
  });
  test('render borderTop properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      borderTop: true
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyle('border-top: 1px solid #DEE1E5;');
  });
  test('render borderX properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      borderX: true
    }, "Aside content"));

    var aside = _react2.screen.getByText('Aside content');

    expect(aside).toHaveStyle('border-left: 1px solid #DEE1E5;');
    expect(aside).toHaveStyle('border-right: 1px solid #DEE1E5;');
  });
  test('render borderY properly', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      borderY: true
    }, "Aside content"));

    var aside = _react2.screen.getByText('Aside content');

    expect(aside).toHaveStyle('border-bottom: 1px solid #DEE1E5;');
    expect(aside).toHaveStyle('border-top: 1px solid #DEE1E5;');
  });
  test('render border color if passed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Aside.Aside, {
      border: "key"
    }, "Aside content"));
    expect(_react2.screen.getByText('Aside content')).toHaveStyle('border: 1px solid #6C43E0;');
  });
});
//# sourceMappingURL=Aside.spec.js.map