"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClickable = useClickable;
var _react = require("react");
var _useFocusVisible2 = require("./useFocusVisible");
var _excluded = ["onClick", "disabled", "role"],
  _excluded2 = ["onKeyUp"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useClickable(_ref) {
  var _onClick = _ref.onClick,
    disabled = _ref.disabled,
    role = _ref.role,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useFocusVisible = (0, _useFocusVisible2.useFocusVisible)(rest),
    _onKeyUp = _useFocusVisible.onKeyUp,
    focusVisibleProps = _objectWithoutProperties(_useFocusVisible, _excluded2);
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