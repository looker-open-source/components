"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Artwork;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Artwork() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react["default"].createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",
      fill: "hotpink"
    })),
    size: "xxsmall"
  }), _react["default"].createElement(_.Icon, {
    icon: _react["default"].createElement("svg", null, _react["default"].createElement("rect", {
      width: "100",
      height: "100",
      fill: "rgb(0,0,255)",
      strokeWidth: "3",
      stroke: "rgb(0,0,0)"
    }))
  }));
}
//# sourceMappingURL=Artwork.js.map