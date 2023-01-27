"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Size;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Size() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement(MaterialIcons.Delete, null),
    color: "inform",
    size: "xxsmall"
  }), _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement(MaterialIcons.Delete, null),
    color: "inform",
    size: "xsmall"
  }), _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement(MaterialIcons.Delete, null),
    color: "inform",
    size: "small"
  }), _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement(MaterialIcons.Delete, null),
    color: "inform",
    size: "medium"
  }), _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement(MaterialIcons.Delete, null),
    color: "inform",
    size: "large"
  }));
}
//# sourceMappingURL=Size.js.map