"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellVisualization = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var COLOR_BAND_COUNT = 10;
var CellVisualization = function CellVisualization(props) {
  var _useTheme = (0, _styledComponents.useTheme)(),
    colors = _useTheme.colors;
  var max = props.max,
    value = props.value,
    _props$color = props.color,
    color = _props$color === void 0 ? colors.measure : _props$color;
  if (max === 0) {
    return null;
  }
  var cellVisWidth = value / max;

  var colorBands = (0, _visualizationsAdapters.deriveColorBlend)(color, colors.background, COLOR_BAND_COUNT);
  var colorIndex = Math.round((1 - cellVisWidth) * COLOR_BAND_COUNT);
  return _react["default"].createElement(SingleBar, {
    color: colorBands[colorIndex],
    width: cellVisWidth,
    "data-testid": "single-bar"
  });
};
exports.CellVisualization = CellVisualization;
var SingleBar = _styledComponents["default"].div.attrs(function (_ref) {
  var width = _ref.width,
    color = _ref.color;
  return {
    style: {
      flex: width,
      background: color
    }
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.small;
});
//# sourceMappingURL=index.js.map