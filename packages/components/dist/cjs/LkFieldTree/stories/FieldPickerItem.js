"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightContext = exports.FieldPickerItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@styled-icons/material");
var _materialOutlined = require("@styled-icons/material-outlined");
var _ = require("../..");
var _2 = require("..");
var _utils = require("../../utils");
var _ListItem = require("../../ListItem");
var _ReplaceText = require("../../ReplaceText");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HighlightContext = (0, _react.createContext)({
  term: ''
});
exports.HighlightContext = HighlightContext;
var FieldPickerItem = function FieldPickerItem(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? 'Cost' : _ref$children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'dimension' : _ref$color,
    _ref$filter = _ref.filter,
    filter = _ref$filter === void 0 ? false : _ref$filter,
    _ref$pivot = _ref.pivot,
    pivot = _ref$pivot === void 0 ? false : _ref$pivot,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFieldMenuOpen = _useState2[0],
    setIsFieldMenuOpen = _useState2[1];
  var _useContext = (0, _react.useContext)(HighlightContext),
    term = _useContext.term;
  var _useState3 = (0, _react.useState)(filter),
    _useState4 = _slicedToArray(_useState3, 2),
    isFilter = _useState4[0],
    setIsFilter = _useState4[1];
  var _useState5 = (0, _react.useState)(pivot),
    _useState6 = _slicedToArray(_useState5, 2),
    isPivot = _useState6[0],
    setIsPivot = _useState6[1];
  var _useState7 = (0, _react.useState)(selected),
    _useState8 = _slicedToArray(_useState7, 2),
    isSelected = _useState8[0],
    setIsSelected = _useState8[1];
  var toggleMenu = function toggleMenu() {
    return isFieldMenuOpen ? setIsFieldMenuOpen(false) : setIsFieldMenuOpen(true);
  };
  var detailContent = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Tooltip, {
    placement: "top",
    content: "Some exciting info or something"
  }, _react["default"].createElement(_.IconButton, {
    shape: "square",
    icon: _react["default"].createElement(_materialOutlined.Info, null),
    label: "Info"
  })), _react["default"].createElement(_.Menu, {
    isOpen: isFieldMenuOpen,
    setOpen: toggleMenu,
    density: -1,
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MenuItem, null, "Brie"), _react["default"].createElement(_.MenuItem, null, "Cheddar"), _react["default"].createElement(_.MenuItem, null, "Gouda"))
  }, _react["default"].createElement(_.IconButton, {
    shape: "square",
    icon: _react["default"].createElement(_material.MoreVert, null),
    label: "Options",
    tooltipPlacement: "top"
  })));
  var toggleField = function toggleField() {
    return setIsSelected(!isSelected);
  };
  var _listItemDimensions = (0, _ListItem.listItemDimensions)(-3),
    height = _listItemDimensions.height;
  return _react["default"].createElement(_2.LkFieldItem, {
    color: color,
    selected: isSelected,
    detail: {
      content: detailContent,
      options: {
        accessory: true,
        hoverDisclosure: !isFieldMenuOpen,
        width: 48
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === 'Enter' && event.metaKey) {
        alert("CMD + Enter'ed on ".concat(children, "!"));
      } else if (event.key === 'Enter' && event.currentTarget === event.target) {
        toggleField();
      }
    }
  }, _react["default"].createElement(_.Flex, null, _react["default"].createElement(_.Flex, {
    onClick: toggleField,
    height: height,
    alignItems: "center",
    overflow: "hidden",
    width: "100%"
  }, _react["default"].createElement(_.Truncate, null, _react["default"].createElement(_ReplaceText.ReplaceText, {
    match: term
  }, children))), _react["default"].createElement(_utils.HoverDisclosure, {
    visible: isPivot
  }, _react["default"].createElement(_.IconButton, {
    icon: _react["default"].createElement(_material.SubdirectoryArrowLeft, null),
    onClick: function onClick() {
      return setIsPivot(!isPivot);
    },
    shape: "square",
    toggle: isPivot,
    toggleBackground: true,
    toggleColor: color,
    label: "Pivot",
    tooltipPlacement: "top"
  })), _react["default"].createElement(_utils.HoverDisclosure, {
    visible: isFilter,
    width: isPivot ? 24 : undefined
  }, _react["default"].createElement(_.IconButton, {
    onClick: function onClick() {
      return setIsFilter(!isFilter);
    },
    shape: "square",
    toggle: isFilter,
    toggleBackground: true,
    toggleColor: color,
    icon: _react["default"].createElement(_material.FilterList, null),
    label: "Filter",
    tooltipPlacement: "top"
  }))));
};
exports.FieldPickerItem = FieldPickerItem;
//# sourceMappingURL=FieldPickerItem.js.map