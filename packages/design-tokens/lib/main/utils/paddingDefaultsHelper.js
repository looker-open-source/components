"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paddingDefaultsHelper = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var paddingDefaultsHelper = function paddingDefaultsHelper(props, defaults) {
  var merged = _objectSpread(_objectSpread({}, defaults), props);
  var p = merged.p,
    px = merged.px,
    py = merged.py,
    pt = merged.pt,
    pr = merged.pr,
    pb = merged.pb,
    pl = merged.pl;

  pt = pt || py || p;
  pb = pb || py || p;
  py = pb === pt ? pb : undefined;
  pr = pr || px || p;
  pl = pl || px || p;
  px = pr === pl ? pr : undefined;
  if (px && px === py) {
    return {
      p: p
    };
  } else {
    p = undefined;
  }
  var response = {
    pb: py ? undefined : pb,
    pl: px ? undefined : pl,
    pr: px ? undefined : pr,
    pt: py ? undefined : pt,
    px: px,
    py: py
  };
  Object.keys(response).forEach(function (key) {
    if (typeof response[key] === 'undefined') {
      delete response[key];
    }
  });
  return response;
};
exports.paddingDefaultsHelper = paddingDefaultsHelper;
//# sourceMappingURL=paddingDefaultsHelper.js.map