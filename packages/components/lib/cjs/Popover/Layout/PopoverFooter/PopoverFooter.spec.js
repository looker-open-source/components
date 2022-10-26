"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _PopoverFooter = require("./PopoverFooter.stories");

describe('PopoverFooter', function () {
  test('basic ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverFooter.Basic, null));
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
  test('with using prop close ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverFooter.FooterClose, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('with children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverFooter.FooterWithChildren, null));
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
  });
});
//# sourceMappingURL=PopoverFooter.spec.js.map