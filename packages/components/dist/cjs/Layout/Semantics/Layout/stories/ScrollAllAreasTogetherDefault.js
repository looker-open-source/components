"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ScrollAllAreasTogetherDefault;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _2 = require("../../../..");
var _Text = require("../../../../Text");
var _excluded = ["hasAside"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ScrollAllAreasTogetherDefault(props) {
  var hasAside = props.hasAside,
    rest = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.Page, null, _react["default"].createElement(_.Layout, _extends({
    hasAside: hasAside
  }, rest), _react["default"].createElement(_.Aside, {
    p: "u5",
    width: "200px",
    style: {
      backgroundColor: 'lightsalmon'
    }
  }, _react["default"].createElement(_2.ConstitutionShort, null)), _react["default"].createElement(_.Section, {
    main: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, _react["default"].createElement(_Text.Heading, null, "Page title"), _react["default"].createElement(_2.Constitution, null)), _react["default"].createElement(_.Aside, {
    p: "u10",
    width: "10rem",
    style: {
      backgroundColor: 'lightskyblue'
    }
  }, _react["default"].createElement(_2.ConstitutionShort, null))));
}
//# sourceMappingURL=ScrollAllAreasTogetherDefault.js.map