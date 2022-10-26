"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddRemoveButtons = void 0;

var _components = require("@looker/components");

var _Add = require("@styled-icons/material/Add");

var _Close = require("@styled-icons/material/Close");

var _utils = require("../../../../../utils");

var _react = _interopRequireDefault(require("react"));

var AddRemoveButtons = function AddRemoveButtons(_ref) {
  var onAdd = _ref.onAdd,
      onRemove = _ref.onRemove,
      showAdd = _ref.showAdd,
      showRemove = _ref.showRemove;

  var _useTranslation = (0, _utils.useTranslation)('AddRemoveButtons'),
      t = _useTranslation.t;

  return _react["default"].createElement(_react["default"].Fragment, null, showRemove && _react["default"].createElement(_components.IconButton, {
    icon: _react["default"].createElement(_Close.Close, null),
    size: "small",
    ml: "xsmall",
    label: t('Remove'),
    outline: false,
    onClick: onRemove,
    style: {
      marginTop: '2px'
    }
  }), showAdd && _react["default"].createElement(_components.IconButton, {
    icon: _react["default"].createElement(_Add.Add, null),
    size: "small",
    ml: "xsmall",
    label: t('Add'),
    outline: false,
    onClick: onAdd,
    style: {
      marginTop: '2px'
    }
  }));
};

exports.AddRemoveButtons = AddRemoveButtons;
//# sourceMappingURL=AddRemoveButtons.js.map