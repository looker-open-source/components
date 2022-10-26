"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulkActions = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown");

var _Button = require("../../Button");

var _Layout = require("../../Layout");

var _Menu = require("../../Menu");

var _Text = require("../../Text");

var _utils = require("../../utils");

var _DataTableContext = require("../DataTableContext");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BulkActionsLayout = function BulkActionsLayout(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      onTotalClearAll = _ref.onTotalClearAll,
      onTotalSelectAll = _ref.onTotalSelectAll,
      pageCount = _ref.pageCount,
      totalCount = _ref.totalCount;

  var _useTranslation = (0, _utils.useTranslation)('BulkActions'),
      t = _useTranslation.t;

  var _useContext = (0, _react.useContext)(_DataTableContext.DataTableContext),
      select = _useContext.select;

  var selectedItemCount = select ? select.selectedItems.length : 0;
  var message;

  if (selectedItemCount < pageCount) {
    message = t('SelectedCountOfTotalDisplayed', {
      pageCount: Number(pageCount),
      selectedItemCount: Number(selectedItemCount)
    });
  } else if (selectedItemCount === pageCount) {
    message = t('AllPageCountDisplayedSelected', {
      pageCount: Number(pageCount)
    });
  } else if (totalCount && selectedItemCount === totalCount) {
    message = t('AllTotalCountSelected', {
      totalCount: Number(totalCount)
    });
  }

  var selectedItemsText = _react["default"].createElement(_Text.Span, {
    color: "text2",
    fontSize: "xsmall"
  }, message);

  var selectTotalResultsButton = _react["default"].createElement(_Button.ButtonTransparent, {
    onClick: selectedItemCount === totalCount ? onTotalClearAll : onTotalSelectAll
  }, _react["default"].createElement(_Text.Span, {
    fontWeight: "semiBold",
    fontSize: "xsmall"
  }, selectedItemCount === totalCount ? t('Clear Selection') : t('SelectAllCountResults', {
    totalCount: Number(totalCount)
  })));

  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement(_Menu.Menu, {
    content: actions
  }, _react["default"].createElement(_Button.Button, {
    iconAfter: _react["default"].createElement(_ArrowDropDown.ArrowDropDown, null),
    size: "xsmall"
  }, t('Bulk Actions'))), _react["default"].createElement(_Layout.Space, {
    gap: "u3",
    justify: "center"
  }, selectedItemsText, selectTotalResultsButton));
};

var BulkActions = (0, _styledComponents["default"])(BulkActionsLayout).withConfig({
  displayName: "BulkActions",
  componentId: "sc-z1cplu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-bottom: solid 1px ", ";\n  display: flex;\n  height: 3.25rem;\n  justify-content: center;\n  position: relative;\n\n  ", " {\n    left: ", ";\n    position: absolute;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui1;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui2;
}, _Button.Button, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u3;
});
exports.BulkActions = BulkActions;
//# sourceMappingURL=BulkActions.js.map