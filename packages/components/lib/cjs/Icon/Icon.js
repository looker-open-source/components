"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _simple = require("../Layout/utils/simple");

var _templateObject;

var _excluded = ["title", "icon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IconLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var title = _ref.title,
      icon = _ref.icon,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    "aria-hidden": title === undefined && true,
    title: title,
    ref: ref,
    "aria-label": title,
    role: "img"
  }, (0, _designTokens.omitStyledProps)(props)), icon);
});
IconLayout.displayName = 'IconLayout';
var Icon = (0, _styledComponents["default"])(IconLayout).attrs(function (_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size;
  return {
    size: size
  };
}).withConfig({
  displayName: "Icon",
  componentId: "sc-7y0t4i-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n    flex-shrink: 0;\n  justify-content: center;\n\n  svg {\n    height: 100%;\n    /**\n    * @TODO vertical-align is a compatibility fix and should probably be removed once\n    * icon refactor is complete and accepted\n    **/\n    vertical-align: initial;\n    width: 100%;\n  }\n"])), _simple.simpleLayoutCSS, _designTokens.color);
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map