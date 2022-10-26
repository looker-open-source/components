"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListItemPartitions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _ListItemDetail = require("../ListItemDetail");

var _ListItemIcon = require("../ListItemIcon");

var _ListItemLabel = require("../ListItemLabel");

var _getDetailOptions2 = require("./getDetailOptions");

var _excluded = ["accessory", "content"];

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
      options = (0, _objectWithoutProperties2["default"])(_getDetailOptions, _excluded);

  var renderedDetail = detail && _react["default"].createElement(_ListItemDetail.ListItemDetail, (0, _extends2["default"])({
    accessory: accessory,
    density: density
  }, options), content);

  var inside = _react["default"].createElement(_react["default"].Fragment, null, icon && _react["default"].createElement(_ListItemIcon.ListItemIcon, iconProps), _react["default"].createElement(_ListItemLabel.ListItemLabel, labelProps), !accessory && renderedDetail);

  return [inside, accessory && renderedDetail];
};

exports.createListItemPartitions = createListItemPartitions;
//# sourceMappingURL=createListItemPartitions.js.map