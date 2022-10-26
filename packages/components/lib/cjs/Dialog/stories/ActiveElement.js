"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../../Button");

var _Dialog = require("../Dialog");

var _Layout = require("../Layout");

var _InputText = require("../../Form/Inputs/InputText/InputText");

var _Select = require("../../Form/Inputs/Select/Select");

var _SpaceVertical = require("../../Layout/Space/SpaceVertical");

var _default = function _default() {
  return _react["default"].createElement(_Dialog.Dialog, {
    content: _react["default"].createElement(_Layout.DialogLayout, null, _react["default"].createElement(_SpaceVertical.SpaceVertical, null, _react["default"].createElement(_InputText.InputText, null), _react["default"].createElement(_Select.Select, {
      options: [{
        label: '1',
        value: '1'
      }],
      placeholder: "Choose value"
    }), _react["default"].createElement("select", null, _react["default"].createElement("option", null, "1"))))
  }, _react["default"].createElement(_Button.Button, null, "Open Dialog"));
};

exports["default"] = _default;
//# sourceMappingURL=ActiveElement.js.map