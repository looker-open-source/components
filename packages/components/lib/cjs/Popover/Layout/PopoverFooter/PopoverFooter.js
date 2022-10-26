"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverFooter = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DialogContext = require("../../../Dialog/DialogContext");

var _ModalFooter = require("../../../Modal/ModalFooter/ModalFooter");

var _Button = require("../../../Button");

var _utils = require("../../../utils");

var _templateObject;

var _excluded = ["children", "closeButton"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PopoverFooterLayout = function PopoverFooterLayout(_ref) {
  var children = _ref.children,
      closeButton = _ref.closeButton,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_DialogContext.DialogContext),
      closeModal = _useContext.closeModal;

  var _useTranslation = (0, _utils.useTranslation)('PopoverFooter'),
      t = _useTranslation.t;

  closeButton = closeButton || t('Done');
  return _react["default"].createElement(_ModalFooter.ModalFooter, (0, _extends2["default"])({
    pl: "large",
    pr: "medium",
    py: "xsmall"
  }, props), typeof closeButton === 'string' ? _react["default"].createElement(_Button.ButtonTransparent, {
    size: "small",
    onClick: closeModal
  }, closeButton) : closeButton, children);
};

var PopoverFooter = (0, _styledComponents["default"])(PopoverFooterLayout).withConfig({
  displayName: "PopoverFooter",
  componentId: "sc-185a4pp-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.PopoverFooter = PopoverFooter;
//# sourceMappingURL=PopoverFooter.js.map