"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Basic() {
  return _react["default"].createElement(_.Confirm, {
    title: "Confirm Something",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    onConfirm: function onConfirm(close) {
      alert('You did something');
      close();
    },
    width: ['10rem', '20rem', '30rem', '40rem']
  }, function (open) {
    return _react["default"].createElement(_.ButtonOutline, {
      onClick: open
    }, "Do something");
  });
}
//# sourceMappingURL=Basic.js.map