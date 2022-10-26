"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _RangeSlider = require("./RangeSlider");

var _RangeSlider2 = require("./RangeSlider.stories");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var globalConsole = global.console;
var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(function () {
  jest.useFakeTimers();
  global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
    warn: jest.fn()
  });
  Element.prototype.getBoundingClientRect = jest.fn(function () {
    return {
      bottom: 0,
      height: 30,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 360,
      x: 0,
      y: 0
    };
  });
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.resetAllMocks();
  global.console = globalConsole;
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

test('it selects the entire range by default', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    onChange: handleChange,
    min: 5,
    max: 100
  }));

  var minThumb = _react2.screen.getByLabelText('Minimum Value');

  var maxThumb = _react2.screen.getByLabelText('Maximum Value');

  expect(minThumb).toHaveAttribute('aria-valuenow', '5');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100');
});
test('warns the developer if value prop falls outside of possible min/max range', function () {
  expect(console.warn).not.toHaveBeenCalled();
  var handleChange = jest.fn();

  var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    value: [0, 1000],
    min: 10,
    max: 20,
    onChange: handleChange
  })),
      rerender = _renderWithTheme.rerender;

  expect(console.warn).toHaveBeenCalled();
  expect(handleChange).toHaveBeenCalledWith([10, 20]);
  rerender((0, _componentsTestUtils.withThemeProvider)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    onChange: handleChange,
    min: 10,
    max: 20,
    value: [-1, 1]
  })));
  expect(handleChange).toHaveBeenCalledWith([10, 10]);
});
test('fires onChange callback on mouseMove', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    onChange: handleChange
  }));

  var wrapper = _react2.screen.getByTestId('range-slider-wrapper');

  _react2.fireEvent.mouseDown(wrapper);

  runTimers();

  _react2.fireEvent.mouseMove(wrapper, {
    clientX: 100,
    clientY: 10
  });

  _react2.fireEvent.mouseUp(wrapper);

  runTimers();
  expect(handleChange).toHaveBeenLastCalledWith([3, 10]);
});
test('fires onChange callback on touchMove', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    onChange: handleChange
  }));

  var wrapper = _react2.screen.getByTestId('range-slider-wrapper');

  _react2.fireEvent.touchStart(wrapper);

  runTimers();

  _react2.fireEvent.touchMove(wrapper, {
    touches: [{
      clientX: 100,
      clientY: 10
    }]
  });

  _react2.fireEvent.touchEnd(wrapper);

  runTimers();
  expect(handleChange).toHaveBeenLastCalledWith([3, 10]);
});
test('increments point by STEP value during keyboard navigation', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    onChange: handleChange,
    min: 0,
    max: 100,
    step: 10
  }));

  var minThumb = _react2.screen.getByLabelText('Minimum Value');

  var maxThumb = _react2.screen.getByLabelText('Maximum Value');

  expect(minThumb).toHaveAttribute('aria-valuenow', '0');
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100');
  minThumb.focus();

  _react2.fireEvent.keyDown(document.activeElement, {
    key: 'ArrowUp'
  });

  expect(handleChange).toHaveBeenLastCalledWith([10, 100]);

  _react2.fireEvent.keyDown(document.activeElement, {
    key: 'ArrowRight'
  });

  expect(handleChange).toHaveBeenLastCalledWith([20, 100]);
  maxThumb.focus();

  _react2.fireEvent.keyDown(document.activeElement, {
    key: 'ArrowLeft'
  });

  expect(handleChange).toHaveBeenLastCalledWith([20, 90]);

  _react2.fireEvent.keyDown(document.activeElement, {
    key: 'ArrowDown'
  });

  expect(handleChange).toHaveBeenLastCalledWith([20, 80]);
});
test('prevents value from going outside of min/max range', function () {
  var handleChange = jest.fn();
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
    onChange: handleChange,
    min: 9,
    max: 10,
    value: [0, 100]
  }));
  expect(handleChange).toHaveBeenCalledWith([9, 10]);
});
describe('readOnly prop', function () {
  test('readOnly component does not respond to MOUSE input', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
      onChange: handleChange,
      readOnly: true
    }));

    var wrapper = _react2.screen.getByTestId('range-slider-wrapper');

    _react2.fireEvent.mouseDown(wrapper);

    runTimers();

    _react2.fireEvent.mouseMove(wrapper, {
      clientX: 100,
      clientY: 10
    });

    expect(handleChange).not.toHaveBeenCalled();
  });
  test('readOnly component does not respond to KEYBOARD input', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
      onChange: handleChange,
      min: 0,
      max: 10,
      readOnly: true
    }));

    var minThumb = _react2.screen.getByLabelText('Minimum Value');

    minThumb.focus();

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'ArrowUp'
    });

    expect(handleChange).not.toHaveBeenCalled();
  });
});
describe('disabled prop', function () {
  test('disabled component does not respond to MOUSE input', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
      onChange: handleChange,
      disabled: true
    }));

    var wrapper = _react2.screen.getByTestId('range-slider-wrapper');

    _react2.fireEvent.mouseDown(wrapper);

    runTimers();

    _react2.fireEvent.mouseMove(wrapper, {
      clientX: 100,
      clientY: 10
    });

    expect(handleChange).not.toHaveBeenCalled();
  });
  test('disabled component does not respond to KEYBOARD input', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
      onChange: handleChange,
      min: 0,
      max: 10,
      disabled: true
    }));

    var minThumb = _react2.screen.getByLabelText('Minimum Value');

    minThumb.focus();

    _react2.fireEvent.keyDown(document.activeElement, {
      key: 'ArrowUp'
    });

    expect(handleChange).not.toHaveBeenCalled();
  });
  test('disabled component does not respond to TOUCH input', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider.RangeSlider, {
      onChange: handleChange,
      disabled: true
    }));

    var wrapper = _react2.screen.getByTestId('range-slider-wrapper');

    _react2.fireEvent.touchStart(wrapper);

    runTimers();

    _react2.fireEvent.touchMove(wrapper, {
      touches: [{
        clientX: 100,
        clientY: 10
      }]
    });

    expect(handleChange).not.toHaveBeenCalled();
  });
  test('intermediate re-render does not cause value to revert', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_RangeSlider2.RerenderRepro, null));

    var minThumb = _react2.screen.getByLabelText('Minimum Value');

    var maxThumb = _react2.screen.getByLabelText('Maximum Value');

    expect(minThumb).toHaveAttribute('aria-valuenow', '0');
    expect(maxThumb).toHaveAttribute('aria-valuenow', '10');
    maxThumb.focus();

    _react2.fireEvent.keyDown(maxThumb, {
      key: 'ArrowRight'
    });

    expect(minThumb).toHaveAttribute('aria-valuenow', '0');
    expect(maxThumb).toHaveAttribute('aria-valuenow', '11');
  });
});
//# sourceMappingURL=RangeSlider.spec.js.map