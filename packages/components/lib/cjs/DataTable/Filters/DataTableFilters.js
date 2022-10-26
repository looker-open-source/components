"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableFilters = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _designTokens = require("@looker/design-tokens");

var _Divider = require("../../Divider");

var _InputFilters = require("../../Form/Inputs/InputFilters");

var _ItemTarget = require("../Item/ItemTarget");

var _ColumnSelector = require("./ColumnSelector");

var _templateObject;

var _excluded = ["className", "children"];

var hasSelectableColumns = function hasSelectableColumns(columns) {
  return Boolean(columns.find(function (c) {
    return c.hide !== undefined;
  }));
};

var DataTableFiltersLayout = function DataTableFiltersLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var columnsSelector = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Divider.DividerVertical, {
    mx: "none",
    stretch: true
  }), _react["default"].createElement(_ItemTarget.ItemTarget, null, _react["default"].createElement(_ColumnSelector.ColumnSelector, props)));

  return _react["default"].createElement("div", {
    className: className
  }, children, hasSelectableColumns(props.columns) && columnsSelector);
};

var DataTableFilters = (0, _styledComponents["default"])(DataTableFiltersLayout).withConfig({
  displayName: "DataTableFilters",
  componentId: "sc-1p8hllh-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-start;\n  border-bottom: solid 1px ", ";\n  border-top: solid 1px ", ";\n  display: flex;\n\n  ", " {\n    border: none;\n  }\n\n  ", " {\n    /* Reduce to compensate for outer borders */\n    min-height: calc(", " - 2px);\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui2;
}, _InputFilters.InputFilters, _ItemTarget.ItemTarget, _designTokens.densityTarget);
exports.DataTableFilters = DataTableFilters;
//# sourceMappingURL=DataTableFilters.js.map