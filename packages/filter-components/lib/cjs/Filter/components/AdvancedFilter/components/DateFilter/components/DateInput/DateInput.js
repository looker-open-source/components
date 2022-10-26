"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateInputInternal = exports.DateInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filter_styles = require("../../../../../../utils/filter_styles");

var _format_date = require("../../utils/format_date");

var _templateObject;

var DateInputInternal = function DateInputInternal(_ref) {
  var className = _ref.className,
      date = _ref.date,
      onChange = _ref.onChange;

  var handleDayChange = function handleDayChange(d) {
    var newDate = d || new Date(Date.now());
    onChange(new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  };

  return _react["default"].createElement(_components.Popover, {
    content: _react["default"].createElement(_components.Box, {
      p: "small"
    }, _react["default"].createElement(_components.InputDate, {
      defaultValue: date,
      onChange: handleDayChange,
      dateStringFormat: _format_date.FILTERS_DATE_FORMAT
    })),
    placement: "bottom-start"
  }, _react["default"].createElement(_components.ChipButton, {
    className: className
  }, (0, _format_date.formatDate)(date)));
};

exports.DateInputInternal = DateInputInternal;
var DateInput = (0, _styledComponents["default"])(DateInputInternal).withConfig({
  displayName: "DateInput",
  componentId: "sc-iggigb-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _filter_styles.inputPlacementStyle);
exports.DateInput = DateInput;
//# sourceMappingURL=DateInput.js.map