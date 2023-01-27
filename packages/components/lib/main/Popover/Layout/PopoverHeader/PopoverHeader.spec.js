"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("jest-styled-components");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Basic = _interopRequireDefault(require("./stories/Basic"));
var _HideClose = _interopRequireDefault(require("./stories/HideClose"));
var _Hidden = _interopRequireDefault(require("./stories/Hidden"));

describe('PopoverHeader', function () {
  test('Close visible by default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Basic["default"], null));
    expect(_react2.screen.getByText('Header Text')).toBeInTheDocument();
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('hideClose', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_HideClose["default"], null));
    expect(_react2.screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
  test('hidden header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Hidden["default"], null));
    var hiddenHeader = _react2.screen.getByText('Header Text');
    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
});
//# sourceMappingURL=PopoverHeader.spec.js.map