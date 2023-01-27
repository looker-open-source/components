"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("jest-styled-components");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _index = require("./stories/index.stories");
var _DialogHeader = require("./DialogHeader");

describe('DialogHeader', function () {
  test('basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));
    expect(_react2.screen.getByText('Heading')).toBeInTheDocument();
  });
  test('Close visible by default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Basic, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('Detail text visible', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Detail, null));
    expect(_react2.screen.getByText('Detail text')).toBeInTheDocument();
  });
  test('hideClose', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.HideClose, null));
    expect(_react2.screen.queryByText('Close')).not.toBeInTheDocument();
  });
  test('aria-label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader.DialogHeader, {
      "aria-label": "label test"
    }, "Hello World"));
    expect(_react2.screen.getByLabelText('label test')).toBeInTheDocument();
  });
  test('detail = null, no close option', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogHeader.DialogHeader, {
      detail: null
    }, "Hello World"));
    expect(_react2.screen.queryByText('Close')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=DialogHeader.spec.js.map