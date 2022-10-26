"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldRadio = require("./FieldRadio");

describe('FieldRadio', function () {
  test('FieldRadio renders with label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRadio.FieldRadio, {
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp"
    }));
    expect(_react2.screen.getByLabelText('FM')).toBeInTheDocument();
  });
  test('FieldRadio renders description and detail props', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRadio.FieldRadio, {
      description: "describe something here.",
      detail: "0/50",
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp"
    }));
    expect(_react2.screen.getByText('describe something here.')).toBeInTheDocument();
    expect(_react2.screen.getByText('0/50')).toBeInTheDocument();
  });
  test('FieldRadio renders disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRadio.FieldRadio, {
      disabled: true,
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp"
    }));

    var RadioInput = _react2.screen.getByRole('radio');

    expect(RadioInput).toBeDisabled();
  });
  test('FieldRadio renders with error message', function () {
    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRadio.FieldRadio, {
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(_react2.screen.getByText('This is an error')).toBeInTheDocument();
  });
});
//# sourceMappingURL=FieldRadio.spec.js.map