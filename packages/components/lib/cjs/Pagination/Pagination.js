"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var PaginationButton = function PaginationButton(props) {
  return _react["default"].createElement(_Button.IconButton, (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map