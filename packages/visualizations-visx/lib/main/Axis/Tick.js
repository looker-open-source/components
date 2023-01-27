"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tick = exports.MAX_TICK_LABEL_LENGTH = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _text = require("@visx/text");
var _numeral = _interopRequireDefault(require("numeral"));
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _excluded = ["formattedValue", "fields", "valueFormat"];
var MAX_TICK_LABEL_LENGTH = 20;
exports.MAX_TICK_LABEL_LENGTH = MAX_TICK_LABEL_LENGTH;
var Tick = function Tick(_ref) {
  var formattedValue = _ref.formattedValue,
    fields = _ref.fields,
    valueFormat = _ref.valueFormat,
    tickProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isNumericTick = (0, _visualizationsAdapters.isNumeric)(formattedValue);
  var label = (0, _utils.formatDateLabel)({
    dateString: formattedValue || '',
    fields: fields
  });
  var renderedLabel = label.length > MAX_TICK_LABEL_LENGTH ? "".concat(label.slice(0, MAX_TICK_LABEL_LENGTH).trim(), "\u2026") : label;
  return _react["default"].createElement(_text.Text, tickProps, valueFormat && isNumericTick ? (0, _numeral["default"])(formattedValue).format(valueFormat) : renderedLabel);
};
exports.Tick = Tick;
//# sourceMappingURL=Tick.js.map