"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YAxis = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _Core = require("../Core");

var _components = require("@looker/components");

var _has = _interopRequireDefault(require("lodash/has"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var renderFor = ['area', 'bar', 'column', 'line', 'scatter', 'sparkline'];

var YAxis = function YAxis(props) {
  var config = props.config,
      _props$config$y_axis = props.config.y_axis,
      y_axis = _props$config$y_axis === void 0 ? [] : _props$config$y_axis,
      onConfigChange = props.onConfigChange;

  if (!renderFor.includes(config.type) && !(0, _has["default"])(config, 'y_axis')) {
    return null;
  }

  var handleConfigChange = function handleConfigChange(axisIndex, axis) {
    var draftYAxis = (0, _toConsumableArray2["default"])(y_axis);
    draftYAxis[axisIndex] = axis;
    onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
      y_axis: (0, _toConsumableArray2["default"])(draftYAxis)
    }));
  };

  return _react["default"].createElement(_components.Fieldset, {
    legend: "Y-Axis",
    defaultOpen: true,
    accordion: true
  }, _react["default"].createElement(_Core.Core, {
    axisConfig: y_axis,
    onAxisChange: handleConfigChange
  }));
};

exports.YAxis = YAxis;
//# sourceMappingURL=YAxis.js.map