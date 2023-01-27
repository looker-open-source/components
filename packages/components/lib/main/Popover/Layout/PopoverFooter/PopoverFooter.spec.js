"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Basic = _interopRequireDefault(require("./stories/Basic"));
var _FooterClose = _interopRequireDefault(require("./stories/FooterClose"));
var _FooterWithChildren = _interopRequireDefault(require("./stories/FooterWithChildren"));

describe('PopoverFooter', function () {
  test('basic ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Basic["default"], null));
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
  test('with using prop close ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FooterClose["default"], null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('with children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FooterWithChildren["default"], null));
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
  });
});
//# sourceMappingURL=PopoverFooter.spec.js.map