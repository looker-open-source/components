"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hover;
var _react = _interopRequireWildcard(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Hover() {
  var hoverRef = (0, _react.useRef)(null);
  return _react["default"].createElement(_.Card, {
    ref: hoverRef,
    p: "u5"
  }, _react["default"].createElement(_.Flex, {
    justifyContent: "space-between"
  }, _react["default"].createElement(_.Paragraph, null, "Hovering in this card will show the menu button."), _react["default"].createElement(_.Menu, {
    hoverDisclosureRef: hoverRef,
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuItem, null, "Edit item"), _react["default"].createElement(_.MenuItem, null, "Create new sub-item"))
  }, _react["default"].createElement(_.IconButton, {
    icon: _react["default"].createElement(MaterialIcons.MoreVert, null),
    label: "More Options"
  }))));
}
//# sourceMappingURL=Hover.js.map