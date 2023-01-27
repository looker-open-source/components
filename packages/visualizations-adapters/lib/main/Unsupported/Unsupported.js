"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unsupported = void 0;
var _react = _interopRequireDefault(require("react"));
var _Debug = require("../Debug");

var Unsupported = function Unsupported(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [{
      '': []
    }] : _ref$data,
    fields = _ref.fields,
    config = _ref.config;
  return _react["default"].createElement(_Debug.Debug, {
    ok: true,
    data: data,
    error: {
      message: "Unsupported visualization type: ".concat(config.type)
    },
    fields: fields,
    config: config
  });
};
exports.Unsupported = Unsupported;
//# sourceMappingURL=Unsupported.js.map