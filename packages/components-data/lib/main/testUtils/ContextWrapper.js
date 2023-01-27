"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _swr = require("swr");
var _components = require("@looker/components");
var _SDKContext = require("../SDKContext");
var _hooks = require("../hooks");
var _ = require(".");

var ContextWrapper = function ContextWrapper(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState;
  return _react["default"].createElement(_components.ComponentsProvider, null, _react["default"].createElement(_swr.SWRConfig, {
    value: {
      provider: function provider() {
        return new Map();
      }
    }
  }, _react["default"].createElement(_SDKContext.SDKContext.Provider, {
    value: _.mockSDKWithListeners
  }, _react["default"].createElement(_hooks.DataState.Provider, {
    initialState: initialState
  }, children))));
};
exports.ContextWrapper = ContextWrapper;
//# sourceMappingURL=ContextWrapper.js.map