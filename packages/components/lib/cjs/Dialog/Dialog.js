"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _useDialog = require("./useDialog");

var _DialogRender = require("./DialogRender");

var _excluded = ["children", "content"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Dialog = function Dialog(_ref) {
  var children = _ref.children,
      content = _ref.content,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  if (!content && children) {
    content = children;
    children = undefined;
  }

  var dialogProps = (0, _useDialog.useDialog)(_objectSpread({
    content: content
  }, props));

  if (!content && !children) {
    console.error('Dialog cannot be used without specifying content');
    return null;
  }

  return _react["default"].createElement(_DialogRender.DialogRender, dialogProps, children);
};

exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map