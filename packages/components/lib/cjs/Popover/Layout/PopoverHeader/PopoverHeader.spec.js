"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _PopoverHeader = require("./PopoverHeader.stories");

describe('PopoverHeader', function () {
  test('Close visible by default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverHeader.Basic, null));
    expect(_react2.screen.getByText('Header Text')).toBeInTheDocument();
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('hideClose', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverHeader.HideClose, null));
    expect(_react2.screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
  test('hidden header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PopoverHeader.Hidden, null));

    var hiddenHeader = _react2.screen.getByText('Header Text');

    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
});
//# sourceMappingURL=PopoverHeader.spec.js.map