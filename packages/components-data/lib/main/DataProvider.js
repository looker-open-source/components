"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _hooks = require("./hooks");
var _SDKContext = require("./SDKContext");

var DataProvider = function DataProvider(_ref) {
  var children = _ref.children,
    sdk = _ref.sdk;
  return _react["default"].createElement(_SDKContext.SDKContext.Provider, {
    value: sdk
  }, _react["default"].createElement(_hooks.DataState.Provider, null, children));
};
exports.DataProvider = DataProvider;
//# sourceMappingURL=DataProvider.js.map