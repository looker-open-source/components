"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertOptionToType = void 0;
var _startsWith = _interopRequireDefault(require("lodash/startsWith"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var convertOptionToType = function convertOptionToType(value) {
  return (0, _startsWith["default"])(value, '!') ? {
    is: false,
    type: value.substring(1)
  } : {
    is: true,
    type: value
  };
};
exports.convertOptionToType = convertOptionToType;
//# sourceMappingURL=convert_option_to_type.js.map