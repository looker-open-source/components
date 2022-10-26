"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCSS = exports.Handle = exports.HANDLE_SIZE = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HANDLE_SIZE = _designTokens.theme.sizes.small;
exports.HANDLE_SIZE = HANDLE_SIZE;
var handleCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border: 2px solid ", ";\n  border-radius: 100%;\n  box-shadow: ", ";\n  cursor: ", ";\n  height: ", ";\n  left: 0;\n  position: relative;\n  width: ", ";\n"])), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.elevations.plus1;
}, function (_ref3) {
  var isMouseDown = _ref3.isMouseDown;
  return isMouseDown ? 'grabbing' : 'pointer';
}, HANDLE_SIZE, HANDLE_SIZE);
exports.handleCSS = handleCSS;

var Handle = _styledComponents["default"].div.attrs(function (_ref4) {
  var color = _ref4.color,
      x = _ref4.x;
  return {
    style: {
      background: color,
      transform: "translateX(calc(".concat(x, "px - ").concat(HANDLE_SIZE, " / 2))")
    }
  };
}).withConfig({
  displayName: "Handle",
  componentId: "sc-1ojot3e-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  /* Vertically centers slider */\n  top: ", ";\n"])), handleCSS, function (_ref5) {
  var theme = _ref5.theme;
  return "calc(".concat(theme.space.u3, " / 2 - ").concat(HANDLE_SIZE, " / 2)");
});

exports.Handle = Handle;
//# sourceMappingURL=Handle.js.map