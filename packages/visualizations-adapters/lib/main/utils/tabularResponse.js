"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabularResponse = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _has = _interopRequireDefault(require("lodash/has"));

var tabularResponse = function tabularResponse() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return data.map(function (d) {
    var dataEntries = Object.entries(d);
    return Object.fromEntries(dataEntries.map(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];
      return [key, (0, _has["default"])(val, 'value') ? val.value : val];
    }));
  });
};
exports.tabularResponse = tabularResponse;
//# sourceMappingURL=tabularResponse.js.map