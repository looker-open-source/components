"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ChevronLeft = require("@styled-icons/material-rounded/ChevronLeft");
var _ChevronRight = require("@styled-icons/material-rounded/ChevronRight");
var _Layout = require("../Layout");
var _Button = require("../Button");
var _Text = require("../Text");
var _utils = require("../utils");
var _DoubleChevronLeft = require("./DoubleChevronLeft");
var _DoubleChevronRight = require("./DoubleChevronRight");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var PaginationButton = function PaginationButton(props) {
  return _react["default"].createElement(_Button.IconButton, _extends({
    outline: true,
    shape: "square",
    mx: "xxsmall"
  }, props));
};
var PaginationLayout = function PaginationLayout(_ref) {
  var _ref$alwaysVisible = _ref.alwaysVisible,
    alwaysVisible = _ref$alwaysVisible === void 0 ? false : _ref$alwaysVisible,
    className = _ref.className,
    current = _ref.current,
    pages = _ref.pages,
    onChange = _ref.onChange;
  var _useTranslation = (0, _utils.useTranslation)('Pagination'),
    t = _useTranslation.t;
  if (pages <= 1 && !alwaysVisible) return null;
  var first = function first() {
    return onChange(1);
  };
  var previous = function previous() {
    return onChange(current - 1);
  };
  var next = function next() {
    return onChange(current + 1);
  };
  var last = function last() {
    return onChange(pages);
  };
  return _react["default"].createElement(_Layout.Flex, {
    alignItems: "center",
    className: className
  }, _react["default"].createElement(PaginationButton, {
    label: t('First page of results'),
    icon: _react["default"].createElement(_DoubleChevronLeft.DoubleChevronLeft, null),
    onClick: first,
    disabled: current === 1
  }), _react["default"].createElement(PaginationButton, {
    label: t('Previous page of results'),
    icon: _react["default"].createElement(_ChevronLeft.ChevronLeft, null),
    onClick: previous,
    disabled: current === 1
  }), _react["default"].createElement(_Text.Span, {
    fontSize: "small",
    mx: "xxsmall"
  }, _react["default"].createElement("b", null, current), " ", t('of'), " ", pages), _react["default"].createElement(PaginationButton, {
    label: t('Next page of results'),
    icon: _react["default"].createElement(_ChevronRight.ChevronRight, null),
    onClick: next,
    disabled: pages - current === 0
  }), _react["default"].createElement(PaginationButton, {
    mr: "none",
    label: t('Last page of results'),
    icon: _react["default"].createElement(_DoubleChevronRight.DoubleChevronRight, null),
    onClick: last,
    disabled: pages - current === 0
  }));
};
var Pagination = (0, _styledComponents["default"])(PaginationLayout).withConfig({
  displayName: "Pagination",
  componentId: "sc-kh6un3-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map