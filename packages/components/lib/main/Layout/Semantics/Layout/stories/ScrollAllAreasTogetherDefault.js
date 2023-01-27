"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ScrollAllAreasTogetherDefault;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _2 = require("../../../..");
var _Text = require("../../../../Text");
var _excluded = ["hasAside"];
function ScrollAllAreasTogetherDefault(props) {
  var hasAside = props.hasAside,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.Page, null, _react["default"].createElement(_.Layout, (0, _extends2["default"])({
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