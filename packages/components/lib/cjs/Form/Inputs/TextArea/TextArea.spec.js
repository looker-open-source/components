"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TextArea = require("./TextArea");

describe('TextArea', function () {
  test('with placeholder', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      placeholder: "this is a placeholder"
    }));
    expect(_react2.screen.getByPlaceholderText('this is a placeholder')).toBeInTheDocument();
  });
  test('should accept disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      disabled: true
    }));
    expect(_react2.screen.getByRole('textbox')).toBeDisabled();
  });
  test('with an error validation', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      validationType: "error"
    }));
    expect(_react2.screen.getByRole('textbox')).toBeInvalid();
  });
  test('TextArea resizes with prop resize = true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      resize: true
    }));
    expect(_react2.screen.getByRole('textbox')).toHaveStyle('resize: vertical');
  });
  test('TextArea resizes with prop resize = false', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      resize: false
    }));
    expect(_react2.screen.getByRole('textbox')).toHaveStyle('resize: none');
  });
  test('TextArea resizes with prop resize = none', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      resize: "none"
    }));
    expect(_react2.screen.getByRole('textbox')).toHaveStyle('resize: none');
  });
  test('TextArea resizes with prop resize = vertical', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TextArea.TextArea, {
      resize: "vertical"
    }));
    expect(_react2.screen.getByRole('textbox')).toHaveStyle('resize: vertical');
  });
});
//# sourceMappingURL=TextArea.spec.js.map