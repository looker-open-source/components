"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filter_styles = require("../../../../../../utils/filter_styles");

var _templateObject;

var TimeInputInternal = function TimeInputInternal(_ref) {
  var className = _ref.className,
      date = _ref.date,
      onChange = _ref.onChange;
  var value = "".concat(date.getHours(), ":").concat(date.getMinutes());

  var handleChange = function handleChange() {
    var newTimeString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0:00';

    var _newTimeString$split = newTimeString.split(':'),
        _newTimeString$split2 = (0, _slicedToArray2["default"])(_newTimeString$split, 2),
        newHour = _newTimeString$split2[0],
        newMinute = _newTimeString$split2[1];

    var newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(newHour), Number(newMinute));
    onChange(newDate);
  };

  return _react["default"].createElement(_components.InputTimeSelect, {
    className: className,
    interval: 30,
    value: value,
    onChange: handleChange
  });
};

var TimeInput = (0, _styledComponents["default"])(TimeInputInternal).withConfig({
  displayName: "TimeInput",
  componentId: "sc-1e5vm7c-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 120px;\n  ", " {\n    ", "\n  }\n"])), _components.InputText, _filter_styles.inputPlacementStyle);
exports.TimeInput = TimeInput;
//# sourceMappingURL=TimeInput.js.map