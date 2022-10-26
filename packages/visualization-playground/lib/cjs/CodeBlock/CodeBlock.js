"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeBlock = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _prismReactRenderer = _interopRequireWildcard(require("prism-react-renderer"));

var _components = require("@looker/components");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CodeBlock = function CodeBlock(_ref) {
  var code = _ref.code,
      language = _ref.language;
  return _react["default"].createElement(_prismReactRenderer["default"], (0, _extends2["default"])({}, _prismReactRenderer.defaultProps, {
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
      return _react["default"].createElement(Line, (0, _extends2["default"])({
        key: i
      }, getLineProps({
        line: line,
        key: i
      })), _react["default"].createElement(LineNo, null, i + 1), _react["default"].createElement(LineContent, null, line.map(function (token, key) {
        return _react["default"].createElement("span", (0, _extends2["default"])({
          key: key
        }, getTokenProps({
          token: token,
          key: key
        })));
      })));
    }));
  });
};

exports.CodeBlock = CodeBlock;

var Pre = _styledComponents["default"].pre.withConfig({
  displayName: "CodeBlock__Pre",
  componentId: "sc-y7nys8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: ", ";\n  margin: ", ";\n  padding: ", ";\n  text-align: left;\n"])), _components.theme.radii.large, _components.theme.sizes.small, _components.theme.sizes.small);

var Line = _styledComponents["default"].div.withConfig({
  displayName: "CodeBlock__Line",
  componentId: "sc-y7nys8-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: table-row;\n"])));

var LineNo = _styledComponents["default"].span.withConfig({
  displayName: "CodeBlock__LineNo",
  componentId: "sc-y7nys8-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: table-cell;\n  opacity: 0.5;\n  padding-right: ", ";\n  text-align: right;\n  user-select: none;\n"])), _components.theme.sizes.small);

var LineContent = _styledComponents["default"].span.withConfig({
  displayName: "CodeBlock__LineContent",
  componentId: "sc-y7nys8-3"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: table-cell;\n"])));
//# sourceMappingURL=CodeBlock.js.map