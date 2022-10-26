"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverHeader = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DialogContext = require("../../../Dialog/DialogContext");

var _VisuallyHidden = require("../../../VisuallyHidden");

var _Modal = require("../../../Modal");

var _templateObject;

var _excluded = ["children", "hideClose", "detail", "hidden"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PopoverHeaderLayout = function PopoverHeaderLayout(_ref) {
  var children = _ref.children,
      _ref$hideClose = _ref.hideClose,
      hideClose = _ref$hideClose === void 0 ? false : _ref$hideClose,
      detail = _ref.detail,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_DialogContext.DialogContext),
      id = _useContext.id;

  var headingId = id ? "".concat(id, "-heading") : undefined;
  return hidden ? _react["default"].createElement(_VisuallyHidden.VisuallyHidden, {
    id: headingId
  }, children) : _react["default"].createElement(_Modal.ModalHeader, (0, _extends2["default"])({
    detail: detail || !hideClose && _react["default"].createElement(_Modal.ModalHeaderCloseButton, {
      size: "small"
    }),
    fontSize: "small",
    fontWeight: "medium",
    id: headingId,
    pl: "large",
    pr: "medium",
    py: "small"
  }, props), children);
};

var PopoverHeader = (0, _styledComponents["default"])(PopoverHeaderLayout).withConfig({
  displayName: "PopoverHeader",
  componentId: "sc-1pomwz8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.PopoverHeader = PopoverHeader;
//# sourceMappingURL=PopoverHeader.js.map