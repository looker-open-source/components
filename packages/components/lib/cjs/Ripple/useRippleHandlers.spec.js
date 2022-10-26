"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _useRippleHandlers = require("./useRippleHandlers");

var RippleHandlersComponent = function RippleHandlersComponent(_ref) {
  var callbacks = _ref.callbacks,
      currentHandlers = _ref.currentHandlers,
      disabled = _ref.disabled;
  var handlers = (0, _useRippleHandlers.useRippleHandlers)(callbacks, currentHandlers, disabled);
  return _react2["default"].createElement("button", handlers);
};

var callbackMocks = {
  endBG: jest.fn(),
  endFG: jest.fn(),
  startBG: jest.fn(),
  startFG: jest.fn()
};
var handlerMocks = {
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onKeyDown: jest.fn(),
  onKeyUp: jest.fn(),
  onMouseDown: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn(),
  onMouseUp: jest.fn()
};
afterEach(function () {
  jest.clearAllMocks();
});
describe('useRippleHandlers', function () {
  test('maps handlers', function () {
    (0, _react.render)(_react2["default"].createElement(RippleHandlersComponent, {
      callbacks: callbackMocks,
      currentHandlers: handlerMocks
    }));

    var button = _react.screen.getByRole('button');

    _react.fireEvent.mouseEnter(button);

    expect(callbackMocks.startBG).toHaveBeenCalledTimes(1);
    expect(handlerMocks.onMouseEnter).toHaveBeenCalledTimes(1);

    _react.fireEvent.mouseLeave(button);

    expect(callbackMocks.endBG).toHaveBeenCalledTimes(1);
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(1);
    expect(handlerMocks.onMouseLeave).toHaveBeenCalledTimes(1);

    _react.fireEvent.focus(button);

    expect(callbackMocks.startBG).toHaveBeenCalledTimes(2);
    expect(handlerMocks.onFocus).toHaveBeenCalledTimes(1);

    _react.fireEvent.blur(button);

    expect(callbackMocks.endBG).toHaveBeenCalledTimes(2);
    expect(handlerMocks.onBlur).toHaveBeenCalledTimes(1);

    _react.fireEvent.mouseDown(button);

    expect(callbackMocks.startFG).toHaveBeenCalledTimes(1);
    expect(handlerMocks.onMouseDown).toHaveBeenCalledTimes(1);

    _react.fireEvent.mouseUp(button);

    expect(callbackMocks.endFG).toHaveBeenCalledTimes(2);
    expect(handlerMocks.onMouseUp).toHaveBeenCalledTimes(1);

    _react.fireEvent.keyDown(button, {
      key: 'Enter'
    });

    expect(callbackMocks.startFG).toHaveBeenCalledTimes(2);

    _react.fireEvent.keyDown(button, {
      key: ' '
    });

    expect(callbackMocks.startFG).toHaveBeenCalledTimes(3);
    expect(handlerMocks.onKeyDown).toHaveBeenCalledTimes(2);

    _react.fireEvent.keyUp(button);

    expect(callbackMocks.endFG).toHaveBeenCalledTimes(3);
    expect(handlerMocks.onKeyUp).toHaveBeenCalledTimes(1);
  });
  test('disabled', function () {
    (0, _react.render)(_react2["default"].createElement(RippleHandlersComponent, {
      callbacks: callbackMocks,
      currentHandlers: handlerMocks,
      disabled: true
    }));

    var button = _react.screen.getByRole('button');

    _react.fireEvent.mouseEnter(button);

    _react.fireEvent.mouseLeave(button);

    _react.fireEvent.focus(button);

    _react.fireEvent.blur(button);

    _react.fireEvent.mouseDown(button);

    _react.fireEvent.mouseUp(button);

    _react.fireEvent.keyDown(button, {
      key: 'Enter'
    });

    _react.fireEvent.keyDown(button, {
      key: ' '
    });

    _react.fireEvent.keyUp(button);

    expect(callbackMocks.startBG).not.toHaveBeenCalled();
    expect(callbackMocks.endBG).not.toHaveBeenCalled();
    expect(callbackMocks.startFG).not.toHaveBeenCalled();
    expect(callbackMocks.endFG).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseEnter).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseLeave).not.toHaveBeenCalled();
    expect(handlerMocks.onFocus).not.toHaveBeenCalled();
    expect(handlerMocks.onBlur).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseDown).not.toHaveBeenCalled();
    expect(handlerMocks.onMouseUp).not.toHaveBeenCalled();
    expect(handlerMocks.onKeyDown).not.toHaveBeenCalled();
    expect(handlerMocks.onKeyUp).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=useRippleHandlers.spec.js.map