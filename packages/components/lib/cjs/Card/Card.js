"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _common = require("../Layout/utils/common");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cardTransition = function cardTransition() {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
    var theme = _ref.theme;
    return "".concat(theme.transitions.quick, "ms ").concat(theme.easings.ease);
  });
};

var raised = function raised(props) {
  return props.raised && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    box-shadow: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n  "])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.elevations.plus1;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.elevations.plus2;
  });
};

var Card = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Card",
  componentId: "sc-11cdxqo-0"
}).attrs(function (_ref4) {
  var _ref4$bg = _ref4.bg,
      bg = _ref4$bg === void 0 ? 'background' : _ref4$bg,
      _ref4$border = _ref4.border,
      border = _ref4$border === void 0 ? 'ui3' : _ref4$border,
      _ref4$borderRadius = _ref4.borderRadius,
      borderRadius = _ref4$borderRadius === void 0 ? 'medium' : _ref4$borderRadius,
      _ref4$display = _ref4.display,
      display = _ref4$display === void 0 ? 'flex' : _ref4$display,
      _ref4$flexDirection = _ref4.flexDirection,
      flexDirection = _ref4$flexDirection === void 0 ? 'column' : _ref4$flexDirection,
      _ref4$height = _ref4.height,
      height = _ref4$height === void 0 ? '100%' : _ref4$height,
      _ref4$minWidth = _ref4.minWidth,
      minWidth = _ref4$minWidth === void 0 ? '200px' : _ref4$minWidth,
      _ref4$overflow = _ref4.overflow,
      overflow = _ref4$overflow === void 0 ? 'hidden' : _ref4$overflow;
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
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  transition: border ", ", box-shadow ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n"])), _common.commonLayoutCSS, _designTokens.flexbox, cardTransition, cardTransition, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.ui4;
}, raised);

exports.Card = Card;
//# sourceMappingURL=Card.js.map