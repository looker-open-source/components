"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nullValueZero = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _utils = require("../utils");
var _pick = _interopRequireDefault(require("lodash/pick"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var nullValueZero = function nullValueZero(_ref) {
  var data = _ref.data,
    fields = _ref.fields,
    config = _ref.config;
  if (config !== null && config !== void 0 && config.render_null_values) {
    var measureNames = (0, _utils.getMeasureNames)(fields);
    var draftData = data.map(function (d) {
      var measures = Object.entries((0, _pick["default"])(d, measureNames)).map(function (_ref2) {
        var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          key = _ref3[0],
          val = _ref3[1];
        return [key, Number(val)];
      });
      return _objectSpread(_objectSpread({}, d), Object.fromEntries(measures));
    });
    return {
      data: draftData,
      fields: fields,
      config: config
    };
  }
  return {
    data: data,
    fields: fields,
    config: config
  };
};
exports.nullValueZero = nullValueZero;
//# sourceMappingURL=nullValueZero.js.map