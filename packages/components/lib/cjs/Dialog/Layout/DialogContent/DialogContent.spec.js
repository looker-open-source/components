"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DialogContent = require("./DialogContent");

describe('DialogContent', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogContent.DialogContent, null, "Dialog Content"));
    expect(_react2.screen.getByText('Dialog Content')).toHaveStyleRule('padding-bottom', '1.25rem');
  });
  test('display correct padding if hasFooter', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogContent.DialogContent, {
      hasFooter: true
    }, "Stuff"));
    expect(_react2.screen.getByText('Stuff')).toHaveStyleRule('padding-bottom', '0.125rem');
  });
  test('display correct padding if hasHeader', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogContent.DialogContent, {
      hasHeader: true
    }, "Stuff"));
    expect(_react2.screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem');
  });
  test('display correct padding if both  hasFooter & hasHeader', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogContent.DialogContent, {
      hasFooter: true,
      hasHeader: true
    }, "Stuff"));
    expect(_react2.screen.getByText('Stuff')).toHaveStyleRule('padding-bottom', '0.125rem');
    expect(_react2.screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem');
  });
  test('Custom padding `p`', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogContent.DialogContent, {
      p: "u12"
    }, "Hello world"));

    var item = _react2.screen.getByText('Hello world');

    expect(item).toHaveStyleRule('padding-left', '3rem');
    expect(item).toHaveStyleRule('padding-right', '3rem');
    expect(item).toHaveStyleRule('padding-top', '3rem');
    expect(item).toHaveStyleRule('padding-bottom', '3rem');
  });
});
//# sourceMappingURL=DialogContent.spec.js.map