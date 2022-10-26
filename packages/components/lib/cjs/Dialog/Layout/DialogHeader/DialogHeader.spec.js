"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DialogHeader = require("./DialogHeader.stories");

var _DialogHeader2 = require("./DialogHeader");

describe('DialogHeader', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader.Basic, null));
    expect(_react2.screen.getByText('Heading')).toBeInTheDocument();
  });
  test('Close visible by default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader.Basic, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('Detail text visible', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader.Detail, null));
    expect(_react2.screen.getByText('Detail text')).toBeInTheDocument();
  });
  test('hideClose', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader.HideClose, null));
    expect(_react2.screen.queryByText('Close')).not.toBeInTheDocument();
  });
  test('aria-label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader2.DialogHeader, {
      "aria-label": "label test"
    }, "Hello World"));
    expect(_react2.screen.getByLabelText('label test')).toBeInTheDocument();
  });
  test('detail = null, no close option', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader2.DialogHeader, {
      detail: null
    }, "Hello World"));
    expect(_react2.screen.queryByText('Close')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=DialogHeader.spec.js.map