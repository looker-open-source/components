"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _components = require("@looker/components");
var _templateObject, _templateObject2;
var _excluded = ["legend"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var VisWrapperInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var legend = _ref.legend,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _styledComponents.useTheme)();
  if (!theme) {
    return _react["default"].createElement(_components.ComponentsProvider, null, _react["default"].createElement(VisWrapperInternal, (0, _extends2["default"])({}, props, {
      ref: ref
    })));
  }
  return _react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    ref: ref
  }));
});
VisWrapperInternal.displayName = "VisWrapperInternal";
var flexDirection = function flexDirection(_ref2) {
  var legend = _ref2.legend;
  var POSITION_MAP = {
    top: 'column-reverse',
    right: 'row',
    left: 'row-reverse',
    bottom: 'column'
  };
  var POSITION = legend ? legend.position : 'bottom';
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: ", ";\n    justify-content: ", ";\n  "])), POSITION_MAP[POSITION], POSITION === 'left' ? "flex-end" : "flex-start");
};
var VisWrapper = (0, _styledComponents["default"])(VisWrapperInternal).withConfig({
  displayName: "VisWrapper",
  componentId: "sc-sssqk1-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  /*\n    Flex properties primarily used to reposition legend\n    based on prop.\n   */\n  display: flex;\n  flex: 1;\n  ", "\n\n  /*\n    This style override allows longer dimension to fully render on x-axis.\n    Without it, long dimension values get cut off (after being rotated).\n  */\n  & > div > svg {\n    overflow: visible;\n  }\n"])), flexDirection);
exports.VisWrapper = VisWrapper;
//# sourceMappingURL=VisWrapper.js.map