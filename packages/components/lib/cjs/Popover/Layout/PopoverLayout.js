"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _ModalLayout = require("../../Modal/ModalLayout");

var _PopoverContent = require("./PopoverContent");

var _PopoverFooter = require("./PopoverFooter");

var _PopoverHeader = require("./PopoverHeader");

var PopoverLayout = function PopoverLayout(_ref) {
  var children = _ref.children,
      closeButton = _ref.closeButton,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? true : _ref$footer,
      header = _ref.header,
      _ref$hideHeader = _ref.hideHeader,
      hideHeader = _ref$hideHeader === void 0 ? false : _ref$hideHeader,
      isLoading = _ref.isLoading;
  var internalFooter = typeof footer === 'boolean' ? null : footer;
  return _react["default"].createElement(_react["default"].Fragment, null, header && _react["default"].createElement(_PopoverHeader.PopoverHeader, {
    hidden: hideHeader,
    hideClose: !!footer
  }, header), _react["default"].createElement(_PopoverContent.PopoverContent, {
    hasFooter: !!footer,
    hasHeader: !!header
  }, isLoading ? _react["default"].createElement(_ModalLayout.ModalLoading, null) : children), footer && _react["default"].createElement(_PopoverFooter.PopoverFooter, {
    closeButton: closeButton
  }, internalFooter));
};

exports.PopoverLayout = PopoverLayout;
//# sourceMappingURL=PopoverLayout.js.map