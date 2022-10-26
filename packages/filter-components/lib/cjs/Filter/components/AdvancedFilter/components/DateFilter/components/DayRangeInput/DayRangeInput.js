"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayRangeInput = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _format_date = require("../../utils/format_date");

var DayRangeInput = function DayRangeInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var newFrom = d.from || new Date(Date.now());
    var newTo = d.to || new Date(Date.now());
    var newDateRange = {
      from: new Date(newFrom.getFullYear(), newFrom.getMonth(), newFrom.getDate()),
      to: new Date(newTo.getFullYear(), newTo.getMonth(), newTo.getDate())
    };
    onChange(newDateRange);
  };

  var formattedValue = "".concat((0, _format_date.formatDate)(value.from), " \u2013 ").concat((0, _format_date.formatDate)(value.to));
  return _react["default"].createElement(_components.Popover, {
    content: _react["default"].createElement(_components.Box2, {
      p: "u3"
    }, _react["default"].createElement(_components.InputDateRange, {
      onChange: handleChange,
      value: value,
      dateStringFormat: _format_date.FILTERS_DATE_FORMAT
    })),
    placement: "bottom-start"
  }, _react["default"].createElement(_components.ChipButton, null, formattedValue));
};

exports.DayRangeInput = DayRangeInput;
//# sourceMappingURL=DayRangeInput.js.map