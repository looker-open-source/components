import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["required", "validationType"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import omit from 'lodash/omit';
import pick from 'lodash/pick';
const ariaKeys = ['aria-describedby', 'aria-invalid', 'aria-label', 'aria-labelledby'];
export function pickAriaAndValidationProps(_ref) {
  let {
    required,
    validationType
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const ariaProps = pick(props, ariaKeys);
  return _objectSpread(_objectSpread({}, ariaProps), {}, {
    'aria-invalid': validationType === 'error',
    required
  });
}
export function omitAriaAndValidationProps(props) {
  return omit(props, [...ariaKeys, 'validationType', 'required']);
}
//# sourceMappingURL=ariaProps.js.map