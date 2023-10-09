"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Layout = require("../../../../Layout");
var _ = require("..");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ColorPickerInternal = function ColorPickerInternal(_ref) {
  var hsv = _ref.hsv,
    setHsv = _ref.setHsv,
    width = _ref.width;
  return _react["default"].createElement(_Layout.SpaceVertical, {
    gap: "u4",
    "data-testid": "color-picker"
  }, _react["default"].createElement(_.LightSaturationPreview, {
    hsv: hsv,
    setHsv: setHsv,
    width: width
  }), _react["default"].createElement(_.HueSlider, {
    hsv: hsv,
    setHsv: setHsv,
    width: width
  }));
};
var ColorPicker = (0, _styledComponents["default"])(ColorPickerInternal).withConfig({
  displayName: "ColorPicker",
  componentId: "sc-1ss1d7c-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.ColorPicker = ColorPicker;
//# sourceMappingURL=ColorPicker.js.map