"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Color;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Color() {
  var data = {
    avatar_url: 'https://www.fillmurray.com/150/150',
    first_name: 'Bill',
    last_name: 'Murray'
  };
  return _react["default"].createElement(_.Box2, {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }, _react["default"].createElement(_.AvatarUser, {
    user: data
  }), _react["default"].createElement(_.AvatarIcon, null), _react["default"].createElement(_.AvatarUser, {
    color: "inform",
    user: data
  }), _react["default"].createElement(_.AvatarIcon, {
    color: "inform"
  }), _react["default"].createElement(_.AvatarUser, {
    color: "positive",
    user: data
  }), _react["default"].createElement(_.AvatarIcon, {
    color: "positive"
  }), _react["default"].createElement(_.AvatarIcon, {
    color: "inverseOn",
    bg: "positive"
  }));
}
//# sourceMappingURL=Color.js.map