"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Size;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Size() {
  var data = {
    avatar_url: 'https://www.fillmurray.com/150/150',
    first_name: 'Bill',
    last_name: 'Murray'
  };
  return _react["default"].createElement(_.Box2, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }, _react["default"].createElement(_.AvatarIcon, {
    size: "xxsmall"
  }), _react["default"].createElement(_.AvatarIcon, {
    size: "xsmall"
  }), _react["default"].createElement(_.AvatarIcon, null), _react["default"].createElement(_.AvatarIcon, {
    size: "medium"
  }), _react["default"].createElement(_.AvatarIcon, {
    size: "large"
  }), _react["default"].createElement(_.AvatarUser, {
    user: data,
    size: "xxsmall"
  }), _react["default"].createElement(_.AvatarUser, {
    user: data,
    size: "xsmall"
  }), _react["default"].createElement(_.AvatarUser, {
    user: data
  }), _react["default"].createElement(_.AvatarUser, {
    user: data,
    size: "medium"
  }), _react["default"].createElement(_.AvatarUser, {
    user: data,
    size: "large"
  }));
}
//# sourceMappingURL=Size.js.map