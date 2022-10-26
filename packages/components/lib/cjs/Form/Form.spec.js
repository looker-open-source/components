"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _react2 = require("@testing-library/react");

var _Button = require("../Button/Button");

var _FieldText = require("./Fields/FieldText/FieldText");

var _Form = require("./Form");

describe('Form', function () {
  test('two invalid children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Form.Form, {
      validationMessages: {
        name1: {
          message: 'e1',
          type: 'error'
        },
        name2: {
          message: 'e2',
          type: 'error'
        }
      }
    }, _react["default"].createElement(_FieldText.FieldText, {
      label: "label1",
      id: "text-field",
      name: "name1"
    }), _react["default"].createElement(_FieldText.FieldText, {
      label: "label2",
      id: "text-field",
      name: "name2"
    })));
    expect(_react2.screen.getByText('e1')).toBeInTheDocument();
    expect(_react2.screen.getByText('e2')).toBeInTheDocument();
  });
  test('with one invalid child and a submit button', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Form.Form, {
      validationMessages: {
        name2: {
          message: 'e2',
          type: 'error'
        }
      }
    }, _react["default"].createElement(_FieldText.FieldText, {
      label: "label1",
      id: "text-field",
      name: "name1"
    }), _react["default"].createElement(_FieldText.FieldText, {
      label: "label2",
      id: "text-field",
      name: "name2"
    }), _react["default"].createElement(_Button.Button, null, "Submit")));
    expect(_react2.screen.getByText('e2')).toBeInTheDocument();
  });
  test('Should trigger onInput handler', function () {
    var onInput = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Form.Form, {
      onInput: onInput
    }, _react["default"].createElement(_FieldText.FieldText, {
      label: "label",
      id: "text-field",
      name: "name"
    })));

    _userEvent["default"].type(_react2.screen.getByRole('textbox'), 'hi');

    expect(onInput).toHaveBeenCalledTimes(2);
  });
  test('Should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Form.Form, {
      onChange: onChange
    }, _react["default"].createElement(_FieldText.FieldText, {
      label: "label",
      id: "text-field",
      name: "name"
    })));

    _userEvent["default"].type(_react2.screen.getByRole('textbox'), 'hi');

    expect(onChange).toHaveBeenCalledTimes(2);
  });
  test.skip('Should trigger onSubmit handler', function () {
    var onSubmit = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Form.Form, {
      onSubmit: onSubmit
    }, _react["default"].createElement(_FieldText.FieldText, {
      label: "label",
      id: "text-field",
      name: "name"
    }), _react["default"].createElement(_Button.Button, {
      type: "submit"
    }, "Submit")));

    _userEvent["default"].click(_react2.screen.getByRole('button'));

    expect(onSubmit).toHaveBeenCalled();
  });
});
//# sourceMappingURL=Form.spec.js.map