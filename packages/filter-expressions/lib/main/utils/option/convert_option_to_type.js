"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertOptionToType = void 0;
var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

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