"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ModalContent = require("./ModalContent");

var originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
var originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
afterAll(function () {
  originalScrollHeight && Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
  originalOffsetHeight && Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
});
describe('ModalContent', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalContent.ModalContent, null, "Stuff"));

    var modalContent = _react2.screen.getByText('Stuff');

    expect(modalContent).toBeInTheDocument();
    expect(modalContent).toHaveStyleRule('padding-top');
    expect(modalContent).toHaveStyleRule('padding-bottom');
  });
  test('display xxxsmall padding if both hasHeader & hasFooter', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalContent.ModalContent, {
      hasHeader: true,
      hasFooter: true
    }, "Stuff"));
    expect(_react2.screen.getByText('Stuff')).toHaveStyleRule('padding-bottom', '0.125rem');
    expect(_react2.screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem');
  });
  test('has no box shadow when it does not overflow', function () {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 0
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 500
    });
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalContent.ModalContent, {
      hasHeader: true,
      hasFooter: true
    }, "Stuff"));
    expect(getComputedStyle(_react2.screen.getByText('Stuff')).getPropertyValue('box-shadow')).toEqual('');
  });
  test('has a box shadow when it overflows', function () {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 500
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 0
    });
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_ModalContent.ModalContent, {
      hasHeader: true,
      hasFooter: true
    }, "Stuff"));
    expect(getComputedStyle(_react2.screen.getByText('Stuff')).getPropertyValue('box-shadow')).toEqual('inset 0 -4px 4px -4px #DEE1E5');
  });
});
//# sourceMappingURL=ModalContent.spec.js.map