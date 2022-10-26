"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionAriaProps = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var partitionAriaProps = function partitionAriaProps(props) {
  var aria = {};
  var remainder = {};
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return key.startsWith('aria-') ? aria[key] = value : remainder[key] = value;
  });
  return [aria, remainder];
};

exports.partitionAriaProps = partitionAriaProps;
//# sourceMappingURL=partitionAriaProps.js.map