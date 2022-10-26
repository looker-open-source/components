"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Relative = void 0;

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../../../utils");

var _GroupSelect = require("../../../GroupSelect");

var _MidInputLabel = require("../../../MidInputLabel");

var _Interval = require("../Interval");

var Relative = function Relative(_ref) {
  var _ref$item = _ref.item,
      id = _ref$item.id,
      intervalType = _ref$item.intervalType,
      startInterval = _ref$item.startInterval,
      endInterval = _ref$item.endInterval,
      onChange = _ref.onChange,
      field = _ref.field;

  var _useTranslation = (0, _utils.useTranslation)('Relative'),
      t = _useTranslation.t;

  var options = [{
    value: 'ago',
    label: t('ago')
  }, {
    value: 'from now',
    label: t('from now')
  }];

  var intervalTypeChange = function intervalTypeChange(value) {
    onChange(id, {
      intervalType: value
    });
  };

  var startChange = function startChange(interval) {
    onChange(id, {
      startInterval: interval
    });
  };

  var endChange = function endChange(interval) {
    onChange(id, {
      endInterval: interval
    });
  };

  return _react["default"].createElement(_components.Box2, {
    display: "flex",
    bg: "field"
  }, _react["default"].createElement(_Interval.Interval, {
    placement: "middle",
    item: startInterval,
    onChange: startChange,
    field: field
  }), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: intervalType,
    options: options,
    onChange: intervalTypeChange,
    placement: "middle"
  }), _react["default"].createElement(_MidInputLabel.MidInputLabel, null, "FOR"), _react["default"].createElement(_Interval.Interval, {
    item: endInterval,
    onChange: endChange,
    field: field
  }));
};

exports.Relative = Relative;
//# sourceMappingURL=Relative.js.map