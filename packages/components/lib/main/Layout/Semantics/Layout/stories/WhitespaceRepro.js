"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WhitespaceRepro;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _material = require("@styled-icons/material");
var _ = require("../..");
var _2 = require("../../../..");
var _Button = require("../../../../Button");
var _Text = require("../../../../Text");
var _excluded = ["hasAside"];
function WhitespaceRepro(props) {
  var hasAside = props.hasAside,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Page, {
    fixed: true
  }, _react["default"].createElement(_.Header, {
    height: "4rem",
    px: "large",
    style: {
      backgroundColor: 'lightcoral'
    }
  }, "I'm the header"), _react["default"].createElement(_.Layout, (0, _extends2["default"])({
    hasAside: hasAside
  }, rest), _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px",
    style: {
      backgroundColor: 'lightsalmon'
    }
  }, _react["default"].createElement(_2.ItemsFiller, {
    count: 20
  })), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_2.Constitution, null), _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_material.Info, null),
    label: "Info"
  }))));
}
//# sourceMappingURL=WhitespaceRepro.js.map