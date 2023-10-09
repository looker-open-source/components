"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleDefenderCSS = exports.StyleDefender = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var styleDefenderCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  font-family: ", ";\n  line-height: normal;\n  width: 100%;\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.body;
});
exports.styleDefenderCSS = styleDefenderCSS;
var StyleDefender = _styledComponents["default"].div.attrs(function (_ref2) {
  var _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? 'looker-components-reset' : _ref2$className;
  return {
    className: className
  };
}).withConfig({
  displayName: "StyleDefender",
  componentId: "sc-1kd51tv-0"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.background;
}, styleDefenderCSS);
exports.StyleDefender = StyleDefender;
//# sourceMappingURL=StyleDefender.js.map