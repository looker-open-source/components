"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClickable = useClickable;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _useFocusVisible2 = require("./useFocusVisible");

var _excluded = ["onClick", "disabled", "role"],
    _excluded2 = ["onKeyUp"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useClickable(_ref) {
  var _onClick = _ref.onClick,
      disabled = _ref.disabled,
      role = _ref.role,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useFocusVisible = (0, _useFocusVisible2.useFocusVisible)(rest),
      _onKeyUp = _useFocusVisible.onKeyUp,
      focusVisibleProps = (0, _objectWithoutProperties2["default"])(_useFocusVisible, _excluded2);

  return (0, _react.useMemo)(function () {
    return _objectSpread(_objectSpread({
      disabled: disabled
    }, focusVisibleProps), {}, {
      onClick: function onClick(e) {
        if (!disabled) {
          _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);
        }
      },
      onKeyUp: function onKeyUp(e) {
        var shouldHandle = !disabled && e.currentTarget === e.target;

        if (shouldHandle) {
          switch (e.key) {
            case 'Enter':
            case ' ':
              _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);
              break;
          }
        }

        _onKeyUp(e);
      },
      role: role || (_onClick ? 'button' : undefined),
      tabIndex: disabled ? undefined : 0
    });
  }, [disabled, role, _onClick, _onKeyUp, focusVisibleProps]);
}
//# sourceMappingURL=useClickable.js.map