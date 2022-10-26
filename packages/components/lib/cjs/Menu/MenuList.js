"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuListInternal = exports.MenuList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _List = require("../List");

var _utils = require("../List/utils");

var _NestedMenuProvider = require("./NestedMenuProvider");

var _templateObject;

var _excluded = ["children", "closeParentMenu"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MenuListInternal = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      closeParentMenu = _ref.closeParentMenu,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_NestedMenuProvider.NestedMenuProvider, {
    closeParentMenu: closeParentMenu
  }, _react["default"].createElement(_List.List, (0, _extends2["default"])({
    role: "menu",
    ref: forwardedRef
  }, props), children));
});
exports.MenuListInternal = MenuListInternal;
MenuListInternal.displayName = 'MenuListInternal';
var MenuList = (0, _styledComponents["default"])(MenuListInternal).withConfig({
  displayName: "MenuList",
  componentId: "sc-1m0jggd-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  min-width: 12rem;\n\n  ", "\n"])), _utils.listPadding);
exports.MenuList = MenuList;
//# sourceMappingURL=MenuList.js.map