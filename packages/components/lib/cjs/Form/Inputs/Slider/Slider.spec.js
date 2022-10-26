"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Slider = require("./Slider");

describe('Slider', function () {
  test('Enforces that input value can never go above `max` prop value', function () {
    var props = {
      max: 1,
      value: 2
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, props));

    var input = _react2.screen.getByTestId('slider-input');

    expect(parseInt(input.value)).toEqual(props.max);
  });
  test('Enforces that input value can never go below `min` prop value', function () {
    var props = {
      min: 5,
      value: 1
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, props));

    var input = _react2.screen.getByTestId('slider-input');

    expect(parseInt(input.value)).toEqual(props.min);
  });
  test('Slider value can be a numeric string', function () {
    var value = '2';
    var props = {
      min: 1,
      value: value
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, props));

    var input = _react2.screen.getByTestId('slider-input');

    expect(input.value).toEqual(value);
  });
  test('Slider calls console.error if value is a non-numeric string', function () {
    var consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    var value = 'I am not numeric';
    var props = {
      min: 1,
      value: value
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, props));

    var input = _react2.screen.getByTestId('slider-input');

    expect(parseInt(input.value)).toEqual(props.min);
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
  test('Slider with name and id', function () {
    var props = {
      id: 'Slip',
      name: 'Slide'
    };
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, props));

    var input = _react2.screen.getByTestId('slider-input');

    expect(input).toHaveAttribute('id', props.id);
    expect(input).toHaveAttribute('name', props.name);
  });
  test('Slider input can be disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, {
      disabled: true
    }));

    var input = _react2.screen.getByTestId('slider-input');

    expect(input).toBeDisabled();
  });
  test('Accessibility: Slider with aria-labelledby and <label>', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("label", {
      id: "some-id"
    }, "Slider Label"), _react["default"].createElement(_Slider.Slider, {
      "aria-labelledby": "some-id"
    })));
    expect(_react2.screen.getByLabelText('Slider Label')).toEqual(_react2.screen.getByTestId('slider-input'));
  });
  test('Slider passes change event to optional onChange handler', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, {
      min: 0,
      max: 10,
      onChange: handleChange
    }));
    expect(handleChange).toHaveBeenCalledTimes(0);

    _react2.fireEvent.change(_react2.screen.getByTestId('slider-input'), {
      target: {
        value: 10
      }
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  test('renders focus styles on keypress', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Slider.Slider, null));

    _react2.fireEvent.keyUp(_react2.screen.getByTestId('container'), {
      key: 'Tab',
      keyCode: 9
    });

    expect(_react2.screen.getByTestId('slider-input')).toHaveStyleRule('border-width: 5px;');
  });
});
//# sourceMappingURL=Slider.spec.js.map