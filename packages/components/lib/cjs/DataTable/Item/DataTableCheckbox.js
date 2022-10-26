"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkListProps = exports.DataTableCheckbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = require("../../Form");

var _ItemTarget = require("./ItemTarget");

var checkListProps = ['checked', 'disabled', 'onChange', 'id'];
exports.checkListProps = checkListProps;

var DataTableCheckbox = function DataTableCheckbox(_ref) {
  var id = _ref.id,
      onChange = _ref.onChange,
      checked = _ref.checked,
      disabled = _ref.disabled;

  var handleCellOnClick = function handleCellOnClick() {
    return !disabled && onChange && onChange();
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    return event.key === 'Enter' && event.currentTarget.click();
  };

  var ariaLabel = 'Select all rows';

  if (id !== 'headerId') {
    ariaLabel = undefined;
  } else if (checked) {
    ariaLabel = 'Select none';
  }

  return _react["default"].createElement(_ItemTarget.ItemTarget, {
    "aria-labelledby": "rowheader-".concat(id),
    onClick: handleCellOnClick
  }, _react["default"].createElement(_Form.Checkbox, {
    "aria-label": ariaLabel,
    checked: checked,
    disabled: disabled,
    onKeyDown: handleOnKeyDown,
    tabIndex: -1
  }));
};

exports.DataTableCheckbox = DataTableCheckbox;
//# sourceMappingURL=DataTableCheckbox.js.map