"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XAxis = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _xychart = require("@visx/xychart");
var _Tick = require("./Tick");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var XAxis = function XAxis(_ref) {
  var fields = _ref.fields,
    label = _ref.label,
    labelDy = _ref.labelDy,
    showTicks = _ref.showTicks,
    tickAngle = _ref.tickAngle,
    tickTextAnchor = _ref.tickTextAnchor,
    tickSpace = _ref.tickSpace,
    valueFormat = _ref.valueFormat;
  var visxTheme = (0, _react.useContext)(_xychart.ThemeContext);
  var _useContext = (0, _react.useContext)(_xychart.DataContext),
    _useContext$width = _useContext.width,
    width = _useContext$width === void 0 ? 0 : _useContext$width;
  var numTicks = Math.floor(width / tickSpace);
  return _react["default"].createElement(_xychart.Axis, {
    hideTicks: !showTicks,
    label: label,
    labelOffset: showTicks ? undefined : 0,
    labelProps: _objectSpread(_objectSpread({}, visxTheme.axisStyles.x.bottom.axisLabel), {}, {
      dy: labelDy
    }),
    orientation: "bottom",
    numTicks: numTicks,
    tickComponent: function tickComponent(tickProps) {
      return showTicks ? _react["default"].createElement(_Tick.Tick, (0, _extends2["default"])({
        fields: fields,
        valueFormat: valueFormat
      }, tickProps)) : null;
    },
    tickLabelProps: function tickLabelProps() {
      return {
        angle: tickAngle,
        textAnchor: tickTextAnchor
      };
    }
  });
};
exports.XAxis = XAxis;
//# sourceMappingURL=XAxis.js.map