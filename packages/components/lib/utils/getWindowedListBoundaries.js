import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const initialResult = {
  afterHeight: 0,
  beforeHeight: 0,
  end: 0,
  start: 0
};
export function getWindowedListBoundaries({
  buffer = 5,
  height,
  scrollPosition,
  enabled = true,
  itemCount,
  itemHeight
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
  return {
    afterHeight: afterLength * itemHeight,
    beforeHeight: start * itemHeight,
    end,
    start
  };
}
//# sourceMappingURL=getWindowedListBoundaries.js.map