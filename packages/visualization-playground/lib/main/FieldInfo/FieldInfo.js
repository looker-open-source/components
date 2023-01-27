"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _Info = require("@styled-icons/material/Info");
var _components = require("@looker/components");

var FieldInfo = function FieldInfo(_ref) {
  var content = _ref.content;
  return _react["default"].createElement(_components.Tooltip, {
    content: content
  }, _react["default"].createElement(_components.Icon, {
    icon: _react["default"].createElement(_Info.Info, null),
    size: "xxsmall",
    color: "ui4"
  }));
};
exports.FieldInfo = FieldInfo;
//# sourceMappingURL=FieldInfo.js.map