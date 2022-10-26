"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableScroll = exports.TableLayout = exports.Table = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Spinner = require("../Spinner");

var _Text = require("../Text");

var _utils = require("../utils");

var _dataTableFormatting = require("./utils/dataTableFormatting");

var _DataTableHeader = require("./Header/DataTableHeader");

var _edgeShadow = require("./utils/edgeShadow");

var _getNextFocus = require("./getNextFocus");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TableLayout = function TableLayout(props) {
  var _useTranslation = (0, _utils.useTranslation)('DataTable'),
      t = _useTranslation.t;

  var noResultsDisplayText = t('No Results');
  var caption = props.caption,
      children = props.children,
      className = props.className,
      columnsVisible = props.columnsVisible,
      headerRowId = props.headerRowId,
      _props$noResultsDispl = props.noResultsDisplay,
      noResultsDisplay = _props$noResultsDispl === void 0 ? noResultsDisplayText : _props$noResultsDispl,
      state = props.state;

  var _useCallbackRef = (0, _utils.useCallbackRef)(),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      element = _useCallbackRef2[0],
      ref = _useCallbackRef2[1];

  var overflow = (0, _utils.useIsTruncated)(element, columnsVisible.length);
  var noResultsContent = typeof noResultsDisplay === 'string' ? _react["default"].createElement(_Text.Heading, {
    color: "text1"
  }, noResultsDisplay) : noResultsDisplay;

  var interimState = state && _react["default"].createElement(InterimState, null, state === 'loading' ? _react["default"].createElement(_Spinner.Spinner, null) : noResultsContent);

  var navProps = (0, _utils.useArrowKeyNav)({
    axis: 'both',
    getNextFocus: _getNextFocus.getNextFocus
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(TableScroll, {
    ref: ref
  }, _react["default"].createElement("table", (0, _extends2["default"])({
    "aria-label": caption,
    className: overflow ? "".concat(className, " overflow") : className
  }, navProps), _react["default"].createElement("thead", null, _react["default"].createElement(_DataTableHeader.DataTableHeader, {
    id: headerRowId
  })), !interimState && _react["default"].createElement("tbody", null, children))), interimState);
};

exports.TableLayout = TableLayout;
var selectColumn = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
  var select = _ref.select;
  return select ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n          &:first-child {\n            max-width: ", ";\n            min-width: ", ";\n            width: ", ";\n          }\n          &:nth-child(2) {\n            padding-left: ", ";\n          }\n        "])), _designTokens.densityTarget, _designTokens.densityTarget, _designTokens.densityTarget, function (_ref2) {
    var theme = _ref2.theme;
    return theme.space.u2;
  }) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n          /* stylelint-disable-next-line  */\n          &:first-child {\n            max-width: 0;\n            min-width: 0;\n          }\n        "])));
});
var actionsColumn = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  &:last-child {\n    padding: 0;\n    width: 100%;\n  }\n"])));
var stickyColumns = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  ", "\n\n  &:last-child {\n    ", "\n    position: sticky;\n    right: 0;\n  }\n"])), function (_ref3) {
  var select = _ref3.select,
      firstColumnStuck = _ref3.firstColumnStuck;
  return (select || firstColumnStuck) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n      &:first-child {\n        left: 0;\n        position: sticky;\n        ", "\n      }\n    "])), firstColumnStuck === false && (0, _edgeShadow.edgeShadow)());
}, function (_ref4) {
  var select = _ref4.select,
      firstColumnStuck = _ref4.firstColumnStuck;
  return firstColumnStuck && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n      &:nth-child(2) {\n        left: ", ";\n        position: sticky;\n        ", "\n      }\n    "])), select ? _designTokens.densityTarget : 0, (0, _edgeShadow.edgeShadow)());
}, (0, _edgeShadow.edgeShadow)('right'));
var Table = (0, _styledComponents["default"])(TableLayout).withConfig({
  displayName: "Table",
  componentId: "sc-tf9jqn-0"
})(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  border-collapse: initial;\n  border-spacing: 0;\n  font-family: ", ";\n  font-size: ", ";\n  line-height: 1;\n  width: 100%;\n\n  td,\n  th {\n    height: ", "; /* acts like min-height */\n    padding: ", ";\n\n    :first-child,\n    :last-child {\n      padding: 0;\n    }\n\n    ", "\n    ", "\n  }\n\n  tbody td {\n    color: ", ";\n  }\n\n  &.overflow {\n    tr {\n      td,\n      th {\n        ", "\n        height: initial;\n      }\n    }\n  }\n\n  ", "\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.fonts.body;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.fontSizes.small;
}, _designTokens.densityTarget, function (_ref7) {
  var space = _ref7.theme.space;
  return "".concat(space.u2, "  ").concat(space.u4);
}, selectColumn, actionsColumn, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.text4;
}, stickyColumns, function (_ref9) {
  var columns = _ref9.columns,
      columnsVisible = _ref9.columnsVisible;
  return (0, _dataTableFormatting.numericColumnCSS)((0, _dataTableFormatting.getNumericColumnIndices)(columns, columnsVisible));
});
exports.Table = Table;

var InterimState = _styledComponents["default"].div.withConfig({
  displayName: "Table__InterimState",
  componentId: "sc-tf9jqn-1"
})(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: ", ";\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.space.u8;
});

var TableScroll = _styledComponents["default"].div.withConfig({
  displayName: "Table__TableScroll",
  componentId: "sc-tf9jqn-2"
})(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-x: auto;\n"])));

exports.TableScroll = TableScroll;
//# sourceMappingURL=Table.js.map