"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendPie = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var legendTypes = ['legend', 'labels'];
var legendValues = ['label', 'label_percent', 'label_value', 'percent', 'value'];
var LegendPie = function LegendPie(_ref) {
  var onConfigChange = _ref.onConfigChange,
    config = _ref.config;
  var legend = config.legend;
  if (!legend) return null;
  var handleTypeChange = function handleTypeChange(newType) {
    var draft = _objectSpread(_objectSpread({}, config), {}, {
      legend: _objectSpread(_objectSpread({}, legend), {}, {
        type: newType
      })
    });
    onConfigChange(draft);
  };
  var handleValuesChange = function handleValuesChange(newVal) {
    var draft = _objectSpread(_objectSpread({}, config), {}, {
      legend: _objectSpread(_objectSpread({}, legend), {}, {
        value: newVal
      })
    });
    onConfigChange(draft);
  };
  return _react["default"].createElement(_components.Fieldset, {
    legend: "Legend Options",
    accordion: true,
    defaultOpen: true
  }, Object.prototype.hasOwnProperty.call(legend, 'type') && _react["default"].createElement(_components.FieldSelect, {
    label: "Legend Type",
    options: legendTypes.map(function (t) {
      return {
        value: t
      };
    }),
    value: legend.type,
    onChange: handleTypeChange
  }), Object.prototype.hasOwnProperty.call(legend, 'value') && _react["default"].createElement(_components.FieldSelect, {
    label: "Legend Values",
    options: legendValues.map(function (v) {
      return {
        value: v
      };
    }),
    value: legend.value,
    onChange: handleValuesChange
  }));
};
exports.LegendPie = LegendPie;
//# sourceMappingURL=LegendPie.js.map