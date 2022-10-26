"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationCircle = void 0;

var _components = require("@looker/components");

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _GroupInput = require("../../../GroupInput");

var _GroupSelect = require("../../../GroupSelect");

var _LocationExact = require("../LocationExact");

var _utils = require("../../../../utils");

var LocationCircle = function LocationCircle(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange;
  var unitOptions = (0, _utils.useUnitOptions)();

  var distanceChange = function distanceChange(event) {
    if (Number(event.currentTarget.value) >= 0) {
      onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
        distance: event.currentTarget.value,
        unit: item.unit || 'miles'
      });
    }
  };

  var unitChange = function unitChange(value) {
    onChange === null || onChange === void 0 ? void 0 : onChange(item.id, {
      unit: value
    });
  };

  return _react["default"].createElement(_components.Flex, {
    flexDirection: "row"
  }, _react["default"].createElement(_GroupInput.GroupInput, {
    value: String(item.distance || ''),
    type: "number",
    onChange: distanceChange,
    minWidth: "4.5em"
  }), _react["default"].createElement(_GroupSelect.GroupSelect, {
    placement: "middle",
    value: item.unit || 'miles',
    options: unitOptions,
    onChange: unitChange
  }), _react["default"].createElement(_LocationExact.LocationExact, {
    item: (0, _pick["default"])(item, ['id', 'is', 'lat', 'lon', 'type']),
    onChange: onChange,
    latString: "FROM LATITUDE"
  }));
};

exports.LocationCircle = LocationCircle;
//# sourceMappingURL=LocationCircle.js.map