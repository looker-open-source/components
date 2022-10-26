"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _ModalLayout = require("../../Modal/ModalLayout");

var _DialogContent = require("./DialogContent");

var _DialogFooter = require("./DialogFooter");

var _DialogHeader = require("./DialogHeader");

var constructDialogHeader = function constructDialogHeader(children, closeButton, detail, footerExists) {
  if (!children) return null;
  var props = {
    children: children
  };

  if (detail) {
    props.detail = detail;
  } else if (closeButton || footerExists) {
    props.hideClose = !closeButton;
  }

  return _react["default"].createElement(_DialogHeader.DialogHeader, props);
};

var DialogLayout = function DialogLayout(_ref) {
  var children = _ref.children,
      footer = _ref.footer,
      footerSecondary = _ref.footerSecondary,
      header = _ref.header,
      _ref$headerCloseButto = _ref.headerCloseButton,
      headerCloseButton = _ref$headerCloseButto === void 0 ? !footer && true : _ref$headerCloseButto,
      headerDetail = _ref.headerDetail,
      isLoading = _ref.isLoading;
  var dialogFooter = footer ? _react["default"].createElement(_DialogFooter.DialogFooter, {
    secondary: footerSecondary
  }, footer) : null;
  var dialogHeader = constructDialogHeader(header, headerCloseButton, headerDetail, !!footer);
  return _react["default"].createElement(_ModalLayout.ModalLayout, {
    footer: dialogFooter,
    header: dialogHeader
  }, _react["default"].createElement(_DialogContent.DialogContent, {
    hasFooter: !!footer,
    hasHeader: !!header
  }, isLoading ? _react["default"].createElement(_ModalLayout.ModalLoading, null) : children));
};

exports.DialogLayout = DialogLayout;
//# sourceMappingURL=DialogLayout.js.map