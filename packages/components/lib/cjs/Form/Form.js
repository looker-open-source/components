"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = exports.Form = void 0;
exports.useFormContext = useFormContext;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _Layout = require("../Layout");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormContext = (0, _react.createContext)({});
exports.FormContext = FormContext;
var Form = (0, _react.forwardRef)(function (props, ref) {
  return _react["default"].createElement(FormContext.Provider, {
    value: {
      validationMessages: props.validationMessages
    }
  }, _react["default"].createElement(_Layout.SpaceVertical, (0, _extends2["default"])({
    as: "form"
  }, (0, _omit["default"])(props, 'validationMessages'), {
    ref: ref
  })));
});
exports.Form = Form;
Form.displayName = 'Form';

function useFormContext(_ref) {
  var name = _ref.name,
      validationMessage = _ref.validationMessage;
  var context = (0, _react.useContext)(FormContext);
  var vMessage;

  if (context.validationMessages && name) {
    vMessage = context.validationMessages[name];
  } else if (validationMessage) {
    vMessage = validationMessage;
  }

  return vMessage;
}
//# sourceMappingURL=Form.js.map