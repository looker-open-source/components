"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListItemPartitions = void 0;
var _react = _interopRequireDefault(require("react"));
var _ListItemDetail = require("../ListItemDetail");
var _ListItemIcon = require("../ListItemIcon");
var _ListItemLabel = require("../ListItemLabel");
var _getDetailOptions2 = require("./getDetailOptions");
var _excluded = ["accessory", "content"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var createListItemPartitions = function createListItemPartitions(_ref) {
  var color = _ref.color,
    density = _ref.density,
    description = _ref.description,
    detail = _ref.detail,
    disabled = _ref.disabled,
    icon = _ref.icon,
    children = _ref.children,
    truncate = _ref.truncate;
  var iconProps = {
    alignStart: Boolean(description),
    children: icon,
    color: color,
    density: density,
    disabled: disabled
  };
  var labelProps = {
    children: children,
    color: color,
    density: density,
    description: description,
    disabled: disabled,
    truncate: truncate
  };
  var _getDetailOptions = (0, _getDetailOptions2.getDetailOptions)(detail),
    accessory = _getDetailOptions.accessory,
    content = _getDetailOptions.content,
    options = _objectWithoutProperties(_getDetailOptions, _excluded);
  var renderedDetail = detail && _react["default"].createElement(_ListItemDetail.ListItemDetail, _extends({
    accessory: accessory,
    density: density
  }, options), content);
  var inside = _react["default"].createElement(_react["default"].Fragment, null, icon && _react["default"].createElement(_ListItemIcon.ListItemIcon, iconProps), _react["default"].createElement(_ListItemLabel.ListItemLabel, labelProps), !accessory && renderedDetail);
  return [inside, accessory && renderedDetail];
};
exports.createListItemPartitions = createListItemPartitions;
//# sourceMappingURL=createListItemPartitions.js.map