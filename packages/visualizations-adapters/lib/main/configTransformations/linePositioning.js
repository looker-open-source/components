"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linePositioning = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _excluded = ["positioning", "stacking"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var linePositioning = function linePositioning(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var positioning = config.positioning,
    stacking = config.stacking,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var currentPositioning = positioning || stacking || '';
  var GROUP_MODES = {
    "default": 'overlay',
    grouped: 'overlay',
    normal: 'stacked',
    overlay: 'overlay',
    percent: 'percent',
    stacked: 'stacked'
  };
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      positioning: GROUP_MODES[currentPositioning] || GROUP_MODES["default"]
    }),
    data: data,
    fields: fields
  };
};
exports.linePositioning = linePositioning;
//# sourceMappingURL=linePositioning.js.map