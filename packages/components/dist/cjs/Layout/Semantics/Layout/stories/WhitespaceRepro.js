"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WhitespaceRepro;
var _react = _interopRequireDefault(require("react"));
var _material = require("@styled-icons/material");
var _ = require("../..");
var _2 = require("../../../..");
var _Button = require("../../../../Button");
var _Text = require("../../../../Text");
var _excluded = ["hasAside"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function WhitespaceRepro(props) {
  var hasAside = props.hasAside,
    rest = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.Page, {
    fixed: true
  }, _react["default"].createElement(_.Header, {
    height: "4rem",
    px: "large",
    style: {
      backgroundColor: 'lightcoral'
    }
  }, "I'm the header"), _react["default"].createElement(_.Layout, _extends({
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