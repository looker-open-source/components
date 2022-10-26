"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;

var _react = _interopRequireDefault(require("react"));

var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));

var _ = require("../../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Basic() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.SpaceVertical, {
    align: "center"
  }, _react["default"].createElement(_.AvatarIcon, {
    icon: _react["default"].createElement(MaterialIcons.Schedule, null)
  }), _react["default"].createElement(_.DividerVertical, null), _react["default"].createElement(_.Span, null, "2:45PM")), _react["default"].createElement(_.SpaceVertical, {
    align: "center"
  }, _react["default"].createElement(_.AvatarIcon, {
    icon: _react["default"].createElement(MaterialIcons.Schedule, null)
  }), _react["default"].createElement(_.DividerVertical, {
    height: "3rem"
  }), _react["default"].createElement(_.Span, null, "2:45PM")), _react["default"].createElement(_.SpaceVertical, {
    align: "center"
  }, _react["default"].createElement(_.AvatarIcon, {
    icon: _react["default"].createElement(MaterialIcons.Schedule, null),
    size: "large"
  }), _react["default"].createElement(_.DividerVertical, {
    height: "100px"
  }), _react["default"].createElement(_.Span, {
    pl: "u5",
    fontSize: "xxxxlarge"
  }, "2:45PM")));
}
//# sourceMappingURL=Basic.js.map