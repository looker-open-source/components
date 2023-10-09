const _excluded = ["onClick", "disabled", "role"],
  _excluded2 = ["onKeyUp"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { useMemo } from 'react';
import { useFocusVisible } from './useFocusVisible';
export function useClickable(_ref) {
  let {
      onClick,
      disabled,
      role
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const _useFocusVisible = useFocusVisible(rest),
    {
      onKeyUp
    } = _useFocusVisible,
    focusVisibleProps = _objectWithoutProperties(_useFocusVisible, _excluded2);
  return useMemo(() => _objectSpread(_objectSpread({
    disabled
  }, focusVisibleProps), {}, {
    onClick: e => {
      if (!disabled) {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
      }
    },
    onKeyUp: e => {
      const shouldHandle = !disabled && e.currentTarget === e.target;
      if (shouldHandle) {
        switch (e.key) {
          case 'Enter':
          case ' ':
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
            break;
        }
      }
      onKeyUp(e);
    },
    role: role || (onClick ? 'button' : undefined),
    tabIndex: disabled ? undefined : 0
  }), [disabled, role, onClick, onKeyUp, focusVisibleProps]);
}
//# sourceMappingURL=useClickable.js.map