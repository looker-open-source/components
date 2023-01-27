"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BeforeAfter;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _Layout = require("../../../../Layout");
var _Tooltip = require("../../../../Tooltip");
var _Text = require("../../../../Text");
var _InputText = require("../InputText");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BeforeAfter() {
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_InputText.InputText, {
    iconBefore: _react["default"].createElement(MaterialIcons.Settings, null)
  }), _react["default"].createElement(_InputText.InputText, {
    iconAfter: _react["default"].createElement(MaterialIcons.Done, null)
  })), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_InputText.InputText, {
    before: "$"
  }), _react["default"].createElement(_InputText.InputText, {
    after: _react["default"].createElement(_Tooltip.Tooltip, {
      placement: "top",
      content: "Try again"
    }, _react["default"].createElement(_Text.Span, {
      color: "critical",
      fontSize: "xsmall"
    }, "Oops!"))
  })));
}
//# sourceMappingURL=BeforeAfter.js.map