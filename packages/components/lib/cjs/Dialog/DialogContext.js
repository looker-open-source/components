"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogContext = void 0;

var _react = require("react");

var _noop = _interopRequireDefault(require("lodash/noop"));

var dialogContext = {
  closeModal: function closeModal() {
    return _noop["default"];
  },
  id: ''
};
var DialogContext = (0, _react.createContext)(dialogContext);
exports.DialogContext = DialogContext;
//# sourceMappingURL=DialogContext.js.map