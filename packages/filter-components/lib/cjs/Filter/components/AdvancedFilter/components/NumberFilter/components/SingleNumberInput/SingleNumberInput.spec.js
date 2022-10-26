"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _SingleNumberInput = require("./SingleNumberInput");

describe('SingleNumberInput component', function () {
  var props = {
    item: {
      id: 'test_id',
      type: '=',
      value: []
    },
    onChange: jest.fn()
  };
  beforeEach(function () {
    props.onChange.mockClear();
  });
  it('defaults to empty string', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SingleNumberInput.SingleNumberInput, props));

    var input = _react.screen.getByTestId('single-number');

    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveDisplayValue('');
  });
  it('shows the current itemValue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SingleNumberInput.SingleNumberInput, (0, _extends2["default"])({}, props, {
      item: {
        id: 'test_id',
        type: '=',
        value: 1
      }
    })));

    var input = _react.screen.getByTestId('single-number');

    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveDisplayValue('1');
  });
  describe('calls onChange handler', function () {
    it('calls onChange handler for number value', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SingleNumberInput.SingleNumberInput, props));

      var input = _react.screen.getByTestId('single-number');

      _react.fireEvent.change(input, {
        target: {
          value: '2'
        }
      });

      expect(props.onChange).toHaveBeenCalledWith('test_id', {
        value: [2]
      });
    });
    it('Does not call onChange handler for not numeric value', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SingleNumberInput.SingleNumberInput, props));

      _react.fireEvent.change(_react.screen.getByTestId('single-number'), {
        target: {
          value: 'not numeric value'
        }
      });

      expect(props.onChange).not.toHaveBeenCalled();
    });
    it('calls onChange handler for big integer', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_SingleNumberInput.SingleNumberInput, props));

      var input = _react.screen.getByTestId('single-number');

      _react.fireEvent.change(input, {
        target: {
          value: '12345678901234567890'
        }
      });

      expect(props.onChange.mock.calls).toMatchInlineSnapshot("\n        Array [\n          Array [\n            \"test_id\",\n            Object {\n              \"value\": Array [\n                12345678901234567890n,\n              ],\n            },\n          ],\n        ]\n      ");
    });
  });
});
//# sourceMappingURL=SingleNumberInput.spec.js.map