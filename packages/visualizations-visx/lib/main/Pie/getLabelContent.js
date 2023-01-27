"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLabelContent = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _numeral = _interopRequireDefault(require("numeral"));

var getLabelContent = function getLabelContent(measureTotal, data, legendConfig) {
  var _ref = legendConfig || {},
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? 'label_percent' : _ref$value;
  var _Object$entries$ = (0, _slicedToArray2["default"])(Object.entries(data)[0], 2),
    key = _Object$entries$[0],
    val = _Object$entries$[1];
  var percent = (0, _numeral["default"])(val / measureTotal).format('0.00%');
  var labels = {
    label: key,
    value: String(val),
    percent: percent,
    label_value: "".concat(key, " \u2013 ").concat(val),
    label_percent: "".concat(key, " \u2013 ").concat(percent)
  };
  return labels[value];
};
exports.getLabelContent = getLabelContent;
//# sourceMappingURL=getLabelContent.js.map