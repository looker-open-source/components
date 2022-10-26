"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeaderCloseButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _Close = require("@styled-icons/material/Close");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../Button");

var _Dialog = require("../Dialog");

var _utils = require("../utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ModalHeaderCloseButtonLayout = function ModalHeaderCloseButtonLayout(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;

  var _useTranslation = (0, _utils.useTranslation)('ModalHeaderCloseButton'),
      t = _useTranslation.t;

  var _useContext = (0, _react.useContext)(_Dialog.DialogContext),
      busy = _useContext.busy,
      closeModal = _useContext.closeModal,
      id = _useContext.id;

  return _react["default"].createElement(_Button.IconButton, {
    id: id ? "".concat(id, "-iconButton") : undefined,
    size: size,
    onClick: closeModal,
    label: t('Close'),
    icon: _react["default"].createElement(_Close.Close, null),
    "data-notooltip": busy || undefined
  });
};

var ModalHeaderCloseButton = (0, _styledComponents["default"])(ModalHeaderCloseButtonLayout).withConfig({
  displayName: "ModalHeaderCloseButton",
  componentId: "sc-r02xkz-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.ModalHeaderCloseButton = ModalHeaderCloseButton;
//# sourceMappingURL=ModalHeaderCloseButton.js.map