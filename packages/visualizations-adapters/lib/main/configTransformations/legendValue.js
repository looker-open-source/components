"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.legendValue = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _excluded = ["label_type", "legend"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var legendValue = function legendValue(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var LEGEND_VALUE = {
    '': 'label_percent',
    lab: 'label',
    label: 'label',
    labPer: 'label_percent',
    label_percent: 'label_percent',
    labVal: 'label_value',
    label_value: 'label_value',
    per: 'percent',
    percent: 'percent',
    val: 'value',
    value: 'value'
  };
  var label_type = config.label_type,
    legend = config.legend,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var legendValue = LEGEND_VALUE[legend && legend.value || label_type || ''];
  return {
    config: _objectSpread({
      legend: legend === false ? false : _objectSpread(_objectSpread({}, legend), {}, {
        value: legendValue
      })
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.legendValue = legendValue;
//# sourceMappingURL=legendValue.js.map