"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = KeyboardNavigation;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function KeyboardNavigation() {
  var getDetail = function getDetail(label) {
    return {
      content: _react["default"].createElement(_.IconButton, {
        label: "".concat(label, "-button"),
        icon: _react["default"].createElement(MaterialIcons.Info, null),
        tooltipDisabled: true
      }),
      options: {
        hoverDisclosure: true
      }
    };
  };
  return _react["default"].createElement(_.NavList, null, _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.Info, null),
    detail: getDetail('list-item-detail'),
    itemRole: "none"
  }, "List Item"), _react["default"].createElement(_.NavTree, {
    icon: _react["default"].createElement(MaterialIcons.Info, null),
    label: "Nav Tree Default",
    detail: getDetail('nav-tree-detail'),
    defaultOpen: true
  }, _react["default"].createElement(_.NavTreeItem, {
    parentIcon: true,
    detail: getDetail('nav-tree-item-detail'),
    itemRole: "none"
  }, "Nav Tree Item")), _react["default"].createElement(_.NavTree, {
    icon: _react["default"].createElement(MaterialIcons.Info, null),
    indicatorLabel: "Nav Tree Link Indicator",
    label: "Nav Tree Link",
    detail: getDetail('nav-tree-link-detail'),
    defaultOpen: true,
    href: "https://google.com",
    target: "_blank"
  }, _react["default"].createElement(_.NavTreeItem, {
    parentIcon: true,
    itemRole: "none"
  }, "Now You See Me")));
}
//# sourceMappingURL=KeyboardNavigation.js.map