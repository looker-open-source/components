"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Between = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../../../utils");

var _GroupInput = require("../../../GroupInput");

var _GroupSelect = require("../../../GroupSelect");

var _MidInputLabel = require("../../../MidInputLabel");

var _utils2 = require("../../../../utils");

var Between = function Between(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      validationMessage = _ref.validationMessage;

  var _useTranslation = (0, _utils.useTranslation)('Between'),
      t = _useTranslation.t;

  var betweenOptions = (0, _utils2.useBetweenOptions)();
  var _item$high = item.high,
      high = _item$high === void 0 ? '' : _item$high,
      _item$low = item.low,
      low = _item$low === void 0 ? '' : _item$low,
      id = item.id;

  var lowChange = function lowChange(event) {
    onChange === null || onChange === void 0 ? void 0 : onChange(id, {
      low: event.target.value
    });
  };

  var highChange = function highChange(event) {
    onChange === null || onChange === void 0 ? void 0 : onChange(id, {
      high: event.target.value
    });
  };

  var selectChange = function selectChange(value) {
    onChange === null || onChange === void 0 ? void 0 : onChange(id, {
      bounds: value
    });
  };

  var validationProps = {
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  };
  return _react["default"].createElement(_components.Space, {
    gap: "none",
    width: "auto"
  }, _react["default"].createElement(_GroupSelect.GroupSelect, (0, _extends2["default"])({
    placement: "middle",
    value: item.bounds,
    options: betweenOptions,
    onChange: selectChange
  }, validationProps)), _react["default"].createElement(_GroupInput.GroupInput, (0, _extends2["default"])({
    value: low,
    type: "number",
    onChange: lowChange,
    minWidth: "4.5em",
    "data-testid": "low"
  }, validationProps)), _react["default"].createElement(_MidInputLabel.MidInputLabel, {
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  }, t('AND')), _react["default"].createElement(_GroupInput.GroupInput, (0, _extends2["default"])({
    value: high,
    type: "number",
    onChange: highChange,
    placement: "right",
    minWidth: "4.5em",
    "data-testid": "high"
  }, validationProps)));
};

exports.Between = Between;
//# sourceMappingURL=Between.js.map