"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _TabList = require("../Tabs2/TabList2");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  return _react["default"].createElement("div", (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _TabList.tabListCSS);
exports.TabList = TabList;
//# sourceMappingURL=TabList.js.map