function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { useMemo } from 'react';
import { getWindowedListBoundaries } from './getWindowedListBoundaries';
import { useCallbackRef } from './useCallbackRef';
import { useMeasuredElement } from './useMeasuredElement';
import { useScrollPosition } from './useScrollPosition';
export const useWindow = ({
  itemCount,
  enabled,
  itemHeight,
  ref,
  spacerTag
}) => {
  const [containerElement, callbackRef] = useCallbackRef(ref);
  const [{
    height
  }] = useMeasuredElement(enabled ? containerElement : null);
  const scrollPosition = useScrollPosition(enabled ? containerElement : null);
  const windowOptions = useMemo(() => {
    return getWindowedListBoundaries({
      enabled,
      height,
      itemCount,
      itemHeight,
      scrollPosition,
      spacerTag
    });
  }, [enabled, itemCount, height, itemHeight, scrollPosition, spacerTag]);
  return _objectSpread(_objectSpread({}, windowOptions), {}, {
    ref: callbackRef
  });
};
//# sourceMappingURL=useWindow.js.map