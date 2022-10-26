"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DialogFooter = require("./DialogFooter.stories");

describe('DialogFooter', function () {
  test('basic ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogFooter.Basic, null));
    expect(_react2.screen.getByText('Footer Text')).toBeInTheDocument();
  });
  test('secondary', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogFooter.Secondary, null));
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
    expect(_react2.screen.getByText('Footer Text')).toBeInTheDocument();
  });
});
//# sourceMappingURL=DialogFooter.spec.js.map