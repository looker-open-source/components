"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Basic = _interopRequireDefault(require("./stories/Basic"));
var _HeaderHideHeading = _interopRequireDefault(require("./stories/HeaderHideHeading"));
var _Header = _interopRequireDefault(require("./stories/Header"));
var _Full = _interopRequireDefault(require("./stories/Full"));
var _FooterCloseButton = _interopRequireDefault(require("./stories/FooterCloseButton"));

describe('PopoverLayout', function () {
  test('basic display has footer ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Basic["default"], null));
    expect(_react2.screen.getByText(/We the People of the United States/)).toBeInTheDocument();
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
  test('hideHeading prop hides Header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_HeaderHideHeading["default"], null));
    var hiddenHeader = _react2.screen.getByText('Header text');
    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
  test('Header and no Footer ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Header["default"], null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
    expect(_react2.screen.queryByText('Done')).not.toBeInTheDocument();
  });
  test('Footer with CloseButton', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FooterCloseButton["default"], null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
    expect(_react2.screen.queryByText('Done')).not.toBeInTheDocument();
  });
  test('With header & footer display only "Done" button', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Full["default"], null));
    expect(_react2.screen.queryByText('Close')).not.toBeInTheDocument();
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
  test('FooterExtraValue ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Full["default"], null));
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
});
//# sourceMappingURL=PopoverLayout.spec.js.map