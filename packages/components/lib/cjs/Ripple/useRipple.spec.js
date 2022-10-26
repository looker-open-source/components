"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsProviders = require("@looker/components-providers");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _useRipple2 = require("./useRipple");

var RippleComponent = function RippleComponent(props) {
  var _useRipple = (0, _useRipple2.useRipple)(props),
      _useRipple$callbacks = _useRipple.callbacks,
      startBG = _useRipple$callbacks.startBG,
      endBG = _useRipple$callbacks.endBG,
      startFG = _useRipple$callbacks.startFG,
      endFG = _useRipple$callbacks.endFG,
      className = _useRipple.className,
      style = _useRipple.style;

  return _react2["default"].createElement("div", null, _react2["default"].createElement("div", {
    "data-testid": "startBG",
    onClick: startBG
  }), _react2["default"].createElement("div", {
    "data-testid": "endBG",
    onClick: endBG
  }), _react2["default"].createElement("div", {
    "data-testid": "startFG",
    onClick: startFG
  }), _react2["default"].createElement("div", {
    "data-testid": "endFG",
    onClick: endFG
  }), _react2["default"].createElement("div", {
    "data-testid": "className"
  }, className), _react2["default"].createElement("div", {
    style: style
  }, "style"));
};

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  (0, _react.act)(function () {
    jest.runOnlyPendingTimers();
  });
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('useRipple', function () {
  test('animation values', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, null));
    expect(_react.screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
  });
  test('bounded animation values', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, {
      bounded: true,
      height: 30,
      width: 360
    }));
    expect(_react.screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'hidden',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0'
    });
  });
  test('color animation values', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, {
      color: "key"
    }));
    expect(_react.screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
  });
  test('theme setting brandAnimation false', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
      themeCustomizations: {
        defaults: {
          brandAnimation: false
        }
      }
    }, _react2["default"].createElement(RippleComponent, {
      color: "key"
    })));
    expect(_react.screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
  });
  test('callbacks control className', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, null));
    expect(_react.screen.getByTestId('className')).toHaveTextContent('');

    _react.fireEvent.click(_react.screen.getByTestId('startBG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on');

    _react.fireEvent.click(_react.screen.getByTestId('startFG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on fg-in');

    _react.fireEvent.click(_react.screen.getByTestId('endFG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on fg-in');
    runTimers();
    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on fg-out');
    runTimers();
    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on');

    _react.fireEvent.click(_react.screen.getByTestId('endBG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('');
  });
  test('long press', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, null));
    expect(_react.screen.getByTestId('className')).toHaveTextContent('');

    _react.fireEvent.click(_react.screen.getByTestId('startBG'));

    _react.fireEvent.click(_react.screen.getByTestId('startFG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on fg-in');
    runTimers();

    _react.fireEvent.click(_react.screen.getByTestId('endFG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on fg-out');
  });
  test('tab keyup', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, null));

    _react.fireEvent.click(_react.screen.getByTestId('startBG'));

    _react.fireEvent.click(_react.screen.getByTestId('endFG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on');
  });
  test('"double on" background behavior', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(RippleComponent, null));
    expect(_react.screen.getByTestId('className')).toHaveTextContent('');

    _react.fireEvent.click(_react.screen.getByTestId('startBG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on');

    _react.fireEvent.click(_react.screen.getByTestId('startBG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on');

    _react.fireEvent.click(_react.screen.getByTestId('endBG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('bg-on');

    _react.fireEvent.click(_react.screen.getByTestId('endBG'));

    expect(_react.screen.getByTestId('className')).toHaveTextContent('');
  });
});
//# sourceMappingURL=useRipple.spec.js.map