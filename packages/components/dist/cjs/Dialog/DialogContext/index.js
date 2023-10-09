"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogContext = void 0;
var _react = require("react");
var _noop = _interopRequireDefault(require("lodash/noop"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dialogContext = {
  closeModal: function closeModal() {
    return _noop["default"];
  },
  id: ''
};
var DialogContext = (0, _react.createContext)(dialogContext);
exports.DialogContext = DialogContext;
//# sourceMappingURL=index.js.map