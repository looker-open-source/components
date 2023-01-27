"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChartTheme = void 0;
var _styledComponents = require("styled-components");
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _compact = _interopRequireDefault(require("lodash/compact"));
var _xychart = require("@visx/xychart");

var useChartTheme = function useChartTheme(series) {
  var theme = (0, _styledComponents.useTheme)();
  var seriesList = series && (0, _isArray["default"])(series) ? series : Object.values(series || {});
  var scheme = (0, _compact["default"])(seriesList.map(function (s) {
    return s.visible && s.color;
  }));
  var chartTheme = (0, _xychart.buildChartTheme)({
    backgroundColor: theme.colors.background,
    colors: scheme.length ? scheme : [theme.colors.key],
    gridColor: theme.colors.ui2,
    gridColorDark: theme.colors.text5,
    svgLabelBig: {
      fill: theme.colors.text5
    },
    svgLabelSmall: {
      fill: theme.colors.text5
    },
    tickLength: 8
  });
  return chartTheme;
};
exports.useChartTheme = useChartTheme;
//# sourceMappingURL=useChartTheme.js.map