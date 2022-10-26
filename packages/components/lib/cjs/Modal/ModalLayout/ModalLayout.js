"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalLoading = exports.ModalLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _Spinner = require("../../Spinner");

var ModalLoading = function ModalLoading() {
  return _react["default"].createElement(_Spinner.Spinner, {
    mx: "auto",
    my: "xxlarge"
  });
};

exports.ModalLoading = ModalLoading;

var ModalLayout = function ModalLayout(_ref) {
  var children = _ref.children,
      footer = _ref.footer,
      header = _ref.header;
  return _react["default"].createElement(_react["default"].Fragment, null, header, children, footer);
};

exports.ModalLayout = ModalLayout;
//# sourceMappingURL=ModalLayout.js.map