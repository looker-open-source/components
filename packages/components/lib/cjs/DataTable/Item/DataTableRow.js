"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableRow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DataTableContext = require("../DataTableContext");

var _DataTableCheckbox = require("./DataTableCheckbox");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTableRowLayout = (0, _react.forwardRef)(function (props, ref) {
  var className = props.className,
      hasCheckbox = props.hasCheckbox,
      children = props.children,
      id = props.id,
      isHeaderRow = props.isHeaderRow,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      secondary = props.secondary;
  var ColumnType = isHeaderRow ? 'th' : 'td';

  var _useContext = (0, _react.useContext)(_DataTableContext.DataTableContext),
      columns = _useContext.columns,
      columnsDisplayState = _useContext.columnsDisplayState;

  var getColumnSize = function getColumnSize(index) {
    return columns && columns[index].size;
  };

  var sizedChildren = _react.Children.map(children, function (child, index) {
    if (columnsDisplayState && !columnsDisplayState[index]) {
      return null;
    }

    var size = getColumnSize(index);
    var cellProps = index === 0 ? {
      id: "rowheader-".concat(id),
      role: 'rowheader',
      size: size
    } : {
      size: size
    };
    return (0, _react.isValidElement)(child) && (0, _react.cloneElement)(child, cellProps);
  });

  var handleOnClick = function handleOnClick(event) {
    return event.target instanceof HTMLAnchorElement ? undefined : onClick && onClick(event);
  };

  var suppressClickPropagation = function suppressClickPropagation(event) {
    event.stopPropagation();
  };

  return _react["default"].createElement("tr", {
    ref: ref,
    className: className,
    onKeyDown: onKeyDown,
    onClick: handleOnClick
  }, hasCheckbox ? _react["default"].createElement(ColumnType, {
    onClick: suppressClickPropagation
  }, _react["default"].createElement(_DataTableCheckbox.DataTableCheckbox, (0, _pick["default"])(props, _DataTableCheckbox.checkListProps))) : _react["default"].createElement(ColumnType, {
    "aria-hidden": "true"
  }), sizedChildren, _react["default"].createElement(ColumnType, {
    onClick: suppressClickPropagation
  }, secondary));
});
DataTableRowLayout.displayName = 'DataTableRowLayout';

var getRowHoverColor = function getRowHoverColor(theme, hasOnClick, isHeader, isSelected) {
  if (!isHeader && hasOnClick) {
    return isSelected ? theme.colors.keyAccent : theme.colors.ui1;
  }

  return undefined;
};

var DataTableRow = (0, _styledComponents["default"])(DataTableRowLayout).withConfig({
  displayName: "DataTableRow",
  componentId: "sc-gwwepv-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  td,\n  th {\n    background: ", ";\n    border-bottom: solid 1px ", ";\n    &:first-of-type > div {\n      border-left: 1px solid transparent;\n      border-right: 1px solid transparent; /* Keeps checkbox centered */\n      height: 100%;\n    }\n  }\n\n  &:hover {\n    cursor: ", ";\n    outline: none;\n\n    td,\n    th {\n      background: ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n\n    td:first-of-type > div {\n      border-left-color: ", ";\n    }\n  }\n"])), function (_ref) {
  var checked = _ref.checked,
      isHeaderRow = _ref.isHeaderRow,
      colors = _ref.theme.colors;
  return checked && !isHeaderRow ? colors.keySubtle : colors.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var onClick = _ref3.onClick;
  return onClick && 'pointer';
}, function (_ref4) {
  var checked = _ref4.checked,
      isHeaderRow = _ref4.isHeaderRow,
      onClick = _ref4.onClick,
      theme = _ref4.theme;
  return getRowHoverColor(theme, Boolean(onClick), Boolean(isHeaderRow), Boolean(checked));
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.key;
});
exports.DataTableRow = DataTableRow;
//# sourceMappingURL=DataTableRow.js.map