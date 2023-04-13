import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const paddingDefaultsHelper = (props, defaults) => {
  const merged = _objectSpread(_objectSpread({}, defaults), props);
  let {
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl
  } = merged;

  pt = pt || py || p;
  pb = pb || py || p;
  py = pb === pt ? pb : undefined;
  pr = pr || px || p;
  pl = pl || px || p;
  px = pr === pl ? pr : undefined;
  if (px && px === py) {
    return {
      p
    };
  } else {
    p = undefined;
  }
  const response = {
    pb: py ? undefined : pb,
    pl: px ? undefined : pl,
    pr: px ? undefined : pr,
    pt: py ? undefined : pt,
    px,
    py
  };
  Object.keys(response).forEach(key => {
    if (typeof response[key] === 'undefined') {
      delete response[key];
    }
  });
  return response;
};
//# sourceMappingURL=paddingDefaultsHelper.js.map