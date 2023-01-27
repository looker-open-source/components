"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = KeyboardNavigation;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../../");
var _2 = require("../");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function KeyboardNavigation() {
  return _react["default"].createElement(_2.List, null, _react["default"].createElement(_.ListItem, {
    itemRole: "none",
    detail: {
      content: _react["default"].createElement(_.IconButton, {
        label: "cheddar-button",
        icon: _react["default"].createElement(MaterialIcons.DateRange, null),
        tooltipDisabled: true
      }),
      options: {
        hoverDisclosure: true
      }
    }
  }, "Cheddar"), _react["default"].createElement(_.ListItem, {
    itemRole: "none",
    detail: _react["default"].createElement(_.IconButton, {
      label: "gouda-button",
      icon: _react["default"].createElement(MaterialIcons.DateRange, null),
      tooltipDisabled: true
    })
  }, "Gouda"));
}
//# sourceMappingURL=KeyboardNavigation.js.map