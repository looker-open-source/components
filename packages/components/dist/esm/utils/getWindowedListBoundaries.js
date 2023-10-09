function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
const initialResult = {
  after: null,
  before: null,
  end: 0,
  start: 0
};
export function getWindowedListBoundaries({
  buffer = 5,
  height,
  scrollPosition,
  enabled = true,
  itemCount,
  itemHeight,
  spacerTag = 'div'
}) {
  if (!enabled) return _objectSpread(_objectSpread({}, initialResult), {}, {
    end: itemCount - 1
  });
  if (scrollPosition === undefined || height === undefined) return initialResult;
  const top = Math.floor(scrollPosition / itemHeight);
  const bottom = Math.ceil((height + scrollPosition) / itemHeight);
  const start = top - buffer < 0 ? 0 : top - buffer;
  const end = bottom + buffer > itemCount - 1 ? itemCount - 1 : bottom + buffer;
  const afterLength = itemCount - 1 - end;
  const afterHeight = afterLength * itemHeight;
  const beforeHeight = start * itemHeight;
  const Spacer = spacerTag;
  const before = beforeHeight > 0 ? React.createElement(Spacer, {
    style: {
      height: `${beforeHeight}px`
    },
    "data-testid": "before"
  }) : null;
  const after = afterHeight > 0 ? React.createElement(Spacer, {
    style: {
      height: `${afterHeight}px`
    },
    "data-testid": "after"
  }) : null;
  return {
    after,
    before,
    end,
    start
  };
}
//# sourceMappingURL=getWindowedListBoundaries.js.map