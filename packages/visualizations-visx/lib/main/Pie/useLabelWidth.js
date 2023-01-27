"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLabelWidth = exports.MIN_LABEL_SPACE = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _styledComponents = require("styled-components");
var _getLabelContent2 = require("./getLabelContent");

var MIN_LABEL_SPACE = 90;

exports.MIN_LABEL_SPACE = MIN_LABEL_SPACE;
var useLabelWidth = function useLabelWidth(measureTotal, keyValData, legend) {
  var _ref = legend || {},
    _ref$type = _ref.type,
    legendType = _ref$type === void 0 ? 'legend' : _ref$type;
  var theme = (0, _styledComponents.useTheme)();
  var longestLabel = (0, _visualizationsAdapters.pickLongestLabel)(Object.entries(keyValData).map(function (_ref2) {
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
      key = _ref3[0],
      val = _ref3[1];
    return (0, _getLabelContent2.getLabelContent)(measureTotal, (0, _defineProperty2["default"])({}, key, val), legend);
  }));
  var _useMeasuredText = (0, _visualizationsAdapters.useMeasuredText)(longestLabel, {
      fontSize: legendType === 'legend' ? theme.fontSizes.medium : theme.fontSizes.xsmall,
      fontFamily: theme.fonts.body
    }),
    labelWidth = _useMeasuredText.width;
  return Math.max(labelWidth + 20, MIN_LABEL_SPACE);
};
exports.useLabelWidth = useLabelWidth;
//# sourceMappingURL=useLabelWidth.js.map