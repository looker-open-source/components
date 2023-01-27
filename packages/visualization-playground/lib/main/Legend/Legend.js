"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Legend = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _components = require("@looker/components");
var _LegendPie = require("./LegendPie");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var legendPositions = ['left', 'right', 'top', 'bottom'];
var renderLegendFor = ['area', 'bar', 'column', 'line', 'pie', 'scatter'];
var Legend = function Legend(props) {
  var config = props.config,
    onConfigChange = props.onConfigChange;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  if (!renderLegendFor.includes(config.type)) {
    return null;
  }
  var legend = config.legend;
  var position = config.legend ? config.legend.position : 'none';
  var handlePositionChange = function handlePositionChange(draftPosition) {
    if (draftPosition === 'none') {
      onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
        legend: false
      }));
    } else {
      onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
        legend: _objectSpread(_objectSpread({}, legend), {}, {
          position: draftPosition
        })
      }));
    }
  };
  var handleWidthChange = function handleWidthChange(e) {
    var value = e.target.value;
    onConfigChange(_objectSpread(_objectSpread({}, config), {}, {
      legend: _objectSpread(_objectSpread({}, legend), {}, {
        width: Number((0, _visualizationsAdapters.isNumeric)(value)) ? Number(value) : undefined
      })
    }));
    setWidth(value);
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_components.FieldSelect, {
    label: "Legend",
    options: ['none'].concat(legendPositions).map(function (p) {
      return {
        value: p
      };
    }),
    value: position,
    onChange: handlePositionChange
  }), (position === 'left' || position === 'right') && _react["default"].createElement(_components.FieldText, {
    label: "Legend Width",
    value: width,
    onChange: handleWidthChange
  }), config.type === 'pie' && _react["default"].createElement(_LegendPie.LegendPie, {
    config: props.config,
    onConfigChange: props.onConfigChange
  }));
};
exports.Legend = Legend;
//# sourceMappingURL=Legend.js.map