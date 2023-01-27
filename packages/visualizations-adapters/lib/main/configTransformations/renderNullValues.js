"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNullValues = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _excluded = ["render_null_values"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderNullValues = function renderNullValues(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _config$render_null_v = config.render_null_values,
    render_null_values = _config$render_null_v === void 0 ? false : _config$render_null_v,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  return {
    config: _objectSpread({
      render_null_values: render_null_values
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.renderNullValues = renderNullValues;
//# sourceMappingURL=renderNullValues.js.map