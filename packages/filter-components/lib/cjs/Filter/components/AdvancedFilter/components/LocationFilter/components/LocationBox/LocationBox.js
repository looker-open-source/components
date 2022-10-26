"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationBox = void 0;

var _components = require("@looker/components");

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _LocationExact = require("../LocationExact");

var LocationBox = function LocationBox(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange;
  return _react["default"].createElement(_components.Flex, {
    flexDirection: "row"
  }, _react["default"].createElement(_LocationExact.LocationExact, {
    item: (0, _pick["default"])(item, ['id', 'is', 'lat', 'lon', 'type']),
    onChange: onChange,
    placement: "middle",
    latString: "FROM LATITUDE"
  }), _react["default"].createElement(_LocationExact.LocationExact, {
    lat: "lat1",
    lon: "lon1",
    item: {
      id: item.id,
      is: item.is,
      lat: item.lat1,
      lon: item.lon1,
      type: item.type
    },
    onChange: onChange,
    latString: "TO LATITUDE"
  }));
};

exports.LocationBox = LocationBox;
//# sourceMappingURL=LocationBox.js.map