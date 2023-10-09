"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spaceCSS = exports.defaultGap = exports.Space = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _common = require("../../utils/common");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["align", "justify"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var defaultGap = 'u4';
exports.defaultGap = defaultGap;
var getFlexValue = function getFlexValue(value) {
  return value && ['end', 'start'].includes(value) ? "flex-".concat(value) : value;
};
var getSpaceValue = function getSpaceValue(_ref) {
  var around = _ref.around,
    between = _ref.between,
    evenly = _ref.evenly;
  if (around) return 'space-around';
  if (between) return 'space-between';
  if (evenly) return 'space-evenly';
  return false;
};
var justifyContent = function justifyContent(_ref2) {
  var align = _ref2.align,
    justify = _ref2.justify,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var spaceValue = getSpaceValue(rest);
  if (spaceValue || justify && align !== 'stretch') {
    return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      justify-content: ", ";\n    "])), spaceValue || getFlexValue(justify));
  }
  return false;
};
var spaceCSS = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  display: flex;\n\n  ", "\n  ", "\n"])), _common.commonLayoutCSS, _designTokens.flexbox, function (_ref3) {
  var align = _ref3.align;
  return align && "align-items: ".concat(getFlexValue(align), ";");
}, justifyContent);
exports.spaceCSS = spaceCSS;
var Space = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Space",
  componentId: "sc-paugcr-0"
}).attrs(function (_ref4) {
  var _ref4$align = _ref4.align,
    align = _ref4$align === void 0 ? 'center' : _ref4$align,
    _ref4$width = _ref4.width,
    width = _ref4$width === void 0 ? '100%' : _ref4$width;
  return {
    align: align,
    width: width
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  flex-direction: ", ";\n  /* gap throws off spacing for around & evenly */\n  ", "\n"])), spaceCSS, function (_ref5) {
  var reverse = _ref5.reverse;
  return reverse ? 'row-reverse' : 'row';
}, function (_ref6) {
  var around = _ref6.around,
    evenly = _ref6.evenly,
    _ref6$gap = _ref6.gap,
    gap = _ref6$gap === void 0 ? defaultGap : _ref6$gap,
    space = _ref6.theme.space;
  return !around && !evenly && "gap: 0 ".concat(space[gap], ";");
});
exports.Space = Space;
//# sourceMappingURL=Space.js.map