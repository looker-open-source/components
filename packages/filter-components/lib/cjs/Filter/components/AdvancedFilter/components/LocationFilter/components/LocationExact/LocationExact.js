"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationExact = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../../../../../../constants");

var _GroupInput = require("../../../GroupInput");

var _templateObject;

var LocationExact = function LocationExact(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      _ref$latString = _ref.latString,
      latString = _ref$latString === void 0 ? 'LATITUDE' : _ref$latString,
      _ref$lonString = _ref.lonString,
      lonString = _ref$lonString === void 0 ? 'LONGITUDE' : _ref$lonString,
      _ref$lat = _ref.lat,
      lat = _ref$lat === void 0 ? 'lat' : _ref$lat,
      _ref$lon = _ref.lon,
      lon = _ref$lon === void 0 ? 'lon' : _ref$lon,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right' : _ref$placement;

  var latChange = function latChange(event) {
    if (Number(event.currentTarget.value) <= _constants.MAX_LATITUDE && Number(event.currentTarget.value) >= _constants.MIN_LATITUDE) {
      onChange(item.id, (0, _defineProperty2["default"])({}, lat, event.currentTarget.value));
    }
  };

  var lonChange = function lonChange(event) {
    if (Number(event.currentTarget.value) <= _constants.MAX_LONGITUDE && Number(event.currentTarget.value) >= _constants.MIN_LONGITUDE) {
      onChange(item.id, (0, _defineProperty2["default"])({}, lon, event.currentTarget.value));
    }
  };

  return _react["default"].createElement(_components.Flex, {
    flexDirection: "row"
  }, _react["default"].createElement(_GroupInput.GroupInput, {
    before: _react["default"].createElement(Prefix, null, latString),
    value: String(item.lat || ''),
    type: "number",
    onChange: latChange,
    placement: "middle",
    minWidth: "".concat(latString.length / 2 + 5.5, "em")
  }), _react["default"].createElement(_GroupInput.GroupInput, {
    before: _react["default"].createElement(Prefix, null, lonString),
    value: String(item.lon || ''),
    type: "number",
    onChange: lonChange,
    placement: placement,
    minWidth: "".concat(lonString.length / 2 + 5.5, "em")
  }));
};

exports.LocationExact = LocationExact;

var Prefix = _styledComponents["default"].span.withConfig({
  displayName: "LocationExact__Prefix",
  componentId: "sc-cjs9jc-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  white-space: nowrap;\n"])), function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.text1;
}, function (_ref3) {
  var fontSizes = _ref3.theme.fontSizes;
  return fontSizes.xsmall;
});
//# sourceMappingURL=LocationExact.js.map