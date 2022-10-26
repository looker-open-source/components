import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["autoFocus"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pick from 'lodash/pick';
export const inputPropKeys = ['accept', 'autoFocus', 'autoComplete', 'checked', 'data-autofocus', 'data-testid', 'defaultValue', 'defaultChecked', 'disabled', 'id', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'onBlur', 'onChange', 'onClick', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onFocus', 'onKeyDown', 'onKeyPress', 'onPaste', 'placeholder', 'readOnly', 'required', 'pattern', 'step', 'tabIndex', 'value', 'aria-activedescendant', 'aria-autocomplete', 'aria-invalid', 'aria-label', 'aria-describedby', 'aria-labelledby'];
export const getAutoFocusProps = autoFocus => {
  return autoFocus ? {
    autoFocus,
    'data-autofocus': 'true'
  } : {};
};
export const pickInputProps = _ref => {
  let {
    autoFocus
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const inputProps = pick(props, inputPropKeys);
  return _objectSpread(_objectSpread({}, getAutoFocusProps(autoFocus)), inputProps);
};
//# sourceMappingURL=InputProps.js.map