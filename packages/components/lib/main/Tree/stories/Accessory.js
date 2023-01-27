"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accessory;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _Button = require("../../Button");

function Accessory() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    detail: {
      content: _react["default"].createElement(_Button.Button, {
        ml: "large",
        onClick: function onClick() {
          return alert('Accessory Button');
        }
      }, "Accessory Button"),
      options: {
        accessory: true
      }
    }
  }, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, null, "ID"), _react["default"].createElement(_.TreeItem, null, "Status"), _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, null, "Created Date"), _react["default"].createElement(_.TreeItem, null, "Created Month"), _react["default"].createElement(_.TreeItem, null, "Created Year"), _react["default"].createElement(_.TreeItem, null, "Created Quarter")))));
}
//# sourceMappingURL=Accessory.js.map