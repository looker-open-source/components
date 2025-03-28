"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSDK = void 0;
var _react = _interopRequireDefault(require("react"));
var _SDKContext = require("../SDKContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var useSDK = function useSDK() {
  var sdk = _react["default"].useContext(_SDKContext.SDKContext);
  if (!sdk) {
    throw new Error('You cannot call useSDK() without providing an instance of the SDK to <SDKContext.Provider />.');
  }
  return sdk;
};
exports.useSDK = useSDK;
//# sourceMappingURL=useSDK.js.map