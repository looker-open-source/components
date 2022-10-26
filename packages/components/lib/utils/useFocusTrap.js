import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["clickOutsideDeactivates"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useMemo, useRef } from 'react';
import { FocusTrapContext } from '@looker/components-providers';
import { useTrapStack } from './useTrapStack';
export const useFocusTrap = _ref => {
  let {
    clickOutsideDeactivates
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const returnFocusRef = useRef(null);
  const options = useMemo(() => ({
    clickOutsideDeactivates,
    returnFocusRef
  }), [returnFocusRef, clickOutsideDeactivates]);
  return useTrapStack(_objectSpread({
    context: FocusTrapContext,
    options
  }, props));
};
//# sourceMappingURL=useFocusTrap.js.map