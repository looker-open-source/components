"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _TabList = require("../Tabs2/TabList2");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TabList = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    selectedIndex = _ref.selectedIndex,
    onSelectTab = _ref.onSelectTab,
    className = _ref.className;
  var _useTranslation = (0, _utils.useTranslation)('TabList'),
    t = _useTranslation.t;
  var clonedChildren = _react.Children.map(children, function (child, index) {
    return (0, _react.cloneElement)(child, {
      index: index,
      onSelect: function onSelect() {
        return onSelectTab && onSelectTab(index);
      },
      selected: index === selectedIndex
    });
  });
  var navProps = (0, _utils.useArrowKeyNav)({
    axis: 'horizontal',
    ref: ref
  });
  return _react["default"].createElement("div", _extends({
    "aria-label": t('Tabs'),
    className: className,
    role: "tablist"
  }, navProps), clonedChildren);
})).attrs(function (_ref2) {
  var _ref2$fontSize = _ref2.fontSize,
    fontSize = _ref2$fontSize === void 0 ? 'small' : _ref2$fontSize;
  return {
    fontSize: fontSize
  };
}).withConfig({
  displayName: "TabList",
  componentId: "sc-1xnjj79-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _TabList.tabListCSS);
exports.TabList = TabList;
//# sourceMappingURL=TabList.js.map