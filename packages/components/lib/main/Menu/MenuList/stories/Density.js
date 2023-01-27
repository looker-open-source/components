"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Density;
var _react = _interopRequireDefault(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Density() {
  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_.MenuList, {
    density: 1
  }, _react["default"].createElement(_.MenuHeading, null, "Biggest MenuList"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), _react["default"].createElement(_.MenuList, {
    density: 0
  }, _react["default"].createElement(_.MenuHeading, null, "Smaller MenuList"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), _react["default"].createElement(_.MenuList, {
    density: -1
  }, _react["default"].createElement(_.MenuHeading, null, "Smaller MenuList"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), _react["default"].createElement(_.MenuList, {
    density: -2
  }, _react["default"].createElement(_.MenuHeading, null, "Smaller MenuList"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Swiss")), _react["default"].createElement(_.MenuList, {
    density: -3
  }, _react["default"].createElement(_.MenuHeading, null, "Smallest MenuList"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Gouda"), _react["default"].createElement(_.MenuItem, {
    icon: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, "Swiss")));
}
//# sourceMappingURL=Density.js.map