"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.surfaceTransition = exports.SurfaceBase = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../utils");

var _DialogContext = require("./DialogContext");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SurfaceLayout = function SurfaceLayout(props) {
  var _useContext = (0, _react.useContext)(_DialogContext.DialogContext),
      closeModal = _useContext.closeModal;

  var ref = (0, _react.useRef)(null);
  (0, _utils.useGlobalHotkeys)('esc', closeModal, ref);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    "data-overlay-surface": true,
    ref: ref,
    tabIndex: -1
  }, (0, _designTokens.omitStyledProps)(props)));
};

var surfaceTransition = function surfaceTransition() {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
    var theme = _ref.theme;
    return "".concat(theme.transitions.moderate, "ms ").concat(theme.easings.ease);
  });
};

exports.surfaceTransition = surfaceTransition;
var SurfaceBase = (0, _styledComponents["default"])(SurfaceLayout).attrs(function () {
  return {
    'aria-modal': true,
    role: 'dialog'
  };
}).withConfig({
  displayName: "SurfaceBase",
  componentId: "sc-7dy58h-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n\n  &:focus {\n    outline: none;\n  }\n"])), _designTokens.reset, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
});
exports.SurfaceBase = SurfaceBase;
//# sourceMappingURL=SurfaceBase.js.map