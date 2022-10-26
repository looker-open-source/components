"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MoreVert = require("@styled-icons/material/MoreVert");

var _Button = require("../../Button");

var _Menu = require("../../Menu");

var _utils = require("../../utils");

var _DataTableContext = require("../DataTableContext");

var _DataTableRow = require("./DataTableRow");

var _ItemTarget = require("./ItemTarget");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTableItemLayout = function DataTableItemLayout(props) {
  var _useTranslation = (0, _utils.useTranslation)('DataTableItem'),
      t = _useTranslation.t;

  var actionsTooltipText = t('Options');
  var actions = props.actions,
      _props$actionsTooltip = props.actionsTooltip,
      actionsTooltip = _props$actionsTooltip === void 0 ? actionsTooltipText : _props$actionsTooltip,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      id = props.id,
      onClick = props.onClick,
      actionPrimary = props.actionPrimary;
  var ref = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_DataTableContext.DataTableContext),
      select = _useContext.select;

  var handleClick = disabled ? undefined : onClick || undefined;

  var ItemActions = (actionPrimary || actions) && _react["default"].createElement(_ItemTarget.ItemTargetGroup, null, actionPrimary && _react["default"].createElement(_ItemTarget.ItemTarget, null, actionPrimary), actions && _react["default"].createElement(_ItemTarget.ItemTarget, null, _react["default"].createElement(_Menu.Menu, {
    content: actions
  }, _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_MoreVert.MoreVert, null),
    label: actionsTooltip,
    size: "small",
    tabIndex: -1
  }))));

  var onChange = select ? function () {
    return select.onSelect(id);
  } : undefined;
  var checked = select && select.selectedItems.includes(id);
  return _react["default"].createElement(_DataTableRow.DataTableRow, {
    checked: checked,
    className: className,
    disabled: disabled,
    hasCheckbox: !!select,
    id: id,
    onChange: onChange,
    onClick: handleClick,
    ref: ref,
    secondary: ItemActions,
    tabIndex: 0
  }, children);
};

var DataTableItem = (0, _styledComponents["default"])(DataTableItemLayout).withConfig({
  displayName: "DataTableItem",
  componentId: "sc-5zp8q0-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.DataTableItem = DataTableItem;
//# sourceMappingURL=DataTableItem.js.map