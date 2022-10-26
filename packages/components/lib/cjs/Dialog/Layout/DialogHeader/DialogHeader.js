"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogHeader = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DialogContext = require("../../DialogContext");

var _ModalHeader = require("../../../Modal/ModalHeader");

var _ModalHeaderCloseButton = require("../../../Modal/ModalHeaderCloseButton");

var _templateObject;

var _excluded = ["children", "hideClose", "detail"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DialogHeaderLayout = function DialogHeaderLayout(_ref) {
  var children = _ref.children,
      hideClose = _ref.hideClose,
      detail = _ref.detail,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_DialogContext.DialogContext),
      dialogId = _useContext.id;

  var headingId = dialogId ? "".concat(dialogId, "-heading") : undefined;

  var detailContent = detail || detail === undefined && !hideClose && _react["default"].createElement(_ModalHeaderCloseButton.ModalHeaderCloseButton, null);

  return _react["default"].createElement(_ModalHeader.ModalHeader, (0, _extends2["default"])({
    detail: detailContent,
    id: headingId,
    px: "xlarge",
    py: "large"
  }, props), children);
};

var DialogHeader = (0, _styledComponents["default"])(DialogHeaderLayout).withConfig({
  displayName: "DialogHeader",
  componentId: "sc-xx25r3-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.DialogHeader = DialogHeader;
//# sourceMappingURL=DialogHeader.js.map