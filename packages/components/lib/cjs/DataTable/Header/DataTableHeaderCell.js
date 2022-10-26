"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableHeaderCell = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ExpandLess = require("@styled-icons/material-rounded/ExpandLess");

var _ExpandMore = require("@styled-icons/material-rounded/ExpandMore");

var _DataTableContext = require("../DataTableContext");

var _Icon = require("../../Icon");

var _Space = require("../../Layout/Space");

var _Tooltip = require("../../Tooltip");

var _Truncate = require("../../Truncate");

var _utils = require("../../utils");

var _VisuallyHidden = require("../../VisuallyHidden");

var _columnSize = require("../Column/columnSize");

var _FocusableCell = require("../Column/FocusableCell");

var _templateObject;

var _excluded = ["role"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTableHeaderCellLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var canSort = _ref.canSort,
      className = _ref.className,
      title = _ref.title,
      titleIcon = _ref.titleIcon,
      columnId = _ref.columnId,
      size = _ref.size,
      sortDirection = _ref.sortDirection,
      type = _ref.type;

  var _useContext = (0, _react.useContext)(_DataTableContext.DataTableContext),
      onSort = _useContext.onSort;

  var onClick = function onClick() {
    if (onSort && canSort) {
      onSort(columnId, sortDirection === 'asc' ? 'desc' : 'asc');
    }
  };

  var _useClickable = (0, _utils.useClickable)({
    onClick: onClick
  }),
      role = _useClickable.role,
      clickableProps = (0, _objectWithoutProperties2["default"])(_useClickable, _excluded);

  var label;

  if (titleIcon) {
    label = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, title), _react["default"].createElement(_Tooltip.Tooltip, {
      content: title
    }, _react["default"].createElement(_Icon.Icon, {
      color: "ui3",
      icon: titleIcon,
      size: "small"
    })));
  } else if (size && (0, _columnSize.sizeInfersTruncate)(size)) {
    label = _react["default"].createElement(_Truncate.Truncate, {
      width: "auto"
    }, title);
  } else {
    label = title;
  }

  var ariaSort = 'none';

  if (sortDirection === 'asc') {
    ariaSort = 'ascending';
  } else if (sortDirection === 'desc') {
    ariaSort = 'descending';
  }

  return _react["default"].createElement(_FocusableCell.FocusableCell, (0, _extends2["default"])({
    as: "th",
    "aria-sort": ariaSort,
    className: className,
    ref: ref,
    style: {
      cursor: canSort ? 'pointer' : undefined
    }
  }, clickableProps), _react["default"].createElement(_Space.Space, {
    gap: "u1",
    reverse: type === 'number'
  }, label, sortDirection && _react["default"].createElement(_Icon.Icon, {
    icon: sortDirection === 'asc' ? _react["default"].createElement(_ExpandLess.ExpandLess, null) : _react["default"].createElement(_ExpandMore.ExpandMore, null),
    size: "small"
  })));
});
DataTableHeaderCellLayout.displayName = 'DataTableHeaderCellLayout';
var DataTableHeaderCell = (0, _styledComponents["default"])(DataTableHeaderCellLayout).withConfig({
  displayName: "DataTableHeaderCell",
  componentId: "sc-1e4utgn-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  border-bottom: solid 1px ", ";\n  color: ", ";\n  font-weight: ", ";\n  text-align: left;\n"])), _columnSize.columnSize, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text5;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.semiBold;
});
exports.DataTableHeaderCell = DataTableHeaderCell;
//# sourceMappingURL=DataTableHeaderCell.js.map