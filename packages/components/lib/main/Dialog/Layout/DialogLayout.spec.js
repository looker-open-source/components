"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _Constitution = require("../../fixtures/Constitution");
var _index = require("./stories/index.stories");
var _DialogLayout = require("./DialogLayout");

describe('DialogLayout', function () {
  test('Basic ', function () {
    (0, _react2.render)(_react["default"].createElement(_index.Basic, null));
    expect(_react2.screen.getByText(/Lorem Ipsum is simply dummy text/)).toBeInTheDocument();
  });
  test('Replaces the built-in `IconButton` with an arbitrary ReactNode', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.HeaderDetail, null));
    expect(_react2.screen.getByText('Header text')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
  });
  test('HeaderCloseButton ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.HeaderCloseButton, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('FooterSecondary ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogLayout.DialogLayout, {
      footerSecondary: "Cancel",
      footer: "Footer text"
    }, _react["default"].createElement(_Constitution.ConstitutionShort, null)));
    expect(_react2.screen.getByText('Footer text')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
  });
  test('FooterSecondary without footer causes TS Exception', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogLayout.DialogLayout, {
      footerSecondary: "problem"
    }));
  });
});
//# sourceMappingURL=DialogLayout.spec.js.map