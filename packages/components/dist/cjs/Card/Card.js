"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _common = require("../Layout/utils/common");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var cardTransition = function cardTransition() {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
    var theme = _ref.theme;
    return "".concat(theme.transitions.quick, "ms ").concat(theme.easings.ease);
  });
};
var raised = function raised(props) {
  return props.raised && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n  "])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.elevations.plus1;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.elevations.plus2;
  });
};
var hover = function hover(props) {
  return !props.removeHover && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    &:hover {\n      border-color: ", ";\n    }\n  "])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.ui4;
  });
};
var Card = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Card",
  componentId: "sc-11cdxqo-0"
}).attrs(function (_ref5) {
  var _ref5$bg = _ref5.bg,
    bg = _ref5$bg === void 0 ? 'background' : _ref5$bg,
    _ref5$border = _ref5.border,
    border = _ref5$border === void 0 ? 'ui3' : _ref5$border,
    _ref5$borderRadius = _ref5.borderRadius,
    borderRadius = _ref5$borderRadius === void 0 ? 'medium' : _ref5$borderRadius,
    _ref5$display = _ref5.display,
    display = _ref5$display === void 0 ? 'flex' : _ref5$display,
    _ref5$flexDirection = _ref5.flexDirection,
    flexDirection = _ref5$flexDirection === void 0 ? 'column' : _ref5$flexDirection,
    _ref5$height = _ref5.height,
    height = _ref5$height === void 0 ? '100%' : _ref5$height,
    _ref5$minWidth = _ref5.minWidth,
    minWidth = _ref5$minWidth === void 0 ? '200px' : _ref5$minWidth,
    _ref5$overflow = _ref5.overflow,
    overflow = _ref5$overflow === void 0 ? 'hidden' : _ref5$overflow;
  return {
    bg: bg,
    border: border,
    borderRadius: borderRadius,
    display: display,
    flexDirection: flexDirection,
    height: height,
    minWidth: minWidth,
    overflow: overflow
  };
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  transition: border ", ", box-shadow ", ";\n\n  ", "\n  ", "\n"])), _common.commonLayoutCSS, _designTokens.flexbox, cardTransition, cardTransition, raised, hover);
exports.Card = Card;
//# sourceMappingURL=Card.js.map