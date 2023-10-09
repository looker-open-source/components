"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismCodeBlock = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _prismReactRenderer = _interopRequireWildcard(require("prism-react-renderer"));
var _dracula = _interopRequireDefault(require("prism-react-renderer/themes/dracula"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var PrismCodeBlock = function PrismCodeBlock(_ref) {
  var code = _ref.code,
    language = _ref.language;
  return _react["default"].createElement(_prismReactRenderer["default"], _extends({}, _prismReactRenderer.defaultProps, {
    theme: _dracula["default"],
    code: code,
    language: language
  }), function (_ref2) {
    var className = _ref2.className,
      style = _ref2.style,
      tokens = _ref2.tokens,
      getLineProps = _ref2.getLineProps,
      getTokenProps = _ref2.getTokenProps;
    return _react["default"].createElement(Pre, {
      className: className,
      style: style
    }, tokens.map(function (line, i) {
      return _react["default"].createElement(Line, _extends({
        key: i
      }, getLineProps({
        key: i,
        line: line
      })), _react["default"].createElement(LineNo, null, i + 1), _react["default"].createElement(LineContent, null, line.map(function (token, key) {
        return _react["default"].createElement("span", _extends({
          key: key
        }, getTokenProps({
          key: key,
          token: token
        })));
      })));
    }));
  });
};
exports.PrismCodeBlock = PrismCodeBlock;
var Pre = _styledComponents["default"].pre.withConfig({
  displayName: "PrismCodeBlock__Pre",
  componentId: "sc-xl7e8j-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: none;\n  border-radius: ", ";\n  text-align: left;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.medium;
});
var Line = _styledComponents["default"].div.withConfig({
  displayName: "PrismCodeBlock__Line",
  componentId: "sc-xl7e8j-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: table-row;\n"])));
var LineNo = _styledComponents["default"].span.withConfig({
  displayName: "PrismCodeBlock__LineNo",
  componentId: "sc-xl7e8j-2"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: table-cell;\n  opacity: 0.5;\n  padding-right: ", ";\n  text-align: right;\n  user-select: none;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.small;
});
var LineContent = _styledComponents["default"].span.withConfig({
  displayName: "PrismCodeBlock__LineContent",
  componentId: "sc-xl7e8j-3"
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: table-cell;\n"])));
//# sourceMappingURL=PrismCodeBlock.js.map