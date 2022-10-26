import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["ref"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useMeasuredElement, useCallbackRef } from '../utils';
import { useRipple } from './useRipple';
export const useBoundedRipple = _ref => {
  let {
    ref: forwardedRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [element, ref] = useCallbackRef(forwardedRef);
  const [{
    height,
    width
  }] = useMeasuredElement(element);
  const result = useRipple(_objectSpread(_objectSpread({}, props), {}, {
    bounded: true,
    height,
    width
  }));
  return _objectSpread(_objectSpread({}, result), {}, {
    ref
  });
};
//# sourceMappingURL=useBoundedRipple.js.map