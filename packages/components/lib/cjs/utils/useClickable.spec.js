"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _useClickable2 = require("./useClickable");

var _excluded = ["focusVisible"];

var ClickableComponent = function ClickableComponent(props) {
  var _useClickable = (0, _useClickable2.useClickable)(props),
      focusVisible = _useClickable.focusVisible,
      clickableProps = (0, _objectWithoutProperties2["default"])(_useClickable, _excluded);

  return _react2["default"].createElement("div", (0, _extends2["default"])({}, clickableProps, {
    "data-testid": "wrapper"
  }), "focusVisible: ", focusVisible.toString());
};

describe('useClickable', function () {
  describe('role', function () {
    test('undefined if no onClick', function () {
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, null));
      expect(_react.screen.queryByRole('button')).not.toBeInTheDocument();
    });
    test('button if onClick and absent in props', function () {
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        onClick: function onClick() {
          return null;
        }
      }));
      expect(_react.screen.getByRole('button')).toBeVisible();
    });
    test('overwrite-able', function () {
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        onClick: function onClick() {
          return null;
        },
        role: "option"
      }));
      expect(_react.screen.getByRole('option')).toBeVisible();
    });
  });
  test('focusVisible', function () {
    (0, _react.render)(_react2["default"].createElement(ClickableComponent, null));

    var wrapper = _react.screen.getByTestId('wrapper');

    expect(wrapper).toHaveTextContent('focusVisible: false');

    _react.fireEvent.focus(wrapper);

    expect(wrapper).toHaveTextContent('focusVisible: false');

    _react.fireEvent.keyUp(wrapper, {
      key: 'ArrowUp'
    });

    expect(wrapper).toHaveTextContent('focusVisible: true');

    _react.fireEvent.blur(wrapper);

    expect(wrapper).toHaveTextContent('focusVisible: false');

    _react.fireEvent.focus(wrapper);

    _react.fireEvent.keyUp(wrapper, {
      key: 'Tab'
    });

    expect(wrapper).toHaveTextContent('focusVisible: true');
  });
  describe('tabIndex', function () {
    test('0 by default', function () {
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, null));
      expect(_react.screen.getByTestId('wrapper')).toHaveAttribute('tabindex', '0');
    });
    test('undefined when disabled', function () {
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        disabled: true
      }));
      expect(_react.screen.getByTestId('wrapper')).not.toHaveAttribute('tabindex');
    });
  });
  describe('onClick', function () {
    test('not called if disabled', function () {
      var onClickMock = jest.fn();
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        onClick: onClickMock,
        disabled: true
      }));

      _react.fireEvent.click(_react.screen.getByTestId('wrapper'));

      expect(onClickMock).not.toHaveBeenCalled();
    });
    test('called on click', function () {
      var onClickMock = jest.fn();
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        onClick: onClickMock
      }));

      _react.fireEvent.click(_react.screen.getByTestId('wrapper'));

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
    test('called on enter keyup', function () {
      var onClickMock = jest.fn();
      var onKeyUpMock = jest.fn();
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        onClick: onClickMock,
        onKeyUp: onKeyUpMock
      }));

      _react.fireEvent.keyUp(_react.screen.getByTestId('wrapper'), {
        key: 'Enter'
      });

      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onKeyUpMock).toHaveBeenCalledTimes(1);
    });
    test('called on space keyup', function () {
      var onClickMock = jest.fn();
      var onKeyUpMock = jest.fn();
      (0, _react.render)(_react2["default"].createElement(ClickableComponent, {
        onClick: onClickMock,
        onKeyUp: onKeyUpMock
      }));

      _react.fireEvent.keyUp(_react.screen.getByTestId('wrapper'), {
        key: ' '
      });

      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onKeyUpMock).toHaveBeenCalledTimes(1);
    });
  });
});
//# sourceMappingURL=useClickable.spec.js.map