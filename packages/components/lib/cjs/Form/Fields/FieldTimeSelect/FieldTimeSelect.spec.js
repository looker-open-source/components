"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldTimeSelect = require("./FieldTimeSelect");

describe('FieldTimeSelect', function () {
  test('should associate label and input field', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTimeSelect.FieldTimeSelect, {
      label: "Field Time Label",
      id: "field-time-select",
      interval: 10
    }));
    expect(_react2.screen.getByLabelText('Field Time Label').tagName).toEqual('INPUT');
  });
  test('should accept required attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTimeSelect.FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10,
      required: true
    }));
    expect(_react2.screen.getByText('required')).toBeVisible();
  });
  test('should display error message', function () {
    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTimeSelect.FieldTimeSelect, {
      id: "field-time-select",
      interval: 10,
      label: "Label",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(_react2.screen.getByText('This is an error')).toBeVisible();
  });
  test('should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTimeSelect.FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10,
      onChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Label'));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Label'), {
      target: {
        value: '2pm'
      }
    });

    _react2.fireEvent.keyDown(_react2.screen.getByLabelText('Label'), {
      key: 'Enter'
    });

    expect(onChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(document);
  });
  test('should display error message for invalid time input', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTimeSelect.FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Label'));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Label'), {
      target: {
        value: 'invalid time'
      }
    });

    _react2.fireEvent.keyDown(_react2.screen.getByLabelText('Label'), {
      key: 'Enter'
    });

    expect(_react2.screen.getAllByText('Please use format HH:MM')[0]).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('should reset any format errors on blur', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTimeSelect.FieldTimeSelect, {
      label: "Label",
      id: "field-time-select",
      interval: 10
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Label'));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Label'), {
      target: {
        value: 'invalid time'
      }
    });

    _react2.fireEvent.keyDown(_react2.screen.getByLabelText('Label'), {
      key: 'Enter'
    });

    expect(_react2.screen.getAllByText('Please use format HH:MM')[0]).toBeInTheDocument();

    _react2.fireEvent.click(document);

    _react2.fireEvent.blur(_react2.screen.getByLabelText('Label'));

    var errorMessage = _react2.screen.queryByText('Please use format HH:MM');

    expect(errorMessage).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=FieldTimeSelect.spec.js.map